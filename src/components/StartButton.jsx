import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { startTicker } from 'ducks/game'

class StartButton extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { dispatch } = this.props

    dispatch(startTicker())
  }

  render() {
    return (
      <button onClick={this.onClick}>Start</button>
    )
  }
}

export default connect()(StartButton)
