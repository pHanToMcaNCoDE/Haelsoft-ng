import React from 'react';
import { IoCheckmark } from 'react-icons/io5';

const Plan = () => {
  return (
    <section className="bg-[#F7F7F7] py-[100px] px-5">
      <div className="max-w-[1250px] mx-auto flex flex-col gap-[4em] justify-center items-center">
        <h1 className="text-[#F36400] text-[1.5rem] leading-9 font-semibold">
          Choose A Plan That Suits Your Corporate Needs
        </h1>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Corporate Hire Plan */}
          <div className="gap-[6em] w-full xl:w-[592px] h-[788px] bg-white shadow-lg rounded flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[#FF8C53] text-[1.5rem] leading-[36px] font-semibold">
                Corporate Hire
              </h1>
              <p>Up to 100 employees</p>
              <p className="text-[#FF8C53] text-[1.5rem] leading-[36px] font-semibold">
                N200,000/month
              </p>
            </div>
            <ul className="flex flex-col gap-6 justify-center items-start">
              <li className="text-[#655D59] flex justify-center items-center gap-5 font-medium text-[1rem] leading-[43px]">
                <IoCheckmark className="text-[1.5rem] text-[#F36400]" />
                Access to top-tier candidates across various industries.
              </li>
              <li className="text-[#655D59] flex justify-center items-center gap-5 font-medium text-[1rem] leading-[43px]">
                <IoCheckmark className="text-[1.5rem] text-[#F36400]" />
                Dedicated recruitment and onboarding support.
              </li>
              <li className="text-[#655D59] flex justify-center items-center gap-5 font-medium text-[1rem] leading-[43px]">
                <IoCheckmark className="text-[1.5rem] text-[#F36400]" />
                Customizable hiring solutions tailored to your needs.
              </li>
              <li className="text-[#655D59] flex justify-center items-center gap-5 font-medium text-[1rem] leading-[43px]">
                <IoCheckmark className="text-[1.5rem] text-[#F36400]" />
                Ongoing performance tracking and feedback.
              </li>
            </ul>
            <button className="bg-[#F36400] text-white w-full sm:w-[290px] h-[52px] rounded p-[10px] gap-[10px] font-normal text-[1.125rem] leading-10 flex justify-center items-center">
              Get Started
            </button>
          </div>

          {/* Corporate Training Plan */}
          <div className="gap-[6em] w-full xl:w-[592px] h-[788px] p-[20px] bg-white shadow-lg rounded flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[#FF8C53] text-[1.5rem] leading-[36px] font-semibold">
                Corporate Training
              </h1>
              <p>Up to 200 employees</p>
              <p className="text-[#FF8C53] text-[1.5rem] leading-[36px] font-semibold">
                N500,000/month
              </p>
            </div>
            <ul className="flex flex-col gap-6 justify-center items-start">
              <li className="text-[#655D59] flex justify-center items-center gap-5 font-medium text-[1rem] leading-[43px]">
                <IoCheckmark className="text-[1.5rem] text-[#F36400]" />
                Comprehensive leadership development programs.
              </li>
              <li className="text-[#655D59] flex justify-center items-center gap-5 font-medium text-[1rem] leading-[43px]">
                <IoCheckmark className="text-[1.5rem] text-[#F36400]" />
                Technical and soft skills training for all departments.
              </li>
              <li className="text-[#655D59] flex justify-center items-center gap-5 font-medium text-[1rem] leading-[43px]">
                <IoCheckmark className="text-[1.5rem] text-[#F36400]" />
                Tailored programs for industry-specific requirements.
              </li>
              <li className="text-[#655D59] flex justify-center items-center gap-5 font-medium text-[1rem] leading-[43px]">
                <IoCheckmark className="text-[1.5rem] text-[#F36400]" />
                On-demand webinars and access to expert trainers.
              </li>
            </ul>
            <button className="bg-[#F36400] text-white w-full sm:w-[290px] h-[52px] rounded p-[10px] gap-[10px] font-normal text-[1.125rem] leading-10 flex justify-center items-center">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;
