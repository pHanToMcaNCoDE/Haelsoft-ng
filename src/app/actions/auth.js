"use server";
import { signinValidation, signupValidation } from "@/Service/validation";
import { revalidatePath } from "next/cache";
import axios from "axios";
import { cookies } from "next/headers";

export async function signup(state, formData) {
  try {
    const validatedData = await signupValidation.validate(
      {
        username: formData.get("username"),
        fullName: formData.get("fullName"),
        emailAddress: formData.get("emailAddress"),
        password: formData.get("password"),
        passwordConfirmation: formData.get("passwordConfirmation"),
      },
      { abortEarly: false }
    );

    try {
      const response = await axios.post("https://edtech-backend-q2ud.onrender.com/auth/api/signup", {
        username: validatedData.username,
        email: validatedData.emailAddress,
        fullName: validatedData.fullName,
        password: validatedData.password,
        accept_terms_and_conditions: true,
      });
      revalidatePath("/ui/signup");

      console.log(response.data);

      return {
        status: "success",
        success: response.data,
        email: response.data.data.email,
      };
    } catch (error) {
      revalidatePath("/signup");
      console.log("Signup Error:", error);
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
    console.log("error", errors);
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
        emailAddress: formData.get("emailAddress"),
        password: formData.get("password"),
      },
      { abortEarly: false }
    );

    try {
      const response = await axios.post("/auth/api/login", {
        email: validatedData.emailAddress,
        password: validatedData.password,
      });

      console.log('set', response.data.data);
      cookies().set("token", response.data.data.access);

      return {
        status: "success",
        success: response.data.data,
      };
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
