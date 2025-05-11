// app/(auth)/changepassword/ChangePassword.js

'use client';

import InputField from "@/components/InputField";
import { baseURL, changePasswordValidation } from "@/Service/validation";
import axios from "axios";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";
import logoimage from "../../../asset/haelsoft.gif";
import { LuEye, LuEyeOff } from "react-icons/lu";
import logo from '/public/EdTech Platform Figma.svg'

const ChangePasswordComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const router = useRouter();
  
  const searchParams = useSearchParams();
  const rawEmail = searchParams.get("email");


  const mainEmail = rawEmail 
  ? decodeURIComponent(rawEmail) 
  : "dummy@gmail.com";

  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
      password: "",
      password_confirmation: "",
    },
    validationSchema: changePasswordValidation,
    onSubmit: (values) => {
      setIsLoading(true);
      axios
        .post(`${process.env.NEXT_PUBLIC_BASE_URL}auth/reset_password`, {
          email: mainEmail,
          otp: values.otp,
          password: values.password,
          password_confirmation: values.password_confirmation,
        })
        .then((res) => {
          toast.success(res.data?.message, {
            toastId: 1,
            position: "top-right",
          });
          
          if (typeof window !== "undefined") {
            window.location.href = '/signin';
          }
        })
        .catch((e) => {
          setIsLoading(false);
          toast.error(e.response?.data?.message || "Something went wrong", {
            toastId: 1,
            position: "top-right",
          });
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
  });


  const handleResendOtp = () => {
    setIsLoading(true);
    axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}auth/resend_forget_password`, {
        email: mainEmail
      })
      .then((res) => {
        toast.success(res.data?.message);

        // router.push('/signin');
      })
      .catch((e) => {
        if (e.response?.data?.errors?.email) {
          toast.error(e.response.data.errors.email[0] || "Failed to send Otp");
        } else {
          toast.error(e.response?.data?.message || "Failed to send Otp");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }



  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 lg:px-0">
      {isLoading && (
        <div className="flex z-[100] items-center justify-center fixed top-0 w-screen h-screen bg-black/[0.8]">
          <Image src={logoimage} alt="Haelsoft Logo" />
        </div>
      )}

      <div className="max-w-[500px] w-full mx-auto text-center flex flex-col justify-center items-center gap-2">
        <Link href="/">
          <Image
            src={logo}
            alt="Haelsoft Logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </Link>
        <h1 className="text-[36px] font-medium">Forgot password?</h1>
        <p className="flex mt-2 mb-8 max-w-[400px] mx-auto items-center text-[#7F7571] text-sm justify-center font-normal gap-x-2">
          All good. Enter your new password to reset it.
        </p>

        <form onSubmit={formik.handleSubmit} className="space-y-8 w-full">
          <InputField
            label="Email Address"
            name="email"
            type={"text"}
            value={mainEmail}
            onChange={formik.handleChange}
            error={formik.touched.email && formik.errors.email}
            errorText={formik.errors.email}
            onBlur={formik.handleBlur}
          />

          <InputField
            label="OTP"
            name="otp"
            type="text"
            inputMode="numeric"
            maxLength={4}
            value={formik.values.otp}
            onChange={formik.handleChange}
            error={formik.touched.otp && formik.errors.otp}
            errorText={formik.errors.otp}
            onBlur={formik.handleBlur}
            placeholder="Enter your 4-digit code"
          />
          <div className="relative w-full">
            <InputField
              label="Create Password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && formik.errors.password}
              errorText={formik.errors.password}
              onBlur={formik.handleBlur}
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-[1rem] right-4 text-lg cursor-pointer"
            >
              {showPassword ? <LuEye /> : <LuEyeOff />}
            </div>
          </div>
          <div className="relative w-full">
            <InputField
              label="Re-type Password"
              name="password_confirmation"
              type={showConfirmPassword ? "text" : "password"}
              value={formik.values.password_confirmation}
              onChange={formik.handleChange}
              error={
                formik.touched.password_confirmation &&
                formik.errors.password_confirmation
              }
              errorText={formik.errors.password_confirmation}
              onBlur={formik.handleBlur}
            />
            <div
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-[1rem] right-4 text-lg cursor-pointer"
            >
              {showConfirmPassword ? <LuEye /> : <LuEyeOff />}
            </div>
          </div>
          <button type="submit" className="bg-main text-[#FFF1EC] h-[48px] w-full text-sm rounded-[4px] font-medium">
            Change Password
          </button>
        </form>

        <button onClick={handleResendOtp} className="text-main text-md font-normal underline mt-2">Resend otp</button>
      </div>
    </div>
  );
};

export default ChangePasswordComponent;