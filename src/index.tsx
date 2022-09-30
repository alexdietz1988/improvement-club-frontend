import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import 'bulma/css/bulma.min.css'

import reducers from './reducers'
import App from './App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)