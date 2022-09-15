import { takeEvery, all } from "redux-saga/effects";
import OksiPost from "./Handler/OksiPost";
import { AMBIL_POST, UBAH_DATA, HAPUSCUY } from "../Action/PostAction";
import mengubah from "./Handler/mengubah";
import menghapoes from "./Handler/menghapoes";

function* Ambildata() {
  yield takeEvery(AMBIL_POST, OksiPost);
  yield takeEvery(UBAH_DATA, mengubah);
  yield takeEvery(HAPUSCUY, menghapoes);
}

function* Tampilsaga() {
  yield all([Ambildata()]);
}

export default Tampilsaga;
