import React from 'react'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import App from '../containers'

const history = createHistory()

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/:filter' component={App} />
    </Switch>
  </ConnectedRouter>
)

export default Routes
