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
export const getIsFetching = (state, filter) => fromList.getIsFetching(state.topics[filter])
export const getData = (state, filter) => fromList.getData(state.topics[filter])
export const getPage = (state, filter) => fromList.getPage(state.topics[filter])
