import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath, Router, match } from 'react-router-dom'
import App from './App'
import path from 'path'
import configureStore from './store'
import { routes } from './routes'
import fs from 'fs'

export default function serverRenderer () {
  return (req: any, res: any) => {
    let fileSystem = fs
    if (process.env.NODE_ENV === 'development') {
      const { devMiddleware } = res.locals.webpack
      fileSystem = devMiddleware.outputFileSystem
    }

    const store = configureStore()
    const fullPathName = req.protocol + '://' + req.get('host') + req.url

    const promises = routes.reduce((acc, route) => {
      const matchRoute: match = matchPath(req.path, route)
      if (matchRoute && route.loadData) {
        acc.push(Promise.resolve(route.loadData(store, new URL(fullPathName), matchRoute)))
      }
      return acc
    }, [])

    Promise.all(promises).then(() => {
      const context: any = {}
      const renderRoot = () => (
        <App
          context={context}
          location={req.url}
          Router={StaticRouter}
          store={store}
        />
      )

      renderToString(renderRoot())

      if (context.url) {
        res.writeHead(302, {
          Location: context.url
        })
        res.end()
        return
      }

      const app = renderToString(renderRoot())
      const preloadedState = JSON.stringify(store.getState()).replace(/</g, '\\u003c')

      fileSystem.readFile(path.resolve('./dist/root.html'), 'utf8', (err, data) => {
        if (err) {
          console.error('Something went wrong:', err)
          return res.status(500).send('Oops, better luck next time!')
        }

        const html = data.replace(
          '<div id="root"></div>',
          `
            <div id="root">${app}</div>
            <script>
              // WARNING: See the following for security issues around embedding JSON in HTML:
              // https://redux.js.org/usage/server-rendering#security-considerations
              window.__PRELOADED_STATE__ = ${preloadedState}
            </script>
          `
        )

        return res.status(200).send(html)
      })
    })
  }
}
