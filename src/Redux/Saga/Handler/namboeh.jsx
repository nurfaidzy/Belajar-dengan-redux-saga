import { put } from "redux-saga/effects";
import axios from "axios";
import { BERHASIL_NAMBAH } from "../../Action/PostAction";

function* namboeh(Action) {
  const { payload } = Action;
  console.log(payload);

  try {
    const res = yield axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      payload
    );
    yield put({ type: BERHASIL_NAMBAH, payload: res.data });
  } catch (error) {
    console.log(error);
  }
}

export default namboeh;
