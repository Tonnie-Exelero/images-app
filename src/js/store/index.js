import { createStore, applyMiddleware, compose } from "redux"
import rootReducer from "../reducers/index"
import createSagaMiddleware from "redux-saga"
import postsSaga from "../sagas/posts-saga"
import usersSaga from "../sagas/users-saga"
import mediaSaga from "../sagas/media-saga"

const initialiseSagaMiddleware = createSagaMiddleware()

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(initialiseSagaMiddleware))
)

initialiseSagaMiddleware.run(postsSaga, usersSaga, mediaSaga)

export default store
