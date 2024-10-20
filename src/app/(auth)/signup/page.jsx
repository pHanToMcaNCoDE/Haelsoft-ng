"use client";

import NavBar from "@/components/NavBar";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import InputField from "@/components/InputField";
import Link from "next/link";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { LuEye, LuEyeOff } from "react-icons/lu";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import Loader from "@/components/Loader";
import { signupValidation } from "@/Service/validation";
import SignupCarousel from "./SignupCarousel";
import { FcGoogle } from "react-icons/fc";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { app } from "@/app/lib/firebase";


const SignupForm = () => {
  const router = useRouter();
  const [errormessage, seterrormessage] = useState("");
  const [showpassword, setshowpassword] = useState(false);
  const [showconfirmpassword, setshowconfirmpassword] = useState(false);
  const [passwordstate, setpasswordstate] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    emailAddress: "",
    password: "",
    passwordConfirmation: "",
  });
  const [errors, seterrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      seterrormessage("");
    }, 3000);

    return () => clearTimeout(timer);
  }, [errormessage]);

  useEffect(() => {
    if (errormessage) {
      toast.error(errormessage);
    }
  }, [errormessage]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFieldFocus = (fieldName) => {
    seterrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      delete updatedErrors[fieldName];
      return updatedErrors;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading
    try {
      // Validate the form data here
      const validatedData = await signupValidation.validate(formData, {
        abortEarly: false,
      });

      try {
        const response = await axios.post(
          "https://edtech-backend-q2ud.onrender.com/auth/api/signup",
          {
            username: validatedData.username,
            email: validatedData.emailAddress,
            fullName: validatedData.fullName,
            password: validatedData.password,
            accept_terms_and_conditions: true,
          }
        );

        toast.success("Signup successful!");
        router.push(`/checkmail?email=${response.data.data.email}`);
      } catch (error) {
        console.log("Signup Error:", error);
        seterrormessage(error.response?.data?.message || "Signup failed");
      }
    } catch (error) {
      const validationErrors = {};
      if (error.inner) {
        error.inner.forEach((e) => {
          validationErrors[e.path] = e.message;
        });
      }
      seterrors(validationErrors);
    } finally {
      setIsLoading(false); // End loading
    }
  };

  // if (!isLoading) {
  //   return <Loader />;
  // }

  // const signInWithGoogle = async () => {
  //   const auth = getAuth(app);
  //   const provider = new GoogleAuthProvider();

  //   try {
  //     const result = await signInWithPopup(auth, provider);
  //     const user = result.user;
  //     const idToken = await user.getIdToken();
  //     console.log("idToken", idToken);
  //   } catch (e) {
  //     console.log("e", e);
  //   }
  // };

  return (
    <section className="h-screen w-full flex items-center justify-between">
      <div className="relative w-full lg:w-[50%] h-screen z-[5px] hidden lg:flex flex-col justify-center items-start">
        <SignupCarousel />
      </div>

      <div className="flex flex-col w-full h-screen justify-center items-center px-4 lg:px-0 ">
        <NavBar />
        <div className="w-full mx-auto text-center">
          <h1 className="text-[36px] font-medium">
            Welcome to Haelsoft
            <span role="img" aria-label="waving hand" className="waving-emoji">
              👋
            </span>
          </h1>
          <p className="text-[#7F7571] text-base">
            Empower Your Future: Learn, Grow, and Succeed with Digital Marketing
            <span className="text-[13px]">!</span>
          </p>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 mt-4 mb-8 w-[60%] mx-auto"
          >
            {isLoading && <Loader />} {/* Show loader when loading */}
            <div
              className={`w-full flex items-center px-2 gap-x-2 bg-[#FFDAD6] border border-[#FF897D] h-[48px] rounded-[4px] ${
                errormessage
                  ? "opacity-100 transition-opacity duration-800"
                  : "opacity-0 transition-opacity duration-800 hidden"
              }`}
            >
              <p className="text-[#7F7571] text-sm">{errormessage}</p>
            </div>
            <InputField
              label="Full Legal Name"
              htmlFor="fullName"
              name="fullName"
              value={formData.fullName}
              error={errors.fullName}
              errorText={errors.fullName}
              onChange={handleInputChange}
              onFocus={() => handleFieldFocus("fullName")}
            />
            <InputField
              label="Username"
              htmlFor="username"
              name="username"
              value={formData.username}
              error={errors.username}
              errorText={errors.username}
              onChange={handleInputChange}
              onFocus={() => handleFieldFocus("username")}
            />
            <InputField
              label="E-mail"
              htmlFor="emailAddress"
              name="emailAddress"
              value={formData.emailAddress}
              error={errors.emailAddress}
              errorText={errors.emailAddress}
              onChange={handleInputChange}
              onFocus={() => handleFieldFocus("emailAddress")}
            />
            <div className="relative">
              <InputField
                label="Create Password"
                htmlFor="password"
                name="password"
                type={showpassword ? "text" : "password"}
                value={formData.password}
                error={errors.password}
                errorText={errors.password}
                onChange={handleInputChange}
                onFocus={() => handleFieldFocus("password")}
              />
              <div
                onClick={() => {
                  setshowpassword(!showpassword);
                }}
                className="absolute cursor-pointer inset-y-[1rem] right-4 text-lg"
              >
                {showpassword ? <LuEye /> : <LuEyeOff />}
              </div>
            </div>
            <div className="relative">
              <InputField
                label="Re-type Password"
                htmlFor="passwordConfirmation"
                name="passwordConfirmation"
                type={showconfirmpassword ? "text" : "password"}
                value={formData.passwordConfirmation}
                error={errors.passwordConfirmation}
                errorText={errors.passwordConfirmation}
                onChange={handleInputChange}
                onFocus={() => handleFieldFocus("passwordConfirmation")}
              />
              <div
                onClick={() => {
                  setshowconfirmpassword(!showconfirmpassword);
                }}
                className="absolute cursor-pointer inset-y-[1rem] right-4 text-lg"
              >
                {showconfirmpassword ? <LuEye /> : <LuEyeOff />}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 max-w-[391px]">
              <div className="flex items-center gap-x-2 w-fit">
                <RiVerifiedBadgeFill
                  className={`text-[#6FC248] ${
                    /^(?=.*[a-z])/.test(formData.password) ? "block" : "hidden"
                  }`}
                />
                <p className="text-[#7F7571] text-[13px]">
                  Lowercase Characters.
                </p>
              </div>
              <div className="flex items-center gap-x-2 w-fit">
                <RiVerifiedBadgeFill
                  className={`text-[#6FC248] ${
                    /^(?=.*[A-Z])/.test(formData.password) ? "block" : "hidden"
                  }`}
                />
                <p className="text-[#7F7571] text-[13px]">
                  Uppercase Characters.
                </p>
              </div>
              <div className="flex items-center gap-x-2 w-fit">
                <RiVerifiedBadgeFill
                  className={`text-[#6FC248] ${
                    /^.{8,}$/.test(formData.password) ? "block" : "hidden"
                  }`}
                />
                <p className="text-[#7F7571] text-[13px]">Numbers.</p>
              </div>
              <div className="flex items-center gap-x-2">
                <RiVerifiedBadgeFill
                  className={`text-[#6FC248] ${
                    /^(?=.*\d)/.test(formData.password) ? "block" : "hidden"
                  }`}
                />
                <p className="text-[#7F7571] text-[13px]">
                  8 Characters minimum.
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <RiVerifiedBadgeFill
                  className={`text-[#6FC248] ${
                    /^(?=.*\W)/.test(formData.password) ? "block" : "hidden"
                  }`}
                />
                <p className="text-[#7F7571] text-[13px]">
                  Special Characters.
                </p>
              </div>
            </div>
          {/* <button
            onClick={signInWithGoogle}
            type="button"
            className="text-black border-2 border-[#e5f5f5] bg-white h-[48px] w-full text-sm rounded-[4px] font-medium flex justify-center items-center gap-4"
          >
            <FcGoogle className="text-[1.75rem]" />
            Sign In with Google
          </button> */}
            <button
              type="submit"
              className="text-white bg-main h-[48px] w-full text-sm rounded-[4px] font-medium"
            >
              Sign Up
            </button>
          </form>
          <p className="text-sm">
            Already have an account?
            <Link href="/signin">
              <span className="text-main">Sign in here</span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;
