import React from "react";
import course from "../../../asset/course2.png";
import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";
import { CgChevronRight } from "react-icons/cg";

const IncompleteCourse = () => {
  return (
    <>
      {" "}
      <div className="bg-white min-h-[143px] flex-col items-start md:flex-row rounded-[15px] flex md:items-center justify-between gap-x-10 px-4 md:py-0 py-4 gap-y-2 ">
        <div className=" cursor-pointer flex gap-x-4   justify-start h-fit  w-full  p-2">
          <Image src={course} className=" object-contain" alt="Img" />
          <div className="flex md:border-r text-sm md:text-base border-r-black  w-full flex-col items-start justify-center">
            <p className="text-other">Course | Haelsoft</p>
            <p className="text-main font-semibold  md:text-[18px]">
              Search Engine Optimization
            </p>
          </div>
        </div>
        <button className="md:w-[185px] text-white md:mr-20 flex items-center justify-center whitespace-nowrap text-xs md:text-sm md:h-[47px] bg-main rounded-[4px] p-2  md:p-0">
          Go to course <CgChevronRight className="" />
        </button>
      </div>
    </>
  );
};

export default IncompleteCourse;
