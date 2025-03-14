"use client";
import React, { useEffect, useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { toast } from "react-toastify";
import Link from "next/link";
import Image from "next/image";
import { signin } from "@/app/actions/auth";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader";
import secureLocalStorage from "react-secure-storage";
import SigninCarousel from "./SigninCarousel";
import InputField from "@/components/InputField";
import { FcGoogle } from "react-icons/fc";
import firebase from "firebase/auth";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "@/app/lib/firebase";
import logo from '/public/EdTech Platform Figma.svg'

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const SigninForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [passwordState, setPasswordState] = useState("");

  // Error handling
  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  useEffect(() => {
    if (errors?.message) {
      toast.error(errors.message);
    }
  }, [errors]);

  // Handle sign-in process
  const handleSignin = async (formData) => {
    setIsLoading(true); // Show loading animation
    const result = await signin(formData); // Call the signin action

    setIsLoading(false); // Stop loading animation

    if (result.status === "success") {
      toast.success("Signed in successfully!");
      secureLocalStorage.setItem("token", result.success.access); // Save token in secure local storage
      router.push(`/dashboard/home`); // Redirect to dashboard
    } else if (result.errors) {
      setErrors(result.errors); // Set errors if present
      toast.error(result.errors.general || "Sign-in failed.");
    }
  };

  const handleFieldFocus = (fieldName) => {
    setErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      delete updatedErrors[fieldName]; // Remove error for the focused field
      return updatedErrors;
    });
  };

  // if (isLoading) {
  //   return <Loader />;
  // }
  const signInWithGoogle = async () => {

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const idToken = await user.getIdToken();
      console.log("idToken", idToken);
    } catch (e) {
      console.log("e", e);
    }
  };
  return (
    <section className="h-screen w-full flex items-center justify-center">
      <div className="relative w-full lg:w-[50%] h-screen z-[5px] hidden lg:flex flex-col justify-center items-start gap-10">
        <SigninCarousel />
      </div>
      <div className="flex items-center justify-center px-4 w-full lg:w-[50%] bg-white h-screen">
        <div className="w-full mx-auto text-center lg:mt-36 flex flex-col justify-center items-center gap-1.5">
          <Link href={"/"}>
            <Image
              src={logo}
              alt="Haelsoft Logo"
              width={100}
              height={100}
            />
          </Link>
          <h1 className="text-[36px] font-medium">Welcome back!!</h1>
          <p className="flex items-center h-[33px] text-[#7F7571] text-sm justify-center font-normal gap-x-2">
            <span>Don’t have an account yet?</span>
            <Link href={"/signup"} className="text-[#0E7EE5] underline">
              Sign up now
            </Link>
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              handleSignin(formData);
            }}
            className="space-y-4 mt-8 max-w-[509px] mx-auto"
          >
            {isLoading &&
              <Loader />
            }
            <div className="flex flex-col">
              <InputField
                label={`E-mail`}
                htmlFor={`emailAddress`}
                name={`emailAddress`}
                error={errors?.emailAddress}
                errorText={errors?.emailAddress}
                onFocus={() => handleFieldFocus("emailAddress")}
              />
            </div>
            <div className="relative">
              <InputField
                label={`Enter Password`}
                htmlFor={`password`}
                name={`password`}
                type={showPassword ? "text" : "password"}
                value={passwordState}
                error={errors?.password}
                errorText={errors?.password}
                onChange={(e) => setPasswordState(e.target.value)}
                onFocus={() => handleFieldFocus("password")}
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-[1rem] right-4 text-lg cursor-pointer"
              >
                {showPassword ? <LuEye /> : <LuEyeOff />}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <input type="checkbox" name="agreedToTermsandConditions" />
                <div className="text-[#7F7571] text-[13px]">Remember Me</div>
              </div>
              <Link
                href={"/forgotpassword"}
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
            <div
              type="button"
              onClick={signInWithGoogle}
              className="text-black border-2 border-[#e5f5f5] bg-white h-[48px] w-full text-sm rounded-[4px] font-medium flex justify-center items-center gap-4"
            >
              <FcGoogle className="text-[1.75rem]" />
              Sign In with Google
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SigninForm;
