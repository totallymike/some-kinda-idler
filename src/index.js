import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import store from './store'

import Balance from './containers/Balance'
import Button from './components/Increment'
import 'index.html'
import { increment } from './redux/coins'

function mountTickLoop(store) {
  window.setInterval(function () {
    store.dispatch(increment())
  }, 12)
}

mountTickLoop(store)

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
