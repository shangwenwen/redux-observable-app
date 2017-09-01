import React from 'react'
import PropTypes from 'prop-types'

const TopicsLoadMoreComponent = ({ isFetching, onLoadMore }) => (
  <div className='topics-load-more'>
  {
    isFetching
    ? <div>loading</div>
    : <div onClick={() => onLoadMore()}>加载更多&nbsp;></div>
  }
  </div>
)

TopicsLoadMoreComponent.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  onLoadMore: PropTypes.func.isRequired
}

export default TopicsLoadMoreComponent
