// Action types
export const FETCH_TOPICS = 'FETCH_TOPICS'
export const LOAD_TOPICS = 'LOAD_TOPICS'
export const IS_PENDING = 'IS_PENDING'

// Action creators
export function fetchTopics(query) {
  return {
    type: FETCH_TOPICS,
    payload: query
  }
}

export function loadTopics(filter, page, data) {
  return {
    type: LOAD_TOPICS,
    filter,
    page,
    payload: data
  }
}
