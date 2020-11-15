import { all, fork } from "redux-saga/effects"

// Import Sagas.
import { mediaSaga } from "./media-saga"
import { postsSaga } from "./posts-saga"
import { usersSaga } from "./users-saga"

export default function* rootSaga() {
    yield all([
        fork(mediaSaga),
        fork(postsSaga),
        fork(usersSaga)
    ])
}