import React from 'react'
import PropTypes from 'prop-types'
import TopicsCellComponent from '../TopicsCell'

const TopicsListComponent = ({ data }) => (
  <div>
  {
    data.map((topic, index) => {
      return <TopicsCellComponent key={index} topic={topic} />
    })
  }
  </div>
)

TopicsListComponent.propTypes = {
  data: PropTypes.array.isRequired
}

export default TopicsListComponent
