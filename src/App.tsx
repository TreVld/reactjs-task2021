import 'isomorphic-fetch'
import './styles.scss'

import { hot } from 'react-hot-loader'
import React from 'react'
import ErrorBoundary from './components/ErrorBoundary'
import Logotype from './components/Logotype/Logotype'
import ScrollToTop from './components/ScrollToTop'
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { routes } from './routes'
import { Provider } from 'react-redux'
import { Store } from 'redux'

export interface IContext {
  url: string
}

interface IProps {
  Router: Function
  location?: string
  context?: IContext
  store: Store
}

function App ({
  Router, location, context, store
}: IProps) {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Router location={location} context={context}>
          <ScrollToTop />
          <div className="app">
            <Switch>
              <Redirect exact from="/" to="/search" />
              { routes.map(route => <Route key={route.path} {...route} />)}
            </Switch>
            <footer className="app-footer">
              <Logotype />
            </footer>
          </div>
        </Router>
      </ErrorBoundary>
    </Provider>
  )
}

App.defaultProps = {
  location: null,
  context: null
}

export default hot(module)(App)
