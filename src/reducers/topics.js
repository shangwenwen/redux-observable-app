import { combineReducers } from 'redux'
import * as actions from '../actions/topics'

function topicsCreate(filter) {
  const data = (state = [], action) => {
    if(action.filter !== filter) {
      return state
    }
    switch(action.type) {
      case actions.LOAD_TOPICS:
        const topics = action.payload
        const data = topics.map((topic) => {
          return topic
        })
        return state.concat(data)
      default:
        return state
    }
  }

  const page = (state = 0, action) => {
    if(action.filter !== filter) {
      return state
    }
    switch(action.type) {
      case actions.LOAD_TOPICS:
        const page = action.page
        return page
      default:
        return state
    }
  }

  const isFetching = (state = false, action) => {
    if(action.filter !== filter) {
      return state
    }
    switch(action.type) {
      case actions.FETCH_TOPICS:
        return true
      case actions.LOAD_TOPICS:
        return false
      default:
        return state
    }
  }

  return combineReducers({
    data,
    page,
    isFetching
  })
}

const selectedTab = (state = 'all', action) => {
  switch(action.type) {
    case actions.SELECTED_TAB:
      return action.filter
    default:
      return state
  }
}

const topics = combineReducers({
  all: topicsCreate('all'),
  good: topicsCreate('good'),
  share: topicsCreate('share'),
  ask: topicsCreate('ask'),
  job: topicsCreate('job'),
  dev: topicsCreate('dev'),
  selectedTab
})

export default topics

// Selectors
export const getData = (state) => state.data
export const getPage = (state) => state.page
export const getIsFetching = (state) => state.isFetching
