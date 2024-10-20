import * as yup from "yup";
import axios from "axios";

axios.defaults.baseURL = "https://edtech-backend-q2ud.onrender.com";
export const baseURL = "https://edtech-backend-q2ud.onrender.com";
const passwordRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#;:])[A-Za-z\d@$!%*?&#;:]{8,}$/;

export const signupValidation = yup.object().shape({
  username: yup.string().required("required"),
  fullName: yup.string().required("required"),
  emailAddress: yup
    .string()
    .email("please enter a valid email", "Please enter a valid e-mail address.")
    .required("required"),
  password: yup
    .string()
    .min(8, "password must contain least 8 characters ")
    .matches(
      passwordRegExp,
      "characters with at least one of each: uppercase, lowercase, number and special"
    )
    .required("required"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("required"),
  // agreedToTermsandConditions: yup
  //   .boolean("Select this checkbox please")
  //   .oneOf([true], "required")
  //   .required("required")
  //   .default(false),
});

export const signinValidation = yup.object().shape({
  emailAddress: yup
    .string()
    .email("please enter a valid email", "Please enter a valid e-mail address.")
    .required("required"),
  password: yup
    .string()
    .min(8, "password must contain least 8 characters ")
    .matches(
      passwordRegExp,
      "characters with at least one of each: uppercase, lowercase, number and special"
    )
    .required("required"),
});

export const forgotPassword = yup.object().shape({
  email: yup
    .string()
    .email("please enter a valid email", "Please enter a valid e-mail address.")
    .required("required"),
});

export const changePasswordValidation = yup.object().shape({
  password: yup
    .string()
    .min(8, "password must contain least 8 characters ")
    .matches(
      passwordRegExp,
      "characters with at least one of each: uppercase, lowercase, number and special"
    )
    .required("required"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("required"),
});

export const data = {
  isPaid: true,
  data: [
    {
      module: "Module A",
      lessons: [
        {
          title: "Lesson 1: Introduction",
          duration: "5 min",
          video_url: "https://files.vidstack.io/sprite-fight/720p.mp4",
        },
        {
          title: "Lesson 2: Basics",
          duration: "10 min",
          video_url:
            "https://res.cloudinary.com/aremusmog/video/upload/v1668090866/WeTube/TRAILER_qurlei.mp4",
        },
      ],
    },
    {
      module: "Module B",
      lessons: [
        {
          title: "Lesson 1: Advanced Topics",
          duration: "15 min",
          video_url: "https://files.vidstack.io/sprite-fight/720p.mp4",
        },
        {
          title: "Lesson 2: Expert Tips",
          duration: "20 min",
          video_url:
            "https://res.cloudinary.com/aremusmog/video/upload/v1668090866/WeTube/TRAILER_qurlei.mp4",
        },
      ],
    },
  ],
};
