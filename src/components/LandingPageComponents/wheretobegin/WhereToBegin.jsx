import Image from "next/image";
import React from "react";
import img from "/public/assets/EdTech Platform Frame.svg";
import imgTwo from "/public/assets/EdTech Platform Frame (1).svg";
import icon from "/public/Vector.svg";

const WhereToBegin = () => {
  return (
    <section className="max-w-[1250px] mx-auto px-5 flex flex-col gap-10 pb-[100px]">
      <div className="flex flex-col justify-center items-center gap-6">
        <h1 className="text-main leading-[36px] text-[1.5rem] text-left lg:text-center font-semibold">
          Not Sure Where to Start?
        </h1>
        <p className="text-[#655D59] w-full lg:w-[809px] leading-[24px] font-normal text-[1rem] text-left lg:text-center">
          Whether you&apos;re looking to begin a new career or advance in your
          current one, we have the resources to guide you on your journey.
          Explore our tailored learning paths to find what suits you best.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-between my-auto items-center gap-4">
        <div className="border-[3px] border-[#e5e5e5] w-full lg:w-[576px] lg:h-[218px] gap-[2em] rounded flex flex-col  lg:flex-row justify-center px-2 lg:px-0 pb-4 lg:justify-start items-center">
          <Image
            width={216}
            height={266}
            className="object-cover"
            src={img}
            alt="Find a new career"
          ></Image>
          <div className="flex flex-col justify-center items-center lg:items-start">
            <p className="text-main font-medium text-[1.25rem] text-center lg:text-start leading-[43px] w-full">
              I want to find a new career
            </p>
            <Image src={icon} alt="Arrow Icon"></Image>
          </div>
        </div>
        <div className="border-[3px] border-[#e5e5e5] w-full lg:w-[576px] lg:h-[218px] gap-[2em] rounded flex flex-col  lg:flex-row justify-center px-2 lg:px-0 pb-4 lg:justify-start items-center">
          <Image
            width={216}
            height={266}
            className="object-cover"
            src={imgTwo}
            alt="Upskill in current career"
          ></Image>
          <div className="flex flex-col justify-center items-center lg:items-start">
            <p className="text-main font-medium text-[1.25rem] text-center lg:text-start leading-[43px] w-full ">
              I want to upskill in my current career
            </p>
            <Image src={icon} alt="Arrow Icon"></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereToBegin;
