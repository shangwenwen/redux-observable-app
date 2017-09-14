import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// Selectors
import * as fromList from './topics'

import topics from './topics';

export default combineReducers({
  topics,
  routing: routerReducer
})
