import React, { useEffect } from 'react'
import MoviesList from '../components/MoviesList/MoviesList'
import Placeholder from '../components/Placeholder/Placeholder'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getMovies } from '../actions'

function MoviesListContainer ({
  movies,
  getMovies,
  error,
  loading,
  searchBy,
  search
}) {
  const query = `searchBy=${searchBy}&search=${search}`

  useEffect(() => {
    getMovies(query)
  }, [getMovies, query])

  if (error) {
    return <Placeholder title={`Error: ${error.message}`} />
  }

  if (loading) {
    return <Placeholder title="Loading..." />
  }

  return <MoviesList movies={movies} />
}

MoviesListContainer.propTypes = {
  movies: PropTypes.array,
  getMovies: PropTypes.func,
  error: PropTypes.any,
  loading: PropTypes.bool,
  searchBy: PropTypes.oneOf(['title', 'genres']),
  search: PropTypes.string
}

MoviesListContainer.defaultProps = {
  movies: [],
  getMovies: () => {},
  error: null,
  loading: false,
  searchBy: 'title',
  search: ''
}

export default connect(
  (state) => ({
    loading: state.moviesReducer.loading,
    error: state.moviesReducer.error,
    movies: state.moviesReducer.movies
  }),
  { getMovies }
)(MoviesListContainer)
