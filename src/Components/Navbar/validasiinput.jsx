import * as yup from "yup";

const validasiinput = yup.object().shape({
  title: yup.string().required(),
  body: yup.string().required(),
});

export default validasiinput;
