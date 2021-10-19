import React from 'react'
import Movies from './components/Movies/Movies'
import ErrorBoundary from './components/ErrorBoundary'
import Footer from './components/Footer/Footer'
import NoMatch from './components/NoMatch'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'normalize.css'
import './vars.scss'
import './styles.scss'

function App () {
  const name = 'netflixroulette'

  return (
    <React.StrictMode>
      <ErrorBoundary>
        <main className="container">
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                <Movies />
              </Route>

              <Route path="/movies">
                <Movies />
              </Route>

              <Route path="/*">
                <NoMatch />
              </Route>
            </Switch>
          </BrowserRouter>
        </main>
      </ErrorBoundary>
      <Footer name={name} />
    </React.StrictMode>
  )
}

export default App
