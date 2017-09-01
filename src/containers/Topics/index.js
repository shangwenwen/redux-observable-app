import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTopics } from '../../actions/topics';
import TopicsFilterComponent from '../../components/TopicsFilter'

class TopicsContainer extends Component {
  componentDidMount() {
    const { filter } = this.props
    if() {
      this._loadTopics(filter, 1)
    }

  }

  componentDidUpdate(prevProps){
    const { filter } = this.props
    if(filter !== prevProps.filter) {
      this._loadTopics(filter, 1)
    }
  }

  _loadTopics(filter, page) {
    this.props.fetchTopics({
      tab: filter,
      page: page
    })
  }

  handleLoadMore(){
    const { filter } = this.props
    this._loadTopics(filter, 2)
  }

  render(){
    return(
      <div>
        <TopicsFilterComponent />
        <div onClick={this.handleLoadMore.bind(this)}>list</div>
      </div>
    )
  }
}

export default connect(
  (state, {match}) => ({ filter: match.params.filter || 'all' }),
  { fetchTopics }
)(TopicsContainer);
