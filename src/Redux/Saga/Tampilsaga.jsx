import { takeEvery, all } from "redux-saga/effects";
import OksiPost from "./Handler/OksiPost";
import namboeh from "./Handler/namboeh";
import {
  AMBIL_POST,
  UBAH_DATA,
  HAPUSCUY,
  TAMBAH_DATA,
} from "../Action/PostAction";
import mengubah from "./Handler/mengubah";
import menghapoes from "./Handler/menghapoes";

function* Ambildata() {
  yield takeEvery(AMBIL_POST, OksiPost);
  yield takeEvery(UBAH_DATA, mengubah);
  yield takeEvery(HAPUSCUY, menghapoes);
  yield takeEvery(TAMBAH_DATA, namboeh);
}

function* Tampilsaga() {
  yield all([Ambildata()]);
}

export default Tampilsaga;
