import { createAction, handleActions } from 'redux-actions'

const INCREMENT = 'idler/coins/INCREMENT'

const increment = createAction(INCREMENT)

const initialState = 0

export default handleActions({
  [INCREMENT]: (state) => state + 1,
}, initialState)

export { increment }
