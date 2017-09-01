import React from 'react'
import PropTypes from 'prop-types'

const TopicsCellComponent = ({ topic }) => (
  <div>
    <div>{topic.title}</div>
  </div>
)

TopicsCellComponent.propTypes = {
  topic: PropTypes.object.isRequired
}

export default TopicsCellComponent
