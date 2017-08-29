import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTopics } from '../../actions/topics';
import TopicsFilterComponent from '../../components/TopicsFilter'

class TopicsContainer extends Component {
  componentDidMount() {
    this._loadTopics()
  }

  componentDidUpdate(prevProps){
    if(this.props.filter !== prevProps.filter) {
      this._loadTopics()
    }
  }

  _loadTopics() {
    const { filter, fetchTopics } = this.props
    fetchTopics(filter,1)
  }

  render(){
    return(
      <div>
        <TopicsFilterComponent />
        <div>list</div>
      </div>
    )
  }
}

export default connect(
  (state, {match}) => ({ filter: match.params.filter || 'all' }),
  { fetchTopics }
)(TopicsContainer);
