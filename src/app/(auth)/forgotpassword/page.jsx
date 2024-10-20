"use client";
import InputField from "@/components/InputField";
import { forgotPassword } from "@/Service/validation";
import axios from "axios";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import logoimage from "../../../asset/haelsoft.gif"
import { toast, Bounce } from "react-toastify";

const ForgotPassword = () => {
  const [isLoading, setisLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgotPassword,
    onSubmit: (values) => {
      setisLoading(true);
      console.log(values);
      axios
        .post(`/auth/api/reset-password/request/`, values)
        .then((res) => {
          console.log(res);
          toast.success(res.data.message, {
            toastId: 1,
            position: "top-right",
          });
        })
        .catch((e) => {
          console.log(e);
          setisLoading(false);
          toast.error(e.res.data.message, {
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
    <div className="min-h-screen w-screen flex items-center justify-center px-4 lg:px-0">
      {isLoading && (
        <div className=" flex z-[100] items-center justify-center fixed top-0 w-screen h-screen bg-black/[0.8]">
          {/* <ClipLoader color="#ff6900" size={100} /> */}
          <Image src={logoimage}/>
        </div>
      )}
      <Link href={"/"}>
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/web-project-ca895.appspot.com/o/haelsoft%2Flogo2.png?alt=media&token=99c206bc-6bcb-462f-be89-41e945f5bf6f"
          alt="Image description"
          width={200}
          height={200}
          className="object-contain w-[10rem] absolute top-8 left-8 "
        />
      </Link>
      <div className="max-w-[554px] w-full  mx-auto text-center  lg:mt-36">
        <h1 className="text-[36px] font-medium ">Forgot password?</h1>
        <p className="flex  mt-2 mb-8  max-w-[442px]  mx-auto items-center text-[#7F7571] text-sm justify-center font-normal gap-x-2">
          All good. Enter your account&apos;s email address and we&apos;ll send
          you a link to reset your password
        </p>

        <form
          onSubmit={formik.handleSubmit}
          className="space-y-4 max-w-[509px] mx-auto"
        >
          {" "}
          <InputField
            label={`E-mail`}
            placeHolder={``}
            name={`email`}
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && formik.errors.email}
            errorText={formik.errors.email}
          />
          <button className="text-[#8E4D2E] bg-[#FFF1EC] h-[48px] w-full  text-sm rounded-[4px]font-medium  shadow-custom-light-elevation">
            Send reset link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
