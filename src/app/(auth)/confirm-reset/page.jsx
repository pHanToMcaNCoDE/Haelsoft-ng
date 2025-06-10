"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import InputField from "@/components/InputField";
import { baseURL } from "@/Service/validation";
import { toast } from "react-toastify";
import Loader from "@/components/Loader";
import secureLocalStorage from "react-secure-storage";
import { useDispatch } from "react-redux";
import { setAuth } from "@/features/user-details/userDetailsSlice";

const ConfirmReset = () => {
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const rawEmail = searchParams.get("email");

  const dispatch = useDispatch()



  const email = rawEmail 
  ? decodeURIComponent(rawEmail) 
  : "dummy@gmail.com";

  const user_uuid = searchParams.get("id")

  const router = useRouter();
  
  const [focusIndex, setFocusIndex] = useState(null);


  useEffect(() => {
    setIsClient(true);
  }, []);

  const hideEmail = (email) => {
    const [username, domain] = email.split("@");
    const hiddenUsername = `${username.substring(0, 2)}*****`;
    return `${hiddenUsername}@${domain}`;
  };

  const resendOtp = () => {
    setIsLoading(true);
    axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}auth/resend_otp`, {
        email: email
      })
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((e) => {
        if (e.response?.data?.errors?.email) {
          toast.error(e.response.data.errors.email[0] || "Signup failed");
        } else {
          toast.error(e.response?.data?.message || "Signup failed");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };


  const validationSchema = Yup.object({
    digit1: Yup.string().required().matches(/^[0-9]$/, "Must be a digit"),
    digit2: Yup.string().required().matches(/^[0-9]$/, "Must be a digit"),
    digit3: Yup.string().required().matches(/^[0-9]$/, "Must be a digit"),
    digit4: Yup.string().required().matches(/^[0-9]$/, "Must be a digit")
  });

  const handleSubmit = (values, { setSubmitting, setStatus }) => {
    const otpCode = Object.values(values).join("");
    setIsLoading(true);
    
    axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}auth/forgot_password`, {
        user_uuid: user_uuid,
        otp: otpCode
      })
      .then((res) => {
        toast.success(res?.data?.data?.message || "Verification successful!");
       
        
        if(res.data.data?.token){
          dispatch(setAuth({
            token: res.data.data.token,
            user: res.data.data.user
          }))
        }
          
        router.push('/dashboard/home');
      })
      .catch((e) => {
        if (e.response?.data?.errors?.otp) {
          toast.error(e.response?.data?.errors?.otp?.[0] || "Verification failed");
        } else {
          toast.error(e.response?.data?.message || "Verification failed");
        }
      })
      .finally(() => {
        setSubmitting(false);
        setIsLoading(false);
      });
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex items-center justify-center h-screen px-2">
      <div className="p-3 rounded-[30px] min-h-[465px] max-w-[762px] w-full lg:w-fit lg:px-16">
        <div className="flex flex-col items-center space-y-6">
          <h1 className="text-contentPrimary text-center text-2xl font-medium md:text-[36px]">
            Enter Verification Code
          </h1>

          <div className="text-[#7F7571] text-center md:w-[646px] text-base">
            We've sent a verification code to
            <span className="text-base text-[#201A18] font-bold">
              {" "}
              {hideEmail(email)}
            </span>
            . Enter the code below to verify your account.
          </div>

          <Formik
            initialValues={{
              digit1: "",
              digit2: "",
              digit3: "",
              digit4: ""
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, setFieldValue, handleSubmit, isSubmitting, touched, errors, status }) => (
              <div className="w-full max-w-md">
                <form className="w-full" onSubmit={handleSubmit}>

                  {isLoading && <Loader />} 
                              
                  <div className="flex flex-row gap-3 md:gap-4 mb-4 justify-center">
                    {[1, 2, 3, 4].map((digit) => {
                      const fieldName = `digit${digit}`;
                      return (
                          <InputField
                            key={digit}
                            name={fieldName}
                            type="text"
                            value={values[fieldName]}
                            className="flex justify-center items-center w-full md:w-20 h-30 md:h-20"
                            InputStyle={{
                              className: "text-center justify-center items-center text-[1.25rem] lg:text-[2.5rem] font-bold text-main w-full md:w-20 h-30 md:h-20"
                            }}
                            error={touched[fieldName] && Boolean(errors[fieldName])}
                            errorText={touched[fieldName] && errors[fieldName]}
                            onChange={(e) => {
                              const value = e.target.value;
                              if (value && !/^\d*$/.test(value)) return;
                              
                              setFieldValue(fieldName, value.slice(-1));
                              
                              if (value && digit < 4) {
                                setFocusIndex(digit + 1);
                                const nextInput = document.querySelector(`input[name=digit${digit + 1}]`);
                                if (nextInput) nextInput.focus();
                              }
                            }}
                            onFocus={() => setFocusIndex(digit)}
                            onBlur={() => setFocusIndex(null)}
                            onKeyDown={(e) => {
                              if (e.key === "Backspace" && !values[fieldName] && digit > 1) {
                                setFocusIndex(digit - 1);
                                const prevInput = document.querySelector(`input[name=digit${digit - 1}]`);
                                if (prevInput) prevInput.focus();
                              }
                            }}
                          />
                      );
                    })}
                  </div>

                  {status && <p className="text-red-500 text-sm text-center mb-4">{status}</p>}

                  {/* Display combined error message if any field has an error */}
                  {Object.keys(errors).length > 0 && touched[Object.keys(errors)[0]] && (
                    <p className="text-red-500 text-sm text-center mb-4">
                      Please enter a valid 4-digit code
                    </p>
                  )}

                  <button
                    type="submit"
                    className="bg-main text-white py-3 px-6 rounded-lg w-full font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <ClipLoader size={20} color={"#FFFFFF"} loading={isSubmitting} />
                    ) : (
                      "Verify"
                    )}
                  </button>
                </form>

                <div className="text-center mt-6">
                  <p className="text-[#7F7571] text-base inline">
                    Didn't receive the code?{" "}
                  </p>
                  <button
                    onClick={resendOtp}
                    className="text-main underline text-base inline"
                    // disabled={isLoading}
                  >
                    Resend
                  </button>
                </div>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ConfirmReset;