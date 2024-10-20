import React from "react";
import course from "../../../../asset/course2.png";
import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";
import { CgChevronRight } from "react-icons/cg";
import axios from "axios";
import SkeletonLoader from "./SkeletonLoader";
import Link from "next/link";

const PaidCourses = ({ paidcourse }) => {
  return (
    <>
      <div className="bg-white min-h-[143px] flex-col mt-10 shadow-md shadow-slate-200 items-start w-full md:flex-row rounded-[15px] flex md:items-center justify-between gap-x-10 px-4 md:py-0 py-4 gap-y-2 ">
        <div className=" cursor-pointer flex gap-x-4 justify-start h-fit  w-full p-2">
          <Image
            src={`https://res.cloudinary.com/dmpqdaupc/${paidcourse?.course?.img_course}`}
            width={300}
            height={300}
            className="rounded-lg object-contain"
            alt="Img"
          />
          <div className="flex md:border-r text-sm md:text-base border-r-black  w-full flex-col items-start justify-center">
            <p className="text-other">Course | Haelsoft</p>
            <p className="text-main font-semibold  md:text-[18px]">
              {paidcourse?.course?.title} Course
            </p>
          </div>
        </div>
        <Link
          href={`/watch?id=${paidcourse?.course?.course_id}`}
          className="md:w-[185px] text-white md:mr-20 flex items-center justify-center whitespace-nowrap text-xs md:text-sm md:h-[47px] bg-main rounded-[4px] p-2  md:p-0"
        >
          Go to course <CgChevronRight className="" />
        </Link>
      </div>
    </>
  );
};

export default PaidCourses;
