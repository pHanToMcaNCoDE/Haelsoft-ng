import React, { useEffect, useState } from "react";
import ModalInput from "./ModalInput";
import Link from "next/link";
import { signup, signin } from "@/app/actions/auth";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";
import Loader from "@/components/Loader";
const SignupModal = ({ signupState, setSignupState }) => {
  const [state, action] = useFormState(signup, null);
  const [errors, seterrors] = useState("");
  // display error message both validtion and normal error message
  useEffect(() => {
    seterrors(state?.errors);
    toast.error(state?.errors?.message);
  }, [state?.errors]);
  // Diplay success message
  useEffect(() => {
    toast.success(state?.success?.message);
    console.log();
    if (state?.success?.message) {
      router.push(`/verify-email?email=${state?.email}`);
    }
  }, [state?.success, state?.success?.message]);

  return (
    <div>
      <div
        onClick={(e) => {
          // setSignupState(false);
          // e.stopPropagation();
        }}
        className={`w-full rounded-xl z-50  top-0 min-h-screen overflow-auto bg-white/[0.7] fixed flex justify-center ${
          signupState ? "block" : "hidden"
        } items-center`}
      >
        {/* Sign up modal */}
        <div className="max-w-[520px] py-3   bg-white w-full px-8 rounded shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]">
          <p className="font-semibold text-[24px]">Sign up to Continue</p>
          <form action={action}>
            <Loader />{" "}
            <div action="" className="space-y-4 mt-5">
              <ModalInput placeholder={"username"} name={`username`} type={"text"} />
              <ModalInput name={`fullName`} placeholder={"Full Name"}  type={"text"}/>
              <ModalInput placeholder={"Email"} name={`emailAddress`} type={"email"}/>
              <ModalInput placeholder={"Password"} name={`password`} />
              <ModalInput
                placeholder={"confirm Password"}
                name={`passwordConfirmation`}
              />
            </div>
            <div className="flex items-center justify-start gap-x-2 mt-6">
              <input
                type="checkbox"
                name=""
                id=""
                className="w-fit bg-[#F7F7F7] py-4 border-none"
              />{" "}
              <p className="text-[#201A18] font-medium leading-[14px]  text-sm">
                Send me notifications of new courses and discounts, and learning
                tips..
              </p>
            </div>
            <div className="flex justify-center items-center mt-6">
              {" "}
              <button className="rounded-[8px] bg-main py-3 px-16 font-semibold  text-white">
                Sign Up
              </button>
            </div>
          </form>
          <p className="text-grayTwo font-medium text-center mt-4 text-sm">
            By signing up, you agree to our Terms of use and Privacy Policy{" "}
          </p>

          <p className="flex justify-center mt-4 text-sm font-medium gap-x-1 ">
            Already have an account?{" "}
            <p className="text-main cursor-pointer">Log in</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
