// Action types
export const FETCH_TOPICS = 'FETCH_TOPICS'
export const LOAD_TOPICS = 'LOAD_TOPICS'

// Action creators
export const fetchTopics = (filter, page, limit) => ({
  type: FETCH_TOPICS,
  filter,
  page,
  limit
})

export const loadTopics = (filter, page, data) => ({
  type: LOAD_TOPICS,
  filter,
  page,
  payload: data
})
