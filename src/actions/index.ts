import { Dispatch } from 'redux';
const BASE_URL = 'https://reactjs-cdp.herokuapp.com/movies'

/* Movies */
export const GET_MOVIES_LOADING = 'GET_MOVIES_LOADING'
export const GET_MOVIES_FAILURE = 'GET_MOVIES_FAILURE'
export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS'
export const SORT_MOVIES = 'SORT_MOVIES'

export const getMoviesLoading = () => ({
  type: GET_MOVIES_LOADING
})

export const getMoviesFailure = (error: Error) => ({
  type: GET_MOVIES_FAILURE,
  error
})

export const getMoviesSuccess = (movies: Array<object>) => ({
  type: GET_MOVIES_SUCCESS,
  movies
})

export const getMovies = (query?: string) => {
  return async (dispatch:any) => {
    dispatch(getMoviesLoading())

    try {
      const response = await fetch(`${BASE_URL}?${query}`)
      const { data: movies } = await response.json()
      dispatch(getMoviesSuccess(movies))
      dispatch(sortMovies())
    } catch (err) {
      dispatch(getMoviesFailure(err))
    }
  }
}

export const sortMovies = (sortBy = 'release_date') => ({
  type: SORT_MOVIES,
  sortBy
})

/* Movie */
export const GET_MOVIE_LOADING = 'GET_MOVIE_LOADING'
export const GET_MOVIE_FAILURE = 'GET_MOVIE_FAILURE'
export const GET_MOVIE_SUCCESS = 'GET_MOVIE_SUCCESS'

export const getMovieLoading = () => ({
  type: GET_MOVIE_LOADING
})

export const getMovieFailure = (error: Error) => ({
  type: GET_MOVIE_FAILURE,
  error
})

export const getMovieSuccess = (movie: object) => ({
  type: GET_MOVIE_SUCCESS,
  movie
})

export const getMovie = (id: string | number) => {
  return async (dispatch: Dispatch ) => {
    dispatch(getMovieLoading())

    try {
      const response = await fetch(`${BASE_URL}/${id}`)
      const movie = await response.json()
      dispatch(getMovieSuccess(movie))
    } catch (err) {
      dispatch(getMovieFailure(err))
    }
  }
}
