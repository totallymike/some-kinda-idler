import { createAction, handleActions } from 'redux-actions'

const INCREMENT = 'idler/coins/INCREMENT'

const incrementAction = createAction(INCREMENT)
const increment = function() {
  let retVal = incrementAction()
  console.log('retval', retVal)
  return retVal
}
const initialState = 0

export default handleActions({
  [INCREMENT]: (state, action) => {console.log('yay'); return state + 1},
}, initialState)

export { increment }
