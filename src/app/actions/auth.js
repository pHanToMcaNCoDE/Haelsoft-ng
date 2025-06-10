"use server";
import { baseURL, signinValidation, signupValidation } from "@/Service/validation";
import { revalidatePath } from "next/cache";
import axios from "axios";
import { cookies } from "next/headers";
import { useDispatch, useSelector } from "react-redux";

export async function signup(state, formData) {
  try {
    const validatedData = await signupValidation.validate(
      {
        full_name: formData.get("full_name"),
        email: formData.get("email"),
        password: formData.get("password"),
        username: formData.get("username"),
        // passwordConfirmation: formData.get("passwordConfirmation"),
      },
      { abortEarly: false }
    );

    try {
      const response = await axios.post("https://staging.haelsoftmasterclass.com/api/v1/auth/register", {
        fullName: validatedData.full_name,
        email: validatedData.email,
        password: validatedData.password,
        username: validatedData.username,
        // accept_terms_and_conditions: true,
      });
      revalidatePath("/ui/signup");


      return {
        status: "success",
        success: response.data,
        email: response.data.data.email,
      };
    } catch (error) {
      revalidatePath("/signup");
      return { errors: error.response?.data, status: "error" };
    }
  } catch (error) {
    const errors = {};
    if (error.inner) {
      error.inner.forEach((e) => {
        errors[e.path] = e.message;
      });
    } else {
      errors.general = error.message;
    }
    revalidatePath("/signup");
    return {
      errors,
      status: "error",
    };
  }
}

export async function signin(formData) {
  try {
    const validatedData = await signinValidation.validate(
      {
        login: formData.get("login"),
        password: formData.get("password"),
      },
      { abortEarly: false }
    );

    try {
      const response = await axios.post("https://staging.haelsoftmasterclass.com/api/v1/auth/login", {
        login: validatedData.login,
        password: validatedData.password,
      });

      // cookies().set("token", response.data.data?.token);


      // return {
      //   status: "success",
      //   success: response.data.data,
      // };
    } catch (error) {
      console.error("Signin Error:", error.response.data);
      return { errors: error.response?.data, status: "error" };
    }
  } catch (error) {
    const errors = {};
    if (error.inner) {
      error.inner.forEach((e) => {
        errors[e.path] = e.message;
      });
    } else {
      errors.general = error.message;
    }
    console.error("Validation Error:", errors);
    return {
      errors,
      status: "error",
    };
  }
}


export const Logout = () => {
  cookies().delete("token");
};
