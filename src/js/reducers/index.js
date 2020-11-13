const initialState = {
    posts: [],
    user: {},
    media: {}
}

function rootReducer(state = initialState, action) {
    if (action.type === "POSTS_LOADED") {
        return Object.assign({}, state, {
          posts: state.posts.concat(action.payload),
        })
    }

    if (action.type === "USERS_LOADED") {
      return ({ user: action.payload, ...state.user })
    }

    if (action.type === "MEDIA_LOADED") {
      return { media: action.payload, ...state.media }
    }

    return state
}

export default rootReducer
