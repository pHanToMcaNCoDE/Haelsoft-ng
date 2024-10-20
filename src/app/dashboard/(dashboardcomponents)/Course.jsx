import React from "react";
import course from "../../../asset/course.png";
import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";

const Course = ({item}) => {
  return (
    <div>
      <div className="bg-white cursor-pointer 
       flex-col flex min-h-[343px] w-full max-w-[364px]  rounded-[15px] p-2">
        <Image src={course} alt="Course" />
        <div className="flex flex-col flex-auto justify-between mt-2 py-4">
          <p className="text-[#201A18] font-medium text-[18px]">
           {item?.title}
          </p>
          <p className="text-[#7F7571] text-base">₦{item?.price.toLocaleString()}</p>
          <div className="flex items-center gap-2 text-[#7F7571]">
            <span className="text-sm">4.7 </span>
            <div className="flex items-center text-xl gap-x-2">
              <IoStarSharp className="text-[#F36400]" />
              <IoStarSharp className="text-[#F36400]" />
              <IoStarSharp className="text-[#F36400]" />
              <IoStarSharp className="text-[#F36400]" />
              <IoStarSharp className="text-[#E0E0E0]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
