import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from '../redux/reducers'
// import logger from 'redux-logger'
import rootEpic from '../redux/epics'
import createHistory from 'history/createBrowserHistory'
const epics = createEpicMiddleware(rootEpic)

const history = createHistory()

export default function configureStore() {
  return createStore(
    rootReducer,
    compose(
      applyMiddleware(epics, routerMiddleware(history)),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )
}
