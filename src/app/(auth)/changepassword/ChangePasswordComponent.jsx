// app/(auth)/changepassword/ChangePassword.js

'use client';

import InputField from "@/components/InputField";
import { changePasswordValidation } from "@/Service/validation";
import axios from "axios";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";
import logoimage from "../../../asset/haelsoft.gif";
import { LuEye, LuEyeOff } from "react-icons/lu";

const ChangePasswordComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const searchParams = useSearchParams();
  const token1 = searchParams.get("token1");
  const token2 = searchParams.get("token2");
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: changePasswordValidation,
    onSubmit: (values) => {
      setIsLoading(true);
      axios
        .post(`/auth/api/reset-password/${token1}/${token2}`, {
          new_password: values.password,
        })
        .then((res) => {
          toast.success(res.data.message, {
            toastId: 1,
            position: "top-right",
          });
          router.replace("/signin");
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

  return (
    <div className="min-h-screen w-screen flex items-center justify-center px-4 lg:px-0">
      {isLoading && (
        <div className="flex z-[100] items-center justify-center fixed top-0 w-screen h-screen bg-black/[0.8]">
          <Image src={logoimage} alt="Haelsoft Logo" />
        </div>
      )}
      <Link href="/">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/web-project-ca895.appspot.com/o/haelsoft%2Flogo2.png?alt=media&token=99c206bc-6bcb-462f-be89-41e945f5bf6f"
          alt="Image description"
          width={200}
          height={200}
          className="object-contain w-[10rem] absolute top-8 left-8"
        />
      </Link>

      <div className="max-w-[554px] w-full mx-auto text-center lg:mt-36">
        <h1 className="text-[36px] font-medium">Forgot password?</h1>
        <p className="flex mt-2 mb-8 max-w-[442px] mx-auto items-center text-[#7F7571] text-sm justify-center font-normal gap-x-2">
          All good. Enter your new password to reset it.
        </p>

        <form onSubmit={formik.handleSubmit} className="space-y-8">
          <div className="relative">
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
          <div className="relative">
            <InputField
              label="Re-type Password"
              name="passwordConfirmation"
              type={showConfirmPassword ? "text" : "password"}
              value={formik.values.passwordConfirmation}
              onChange={formik.handleChange}
              error={
                formik.touched.passwordConfirmation &&
                formik.errors.passwordConfirmation
              }
              errorText={formik.errors.passwordConfirmation}
              onBlur={formik.handleBlur}
            />
            <div
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-[1rem] right-4 text-lg cursor-pointer"
            >
              {showConfirmPassword ? <LuEye /> : <LuEyeOff />}
            </div>
          </div>
          <button className="text-[#8E4D2E] bg-[#FFF1EC] h-[48px] w-full text-sm rounded-[4px] font-medium shadow-custom-light-elevation">
            Send reset link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordComponent;