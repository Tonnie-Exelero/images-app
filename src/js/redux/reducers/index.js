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
  posts: [
    {
      id: "mQMp4Ie1Bh0",
      created: "2019-07-30T03:53:18-04:00",
      mediaId: "string",
      user: {
        id: "JmV2XH2xWtY",
        username: "samuelsngx",
      },
      likes: 0,
      title: "string",
      description: "string",
    },
  ],
  user: {
    id: "JmV2XH2xWtY",
    username: "samuelsngx",
    first_name: "string",
    last_name: "string",
    profile_images: {
      small: "string",
      medium: "string",
      large: "string",
    },
  },
  media: {
    id: "string",
    type: "image",
    statistics: {
      views: 0,
      downloads: 0,
      likes: 0,
      created: 0,
    },
    urls: {
      raw: "string",
      full: "string",
      regular: "string",
      small: "string",
    },
    owner: {
      id: "JmV2XH2xWtY",
      username: "samuelsngx",
    },
  },
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
