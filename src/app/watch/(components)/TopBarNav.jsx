"use client";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { IoSearch } from "react-icons/io5";
import account from "../../../asset/account.svg";
import notify from "../../../asset/notify.svg";
import shoppingcart from "../../../asset/shoppingcart.svg";
import Image from "next/image";
import { IoIosMenu } from "react-icons/io";
// import SideNav from "./SideNav";
import { Logout } from "@/app/actions/auth";
import bell from "../../../asset/bell.svg";
import world from "../../../asset/world.svg";
import arrow from "../../../asset/arrow.svg";
import { toast } from "react-toastify";
import Link from "next/link";
import SideNav from "./SideNav";
import { IoCloseOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const TopBarNav = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [profile, setprofile] = useState(false);
  const { course } = useSelector((state) => state.courses);
  const [open, setopen] = useState(false);
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [query, setquery] = useState("");

  const Loggedout = () => {};
  return (
    <div className="bg-white col-span-12   border-b-2 border-b-[#F0F0F0] px-4 md:px-10 min-h-[6rem]  lg:p-[26px] sticky items-start w-full flex flex-col top-0 z-[10] py-6 gap-y-6">
      <div className=" flex items-center justify-between w-full gap-x-4  bg-white   ">
        <div className="flex w-full gap-x-7 lg:gap-x-4  lg:justify-between items-center">
          <div className="md:flex justify-between w-full items-center gap-4 ">
            <Link
              className="text-[#f36402] w-full font-semibold text-[1.8rem]  lg:text-4xl"
              href="/dashboard/home"
            >
              Haelsoft
            </Link>
            <div className="w-full">
              {" "}
              <p className=" font-bold text-2xl text-center ">
                {course?.title} Course{" "}
              </p>
            </div>

            <div className="flex w-full justify-between items-center">
              <Link href="/dashboard/my-learning" className="font-medium text-sm cursor-pointer">My Learning</Link>
              <div className=" w-full max-w-[300px] flex flex-col justify-end    item-center ">
                <p className=" text-gray-700 whitespace-nowrap font-medium">
                  20% Progress
                </p>
                <div className="w-full  max-w-[300px] bg-gray-300 rounded-xl h-4 overflow-hidden">
                  <div
                    className={`h-full bg-main`}
                    style={{ width: `${30}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <IoIosMenu
          onClick={() => setopen(!open)}
          className="text-4xl text-main lg:hidden "
        />
      </div>
      <div
        className={`${
          open ? "block" : "hidden"
        } top-0 left-0 fixed h-screen w-full bg-white px-4  space-y-4 pt-4`}
      >
        <div className="flex items-center justify-between ">
          {" "}
          <Link
            className="text-[#f36402] font-semibold text-[1.8rem] md:text-[1.8rem] lg:text-4xl"
            href="/"
          >
            Haelsoft
          </Link>
          <IoCloseOutline
            onClick={() => setopen(!open)}
            className="text-[#f36402] text-4xl fixed top-4 right-1"
          />
        </div>
        {/* Search */}
        <div
          className={`w-full relative md:w-[70%] lg:w-full  max-w-[522px]  md:flex ${
            query
              ? "rounded-t-[6px] border-b-0 ease-in-out duration-300"
              : "rounded-3xl ease-in-out duration-300"
          } border border-[#9c918d] flex justify-between items-center  px-3 h-[43px] `}
        >
          <input
            type="text"
            name="q"
            onChange={(e) => setquery(e.target.value)}
            value={query}
            className="w-full outline-none max-w-[320px] ring-0  "
            placeholder="What do you want to learn?"
            onClick={() => {
              setIsSearchClicked(true);
            }}
          />
          <div
            className={`bg-main text-white flex items-center justify-center rounded-full h-6 w-6 cursor-pointer `}
          >
            <IoSearch />
          </div>

          <div
            onClick={() => {
              setIsSearchClicked(false);
            }}
            className={`absolute  lg:w-full  max-w-[522px] ${
              query
                ? "ease-in-out duration-300 opacity-[100%] "
                : "opacity-0 ease-in-out duration-300 hidden"
            } z-[100] lg:w-full left-[1px] -right-[2px] h-[253px] bg-white top-[2.6rem] border max-w-[398px] border-[#9c918d] border-t-0 rounded-b-[6px] shadow-lg px-4 cursor-pointer`}
          >
            <div className="w-full gap-x-2 mt-4  flex text-grayTwo items-center">
              <IoSearch className="text-grayTwo" /> Search Engine Optimization
            </div>
          </div>
        </div>

        <div
          className="flex gap-x-6 items-center  flex-col gap-y-20 pt-10
        "
        >
          <div className="flex items-center  gap-x-4">
            {/* <Image src={bell} className="w-[2rem] object-contain" /> */}
            <div className=" text-2xl   text-blue-500 underline">
              {" "}
              Notification
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            {" "}
            {/* <button className="h-12 w-12 flex bg-main  font-bold rounded-full justify-center text-xl text-white items-center">
              A
            </button> */}
            <div className="text-2xl  text-blue-500 underline "> Profile</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBarNav;
