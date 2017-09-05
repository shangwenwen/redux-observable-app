// Action types
export const FETCH_TOPICS = 'FETCH_TOPICS'
export const LOAD_TOPICS = 'LOAD_TOPICS'
export const FETCH_TOPIC = 'FETCH_TOPIC'
export const SELECTED_TAB = 'SELECTED_TAB'

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

export const fetchTopic = (id, accesstoken) => ({
  type: FETCH_TOPIC,
  id,
  accesstoken
})

export const loadTopic = (data) => ({
  type: LOAD_TOPICS,
  data
})

export const selectedTab = (filter) => ({
  type: SELECTED_TAB,
  filter
})
