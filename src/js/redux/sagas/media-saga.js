import "regenerator-runtime/runtime.js"
import { takeEvery, call, put } from "redux-saga/effects"

/**
 * Function that yields media.
 *
 * @yields {Object} Media data requested.
 */
export function* mediaSaga() {
  yield takeEvery("MEDIA_REQUESTED", workerSaga)
}

/**
 * Function to request media from API.
 *
 * @param {Object} action Action with url payload.
 */
function* workerSaga(action) {
  try {
    const payload = yield call(getMediaData, action.payload.url)
    yield put({ type: "MEDIA_LOADED", payload: payload.response.media })
  } catch (error) {
    yield put({ type: "API_ERRORED", payload: error })
  }
}

/**
 * Function that fetches media data.
 *
 * @param {string} url API endpoint to be called.
 * @returns {Object} Media data.
 */
function getMediaData(url) {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}
