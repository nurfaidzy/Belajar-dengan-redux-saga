import { AMBIL_POST, KIRIMPOST, POSTGAGAL } from "../Action/PostAction";

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
    default:
      return state;
  }
};

export default TampilPost;
