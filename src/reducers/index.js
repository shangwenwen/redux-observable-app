import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// Selectors
import * as fromList from './topics'

import topics from './topics';

export default combineReducers({
  topics,
  routing: routerReducer
})

// Selectors
export const getIsFetching = (state, filter) => {
  // console.log(filter)
  console.log(state.topics[filter])
  // console.log(state.topics.filter)
  return fromList.getIsFetching(state.topics[filter])
}
export const getData = (state, filter) => fromList.getData(state.topics[filter])
export const getPage = (state, filter) => fromList.getPage(state.topics[filter])
