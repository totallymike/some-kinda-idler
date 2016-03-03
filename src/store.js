import { createStore } from 'redux'
// import { combineReducers } from 'redux-immutablejs'

import Immutable from 'immutable'

const initialState = Immutable.Map()

function reducer(state = initialState, action) {
  return state
}

const store = createStore(reducer)

export default store
