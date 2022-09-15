import axios from "axios";

import { put } from "redux-saga/effects";
import { KUISIKAN, GAGALLL } from "../../Action/HomeAction";

function* proseskan() {
  for (let x = 1; x <= 100; x++) {
    try {
      const res = yield axios.get(
        "https://jsonplaceholder.typicode.com/posts/" + x
      );
      yield put({ type: KUISIKAN, payload: res });
    } catch (error) {
      yield put({ type: GAGALLL, payload: error });
    }
  }
}

export default proseskan;
