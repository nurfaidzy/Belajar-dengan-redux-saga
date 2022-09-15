export const AMBIL_POST = "AMBIL_POST";
export const KIRIMPOST = "KIRIMPOST";
export const POSTGAGAL = "POSTGAGAL";
export const UBAH_DATA = "UBAH_DATA";
export const BERHASIL_UBAH = "BERHASIL_UBAH";
export const HAPUSCUY = "HAPUSCUY";
export const SUDAH_DIHAPUS = "SUDAH_DIHAPUS";
export const TAMBAH_DATA = "TAMBAH_DATA";
export const BERHASIL_NAMBAH = "BERHASIL_NAMBAH";

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

export const hapuscuy = (id) => {
  return {
    type: HAPUSCUY,
    payload: id,
  };
};

export const tambahcuy = (data) => {
  return {
    type: TAMBAH_DATA,
    payload: data,
  };
};
