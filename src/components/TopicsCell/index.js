import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const TopicsCellComponent = ({ topic }) => (
  <div>
    <div><Link to={`/topic/${topic.id}`}>{topic.title}</Link></div>
  </div>
)

TopicsCellComponent.propTypes = {
  topic: PropTypes.object.isRequired
}

export default TopicsCellComponent
