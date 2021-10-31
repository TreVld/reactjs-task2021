import React, { useState, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import MoviesListItem from './MoviesListItem'
import Placeholder from '../Placeholder/Placeholder'

function MoviesList ({ search, searchBy, sortBy }) {
  const URL = 'https://reactjs-cdp.herokuapp.com/movies'

  const [error, setError] = useState(null)
  const [initialMovies, setInitialMovies] = useState([])
  const [isLoaded, setLoaded] = useState(false)

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then(
        (response) => {
          setInitialMovies(response.data || [])
          setLoaded(true)
        },
        (error) => {
          setError(error)
          setLoaded(true)
        }
      )
  }, [])

  const movies = useMemo(
    () => computeMovies(initialMovies, search, searchBy, sortBy),
    [initialMovies, search, searchBy, sortBy]
  )

  if (error) {
    return <Placeholder title={`Error: ${error.message}`} />
  }

  if (!isLoaded) {
    return <Placeholder title="Loading..." />
  }

  if (!movies?.length) {
    return <Placeholder title="No films found" />
  }

  return (
    <div className="movies">
      {movies.map((movie) => (
        <MoviesListItem key={movie.id} movie={movie} />
      ))}
    </div>
  )
}

MoviesList.propTypes = {
  search: PropTypes.string,
  searchBy: PropTypes.string,
  sortBy: PropTypes.string
}

export default MoviesList

function filterByTitle (movies = [], search = '') {
  return movies.filter((movie) =>
    (movie.title || '').toUpperCase().includes(search.toUpperCase())
  )
}

function filteredByGenres (movies = [], search = '') {
  return movies.filter((movie) =>
    (movie.genres || []).some((genre) =>
      genre.toUpperCase().includes(search.toUpperCase())
    )
  )
}

function filteredBy (value) {
  const filters = {
    genre: filteredByGenres,
    title: filterByTitle
  }

  if (value in filters) {
    return filters[value]
  }

  return filters.title
}

function compareBy (value) {
  const compareMethods = {
    vote_average: (a, b) => b[value] - a[value],
    release_date: (a, b) => Date.parse(b[value]) - Date.parse(a[value])
  }

  if (value in compareMethods) {
    return compareMethods[value]
  }

  return compareMethods.release_date
}

function computeMovies (
  movies = [],
  search = '',
  searchBy = 'title',
  sortBy = 'date'
) {
  return filteredBy(searchBy)(movies, search).sort(compareBy(sortBy))
}
