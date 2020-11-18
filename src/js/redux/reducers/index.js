/**
 * @typedef ImagesApp
 */

/**
 * Initial app state.
 *
 * @typedef State
 * @property {ImagesApp[]} posts
 * @property {Object} user
 * @property {Object} media
 */

/** @type {State} */
const initialState = {
  posts: [],
  user: {},
  media: {},
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "POSTS_LOADED": {
      return Object.assign({}, state, {
        posts: state.posts.concat(action.payload),
      })
    }

    case "USERS_LOADED": {
      return { user: action.payload, ...state.user }
    }

    case "MEDIA_LOADED": {
      return { media: action.payload, ...state.media }
    }

    default:
      return state
  }
}
