export const AMBIL_POST = "AMBIL_POST";
export const KIRIMPOST = "KIRIMPOST";
export const POSTGAGAL = "POSTGAGAL";
export const UBAH_DATA = "UBAH_DATA";
export const BERHASIL_UBAH = "BERHASIL_UBAH";

export const ambilpost = () => {
  return {
    type: AMBIL_POST,
  };
};

export const ubahdata = (data) => {
  return {
    type: UBAH_DATA,
    payload: data,
  };
};
