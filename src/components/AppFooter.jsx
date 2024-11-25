"use client";

import React from "react";
import { FaLinkedinIn, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import logo from '../../public/EdTech Platform screenshot (1).svg';
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const AppFooter = () => {
  const path = usePathname()
  if( path === `/signin` || path === `/signup` || path.startsWith(`/dashboard`)){
    return null;
  }
  return (
    <footer className="bg-[#f36402] min-h-[62vh] md:min-h-[20vh] lg:min-h-[62vh] py-[2em]">
      <div className="bg-white h-[2px] max-w-[1040px] mx-auto rounded-full"></div>
      <div className="flex flex-col md:flex-row justify-between items-start py-[72px] text-white lg:gap-x-4 max-w-[1064px] mx-auto px-6 xl:px-0">
        {/* <div className="bg-white h-[1px] w-full rounded-full"></div> */}
        {/* <div className="flex flex-col md:flex-row justify-between items-start py-[4em] md:py-[2em] text-white lg:gap-x-4 w-full"> */}
          <div className="w-full footer flex flex-col lg:flex-row justify-between items-start gap-8">
            <div className="leading-[37.54px] flex flex-col justify-between gap-6 xl:h-[530px] items-start w-full lg:w-[230px]">
              <div>
                <Link href={`/`}>
                  <Image width={100} height={100} className="object-cover" src={logo} alt="Haelsoft Logo"></Image>
                </Link>
                <p className="text-[.875rem] leading-6 font-medium">
                  Haelsoft is a Digital marketing and software development expertise to boost your tech career.
                </p>
              </div>
              
              <div>
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
            <div className="f gap-y-8 flex flex-col justify-center items-start">
              <div className='flex flex-col justify-center items-start gap-3'>
                <h2 className="text-[.875rem] font-bold">Bootcamps</h2>
                <ul className="flex flex-col justify-center items-start gap-2">
                  <li className="text-[.75rem] font-medium">
                    Software Engineering  /  Web Development
                  </li>
                  <li className="text-[.75rem] font-medium">
                    Cybersecurity
                  </li>
                  <li className="text-[.75rem] font-medium">
                    User Experience Design
                  </li>
                  <li className="text-[.75rem] font-medium">
                    Data Science
                  </li>
                  <li className="text-[.75rem] font-medium">
                    Digital Marketing
                  </li>
                </ul>
              </div>
              <div className='flex flex-col justify-center items-start gap-3'>
                <h2 className="text-[.875rem] font-bold">Career Guides</h2>
                <ul className="flex flex-col justify-center items-start gap-2">
                  <Link href={`/become-a-software-engineer`} className="text-[.75rem] font-medium">
                    Become a Software Engineer
                  </Link>
                  <Link href={`/become-a-web-developer`} className="text-[.75rem] font-medium">
                    Become a Web Developer
                  </Link>
                  <Link href={`/become-a-ux-designer`} className="text-[.75rem] font-medium">
                    Become a UX Designer
                  </Link>
                  <Link href={`/become-a-data-scientist`} className="text-[.75rem] font-medium">
                    Become a Data Scientist
                  </Link>
                  <Link href={`/become-a-product-manager`} className="text-[.75rem] font-medium">
                    Become a Product Manager
                  </Link>
                  <Link href={`/become-a-digital-marketer`} className="text-[.75rem] font-medium">
                    Become a Digital Marketer
                  </Link>
                  <Link href={`/become-a-data-analyst`} className="text-[.75rem] font-medium">
                    Become a Data Analyst
                  </Link>
                  {/* <li></li> */}
                </ul>
              </div>
              <div className='flex flex-col justify-center items-start gap-3'>
                <h2 className="text-[.875rem] font-bold">Tutorials</h2>
                <ul className="flex flex-col justify-center items-start gap-2">
                  <li className="text-[.75rem] font-medium">
                    Learn Python
                  </li>
                  <li className="text-[.75rem] font-medium">
                    Learn JavaScript
                  </li>
                  <Link href={`/tutorial-learn-html-css`} className="text-[.75rem] font-medium">
                    Learn HTML & CSS
                  </Link>
                  <Link href={`/tutorial-learn-sql`} className="text-[.75rem] font-medium">
                    Learn SQL
                  </Link>
                </ul>
              </div>
            </div>
            <div className="f my-[2em] md:my-0 gap-y-8 flex flex-col justify-center items-start">
              <div className='flex flex-col justify-center items-start gap-3'>
                <h2 className="text-[.875rem] font-bold">Certificate Courses</h2>
                <ul className="flex flex-col justify-center items-start gap-2">
                  <li className="text-[.75rem] font-medium">
                    Web Development
                  </li>
                  <li className="text-[.75rem] font-medium">
                    User Experience Design
                  </li>
                  <li className="text-[.75rem] font-medium">
                    Data Science
                  </li>
                  <li className="text-[.75rem] font-medium">
                    Digital Marketing
                  </li>
                  <li className="text-[.75rem] font-medium">
                    Product Management
                  </li>
                  <li className="text-[.75rem] font-medium">
                    Cybersecurity
                  </li>
                  <li className="text-[.75rem] font-medium">
                    Data Analytics
                  </li>
                  <li className="text-[.75rem] font-medium">
                    Python
                  </li>
                  <li className="text-[.75rem] font-medium">
                    User Interface Design
                  </li>
                  <li className="text-[.75rem] font-medium">
                    Artificial Intelligence
                  </li>
                </ul>
              </div>
              <div className='flex flex-col justify-center items-start gap-3'>
                <h2 className="text-[.875rem] font-bold">Leadership Courses</h2>
                <ul className="flex flex-col justify-center items-start gap-2">
                  <li className="text-[.75rem] font-medium">
                    Product Leadership
                  </li>
                  <li className="text-[.75rem] font-medium">
                    Marketing Leadership
                  </li>
                  <li className="text-[.75rem] font-medium">
                    Design Leadership
                  </li>
                </ul>
              </div>
            </div>
            <div className="f gap-y-8 flex flex-col justify-center items-start">
              <div className='flex flex-col justify-center items-start gap-3'>
                <h2 className="text-[.875rem] font-bold">About</h2>
                <ul className="flex flex-col justify-center items-start gap-2">
                  <li className="text-[.75rem] font-medium">
                    Our Story
                  </li>
                  <li className="text-[.75rem] font-medium">
                    Careers
                  </li>
                  <li className="text-[.75rem] font-medium">
                    Get Involved
                  </li>
                  <li className="text-[.75rem] font-medium">
                    Magazine
                  </li>
                  <li className="text-[.75rem] font-medium">
                    Contact Us
                  </li>
                  <li className="text-[.75rem] font-medium">
                    Press and Media
                  </li>
                  <li className="text-[.75rem] font-medium">
                    Blog
                  </li>
                </ul>
              </div>
              <div className='flex flex-col justify-center items-start gap-3'>
                <h2 className="text-[.875rem] font-bold">For Companies</h2>
                <ul className="flex flex-col justify-center items-start gap-2">
                  <li className="text-[.75rem] font-medium">
                    Hire Our Grads
                  </li>
                  <li className="text-[.75rem] font-medium">
                    Enterprise Training
                  </li>
                </ul>
              </div>
              <div className='flex flex-col justify-center items-start gap-3'>
                <h2 className="text-[.875rem] font-bold">Resources</h2>
                <ul className="flex flex-col justify-center items-start gap-2">
                  <li className="text-[.75rem] font-medium">
                    Career Services
                  </li>
                  <li className="text-[.75rem] font-medium">
                    Certification
                  </li>
                  <li className="text-[.75rem] font-medium">
                    Testimonials
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* <div className="f flex flex-col gap-y-5">
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
            
          </div> */}
        {/* </div> */}
        {/* <div className="bg-white h-[2px] max-w-[1064px] mx-auto rounded-full"></div>
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
        </div> */}
      </div>
      <div className="bg-white h-[2px] max-w-[1040px] mx-auto rounded-full"></div>
    </footer>
  );
};

export default AppFooter;
