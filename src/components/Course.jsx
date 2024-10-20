import React from "react";
import thumbnail from "../../src/asset/thuem.png";
import Image from "next/image";
import star from "../../src/asset/star.svg";
const Course = () => {
  return (
    <div>
      <div className="h-[440px] max-w-[406px] flex-col flex rounded-[4px]">
        <Image src={thumbnail} alt="thumbnail" className="rounded-t-[4px]"/>
        <div className="bg-white text-[#655D59] flex-1 px-4 pt-8 rounded-b-[4px] ">
          <p className="text-[#655D59] text-[18px] font-semibold">Search Engine Optimization Online Course</p>
          <div className="flex items-center gap-x-2 text-[12px] font-medium mt-4 text-[#655D59">
            <span>4.8 rattings</span>
            <div className="flex items-center">
              <Image src={star} className="object-contain w-[0.9rem]"/>
              <Image src={star} className="object-contain w-[0.9rem]"/>
              <Image src={star} className="object-contain w-[0.9rem]"/>
              <Image src={star} className="object-contain w-[0.9rem]"/>
            </div>
            <span>(1000)</span>
          </div>

          <p className="text-[16px] font-semibold mt-5">N 20, 000</p>
        </div>
      </div>
    </div>
  );
};

export default Course;
