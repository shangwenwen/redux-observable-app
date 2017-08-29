import React, { Component } from "react"
// import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router'

import HeaderComponent from '../components/Header'
import TopicsContainer from './Topics'

class App extends Component {

  render() {
    return(
      <div className='wraper'>
        <HeaderComponent />
        <div className='main'>
          <Switch>
            <Route exact path='/' component={TopicsContainer} />
            <Route path='/topics/:filter' component={TopicsContainer} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
