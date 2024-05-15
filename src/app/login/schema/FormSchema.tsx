import * as Yup from "yup";

export default Yup.object().shape({
  password: Yup.string()
    .min(8, "Must be at least 8 characters")
    .required("Required field"),
  email: Yup.string().email("Invalid email").required("Required field"),
});
