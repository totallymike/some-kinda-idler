import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { buyBuilding } from 'ducks/machines'

const Building = ({ dispatch, building }) => (
  <div>
    { building.get('count') } | { building.get('cost') }
    <button onClick={buy(dispatch, building)}>Buy</button>
  </div>
)

const buy = (dispatch, building) => () => {
  dispatch(buyBuilding(building))
}

export default connect()(Building)
