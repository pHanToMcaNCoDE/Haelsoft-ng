"use client";
import React, { useEffect, useState } from "react";
import ModalInput from "./ModalInput";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { signin } from "@/app/actions/auth";
import { useFormState } from "react-dom";
import Loader from "@/components/Loader";

const SignInModal = ({ signInState, setSignInState, setSignupState }) => {
  const router = useRouter();
  const [state, action] = useFormState(signin, null);
  const [errors, seterrors] = useState("");
  useEffect(() => {
    seterrors(state?.errors);
    toast.error(state?.errors?.message);
  }, [state?.errors]);
  // Diplay success message
  useEffect(() => {
    toast.success(state?.success?.message);
    if (state?.success?.message) {
      router.push(`/dashboard/home`);
    }
  }, [state?.success, state?.success?.message]);

  return (
    <div>
      <div
        className={`w-full rounded-xl z-50  top-0 h-screen bg-white/[0.7] fixed flex justify-center ${
          signInState ? "block" : "hidden"
        } items-center`}
      >
        {/* Signin modal */}
        <div className="max-w-[520px]  py-10 bg-white w-full px-8 rounded shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]">
          <p className="font-semibold text-[24px]">
            Log In into your Edtech account
          </p>
          <form action={action}>
            <Loader />
            <div className="space-y-8 mt-5">
              <ModalInput
                placeholder={"Email"}
                type={"email"}
                name={`emailAddress`}
                errorText={errors?.emailAddress}
              />
              <ModalInput
                placeholder={"Password"}
                name={`password`}
                // type={"password"}
                errorText={errors?.emailAddress}
              />
            </div>
            <div className="flex items-center justify-between gap-x-2 mt-10">
              <div className="my-4 flex justify-center items-center gap-x-2">
                
                <input
                  type="checkbox"
                  className="w-fit bg-[#F7F7F7] py-4 border-none"
                />
                <p className="text-[#201A18] font-medium leading-[14px]  text-sm">
                  Remember
                </p>
              </div>
              <p className="text-sm">Forgot password?</p>
            </div>
            <div className="flex justify-center items-center mt-6 ">
              
              <button
                // onClick={() => {
                //   setSignupState(false);
                //   setSignInState(true);
                // }}
                className="  rounded-[8px] bg-main py-3 px-16 font-semibold  text-white"
              >
                Sign In
              </button>
            </div>
          </form>

          <p className="text-grayTwo font-medium text-center mt-10 text-sm">
            By signing up, you agree to our Terms of use and Privacy Policy
          </p>

          <p className="flex justify-center mt-8 text-sm font-medium gap-x-1">
            Don&apos;t have an account?
            <button
              onClick={() => {
                setSignInState(false);
              }}
              className="text-main cursor-pointer"
            >
              Log in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
