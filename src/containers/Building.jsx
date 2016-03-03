import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

export default ({ building }) => (
  <div>{ building.get('cost') }</div>
)
