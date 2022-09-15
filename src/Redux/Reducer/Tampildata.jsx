import { PROSES_DATA, KUISIKAN, GAGALLL } from "../Action/HomeAction";

const res = {
  data: [],
  loading: false,
  gagal: false,
};

const Tampildata = (state = res, action) => {
  switch (action.type) {
    case PROSES_DATA:
      return {
        ...state,
        loading: true,
        gagal: false,
      };
    case KUISIKAN:
      return {
        ...state,
        data: [...state.data, action.payload.data],
        loading: state.data.length <= 100 && true,
      };
    case GAGALLL:
      return {
        ...state,
        data: state.data,
        loading: false,
        gagal: action.payload,
      };

    default:
      return state;
  }
};

export default Tampildata;
