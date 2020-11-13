import "regenerator-runtime/runtime.js"
import { takeEvery, call, put } from "redux-saga/effects"

export default function* watcherSaga() {
  yield takeEvery("USERS_REQUESTED", workerSaga)
}

function* workerSaga(action) {
  try {
    const payload = yield call(getUsersData, action.payload.url)
    yield put({ type: "USERS_LOADED", payload: payload.response.user })
  } catch (e) {
    yield put({ type: "API_ERRORED", payload: e })
  }
}

function getUsersData(url) {
  return fetch(url).then((response) => response.json())
}
