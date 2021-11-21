import React, {useEffect } from 'react'
import MoviesList from '../components/MoviesList/MoviesList'
import Placeholder from '../components/Placeholder/Placeholder'
import { connect } from 'react-redux'
import { getMovies } from '../actions'
import { RootState } from '../reducers'

interface IStateProps {
  movies?: Array<any>
  error?: Error
  loading?: boolean
}  

interface IDispatchProps {
  getMovies?: Function
}

interface OwnProps {
  searchBy?: string
  search?: string
}

type Props = IStateProps & IDispatchProps & OwnProps

function MoviesListContainer ({
  movies,
  getMovies,
  error,
  loading,
  searchBy,
  search
}: Props) {
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

MoviesListContainer.defaultProps = {
  movies: [],
  getMovies: () => {},
  error: null,
  loading: false,
  searchBy: 'title',
  search: ''
}


export default connect<IStateProps, IDispatchProps, OwnProps>(
  (state: RootState) => ({
    loading: state.moviesReducer.loading,
    error: state.moviesReducer.error,
    movies: state.moviesReducer.movies
  }),
  { getMovies }
)(MoviesListContainer)
