import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import Balance from 'containers/Balance'
import Button from 'components/Increment'
import store from '../store'

const App = (
  <Provider store={store}>
    <div>
      <Button />
      <Balance />
    </div>
  </Provider>
)

export default App
