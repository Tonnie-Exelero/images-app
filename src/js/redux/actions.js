export const setPosts = (posts) => {
  return {
    type: "POSTS_LOADED",
    payload: posts,
  }
}

export const setMedia = (media) => {
  return {
    type: "MEDIA_LOADED",
    payload: media,
  }
}

export const setUser = (user) => {
  return {
    type: "USERS_LOADED",
    payload: user,
  }
}
