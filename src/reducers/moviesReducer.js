import {
  GET_MOVIES_LOADING,
  GET_MOVIES_FAILURE,
  GET_MOVIES_SUCCESS,
  SORT_MOVIES
} from '../actions'

const initialStateMovies = {
  loading: false,
  movies: [],
  error: null
}

export default function moviesReducer (state = initialStateMovies, { movies, sortBy, error, type }) {
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

    case SORT_MOVIES:
      return {
        ...state,
        movies: [...state.movies].sort(compareBy(sortBy))
      }

    default:
      return state
  }
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
