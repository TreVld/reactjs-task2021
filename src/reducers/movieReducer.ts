import {
  GET_MOVIE_LOADING,
  GET_MOVIE_FAILURE,
  GET_MOVIE_SUCCESS
} from '../actions'

interface IAction {
  type: string
  movie: any
  error: Error
}

interface IState {
  loading: boolean,
  movie: any,
  error: Error
}

const initialStateMovie: IState = {
  loading: false,
  movie: {},
  error: null
}

export default function movieReducer (state = initialStateMovie, { movie, error, type }: IAction) {
  switch (type) {
    case GET_MOVIE_LOADING:
      return {
        ...state,
        loading: true
      }

    case GET_MOVIE_FAILURE:
      return {
        ...state,
        loading: false,
        error
      }

    case GET_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        movie: movie
      }

    default:
      return state
  }
}
