import { takeEvery, all } from "redux-saga/effects";
import proseskan from "./Handler/proseskan";
import { PROSES_DATA } from "../Action/HomeAction";
import OksiPost from "./Handler/OksiPost";
import { AMBIL_POST, UBAH_DATA } from "../Action/PostAction";
import mengubah from "./Handler/mengubah";

function* Ambildata() {
  yield takeEvery(AMBIL_POST, OksiPost);
  yield takeEvery(PROSES_DATA, proseskan);
  yield takeEvery(UBAH_DATA, mengubah);
}

function* Tampilsaga() {
  yield all([Ambildata()]);
}

export default Tampilsaga;
