// import { z } from "zod";

// import * as yup from "yup";
// import axios from "axios";

// axios.defaults.baseURL = "https://edtech-backend-q2ud.onrender.com";
// export const baseURL = "https://edtech-backend-q2ud.onrender.com";
// const passwordRegExp =
//   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#;:])[A-Za-z\d@$!%*?&#;:]{8,}$/;


// export const signupValidation = yup.object().shape({
//   username: yup.string().required("required"),
//   fullName: yup.string().required("required"),
//   emailAddress: yup
//     .string()
//     .email("please enter a valid email", "Please enter a valid e-mail address.")
//     .required("required"),
//   password: yup
//     .string()
//     .min(8, "password must contain least 8 characters ")
//     .matches(
//       passwordRegExp,
//       "characters with at least one of each: uppercase, lowercase, number and special"
//     )
//     .required("required"),
//   passwordConfirmation: yup
//     .string()
//     .oneOf([yup.ref("password")], "Passwords must match")
//     .required("required"),
//   agreedToTermsandConditions: yup
//     .boolean("Select this checkbox please")
//     .oneOf([true], "required")
//     .required("required")
//     .default(false),
// });