import {
  GET_MOVIES_LOADING,
  GET_MOVIES_FAILURE,
  GET_MOVIES_SUCCESS,
  SORT_MOVIES
} from '../actions'

interface IAction {
  type: string
  movies: Array<any>
  sortBy: string
  error: Error
}

interface IState {
  loading: boolean,
  movies: Array<any>,
  error: Error
}

const initialStateMovies: IState = {
  loading: false,
  movies: [],
  error: null
}

export default function moviesReducer (state = initialStateMovies, { movies, sortBy, error, type }: IAction) {
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

function compareBy (value: string) {
  const compareMethods: any = {
    vote_average: (a:any, b:any) => b[value] - a[value],
    release_date: (a:any, b:any) => Date.parse(b[value]) - Date.parse(a[value])
  }

  if (value in compareMethods) {
    return compareMethods[value]
  }

  return compareMethods.release_date
}
