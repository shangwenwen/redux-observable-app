import { combineEpics } from 'redux-observable';
import { fetchTopics } from "./topics";

export default combineEpics(
  fetchTopics
);
