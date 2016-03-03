import React, { Component, PropTypes } from 'react'
import { List } from 'immutable'
import { connect } from 'react-redux'

import Building from './Building'

class BuildingList extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    buildings: PropTypes.instanceOf(List).isRequired,
  };

  render() {
    const { buildings } = this.props

    return (
      <ul>
        {buildings.map((building, index) => <li key={`building_${index}`}>
          <Building building={building} />
        </li>)}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  const buildings = state.getIn(['machines', 'buildings'])
  return { buildings }
}
export default connect(mapStateToProps)(BuildingList)
