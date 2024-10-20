"use client";

import React from "react";
import { FaLinkedinIn, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";

import Link from "next/link";
import { usePathname } from "next/navigation";

const AppFooter = () => {
  const path = usePathname()
  if( path === `/signin` || path === `/signup` || path.startsWith(`/dashboard`)){
    return null;
  }
  return (
    <footer className="bg-[#f36402] min-h-[62vh] md:min-h-[20vh] lg:min-h-[62vh] py-[2em]">
      <div className="max-w-[1250px] mx-auto p-2">
        <div className="bg-white h-[1px] w-full rounded-full"></div>
        <div className="flex flex-col md:flex-row justify-between items-start py-[4em] md:py-[2em] text-white lg:gap-x-4">
          <div className="footer flex flex-col md:flex-row justify-between md:w-full lg:w-[70%] items-start">
            <div className="f gap-y-3">
              <h1 className=" text-2xl lg:text-[1.4rem] font-bold leading-[37.54px] mb-[1em]">
                ABOUT US
              </h1>
              <p className="cursor-pointer text-[1.125rem] font-medium leading-[37.54px]">
                Our Story
              </p>
              <p className="cursor-pointer text-[1.125rem] font-medium leading-[37.54px]">
                Reviews
              </p>
              <p className="cursor-pointer text-[1.125rem] font-medium leading-[37.54px]">
                Careers
              </p>
              <p className="cursor-pointer text-[1.125rem] font-medium leading-[37.54px]">
                Contact Us
              </p>
            </div>
            <div className="f my-[2em] md:my-0">
              <h1 className="cursor-pointer text-2xl lg:text-[1.4rem] font-bold leading-[37.54px] mb-[1em]">
                COURSES
              </h1>
              <p className="cursor-pointer text-[1.125rem] font-normal leading-[37.54px]">
                Digital Marketing Fundamentals
              </p>
              <p className="cursor-pointer text-[1.125rem] font-normal leading-[37.54px]">
                Social Media Marketing
              </p>
              <p className="cursor-pointer text-[1.125rem] font-normal leading-[37.54px]">
                Search Engine Optimization
              </p>
              <p className="cursor-pointer text-[1.125rem] font-normal leading-[37.54px]">
                Search Engine Marketing
              </p>
              <p className="cursor-pointer text-[1.125rem] font-normal leading-[37.54px]">
                Content Marketing
              </p>
              <p className="cursor-pointer text-[1.125rem] font-normal leading-[37.54px]">
                Email Marketing
              </p>
              <p className="cursor-pointer text-[1.125rem] font-normal leading-[37.54px]">
                Web Analytics
              </p>
            </div>
            <div className="f flex flex-col items-start gap-y-5">
              <div className="my-[2em] md:my-0">
                <h1 className="text-2xl lg:text-[1.4rem] font-bold leading-[37.54px] mb-[1em]">
                  ENTERPRISE
                </h1>
                <p className="cursor-pointer text-[1.125rem] font-normal leading-[37.54px]">
                  Enterprise Training
                </p>
                <p className="cursor-pointer text-[1.125rem] font-normal leading-[37.54px]">
                  Scholarships
                </p>
              </div>
              <div>
                <h1 className="text-2xl lg:text-[1.4rem] font-bold leading-[37.54px] mb-[1em]">
                  OTHER INFORMATION
                </h1>
                <p className="cursor-pointer text-[1.1125rem] font-normal leading-[37.54px]">
                  Terms of Service
                </p>
                <p className="cursor-pointer text-[1.125rem] font-normal leading-[37.54px]">
                  Privacy Policy
                </p>
              </div>
            </div>
          </div>
          <div className="f flex flex-col gap-y-5">
            <div className="leading-[37.54px] my-[2em] md:my-0">
              <h1 className="text-2xl lg:text-[1.4rem] font-bold leading-[37.54px]">
                CONTACT INFORMATION
              </h1>
              <div className="flex items-center gap-x-5">
                <FaPhoneAlt />
                <div className="flex flex-col items-start">
                  <p className="cursor-pointer text-[1rem] font-normal">
                    +234 7062827560
                  </p>
                  <p className="cursor-pointer text-[1rem] font-normal">
                    +234 8147741168
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-x-5">
                <IoMail />
                <div>
                  <p className="cursor-pointer text-[1rem] font-normal leading-[37.54px]">
                    info@haelsoft.com.ng
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[1px] w-[90%] bg-white rounded-full"></div>
            <div>
              <h1 className="text-2xl lg:text-[1.4rem] font-bold leading-[37.54px] mb-[.5em]">
                CONNECT WITH US
              </h1>
              <div className="flex items-center gap-x-1">
                <Link href="https://www.linkedin.com/company/haelsoft">
                  <FaLinkedinIn size={25} />
                </Link>
                <Link href="https://www.linkedin.com/company/haelsoft/mycompany/">
                  <FaXTwitter size={25} />
                </Link>
                <Link href="https://www.instagram.com/haelsoft">
                  <FiInstagram size={25} />
                </Link>
                <Link href="https://wa.link/ul0ttk">
                  <FaWhatsapp size={25} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white h-[2px] w-full rounded-full"></div>
        <div className="f flex flex-col md:flex-row gap-y-3 md:gap-y-0 justify-between items-center my-3">
          <p className="text-[.9rem] text-white leading-[21px]">
            &copy; Copyrights 2024 Haelsoft
          </p>
          <div className="flex items-center gap-x-3">
            <p className="text-[.9rem] text-white leading-[21px]">
              Privacy Policy
            </p>
            <p className="text-[.9rem] text-white leading-[21px]">
              Terms & Conditions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
