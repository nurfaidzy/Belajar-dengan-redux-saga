import {
  AMBIL_POST,
  KIRIMPOST,
  POSTGAGAL,
  BERHASIL_UBAH,
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
        sipost: action.payload,
        waiting: false,
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
    default:
      return state;
  }
};

export default TampilPost;
