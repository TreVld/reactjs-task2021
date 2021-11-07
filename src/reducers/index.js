import { combineReducers } from 'redux'
import moviesReducer from './moviesReducer'
import movieReducer from './movieReducer'

export default combineReducers({
  moviesReducer,
  movieReducer
})
