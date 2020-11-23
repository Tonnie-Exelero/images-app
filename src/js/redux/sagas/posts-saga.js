import "regenerator-runtime/runtime.js"
import { takeEvery, call, put } from "redux-saga/effects"

/**
 * Function that yields posts.
 *
 * @yields {Object} Posts data requested.
 */
export function* postsSaga() {
  yield takeEvery("POSTS_REQUESTED", workerSaga)
}

/**
 * Function to request posts from API.
 *
 * @param {Object} action Action with url payload.
 */
function* workerSaga(action) {
  try {
    const payload = yield call(getPostsData, action.payload.url)
    yield put({ type: "POSTS_LOADED", payload: payload.response.posts })
  } catch (error) {
    yield put({ type: "API_ERRORED", payload: error })
  }
}

/**
 * Function that fetches posts data.
 *
 * @param {string} url API endpoint to be called.
 * @returns {Object} Posts data.
 */
function getPostsData(url) {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}
