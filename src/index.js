import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import store from './store'

import 'index.html'

const App = (
  <Provider store={store}>
    <div>Oh hai</div>
  </Provider>
)

ReactDOM.render(
  App,
  document.getElementById('root')
)
