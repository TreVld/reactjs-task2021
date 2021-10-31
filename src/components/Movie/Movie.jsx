import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MoviesList from '../Movies/MoviesList'
import Button from '../Button/Button'
import Logotype from '../Logotype/Logotype'
import Placeholder from '../Placeholder/Placeholder'
import MovieInfo from '../MovieInfo/MovieInfo'
import './Movie.scss'

export default function Movie () {
  const { id } = useParams()
  const [error, setError] = useState(null)
  const [movie, setMovie] = useState({})
  const [isLoaded, setLoaded] = useState(false)

  const BASE_URL = 'https://reactjs-cdp.herokuapp.com/movies/'

  useEffect(() => {
    fetch(BASE_URL + id)
      .then((response) => response.json())
      .then(
        (response) => {
          setMovie(response || {})
          setLoaded(true)
        },
        (error) => {
          setError(error)
          setLoaded(true)
        }
      )
  }, [id])

  if (error) {
    return <Placeholder title={`Error: ${error.message}`} />
  }

  if (!isLoaded) {
    return <Placeholder title="Loading..." />
  }

  return (
    <>
      <header className="app-header">
        <div className="app-header__content movie">
          <div className="app-header__toolbar">
            <Logotype/>
            <Button to="/movies" primary icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                height="24px"
                width="24px"
                fill="currentColor"
              >
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg>
            </Button>
          </div>

          <div className="container">
            <MovieInfo className="movie__info" movie={movie} />
          </div>
          <div className="sort-wrapper">
            <div className="container container_sm">

            </div>
          </div>
        </div>
      </header>

      <div className="app-body">
        <div className="container">
          <MoviesList />
        </div>
      </div>
    </>
  )
}
