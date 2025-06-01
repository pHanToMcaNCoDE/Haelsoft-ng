"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosMenu } from "react-icons/io";
import cart from "../../../../public/assets/cart.svg";
import Image from "next/image";
import { HiXMark } from "react-icons/hi2";
import { FaTruckFieldUn } from "react-icons/fa6";

const Navbar = () => {
  const [isindividual, setisindividual] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="s">
      <div className="w-full bg-main px-3 xl:px-0">
        <div className="h-20 py-8  mx-auto gap-x-6 max-w-[1240px] text-white flex items-center">
          <div
            onClick={() => setisindividual(!isindividual)}
            className="flex flex-col items-center"
          >
            <p className=" p-2  cursor-pointer">For Individuals</p>

            <div
              className={`h-1 w-full ${
                isindividual ? "bg-white" : "bg-transparent"
              } max-w-[4rem] rounded-sm `}
            ></div>
          </div>
          <div
            onClick={() => setisindividual(!isindividual)}
            className="flex flex-col items-center"
          >
            <p className=" p-2  cursor-pointer">For Business</p>

            <div
              className={`${
                !isindividual ? "bg-white" : "bg-transparent"
              } h-1 w-full max-w-[4rem] rounded-sm `}
            ></div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full h-[111px] flex gap-x-4 py-3 items-center justify-between max-w-[1240px] px-3 xl:px-0">
        <div>
          <Link
            className="text-[#f36402] font-semibold text-[1.2rem] md:text-[1.8rem]"
            href="/"
          >
            Haelsoft
          </Link>
        </div>
        <div className="hidden md:flex items-center lg:w-[70%] font-semibold gap-x-4 justify-between">
          <div className="flex gap-x-4 items-center  cursor-pointer">
            Courses <IoIosArrowDown className="text-main " />
          </div>
          <div className="flex gap-x-4 items-center" cursor-pointer>
            About Us <IoIosArrowDown className="text-main " />
          </div>
          <div className="flex gap-x-4 items-center cursor-pointer">
            Events <IoIosArrowDown className="text-main " />
          </div>
          <div className="flex gap-x-4 items-center">Business</div>
          <Image src={cart} className="w-8" alt="Cat" />
          <button className="bg-main text-white rounded-lg px-8 py-4 font-bold">
            Get Started
          </button>
        </div>
        <IoIosMenu onClick={() => setIsClicked(FaTruckFieldUn)} className="flex md:hidden text-[2rem] text-main cursor-pointer" />


        {/* For Mobile Devices */}

        <div className={`py-[10px] flex flex-col md:hidden items-center fixed ${isClicked ? `left-0` : `left-[-200%]`} duration-200 top-0 z-50 h-screen bg-white w-[70%] font-semibold justify-center gap-10`}>
          <div className="absolute top-5 right-5">
            <HiXMark onClick={() => setIsClicked(false)} className="text-[2rem] text-main cursor-pointer" /> 
          </div>
          <div className="flex gap-x-4 items-center cursor-pointer p-[30px]">
            Courses <IoIosArrowDown className="text-main " />
          </div>
          <div className="flex gap-x-4 items-center cursor-pointer p-[30px]">
            About Us <IoIosArrowDown className="text-main " />
          </div>
          <div className="flex gap-x-4 items-center cursor-pointer p-[30px]">
            Events <IoIosArrowDown className="text-main " />
          </div>
          <div className="flex gap-x-4 items-center cursor-pointer p-[30px]">Business</div>
          <Image src={cart} className="w-8" alt="Cat" />
          <button className="bg-main text-white rounded-lg px-8 py-4 font-bold">
            Get Started
          </button>
        </div>
      </div>
      <div className="w-full bg-white h-[50px]"></div>
    </div>
  );
};

export default Navbar;
