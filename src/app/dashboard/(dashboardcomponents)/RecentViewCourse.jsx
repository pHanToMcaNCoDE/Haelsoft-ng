import React from "react";
import course from "../../../asset/course.png";
import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";

const RecentViewCourse = ({ item }) => {
  return (
    <div>
      <div
        className="bg-white cursor-pointer 
       flex-col flex min-h-[343px] w-full max-w-[364px]  rounded-[15px] p-2"
      >
        <Image src={course} alt="Course" />
        <div className="flex flex-col items-start flex-auto justify-between mt-2 py-4">
          <p className="text-[#201A18] font-medium text-[18px]">{item.title}</p>
          <button className="border border-[#F36400] text-[#F36400] mt-6 whitespace-nowrap h-[39px] min-w-[87px] justify-center gap-4 flex items-center rounded-[4px]">
            Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentViewCourse;
