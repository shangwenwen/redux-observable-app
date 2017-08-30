import React from 'react'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import App from '../containers'

const history = createHistory()

const Routes = () => (
  <ConnectedRouter history={history}>
    <App />
  </ConnectedRouter>
)

export default Routes
