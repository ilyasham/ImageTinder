/**
 * Created by dev on 4/20/17.
 */
import { createStore, combineReducers, applyMiddleware } from 'redux'
//import { combineEpics, createEpicMiddleware } from 'redux-observable'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import app from './app'

// Define Middleware
const middleware = [
  thunk,
  promise()
]


// Define Reducers
const reducers = combineReducers({
  app
})

// Create Store
export default createStore(reducers, {}, applyMiddleware(...middleware))
