"use client";
import InputField from "@/components/InputField";
import { baseURL, forgotPassword } from "@/Service/validation";
import axios from "axios";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import logoimage from "../../../asset/haelsoft.gif"
import { toast, Bounce } from "react-toastify";
import logo from '/public/EdTech Platform Figma.svg'
import Loader from "@/components/Loader";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
  const [isLoading, setisLoading] = useState(false);

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgotPassword,
    onSubmit: (values) => {
      setisLoading(true);
      axios
        .post(`${process.env.NEXT_PUBLIC_BASE_URL}auth/forgot_password`, values)
        .then((res) => {
          toast.success(res.data.message, {
            toastId: 1,
            position: "top-right",
          });

          router.push(`/changepassword?email=${encodeURIComponent(formik.values.email)}`);
        })
        .catch((e) => {
          setisLoading(false);
          toast.error(e.message, {
            toastId: 1,
            position: "top-right",
          });
        })
        .finally(() => {
          setisLoading(false);
        });
    },
  });

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 lg:px-0">
      {isLoading && (
        <Loader/>
      )}
      <div className="max-w-[500px] w-full mx-auto text-center flex flex-col justify-center items-center gap-4">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="Haelsoft Logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </Link>
        <h1 className="text-[36px] font-medium ">Forgot password?</h1>
        <p className="flex  mt-2 mb-8  max-w-[400px]  mx-auto items-center text-[#7F7571] text-sm justify-center font-normal gap-x-2">
          All good. Enter your account&apos;s email address and we&apos;ll send
          you a link to reset your password
        </p>

        <form
          onSubmit={formik.handleSubmit}
          className="space-y-4 w-full mx-auto"
        >
          <InputField
            label={`E-mail`}
            placeHolder={``}
            name={`email`}
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && formik.errors.email}
            errorText={formik.errors.email}
          />
          <button type="submit" className="bg-main text-[#FFF1EC] h-[48px] w-full text-lg rounded-[4px] font-medium ">
            Send reset link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
