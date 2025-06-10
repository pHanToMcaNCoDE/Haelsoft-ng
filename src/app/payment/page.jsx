"use client";
import React, { useState } from "react";

import Navbar from "./components/Navbar";
import CoursenCart from "./components/CoursenCart";
import Course from "@/components/Course";
import SignupModal from "./components/SignupModal";
import SignInModal from "./components/SignInModal";

const Payment = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [isSignIn, setIsSignIn] = useState(false);
  const cartItemsCount = 1;

  return (
    <div className="mb-32">
      <div>
        <SignupModal
          setSignupState={setIsSignup}
          signupState={isSignup}
          setSignInState={setIsSignIn}
        />
        <SignInModal
          setSignInState={setIsSignIn}
          signInState={isSignIn}
          setSignupState={setIsSignup}
        />
      </div>
      <Navbar />
      <div className="max-w-[1100px] mx-auto space-y-8 mt-20 mb-32">
        <div className="px-4 w-full my-4">
          <p className="text-main font-semibold text-2xl">Shopping Cart</p>
          <p className="pb-4 border-b text-sm border-b-[#FF8C53] text-grayTwo w-[60%]">
            {cartItemsCount} Courses in cart
          </p>
        </div>
        <div className="flex px-4 lg:gap-x-8 lg:px-0 lg:flex-row flex-col-reverse items-start w-full justify-between text-grayTwo">
          <div className="flex flex-col gap-y-6 h-[30rem] overflow-y-auto p-4 w-full mt-10">
            {[1, 2, 3, 4].map((item, index) => (
              <CoursenCart key={index} />
            ))}
          </div>
          <div className="flex flex-col pt-8 gap-y-8 w-full md:w-fit">
            <div className="flex flex-col text-[16px] font-semibold">
              <p className="text-grayTwo">Total</p>
              <p className="text-grayTwo">
                <span className="text-[14px]">N 10,000</span>
              </p>
            </div>
            <button className="text-[16px] text-white font-semibold px-20 py-4 rounded-lg bg-main">
              Checkout
            </button>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#FBFBFB] py-10">
        <div className="max-w-[1100px] mx-auto px-4 lg:px-0 flex lg:flex-row flex-col items-center gap-6">
          <Course /> <Course />
          <Course />
        </div>
      </div>
    </div>
  );
};

export default Payment;
