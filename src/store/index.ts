import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const composeEnhancers = (typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const middlewares = [thunk]

export default (initialState?: any) => {
  const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middlewares)))

  return store
}
