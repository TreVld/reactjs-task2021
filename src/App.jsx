import React from 'react'
import Movies from './components/Movies/Movies'
import Movie from './components/Movie/Movie'
import ErrorBoundary from './components/ErrorBoundary'
import Logotype from './components/Logotype/Logotype'
import ScrollToTop from './components/ScrollToTop'
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import 'normalize.css'
import './vars.scss'
import './styles.scss'

const NotFound = () => <p>404 Not Found</p>

const routes = [
  {
    path: '/movies/:id',
    component: Movie
  },
  {
    path: '/movies',
    component: Movies
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
