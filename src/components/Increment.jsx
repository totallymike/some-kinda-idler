import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { increment } from '../redux/coins'

class Button extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { dispatch } = this.props
    dispatch(increment())
  };

  render() {
    return <button onClick={this.onClick}>Increment</button>
  }
}

export default connect()(Button)
