import { takeEvery, all } from "redux-saga/effects";
import proseskan from "./Handler/proseskan";
import { PROSES_DATA } from "../Action/HomeAction";
import OksiPost from "./Handler/OksiPost";
import { AMBIL_POST } from "../Action/PostAction";

function* Ambildata() {
  yield takeEvery(AMBIL_POST, OksiPost);
  yield takeEvery(PROSES_DATA, proseskan);
}

function* Tampilsaga() {
  yield all([Ambildata()]);
}

export default Tampilsaga;
