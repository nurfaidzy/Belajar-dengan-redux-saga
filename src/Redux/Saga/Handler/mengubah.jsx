import axios from "axios";
import { put } from "redux-saga/effects";
import { BERHASIL_UBAH } from "../../Action/PostAction";

function* mengubah(Action) {
  const { payload } = Action;
  const id = payload.id;

  const data = {
    title: payload.title,
    body: payload.title,
  };

  try {
    const res = yield axios.patch(
      "https://jsonplaceholder.typicode.com/posts/" + id,
      data
    );
    yield put({ type: BERHASIL_UBAH, payload: res.data });
  } catch (error) {
    console.log(error);
  }
}

export default mengubah;
