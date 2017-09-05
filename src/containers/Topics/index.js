import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchTopics, selectedTab } from '../../actions/topics'
import { getIsFetching, getData, getPage } from '../../reducers'

import TopicsFilterComponent from '../../components/TopicsFilter'
import TopicsLoadMoreComponent from '../../components/TopicsLoadMore'
import TopicsListComponent from '../../components/TopicsList'

class TopicsContainer extends Component {
  componentDidMount() {
    const { filter, data, selectedTab } = this.props
    selectedTab(filter)

    if(!data.length) {
      this._loadTopics(filter, 1)
    }
  }

  componentDidUpdate(prevProps){
    const { filter, data, selectedTab } = this.props
    if(filter !== prevProps.filter) {
      selectedTab(filter)
    }

    if(filter !== prevProps.filter && !data.length ) {
      this._loadTopics(filter, 1)
    }
  }

  _loadTopics(filter, page) {
    this.props.fetchTopics(filter, page, 10)
  }

  handleLoadMore(){
    const { filter, page, isFetching } = this.props
    if(!isFetching) {
      this._loadTopics(filter, page + 1)
    }
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
        <TopicsListComponent data={data} />
        <TopicsLoadMoreComponent
          isFetching={isFetching}
          onLoadMore={this.handleLoadMore.bind(this)}
        />
      </div>
    )
  }
}

TopicsContainer.propTypes = {
  fetchTopics: PropTypes.func.isRequired
}

// redux
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
  { fetchTopics, selectedTab }
)(TopicsContainer)
