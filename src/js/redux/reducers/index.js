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

export default function rootReducer(state = { initialState }, action) {
  switch (action.type) {
    case "POSTS_LOADED": {
      return {
        ...state,
        posts: action.payload,
      }
    }

    case "MEDIA_LOADED": {
      return {
        ...state,
        media: action.payload, ...state.media,
      }
    }

    case "USER_LOADED": {
      return {
        ...state,
        user: action.payload,
      }
    }

    default:
      return state
  }
}
