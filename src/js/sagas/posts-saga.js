import "regenerator-runtime/runtime.js"
import { takeEvery, call, put } from "redux-saga/effects"

export default function* watcherSaga() {
  yield takeEvery("POSTS_REQUESTED", workerSaga)
}

function* workerSaga(action) {
  try {
    const payload = yield call(getPostsData, action.payload.url)
    yield put({ type: "POSTS_LOADED", payload: payload.response.posts })
  } catch (e) {
    yield put({ type: "API_ERRORED", payload: e })
  }
}

function getPostsData(url) {
  return fetch(url).then((response) => response.json())
}
