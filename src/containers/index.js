import React, { Component } from "react"
import { Route, Switch } from 'react-router'

// 依赖组件
import HeaderComponent from '../components/Header'
import TopicsContainer from './Topics'
import TopicContainer from './Topic'

class App extends Component {

  render() {
    const { user } = this.props
    const accesstoken = user.accesstoken
    const username = user.loginname
    const hasLogin = !!accesstoken

    return(
      <div className='wraper'>
        <HeaderComponent username={username} />
        <div className='main'>
          <Switch>
            <Route exact path='/' component={TopicsContainer} />
            <Route path='/topics/:filter' component={TopicsContainer} />
            <Route path='/topic/:id' component={TopicContainer} />
          </Switch>
        </div>
      </div>
    )
  }
}

// redux
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(
  mapStateToProps
)(App)
