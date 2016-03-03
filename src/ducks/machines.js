import { createAction, handleActions } from 'redux-actions'
import { List, Map, fromJS } from 'immutable'

const initialState = new Map({
  buildings: List.of(fromJS({ count: 0 })),
})

export default handleActions({}, initialState)
