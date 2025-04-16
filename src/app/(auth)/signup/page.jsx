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
import { baseURL, signupValidation } from "@/Service/validation";
import SignupCarousel from "./SignupCarousel";
import { FcGoogle } from "react-icons/fc";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { app } from "@/app/lib/firebase";
import logo from '/public/EdTech Platform Figma.svg'
import { IoCheckmarkOutline } from "react-icons/io5";


const SignupForm = () => {
  const router = useRouter();
  const [errormessage, seterrormessage] = useState("");
  const [showpassword, setshowpassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordstate, setpasswordstate] = useState("");
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    username: "",
    password: "",
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
    setIsLoading(true);
    try {
      const validatedData = await signupValidation.validate(formData, {
        abortEarly: false,
      });

      try {
        const response = await axios.post(
          `${baseURL}auth/register`,
          {
            full_name: validatedData.full_name,
            email: validatedData.email,
            password: validatedData.password,
            username: validatedData.username,
            // accept_terms_and_conditions: true,
          }
        );
          toast.success("Signup successful!");
          router.push(`/verify-email?email=${encodeURIComponent(response.data.data.user.email)}&id=${response.data.data.user.user_uuid}`);
      } catch (error) {
        if (error.response?.data?.errors?.email) {
          seterrormessage(error.response?.data?.errors?.email?.[0] || "Signup failed");
        } else {
          seterrormessage(error.response?.data?.message || "Signup failed");
        }
      }
    } catch (error) {
      if (error.name === "AxiosError") {
        const newErrors = {};
        error.inner.forEach((err) => {
          if (err.path) {
            newErrors[err.path] = err.message;
            toast.error(err.message);
          }
        });
        seterrors(newErrors);
      } else {
        toast.error(error.message || "Something went wrong.");
        seterrormessage(error.message || "Something went wrong.");
      }
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <section className="h-screen w-full flex items-center justify-between">

      <div className="flex flex-col w-full lg:w-[50%] h-screen justify-center items-start px-4 lg:px-0 ">
        {/* <NavBar /> */}
        <div className="mx-auto text-center flex flex-col justify-start items-center gap-1.5">
          <div className="w-full flex flex-col justify-between items-start gap-2">
            <Link className='mb-5' href={"/"}>
              <Image
                src={logo}
                alt="Haelsoft Logo"
                width={100}
                height={100}
              />
            </Link>
            <div className='w-full flex flex-col justify-between items-start gap-1'>
              <Link href={'/'} className='underline text-base text-black font-semibold'>Back to home</Link>
              <h1 className="text-[1.5rem] lg:text-[2rem] font-medium text-left">
                Welcome to Haelsoft
                <span role="img" aria-label="waving hand" className="waving-emoji">
                  👋
                </span>
              </h1>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 mt-4 mb-8 w-full mx-auto"
          >
            {isLoading && <Loader />}
            {/* <div
              className={`w-full flex items-center px-2 gap-x-2 bg-[#FFDAD6] border border-[#FF897D] h-[48px] rounded-[4px] ${
                errormessage
                  ? "opacity-100 transition-opacity duration-800"
                  : "opacity-0 transition-opacity duration-800 hidden"
              }`}
            >
              <p className="text-[#7F7571] text-sm">{errormessage}</p>
            </div> */}
            <InputField
              className={'!w-full'}
              label="Full Name"
              htmlFor="full_name"
              name="full_name"
              value={formData.full_name}
              error={errors.full_name}
              errorText={errors.full_name}
              onChange={handleInputChange}
              onFocus={() => handleFieldFocus("full_name")}
            />
            <InputField
              className={'!w-full'}
              label="Username"
              htmlFor="User Name"
              name="username"
              value={formData.username}
              error={errors.username}
              errorText={errors.username}
              onChange={handleInputChange}
              onFocus={() => handleFieldFocus("username")}
            />
            <InputField
              className={'!w-full'}
              label="E-mail"
              htmlFor="Email Address"
              name="email"
              value={formData.email}
              error={errors.email}
              errorText={errors.email}
              onChange={handleInputChange}
              onFocus={() => handleFieldFocus("email")}
            />
            <div className="w-full flex flex-col justify-end items-center gap-2.5">

              <div className="relative w-full">
                  <InputField
                    className={'!w-full'}
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

                <div className="w-full flex flex-wrap justify-end items-center gap-4">
                  <div className="flex items-center gap-x-2 w-fit">
                    <div
                      className={`w-[60px] h-[6px] rounded ${
                        /^(?=.*[a-z])/.test(formData.password) ? "bg-[#6FC248]" : "bg-gray"
                      }`}
                    ></div>
                  </div>
                  <div className="flex items-center gap-x-2 w-fit">
                    <div
                      className={`w-[60px] h-[6px] rounded ${
                        /^(?=.*[A-Z])/.test(formData.password) ? "bg-[#6FC248]" : "bg-gray"
                      }`}
                    ></div>
                  </div>
                  <div className="flex items-center gap-x-2 w-fit">
                    <div
                      className={`w-[60px] h-[6px] rounded ${
                        /^.{8,}$/.test(formData.password) ? "bg-[#6FC248]" : "bg-gray"
                      }`}
                    ></div>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <div
                      className={`w-[60px] h-[6px] rounded ${
                        /^(?=.*\d)/.test(formData.password) ? "bg-[#6FC248]" : "bg-gray"
                      }`}
                    ></div>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <div
                      className={`w-[60px] h-[6px] rounded ${
                        /^(?=.*\W)/.test(formData.password) ? "bg-[#6FC248]" : "bg-gray"
                      }`}
                    ></div>
                  </div>
                </div>

                <div className="flex flex-wrap justify-end items-center max-w-[500px] gap-4">
                  <div className="flex items-center gap-x-2 w-fit">
                    <IoCheckmarkOutline
                      className={`${
                        /^(?=.*[a-z])/.test(formData.password) ? "text-[#6FC248]" : "text-gray"
                      }`}
                    />
                    <p className="text-[#7F7571] text-[13px]">
                      Lowercase Characters.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-2 w-fit">
                    <IoCheckmarkOutline
                      className={`${
                        /^(?=.*[A-Z])/.test(formData.password) ? "text-[#6FC248]" : "text-gray"
                      }`}
                    />
                    <p className="text-[#7F7571] text-[13px]">
                      Uppercase Characters.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-2 w-fit">
                    <IoCheckmarkOutline
                      className={`${
                        /^.{8,}$/.test(formData.password) ? "text-[#6FC248]" : "text-gray"
                      }`}
                    />
                    <p className="text-[#7F7571] text-[13px]">Numbers.</p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <IoCheckmarkOutline
                      className={`${
                        /^(?=.*\d)/.test(formData.password) ? "text-[#6FC248]" : "text-gray"
                      }`}
                    />
                    <p className="text-[#7F7571] text-[13px]">
                      8 Characters minimum.
                    </p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <IoCheckmarkOutline
                      className={`${
                        /^(?=.*\W)/.test(formData.password) ? "text-[#6FC248]" : "text-gray"
                      }`}
                    />
                    <p className="text-[#7F7571] text-[.7rem]">
                      Special Characters.
                    </p>
                  </div>
              </div>
            </div>
            <div className="relative w-full">
              <InputField
                className={'!w-full'}
                label="Re-type Password"
                htmlFor="passwordConfirmation"
                name="passwordConfirmation"
                type={showConfirmPassword ? "text" : "password"}
                value={formData.passwordConfirmation}
                error={errors.passwordConfirmation}
                errorText={errors.passwordConfirmation}
                onChange={handleInputChange}
                onFocus={() => handleFieldFocus("passwordConfirmation")}
              />
              <div
                onClick={() => {
                  setShowConfirmPassword(!showConfirmPassword);
                }}
                className="absolute cursor-pointer inset-y-[1rem] right-4 text-lg"
              >
                {showConfirmPassword ? <LuEye /> : <LuEyeOff />}
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
              className="text-white bg-main h-[48px] w-full text-sm rounded-[6px] font-medium"
            >
              Sign Up
            </button>
          </form>
          <p className="text-sm flex justify-center items-center text-center w-full gap-1">
            Already have an account?
            <Link href="/signin" className="text-[#0E7EE5] underline">
              Sign in here
            </Link>
          </p>
        </div>
      </div>


      <div className="relative w-full lg:w-[50%] h-screen z-[5px] hidden lg:flex flex-col justify-center items-start">
        <SignupCarousel />
      </div>
    </section>
  );
};

export default SignupForm;

