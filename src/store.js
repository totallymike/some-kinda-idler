import { applyMiddleware, compose, createStore } from 'redux'
import { combineReducers } from 'redux-immutable'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

import { batchedSubscribe } from 'redux-batched-subscribe'
import coins from 'ducks/coins'
import game, { actionTypes as gameActionTypes } from 'ducks/game'
import machines from 'ducks/machines'

const logger = createLogger({
  level: 'warn',
  stateTransformer: (state) => state.toJS(),
  predicate: (getState, action) => action.type !== gameActionTypes.TICK,
})

const reducer = combineReducers({ coins, game, machines })

const rafSubscriber = batchedSubscribe(notify => {
  requestAnimationFrame(() => {
    notify()
  })
})

const enhancer = compose(
  applyMiddleware(thunk /*, logger */),
  rafSubscriber
)
const store = createStore(reducer, enhancer)

export default store
