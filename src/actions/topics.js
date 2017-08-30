// Action types
export const FETCH_TOPICS = 'FETCH_TOPICS'
export const LOAD_TOPICS = 'LOAD_TOPICS'

// Action creators
export function fetchTopics(filter, page) {
  return {
    type: FETCH_TOPICS,
    filter,
    page
  }
}

export function loadTopics(filter, topics) {
  return {
    type: LOAD_TOPICS,
    filter,
    topics
  }
}
