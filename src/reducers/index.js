import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// import { createSelector } from 'reselect'
import topics from './topics';

export default combineReducers({
  topics,
  routing: routerReducer
});

// // selectors
// export const getQuotes = state => state.quotes;
// export const getQuotesArray = createSelector(getQuotes, fromQuotes.getQuotesArray);
