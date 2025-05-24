"use client";
import React, { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { toast } from "react-toastify";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader";
import SigninCarousel from "./SigninCarousel";
import InputField from "@/components/InputField";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "@/app/lib/firebase";
import logo from "/public/EdTech Platform Figma.svg";
import { signinValidation } from "@/Service/validation";
import axios from "axios";
import { setAuth } from "@/features/user-details/userDetailsSlice";
import { useDispatch } from "react-redux";
import secureLocalStorage from "react-secure-storage";

const SigninForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFieldFocus = (fieldName) => {
    setErrors((prev) => {
      const updated = { ...prev };
      delete updated[fieldName];
      return updated;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const validatedData = await signinValidation.validate(formData, {
        abortEarly: false,
      });

      const baseURL = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/+$/, "");
      const response = await axios.post(`${baseURL}/auth/login`, {
        login: validatedData.login,
        password: validatedData.password
      });

      console.log("user THat's innn", response.data.data)

      const token = response.data.data.token;
      const user = response.data.data.user

      secureLocalStorage.setItem('user', user)
      
      dispatch(setAuth({ token, user }));

      const sessionData = {
        token,
      };


      sessionStorage.setItem("authSession", JSON.stringify(sessionData));
      
      if(token) {
        toast.success(response?.data?.data?.message || "Login successful!");
      
        
        // router.replace("/dashboard/home")
        // router.push("/dashboard/home");
        window.location.href = '/dashboard/home'
      }
      

    } catch (err) {
      setIsLoading(false);
      if (err?.name === "ValidationError" && err.inner) {
        const fieldErrors = {};
        err.inner.forEach((e) => {
          fieldErrors[e.path] = e.message;
          toast.error(e.message);
        });
        setErrors(fieldErrors);
      } else {
        toast.error(
          err.response?.data?.message ||
            err.response?.data?.errors?.email?.[0] ||
            "Signin failed"
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const idToken = await user.getIdToken();
      // Implement Google sign-in logic here
    } catch (error) {
      toast.error("Google sign-in failed");
    }
  };

  return (
    <section className="h-screen w-full flex items-center justify-center">
      <div className="flex items-center justify-center px-4 w-full lg:w-[50%] bg-white h-screen">
        <div className="w-full lg:w-[70%] mx-auto text-center lg:mt-36 flex flex-col justify-center items-center gap-1.5">
          <Link href={"/"}>
            <Image src={logo} alt="Haelsoft Logo" width={100} height={100} />
          </Link>
          <h1 className="text-[36px] font-medium">Welcome back!!</h1>
          <p className="text-[#7F7571] text-sm">
            Don&apos;t have an account yet?{" "}
            <Link href="/signup" className="text-[#0E7EE5] underline">
              Sign up now
            </Link>
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 mt-8 w-[90%] lg:w-full mx-auto"
          >
            {isLoading && <Loader />}
            <InputField
              label="E-mail"
              htmlFor="login"
              name="login"
              value={formData.login}
              error={errors.login}
              errorText={errors.login}
              onChange={handleInputChange}
              onFocus={() => handleFieldFocus("login")}
            />

            <div className="relative">
              <InputField
                label="Enter Password"
                htmlFor="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                error={errors.password}
                errorText={errors.password}
                onChange={handleInputChange}
                onFocus={() => handleFieldFocus("password")}
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-[1rem] right-4 text-lg cursor-pointer"
              >
                {showPassword ? <LuEye /> : <LuEyeOff />}
              </div>
            </div>

            <div className="flex items-center justify-end">
              <Link
                href="/forgotpassword"
                className="underline text-[#0E7EE5] text-[14px]"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="text-white bg-main h-[48px] w-full text-sm rounded-[4px] font-medium"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>

      <div className="relative w-full lg:w-[50%] h-screen hidden lg:flex items-center justify-center">
        <SigninCarousel />
      </div>
    </section>
  );
};

export default SigninForm;