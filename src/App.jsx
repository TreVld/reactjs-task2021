import React from 'react'
import Movies from './components/Movies/Movies'
import ErrorBoundary from './components/ErrorBoundary'
import Footer from './components/Footer/Footer'

import 'normalize.css'
import './styles.scss'
import './vars.scss'

function App () {
  const name = 'netflixroulette'

  return (
    <React.StrictMode>
      <ErrorBoundary>
        <main className="container">
          <Movies />
        </main>
      </ErrorBoundary>
      <Footer name={name} />
    </React.StrictMode>
  )
}

export default App
