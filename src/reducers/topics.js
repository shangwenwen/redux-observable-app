import { combineReducers } from 'redux'
import * as actions from '../actions/topics'
  // import { createSelector } from 'reselect'

const initstate = {
  page: 0,
  data: []
}

function createFilterList(filter) {
  return((state = initstate, action) => {
    if(action.filter !== filter) {
      return state
    }
    switch(action.type) {
      case actions.LOAD_TOPICS:
        const topics = action.payload
        const page = action.page
        const data = topics.map(quote => [quote.id]: quote)
        return {
          page: page,
          data: state.data.concat(data)
        }
      default:
        return state
    }
  })
}

const topics = combineReducers({
  all: createFilterList('all'),
  ask: createFilterList('ask'),
  good: createFilterList('good'),
})

export default topics

// Selectors
// const getIds = (state) => state.ids
// const getEntities = (state) => state.entities
// export const getQuotesArray = createSelector([getIds, getEntities], (ids, entities) => ids.map(id => entities[id]))
