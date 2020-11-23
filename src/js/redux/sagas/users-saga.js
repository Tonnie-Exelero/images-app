import "regenerator-runtime/runtime.js"
import { takeEvery, call, put } from "redux-saga/effects"

/**
 * Function that yields users.
 *
 * @yields {Object} Users data requested.
 */
export function* usersSaga() {
  yield takeEvery("USERS_REQUESTED", workerSaga)
}

/**
 * Function to request users from API.
 *
 * @param {Object} action Action with url payload.
 */
function* workerSaga(action) {
  try {
    const payload = yield call(getUsersData, action.payload.url)
    yield put({ type: "USERS_LOADED", payload: payload.response.user })
  } catch (error) {
    yield put({ type: "API_ERRORED", payload: error })
  }
}

/**
 * Function that fetches users data.
 *
 * @param {string} url API endpoint to be called.
 * @returns {Object} Users data.
 */
function getUsersData(url) {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}
