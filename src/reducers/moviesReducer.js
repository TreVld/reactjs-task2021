import {
  GET_MOVIES_LOADING,
  GET_MOVIES_FAILURE,
  GET_MOVIES_SUCCESS
} from '../actions'

const initialStateMovies = {
  loading: false,
  movies: [],
  error: null
}

export default function moviesReducer (state = initialStateMovies, { movies, error, type }) {
  switch (type) {
    case GET_MOVIES_LOADING:
      return {
        ...state,
        loading: true
      }

    case GET_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        error
      }

    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        movies: movies
      }

    default:
      return state
  }
}
