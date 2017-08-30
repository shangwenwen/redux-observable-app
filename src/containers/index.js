import React, { Component } from "react"
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchTopics } from '../actions/topics'

import Header from '../components/Header'

class App extends Component {
  componentDidMount() {
    this._loadTopics()
  }

  componentDidUpdate(prevProps){
    if(this.props.match.params.filter !== prevProps.match.params.filter) {
      this._loadTopics()
    }
  }

  _loadTopics() {
    const { match, fetchTopics } = this.props
    fetchTopics(match.params.filter,1)
  }

  render() {
    return(
      <div className='wraper'>
        <Header />
        <div className='main'>
          <Switch>
            <Route exact path='/' component={App} />
            <Route path='/topics/:filter' component={App} />
          </Switch>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  fetchTopics: PropTypes.func.isRequired,
  location: PropTypes.any
}

export default connect(
  ({ quotes, routing }) => ({ location: routing.location }),
  { fetchTopics }
)(App)
