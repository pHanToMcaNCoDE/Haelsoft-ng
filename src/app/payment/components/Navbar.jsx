"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../../asset/logo.svg";
import { IoSearch } from "react-icons/io5";
import account from "../../../asset/account.svg";
import notify from "../../../asset/notify.svg";
import shoppingcart from "../../../asset/shoppingcart.svg";
import { toast } from "react-toastify";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [open, setopen] = useState(false);
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [query, setquery] = useState("");
  const [profile, setprofile] = useState(false);
  return (
    <div className="flex justify-between items-center h-[103px] max-w-[1250px] mx-auto">
      <div className="flex items-center gap-x-4 w-full">
        <Link href={"/"}>
          <Image
            src={logo}
            className="object-contain w-[10rem] lg:mt-0 mt-7 "
            alt="Haelsoft Logo"
          />
        </Link>
        <select className="border-main outline-none px-3 text-main lg:h-[33px] w-full max-w-[98px] border text-sm  bg-white   rounded-[4px] gap-[8px] ">
          <option value="explore">Explore</option>
        </select>
        {/* Search */}
        <div
          className={`w-[90%] relative  lg:w-full  max-w-[522px]  ${
            query
              ? "rounded-t-[6px] border-b-0 ease-in-out duration-300"
              : "rounded-3xl ease-in-out duration-300"
          } border border-[#9c918d] flex justify-between items-center  px-3 h-[35px] `}
        >
          <input
            type="text"
            name="q"
            onChange={(e) => setquery(e.target.value)}
            value={query}
            className="w-full outline-none max-w-[320px] "
            placeholder="What do you want to learn?"
            onClick={() => {
              setIsSearchClicked(true);
            }}
          />
          <div
            className={`bg-[#F36400] text-white flex items-center justify-center rounded-full h-6 w-6 cursor-pointer `}
          >
            <IoSearch />
          </div>

          <div
            onClick={() => {
              setIsSearchClicked(false);
            }}
            className={`absolute  ${
              query
                ? "ease-in-out duration-300 opacity-[100%]"
                : "opacity-0 ease-in-out duration-300 hidden"
            } z-[100] -left-[0.2px] -right-[1px] h-[253px] bg-white top-[2.6rem] border max-w-[398px] border-[#9c918d] border-t-0 rounded-b-[6px] shadow-lg px-4 cursor-pointer`}
          >
            <div className="w-full gap-x-2 mt-4  flex text-grayTwo items-center">
              <IoSearch className="text-grayTwo" /> Search Engine Optimization
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-fit  justify-end items-center flex gap-x-6 ">
        <div className="relative">
          <Image
            onClick={() => {
              setprofile(!profile);
            }}
            src={account}
            alt="account icon"
            className="object-contain cursor-pointer w-[1.65rem] lg:w-[1.5rem]"
          />
          {/* {profile && (
              <div className="absolute top-8 flex shadow-xl flex-col rounded-xl pt-4 px-1  -left-10 h-[6rem] w-20 bg-white">
                <p
                  onClick={() => {
                    setprofile(!profile);
                    Logout();
                   
                    router.refresh();
                    toast.success("LogOut Successful");
                  }}
                  className="text-sm hover:bg-slate-100 cursor-pointer w-full text-center "
                >
                  Logout
                </p>
              </div>
            )} */}
        </div>
        <Image
          src={notify}
          alt="notification"
          className="object-contain   w-[1.65rem] lg:w-[1.5rem]"
        />
        <Image
          src={shoppingcart}
          alt="shopping cart"
          className="object-contain  w-[1.65rem] lg:w-[1.5rem]"
        />
        <IoIosArrowDown className="object-contain w-[1.65rem] lg:w-[1.5rem] text-grayTwo text-2xl" />
      </div>
    </div>
  );
};

export default Navbar;
