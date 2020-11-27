/**
 * @typedef ImagesApp
 */

/**
 * Initial app state.
 *
 * @typedef State
 * @property {ImagesApp[]} posts
 * @property {Object} users
 * @property {Object} media
 */

/** @type {State} */
const initialState = {
  posts: [],
  users: [],
  media: [],
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "POSTS_LOADED": {
      return {
        ...state,
        posts: state.posts.concat(action.payload),
      }
    }

    case "MEDIA_LOADED": {
      return {
        ...state,
        media: state.media.concat(action.payload),
      }
    }

    case "USERS_LOADED": {
      return {
        ...state,
        users: state.users.concat(action.payload),
      }
    }

    default:
      return state
  }
}
