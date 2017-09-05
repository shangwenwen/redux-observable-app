import { ajax } from 'rxjs/observable/dom/ajax'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/catch'
import * as actions from '../actions/topics'

export const fetchTopics = (action$) =>
  action$.ofType(actions.FETCH_TOPICS)
  .map((action) => ({ filter: action.filter, page: action.page, limit: action.limit }))
  .switchMap(({ filter, page, limit }) =>
    ajax.get(`https://cnodejs.org/api/v1/topics?tab=${filter}&page=${page}&limit=${limit}`)
    .map((res) => ({ filter, page, payload: res.response.data }))
    .map(({filter, page, payload}) => actions.loadTopics(filter, page, payload))
    .catch(e => console.log(e))
  )

export const fetchTopic = (action$) =>
  action$.ofType(actions.FETCH_TOPIC)
  .map((action) => ({ id: action.id, accesstoken: action.accesstoken }))
  .switchMap(({ id, accesstoken }) =>
    ajax.get(`https://cnodejs.org/api/v1/topic/${id}?accesstoken=${accesstoken}`)
    .map(res => res.response.data)
    .map((data) => actions.loadTopic(data))
    .catch(e => console.log(e))
  )




















// export const saveQuote = (action$) =>
//   action$.ofType(actions.SAVE_QUOTE)
//   .map((action) => {
//     return action.payload
//   })
//   .switchMap((quote) => (
//     ajax.post(`/api/quotes`, quote)
//     .map(res => {
//       return res.response
//     })
//     .map((quote) => {
//       return actions.loadQuote(quote)
//     })
//   ))
//
// export const toggleFavorite = (action$) =>
//   action$.ofType(actions.TOGGLE_FAVORITE)
//   .map((action) => {
//     return action.payload
//   })
//   .switchMap(({
//     _id, text, favorited
//   }) => {
//     return ajax.patch(`/api/quotes/${_id}`, {
//         _id, text, favorited: !favorited
//       })
//       .map(res => res.response)
//       .map(() => actions.loadQuote({
//         _id, text, favorited: !favorited
//       }))
//   })
//
// export const deleteQuote = (action$) =>
//   action$.ofType(actions.DELETE_QUOTE)
//   .map((action) => {
//     return action.payload
//   })
//   .switchMap(quote =>
//     ajax.delete(`/api/quotes/${quote._id}`)
//     .map(res => res.response)
//     .map(() => actions.deleteSuccess(quote._id))
//   )
