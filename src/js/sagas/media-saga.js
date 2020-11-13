import "regenerator-runtime/runtime.js"
import { takeEvery, call, put } from "redux-saga/effects"

export default function* watcherSaga() {
  yield takeEvery("MEDIA_REQUESTED", workerSaga)
}

function* workerSaga(action) {
  try {
    const payload = yield call(getMediaData, action.payload.url)
    yield put({ type: "MEDIA_LOADED", payload: payload.response.media })
  } catch (e) {
    yield put({ type: "API_ERRORED", payload: e })
  }
}

function getMediaData(url) {
  return fetch(url)
    .then((response) => response.json())
}
