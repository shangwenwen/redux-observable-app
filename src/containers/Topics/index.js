import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTopics } from '../../actions/topics';
import TopicsFilterComponent from '../../components/TopicsFilter'

import { getIsFetching, getData, getPage } from '../../reducers'

class TopicsContainer extends Component {
  componentDidMount() {
    const { filter, data } = this.props
    if(data.length === 0) {
      this._loadTopics(filter, 1)
    }
  }

  componentDidUpdate(prevProps){
    const { filter, data } = this.props
    if(filter !== prevProps.filter && data.length === 0 ) {
      this._loadTopics(filter, 1)
    }
  }

  _loadTopics(filter, page) {
    this.props.fetchTopics(filter, page)
  }

  handleLoadMore(){
    const { filter, page } = this.props
    this._loadTopics(filter, page + 1)
  }

  render(){
    const { isFetching, data } = this.props
    if(isFetching && !data.length) {
      return (
        <div>loading....</div>
      )
    }
    return(
      <div>
        <TopicsFilterComponent />
        <div onClick={this.handleLoadMore.bind(this)}>list</div>
      </div>
    )
  }
}

const mapStateToProps = (state, {match}) => {
  const filter = match.params.filter || 'all'
  return {
    filter,
    data: getData(state, filter),
    isFetching: getIsFetching(state, filter),
    page: getPage(state, filter)
  }
}

export default connect(
  mapStateToProps,
  { fetchTopics }
)(TopicsContainer);
