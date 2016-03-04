import { createAction, handleActions } from 'redux-actions'
import { List, Map, fromJS } from 'immutable'

const BUY_BUILDING = 'idler/machines/BUY_BUILDING'

const actionTypes = {
  BUY_BUILDING,
}

const buyBuilding = createAction(BUY_BUILDING)

const initialState = new Map({
  buildings: List.of(fromJS({ count: 0, cost: 20 })),
})

export default handleActions({
  [BUY_BUILDING]: (state, { payload }) => {
    const [index, building] = state.get('buildings').findEntry((b) => b === payload)
    return state.mergeIn(['buildings', index], { count: building.get('count') + 1 })
  }
}, initialState)

export { actionTypes, buyBuilding }
