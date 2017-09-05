import React, { Component } from "react"
import { connect } from 'react-redux'
import { fetchTopic } from '../../actions/topics'

class TopicContainer extends Component {
  componentDidMount() {
    console.log(this.props.id)
    this.props.fetchTopic(this.props.id, '44ffb9e4-a3e9-4f0e-8a1a-32ea5e08bcc5')
  }

  render() {
    return(
      <div>
        topic
      </div>
    )
  }
}


// redux
const mapStateToProps = (state, {match}) => {
  return {
    id: match.params.id
  }
}

export default connect(
  mapStateToProps,
  { fetchTopic }
)(TopicContainer)
