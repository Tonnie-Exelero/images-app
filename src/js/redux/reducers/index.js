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
 * @property {string} error
 */

/** @type {State} */
const initialState = {
  posts: [],
  user: {},
  media: {},
  error: null,
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "POSTS_LOADED": {
      return { posts: state.posts.concat(action.payload) }
    }

    case "USERS_LOADED": {
      return { user: action.payload, ...state.user }
    }

    case "MEDIA_LOADED": {
      return { media: action.payload, ...state.media }
    }

    case "API_ERRORED": {
      return { error: action.payload }
    }

    default:
      return state
  }
}
