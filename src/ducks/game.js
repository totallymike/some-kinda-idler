import { createAction, handleActions } from 'redux-actions'
import { Map } from 'immutable'
import { actionTypes as coinActionTypes, increment } from 'ducks/coins'

const TICK = 'idler/game/TICK'
const START_TICKER = 'idler/game/START_TICKER'

const actionTypes = {
  TICK,
  START_TICKER,
}

const tick = () => {
  return (dispatch, getState) => {
    const buildings = getState().getIn(['machines', 'buildings'])
    const amountToIncrement = buildings.reduce((sum, building, index) => {
      const count = building.get('count')

      return sum + (1 * count)
    }, 0)

    dispatch(increment(amountToIncrement))

    return dispatch({
      type: TICK,
    })
  }
}

const startTicker = () => {
  return (dispatch, getState) => {
    const timerInterval = getState().getIn(['game', 'timerInterval'])
    const timerId = window.setInterval(
      () => dispatch(tick()),
      timerInterval
    )

    return dispatch({
      type: START_TICKER,
      payload: {
        timerId,
      },
    })
  }
}

const initialState = new Map({
  tickerStarted: false,
  timerInterval: 600,
  timerId: null,
})

export default handleActions({
  [TICK]: (state) => state,
  [START_TICKER]: (state, action) => {
    const { payload: { timerId } } = action

    return state.merge({ timerId, tickerStarted: true })
  },
}, initialState)

export { actionTypes, startTicker, tick }
