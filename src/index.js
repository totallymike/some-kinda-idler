import ReactDOM from 'react-dom'
import App from 'containers/App'
import store from './store'

import 'index.html'
import { increment } from './redux/coins'

function mountTickLoop({ dispatch }) {
  window.setInterval(() => {
    dispatch(increment())
  }, 600)
}

mountTickLoop(store)

ReactDOM.render(
  App,
  document.getElementById('root')
)
