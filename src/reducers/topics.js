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

const topics = combineReducers({
  all: topicsCreate('all'),
  ask: topicsCreate('ask'),
  good: topicsCreate('good'),
})

export default topics

// Selectors
export const getData = (state) => state.data
export const getPage = (state) => state.page
export const getIsFetching = (state) => state.isFetching
