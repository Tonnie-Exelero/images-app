export function getPostsData(url) {
  return { type: "POSTS_REQUESTED", payload: { url } }
}

export function getUsersData(url) {
  return { type: "USERS_REQUESTED", payload: { url } }
}

export function getMediaData(url) {
  return { type: "MEDIA_REQUESTED", payload: { url } }
}
