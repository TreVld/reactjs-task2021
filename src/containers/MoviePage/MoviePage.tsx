import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MoviesListContainer from '../MoviesListContainer'
import Panel from '../../components/Panel/Panel'
import Button from '../../components/Button/Button'
import Logotype from '../../components/Logotype/Logotype'
import Placeholder from '../../components/Placeholder/Placeholder'
import MovieInfo from '../../components/MovieInfo/MovieInfo'
import { connect } from 'react-redux'
import { getMovie } from '../../actions'
import './MoviePage.scss'
import { RootState } from '../../reducers'

interface IProps {
  movie?: any
  getMovie?: Function
  error?: Error
  loading?: boolean
}

function MoviePage ({ movie, getMovie, error, loading }: IProps) {
  const { id } = useParams<{id?: string}>()
  useEffect(() => {
    if (parseInt(id) !== parseInt(movie.id)) {
      getMovie(id)
    }
  }, [getMovie, id, movie.id])

  if (error) {
    return <Placeholder title={`Error: ${error.message}`} />
  }

  if (loading) {
    return <Placeholder title="Loading..." />
  }

  if (!movie.id) {
    return <Placeholder title="No film found" />
  }

  return (
    <>
      <header className="app-header">
        <div className="app-header__content movie">
          <div className="app-header__toolbar">
            <Logotype/>
            <Button to="/" primary icon>
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
          <Panel>
            <strong>Films by {movie.genres[0]} genre</strong>
          </Panel>
        </div>
      </header>

      <div className="app-body">
        <div className="container">
          <MoviesListContainer searchBy="genres" search={movie.genres[0]}/>
        </div>
      </div>
    </>
  )
}

MoviePage.defaultProps = {
  movie: {},
  getMovie: () => {},
  error: null,
  loading: false
}

export default connect(
  (state: RootState) => ({
    loading: state.movieReducer.loading,
    error: state.movieReducer.error,
    movie: state.movieReducer.movie
  }),
  { getMovie }
)(MoviePage)
