import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import Balance from 'containers/Balance'
import Increment from 'components/Increment'
import StartButton from 'components/StartButton'
import BuildingList from 'containers/BuildingList'
import store from '../store'

const App = (
  <Provider store={store}>
    <div>
      <Increment />
      <StartButton />
      <Balance />
      <BuildingList />
    </div>
  </Provider>
)

export default App
