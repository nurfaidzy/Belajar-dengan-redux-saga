import * as yup from "yup";

const validasiubah = yup.object().shape({
  title: yup.string().required(),
  body: yup.string().required(),
});

export default validasiubah;
