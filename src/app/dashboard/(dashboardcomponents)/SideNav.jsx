"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../asset/logo.svg";
import homeinactive from "../../../asset/homeinactive.svg";
import homeactive from "../../../asset/homeactive.svg";
import courseinactive from "../../../asset/courseinactive.svg";
import courseactive from "../../../asset/courseactive.svg";
import businactive from "../../../asset/businactive.svg";
import busactive from "../../../asset/busactive.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TiCogOutline } from "react-icons/ti";
import { HiOutlineHand } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const SideNav = ({ state, setstate }) => {
  const pathname = usePathname();
  const [isopen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 left-0 z-50 lg:w-[20%] hidden sidebar h-screen bg-white overflow-auto lg:flex flex-col leading-normal px-[20px] py-[10px] ">
        <Link href={"/"}>
          <Image src={logo} className="object-contain w-[7rem] lg:mt-0 mt-7 " alt="Logo" />
        </Link>
        <div className="flex flex-col mt-20 gap-y-6">
          <Link
            href={"/dashboard/home"}
            className={`flex ${
              pathname === "/dashboard/home" && "bg-[#FBEEE9]"
            } h-[40px] items-center gap-2 px-2 rounded-[2px]`}
          >
            <Image
              src={pathname === "/dashboard/home" ? homeactive : homeinactive}
              className="object-contain"
              alt="Home"
            />{" "}
            <div
              className={`  ${
                pathname === "/dashboard/home"
                  ? "text-[#F36400] font-medium"
                  : "text-[#655D59] font-normal"
              } text-sm leading-[21px] `}
            >
              Home
            </div>
          </Link>{" "}
          <div className="flex-col">
            <Link
              href={"/dashboard/courses"}
              className={`flex ${
                pathname === "/dashboard/courses" && "bg-[#FBEEE9]"
              } h-[40px] items-center gap-2 px-2 rounded-[2px]`}
            >
              <Image
                src={
                  pathname === "/dashboard/courses"
                    ? courseactive
                    : courseinactive
                }
                className="object-contain"
                alt="Course"
              />{" "}
              <div
                className={` ${
                  pathname === "/dashboard/courses"
                    ? "text-[#F36400] font-medium"
                    : "text-[#655D59] font-normal "
                } text-sm leading-[21px] `}
              >
                My Courses
              </div>
            </Link>{" "}
            <div className="flex px-4 mt-2 min-h-[74px] gap-x-3">
              <div className="flex flex-col border-l-[3px] w-full px-4 border-l-[#F36400] justify-between py-1 text-sm text-[#655D59] font-normal ">
                <Link
                  href={"/dashboard/courses/incompletedcourses"}
                  className={` h-[50%]  flex items-center justify-start ${
                    pathname === "/dashboard/courses/incompletedcourses"
                      ? "text-[#F36400] font-medium"
                      : "text-[#655D59] font-normal"
                  }`}
                >
                  Incomplete
                </Link>
                <Link
                  href={"/dashboard/courses/completedcourses"}
                  className={` h-[50%] flex items-center justify-start text-start ${
                    pathname === "/dashboard/courses/completedcourses"
                      ? "text-[#F36400] font-medium"
                      : "text-[#655D59] font-normal"
                  }`}
                >
                  Complete
                </Link>
              </div>
            </div>
          </div>
          <Link
            href={"/dashboard/business"}
            className={`flex ${
              pathname === "/dashboard/business" && "bg-[#FBEEE9]"
            } h-[40px] items-center gap-2 px-2 rounded-[2px]`}
          >
            <Image
              src={pathname === "/dashboard/business" ? busactive : businactive}
              className="object-contain"
              alt="Dashboard"
            />
            <div
              className={`  ${
                pathname === "/dashboard/business"
                  ? "text-[#F36400] font-medium"
                  : "text-[#655D59] font-normal"
              } text-sm leading-[21px] `}
            >
              Business
            </div>
          </Link>
        </div>
        <div className="absolute bottom-4 flex text-[#655D59] flex-col gap-y-4">
          <div className="flex text-xl gap-x-4 items-center">
            <TiCogOutline /> <span className="text-sm">Settings</span>
          </div>
          <div className="flex text-xl gap-x-4 items-center">
            <HiOutlineHand /> <span className="text-sm">Need help?</span>
          </div>
        </div>
      </nav>


      {/* Mobile Nave */}
      {state && (
        <div
          onClick={() => {
            setstate(false);
          }}
          className="w-full bg-white/[0.6] fixed top-0 h-screen z-[30]"
        ></div>
      )}
      <nav
        className={`fixed w-[60%] duration-700 ease-in-out top-0 lg:hidden sidebar z-[100] ${
          state ? "left-0" : "left-[-100%] "
        } h-screen bg-white overflow-auto flex flex-col leading-normal  px-[20px] py-[10px] `}
      >
        <RxCross2
          onClick={() => {
            setstate(false);
          }}
          className="text-2xl  absolute top-4  right-6 lg:hidden"
        />
        <Link href={"/"}>
          
          <Image src={logo} className="object-contain w-[7rem] lg:mt-0 mt-7 " alt="Logo" />
        </Link>
        <div className="flex flex-col mt-20 gap-y-6">
          <Link
            onClick={() => {
              setstate(false);
            }}
            href={"/dashboard/home"}
            className={`flex ${
              pathname === "/dashboard/home" && "bg-[#FBEEE9]"
            } h-[40px] items-center gap-2 px-2 rounded-[2px]`}
          >
            <Image
              src={pathname === "/dashboard/home" ? homeactive : homeinactive}
              className="object-contain"
              alt="Home"
            />{" "}
            <div
              className={`  ${
                pathname === "/dashboard/home"
                  ? "text-[#F36400] font-medium"
                  : "text-[#655D59] font-normal"
              } text-sm leading-[21px] `}
            >
              Home
            </div>
          </Link>{" "}
          <div className="flex-col">
            <Link
              onClick={() => {
                setstate(false);
              }}
              href={"/dashboard/courses"}
              className={`flex ${
                pathname === "/dashboard/courses" && "bg-[#FBEEE9]"
              } h-[40px] items-center gap-2 px-2 rounded-[2px]`}
            >
              <Image
                src={
                  pathname === "/dashboard/courses"
                    ? courseactive
                    : courseinactive
                }
                className="object-contain"
                alt="Course"
              />{" "}
              <div
                className={` ${
                  pathname === "/dashboard/courses"
                    ? "text-[#F36400] font-medium"
                    : "text-[#655D59] font-normal "
                } text-sm leading-[21px] `}
              >
                My Courses
              </div>
            </Link>{" "}
            <div className="flex px-4 mt-2 min-h-[74px] gap-x-3">
              <div className="flex flex-col border-l-[3px] w-full px-4 border-l-[#F36400] justify-between py-1 text-sm text-[#655D59] font-normal ">
                <Link
                  onClick={() => {
                    setstate(false);
                  }}
                  href={"/dashboard/courses/uncompletedcourses"}
                  className={` h-[50%]  flex items-center justify-start ${
                    pathname === "/dashboard/courses/uncompletedcourses"
                      ? "text-[#F36400] font-medium"
                      : "text-[#655D59] font-normal"
                  }`}
                >
                  Incomplete
                </Link>
                <Link
                  onClick={() => {
                    setstate(false);
                  }}
                  href={"/dashboard/courses/completedcourses"}
                  className={` h-[50%] flex items-center justify-start text-start ${
                    pathname === "/dashboard/courses/completedcourses"
                      ? "text-[#F36400] font-medium"
                      : "text-[#655D59] font-normal"
                  }`}
                >
                  Complete
                </Link>
              </div>
            </div>
          </div>
          <Link
            onClick={() => {
              setstate(false);
            }}
            href={"/dashboard/business"}
            className={`flex ${
              pathname === "/dashboard/business" && "bg-[#FBEEE9]"
            } h-[40px] items-center gap-2 px-2 rounded-[2px]`}
          >
            <Image
              src={pathname === "/dashboard/business" ? busactive : businactive}
              className="object-contain"
              alt="Activate"
            />
            <div
              className={`  ${
                pathname === "/dashboard/business"
                  ? "text-[#F36400] font-medium"
                  : "text-[#655D59] font-normal"
              } text-sm leading-[21px] `}
            >
              Business
            </div>
          </Link>{" "}
        </div>
        <div className="absolute bottom-4 flex text-[#655D59] flex-col gap-y-4">
          <div className="flex text-xl gap-x-4 items-center">
            <TiCogOutline /> <span className="text-sm">Settings</span>
          </div>
          <div className="flex text-xl gap-x-4 items-center">
            <HiOutlineHand /> <span className="text-sm">Need help?</span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SideNav;
