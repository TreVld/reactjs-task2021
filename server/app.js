const express = require('express')
const path = require('path')

const app = express()
if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const webpackHotServerMiddleware = require('webpack-hot-server-middleware')
  const config = require('../webpack/index.js')
  const compiler = webpack(config)
  app.use(webpackDevMiddleware(compiler, {
    serverSideRender: true
  }))
  app.use(webpackHotMiddleware(compiler.compilers.find(compiler => compiler.name === 'client')))
  app.use(webpackHotServerMiddleware(compiler))
} else {
  const CLIENT_ASSETS_DIR = path.join(__dirname, '../dist')
  const SERVER_RENDERER_PATH = path.join(__dirname, '../dist/serverRenderer.js')
  const serverRenderer = require(SERVER_RENDERER_PATH).default
  app.use(express.static(CLIENT_ASSETS_DIR))
  app.use(serverRenderer())
}

module.exports = app
