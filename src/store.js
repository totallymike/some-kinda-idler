import { createStore } from 'redux'
import { combineReducers } from 'redux-immutable'
import coins from './redux/coins'

const reducer = combineReducers({ coins })

const store = createStore(reducer)

export default store
