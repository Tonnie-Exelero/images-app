/**
 * Action to pass Posts data API endpoint to saga.
 * 
 * @param {string} url API endpoint to be called.
 * @returns {Object} Return action.type and action.payload.
 */
export function getPostsData(url) {
  return { type: "POSTS_REQUESTED", payload: { url } }
}

/**
 * Action to pass Users data API endpoint to saga.
 * 
 * @param {string} url API endpoint to be called.
 * @returns {Object} Return action.type and action.payload.
 */
export function getUsersData(url) {
  return { type: "USERS_REQUESTED", payload: { url } }
}

/**
 * Action to pass Media data API endpoint to saga.
 * 
 * @param {string} url API endpoint to be called.
 * @returns {Object} Return action.type and action.payload.
 */
export function getMediaData(url) {
  return { type: "MEDIA_REQUESTED", payload: { url } }
}
