import axios from "axios";
import { put } from "redux-saga/effects";
import { SUDAH_DIHAPUS } from "../../Action/PostAction";

function* menghapoes(Action) {
  const { payload } = Action;
  try {
    yield axios.delete("https://jsonplaceholder.typicode.com/posts/" + payload);
    yield put({ type: SUDAH_DIHAPUS, payload: payload });
  } catch (error) {
    console.log(error);
  }
}

export default menghapoes;
