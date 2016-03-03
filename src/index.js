import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import store from './store'

import Balance from './containers/Balance'
import Button from './components/Increment'
import 'index.html'

const App = (
  <Provider store={store}>
    <div>
      <Button />
      <Balance />
    </div>
  </Provider>
)

ReactDOM.render(
  App,
  document.getElementById('root')
)
