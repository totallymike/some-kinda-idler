import { createAction, handleActions } from 'redux-actions'

const INCREMENT = 'idler/coins/INCREMENT'

const actionTypes = {
  INCREMENT,
}

const increment = createAction(INCREMENT, (num = 1) => num)

const initialState = 0

export default handleActions({
  [INCREMENT]: (state, action) => {
    const { payload: amount } = action
    return state + amount
  }
}, initialState)

export { actionTypes, increment }
