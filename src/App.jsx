import 'isomorphic-fetch'
import './styles.scss'

import { hot } from 'react-hot-loader'
import React from 'react'
import PropTypes from 'prop-types'
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

function App ({
  Router, location, context, store
}) {
  return (
  <Provider store={store}>
    <ErrorBoundary>
      <Router location={location} context={context}>
        <ScrollToTop />
          <div className="app">
            <Switch>
              <Redirect exact from="/" to="/movies" />
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

App.propTypes = {
  Router: PropTypes.func.isRequired,
  location: PropTypes.string,
  context: PropTypes.shape({
    url: PropTypes.string
  }),
  store: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired
  }).isRequired
}

App.defaultProps = {
  location: null,
  context: null
}

export default hot(module)(App)
