"use client";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { IoSearch } from "react-icons/io5";
import account from "../../../asset/account.svg";
import notify from "../../../asset/notify.svg";
import shoppingcart from "../../../asset/shoppingcart.svg";
import Image from "next/image";
import { IoIosMenu } from "react-icons/io";
import SideNav from "./SideNav";
import { Logout } from "@/app/actions/auth";
import { toast } from "react-toastify";
import arrow from "../../../asset/courses/Chevron Down Outline.svg";
import Link from "next/link";
import secureLocalStorage from "react-secure-storage";
import { useSelector } from "react-redux";
import logo from '../../../../public/assets/EdTech Platform Figma.svg';

const TopNav = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [profile, setProfile] = useState(false);
  const routes = [
    { name: "Home", routes: "/dashboard/home" },
    { name: "Settings", routes: "/dashboard/settings" },
    { name: "My Courses", routes: "/dashboard/courses" },
    { name: "Incompleted Courses", routes: "/dashboard/courses/incompletedcourses" },
    { name: "Completed Courses", routes: "/dashboard/courses/completedcourses" },
  ];
  const [open, setOpen] = useState(false);
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [query, setQuery] = useState("");

  const cartItems = useSelector((state) => state.cart.cartItems);

  const data = secureLocalStorage.getItem('userInfo');

  console.log('User', data)

  const handleLogout = () => {
    Logout();
    router.refresh();
    toast.success("Logout Successful");
  };

  return (
    <div className="bg-white border-b border-b-[#d0cfcf] min-h-[4rem] lg:p-[26px] px-4 sticky flex flex-col top-0 z-50 py-2 gap-y-6">
      <div className="flex items-center justify-between w-full gap-x-4 max-w-[1300px] 2xl:max-w-[1550px] mx-auto">
        <div className="flex gap-x-4 justify-center items-center">
          <Link href={`/dashboard/home`}>
            <Image src={logo} alt="Haelsoft Logo"></Image>
          </Link>
        </div>
        <div className="justify-end items-center flex gap-x-6">
          <div
            className={`relative w-full lg:w-[552px] hidden md:flex ${
              query
                ? "rounded-t-[6px] border-b-0 ease-in-out duration-300"
                : "rounded-3xl ease-in-out duration-300"
            } border border-[#9c918d] flex justify-between items-center px-3 h-[41px]`}
          >
            <input
              type="text"
              name="q"
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              className="w-full outline-none ring-0"
              placeholder="What do you want to learn?"
              onClick={() => {
                setIsSearchClicked(true);
              }}
            />
            <div className="bg-main text-white flex items-center justify-center rounded-full h-8 w-8 cursor-pointer">
              <IoSearch className="text-xl" />
            </div>
            <div
              onClick={() => {
                setIsSearchClicked(false);
              }}
              className={`absolute lg:w-full max-w-[522px] ${
                query
                  ? "ease-in-out duration-300 opacity-[100%]"
                  : "opacity-0 ease-in-out duration-300 hidden"
              } z-[100] lg:w-full left-[1px] -right-[2px] h-[253px] bg-white top-[2.6rem] border max-w-[398px] border-[#9c918d] border-t-0 rounded-b-[6px] shadow-lg px-4 cursor-pointer`}
            >
              <div className="w-full gap-x-2 mt-4 flex text-[#655D59] items-center">
                <IoSearch className="text-[#655D59]" /> Search Engine Optimization
              </div>
            </div>
          </div>
          <Link className="relative" href="/dashboard/shoppingcart">
            <Image
              src={shoppingcart}
              alt="shopping cart"
              className="object-contain w-[1.85rem] lg:w-[1.5rem]"
            />
            {cartItems?.length > 0 && (
              <div className="bg-red-600 text-white w-5 h-5 text-base font-bold text-center rounded-full flex justify-center items-center absolute top-[-16%] right-[-10px]">
                {cartItems?.length}
              </div>
            )}
          </Link>
          <Image
            src={notify}
            alt="notification"
            className="object-contain w-[1.85rem] lg:w-[1.5rem]"
          />
          <div className="relative flex items-center gap-2">
            <Image
              onClick={() => {
                setProfile(!profile);
              }}
              src={account}
              alt="account icon"
              className="object-contain cursor-pointer w-[1.65rem] lg:w-[1.5rem]"
            />
            {profile && (
              <div className="absolute top-8 z-[99] flex shadow-xl flex-col rounded-xl pt-4 px-1 -left-10 h-[6rem] w-20 bg-white">
                <p
                  onClick={() => {
                    setProfile(!profile);
                    handleLogout();
                  }}
                  className="text-sm hover:bg-slate-100 cursor-pointer w-full text-center"
                >
                  Logout
                </p>
                <Link
                  className="text-sm hover:bg-slate-100 cursor-pointer w-full text-center"
                  href="/dashboard/settings"
                >
                  Settings
                </Link>
              </div>
            )}
            <Image
              src={arrow}
              alt="arrow icon"
              className="object-contain cursor-pointer w-[1.65rem] lg:w-[1.5rem]"
            />
          </div>
        </div>
      </div>
      <div
        className={`w-full relative md:w-[70%] lg:w-full max-w-[522px] md:hidden ${
          query
            ? "rounded-t-[6px] border-b-0 ease-in-out duration-300"
            : "rounded-3xl ease-in-out duration-300"
        } border border-[#9c918d] flex justify-between items-center px-3 h-[43px]`}
      >
        <input
          type="text"
          name="q"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          className="w-full outline-none max-w-[320px] ring-0"
          placeholder="What do you want to learn?"
          onClick={() => {
            setIsSearchClicked(true);
          }}
        />
        <div className="bg-main text-white flex items-center justify-center rounded-full h-6 w-6 cursor-pointer">
          <IoSearch />
        </div>
        <div
          onClick={() => {
            setIsSearchClicked(false);
          }}
          className={`absolute lg:w-full max-w-[522px] ${
            query
              ? "ease-in-out duration-300 opacity-[100%]"
              : "opacity-0 ease-in-out duration-300 hidden"
          } z-[100] lg:w-full left-[1px] -right-[2px] h-[253px] bg-white top-[2.6rem] border max-w-[398px] border-[#9c918d] border-t-0 rounded-b-[6px] shadow-lg px-4 cursor-pointer`}
        >
          <div className="w-full gap-x-2 mt-4 flex text-[#655D59] items-center">
            <IoSearch className="text-[#655D59]" /> Search Engine Optimization
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
