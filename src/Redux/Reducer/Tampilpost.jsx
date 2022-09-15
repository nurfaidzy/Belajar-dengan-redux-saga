import {
  AMBIL_POST,
  KIRIMPOST,
  POSTGAGAL,
  BERHASIL_UBAH,
  SUDAH_DIHAPUS,
} from "../Action/PostAction";

const res = {
  sipost: [],
  waiting: false,
  ndakbisa: false,
};

const TampilPost = (state = res, action) => {
  switch (action.type) {
    case AMBIL_POST:
      return {
        ...state,
        waiting: true,
        ndakbisa: false,
      };
    case KIRIMPOST:
      return {
        ...state,
        sipost: [...state.sipost, action.payload.data],
        waiting: state.sipost.length < 99 && true,
        ndakbisa: false,
      };
    case POSTGAGAL:
      return {
        ...state,
        ndakbisa: true,
      };
    case BERHASIL_UBAH:
      state.sipost.splice(action.payload.id - 1, 1, action.payload);
      return {
        ...state,
        sipost: state.sipost,
      };
    case SUDAH_DIHAPUS:
      return {
        ...state,
        sipost: state.sipost.filter((sipost) => sipost.id !== action.payload),
      };
    default:
      return state;
  }
};

export default TampilPost;
