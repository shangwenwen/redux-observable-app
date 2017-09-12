import { combineEpics } from 'redux-observable';
import { fetchTopics, fetchTopic } from "./topics";

export default combineEpics(
  fetchTopics,
  fetchTopic
);
