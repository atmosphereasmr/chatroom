import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import reduxPromiseMiddleware from 'redux-promise-middleware'

import reducer from './reducers/reducer'

const store = createStore(reducer,
  applyMiddleware(reduxPromiseMiddleware())
)
export default store
