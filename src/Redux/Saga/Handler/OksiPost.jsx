import axios from "axios";
import { put } from "redux-saga/effects";
import { KIRIMPOST, POSTGAGAL } from "../../Action/PostAction";

function* OksiPost() {
  try {
    const res = yield axios.get("https://jsonplaceholder.typicode.com/posts");
    yield put({ type: KIRIMPOST, payload: res.data });
  } catch (error) {
    yield put({ type: POSTGAGAL });
  }
}
export default OksiPost;
