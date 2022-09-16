import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { composeWithDevTools } from "redux-devtools-extension";

import TampilPost from "../Reducer/Tampilpost";

import Tampilsaga from "./../Saga/Tampilsaga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({ TampilPost });

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(Tampilsaga);

export default store;
