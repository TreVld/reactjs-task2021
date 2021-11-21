import { combineReducers } from 'redux'
import moviesReducer from './moviesReducer'
import movieReducer from './movieReducer'

const reducers = combineReducers({
  moviesReducer,
  movieReducer
});

export default reducers

export type RootState = ReturnType<typeof reducers>
