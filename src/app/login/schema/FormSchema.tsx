import * as Yup from "yup";

export default Yup.object().shape({
  password: Yup.string()
    .min(8, "must be at least 8 characters long")
    .required("Campo obrigatório"),
  email: Yup.string().email("Email inválido").required("Campo obrigatório"),
});
