import axios from "axios";
import { put } from "redux-saga/effects";
import { KIRIMPOST, POSTGAGAL } from "../../Action/PostAction";

function* OksiPost() {
  for (let x = 1; x <= 100; x++) {
    try {
      const res = yield axios.get(
        "https://jsonplaceholder.typicode.com/posts/" + x
      );
      yield put({ type: KIRIMPOST, payload: res });
    } catch (error) {
      yield put({ type: POSTGAGAL, payload: error });
    }
  }
}
export default OksiPost;
