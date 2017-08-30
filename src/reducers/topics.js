import { combineReducers } from 'redux'
import * as actions from '../actions/topics'
// import { createSelector } from 'reselect'

// Reduces
function ids(state = [], action) {
  switch(action.type) {
    case actions.LOAD_TOPICS: {
      const topics = action.topics
      const ids = topics.map(topic => topic.id)
      return ids
    }
    default:
      return state
  }
}

function allFilter(state={}, action) {
  if(action.filter !== 'all') {
    return state
  }
  switch(action.type) {
    case actions.LOAD_TOPICS:
      const topics = action.topics
      const entities = topics.reduce((acc, quote) => Object.assign(acc, { [quote.id]: quote }), {})
      return entities
    default:
      return state
  }
}

function askFilter(state={}, action) {
  if(action.filter !== 'ask') {
    return state
  }
  switch(action.type) {
    case actions.LOAD_TOPICS:
      const topics = action.topics
      const entities = topics.reduce((acc, quote) => Object.assign(acc, { [quote.id]: quote }), {})
      return entities
    default:
      return state
  }
}

const topics = combineReducers({
  ids,
  all: allFilter,
  ask: askFilter
})

export default topics

// Selectors
// const getIds = (state) => state.ids
// const getEntities = (state) => state.entities
// export const getQuotesArray = createSelector([getIds, getEntities], (ids, entities) => ids.map(id => entities[id]))
