import React from 'react'
import MoviesPage from '../containers/MoviesPage'
import MoviePage from '../containers/MoviePage/MoviePage'
import ErrorBoundary from './ErrorBoundary'
import Logotype from './Logotype/Logotype'
import ScrollToTop from './ScrollToTop'
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import 'normalize.css'
import '../vars.scss'
import '../styles.scss'

const NotFound = () => (
  <div className="app-body">
    <p>404 Not Found</p>
  </div>
)

const routes = [
  {
    path: '/movies/:id',
    component: MoviePage
  },
  {
    path: '/movies',
    component: MoviesPage
  },
  {
    path: '*',
    component: NotFound
  }
]

function App () {
  return (
    <React.StrictMode>
      <ErrorBoundary>
        <BrowserRouter>
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
        </BrowserRouter>
      </ErrorBoundary>
    </React.StrictMode>
  )
}

export default App
