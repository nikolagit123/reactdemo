import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import { sessionReducer } from './reducers/session'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  combineReducers({
    session: sessionReducer,
  }),
  (process.env.NODE_ENV === 'development') ? composeEnhancers(applyMiddleware(thunk, logger))
      : composeEnhancers(applyMiddleware(thunk)),
)
