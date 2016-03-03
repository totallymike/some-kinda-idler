import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  coins: state.get('coins'),
})

class Balance extends Component {
  render() {
    return <div>{this.props.coins}</div>
  }
}

export default connect(mapStateToProps)(Balance)
