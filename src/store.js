import { createStore } from 'redux'
import { combineReducers } from 'redux-immutable'

import { batchedSubscribe } from 'redux-batched-subscribe'
import coins from './redux/coins'

const reducer = combineReducers({ coins })

const rafSubscriber = batchedSubscribe(notify => {
  requestAnimationFrame(() => {
    notify()
  })
})
const store = createStore(reducer, undefined, rafSubscriber)

export default store
