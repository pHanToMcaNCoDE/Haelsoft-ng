import React from "react";
import thumbnail from "../../../asset/thumbnail.png";

import Image from "next/image";
import star from "../../../asset/star.svg";

import deleteIcon from "../../../asset/delete.svg";

const CoursenCart = () => {
  return (
    <div>
      <div className="flex md:flex-row  flex-col   w-full max-w-[406px]  lg:max-w-full  mx-auto lg:mx-0   items-start gap-x-8 lg:gap-x-0  mt-10 lg:mt-0  shadow-sm lg:shadow-none">
        <Image
          src={thumbnail}
          alt="thumbnail"
          className="object-cover lg:object-none w-full lg:w-fit"
        />
        <div className="flex flex-col gap-y-6  flex-1  lg:px-4   py-4 lg:py-0 lg:flex-initial w-full ">
          {" "}
          <div className="pt-8 lg:pt-4 flex justify-between lg:gap-x-0">
            <p className="text-[18px] font-semibold">Python online Course</p>
            <div className="flex items-center font-semibold text-sm gap-x-3">
              <span className="text-[14px]">N 10,000 </span>
              <Image src={deleteIcon} alt="delete-icon" />
            </div>
          </div>
          <div className="flex items-center gap-x-2 text-[12px] font-medium mt-6 text-[#655D59">
            <span>4.8 rattings</span>
            <div className="flex items-center">
              <Image src={star} />
              <Image src={star} />
              <Image src={star} />
              <Image src={star} />
            </div>
            <span>(1000)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursenCart;
