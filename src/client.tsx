import React from 'react'
import { hydrate } from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import configureStore from './store'

const store = configureStore((window as any).__PRELOADED_STATE__)
delete (window as any).__PRELOADED_STATE__

hydrate(
  <App
    Router={BrowserRouter}
    store={store}
  />,
  document.getElementById('root')
)
