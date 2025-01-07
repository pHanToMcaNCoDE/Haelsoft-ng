import React from 'react';
import { FaGlobeAfrica, FaMoneyBillWave, FaLightbulb } from 'react-icons/fa';

const WhyChooseHaelsoft = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-5 pt-[64px] pb-[100px] lg:py-[100px] flex flex-col gap-[80px] justify-center items-center">
      <h1 className="text-[#F36400] font-bold text-[1.5rem] lg:text-[2.5rem] leading-[36px]">
        Why Choose Haelsoft?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[50px] justify-items-center">
        {/* Africa-Focused */}
        <div className="flex flex-col items-center gap-6 p-6 border-[3px] border-[#EEEEEE] rounded w-[90%] lg:w-full">
          <div className="bg-[#FF8C53] w-[52px] h-[52px] rounded-full flex justify-center items-center">
            <FaGlobeAfrica size={30} color="#fff" />
          </div>
          <h2 className="text-[#F36400] text-[1.125rem] font-semibold leading-[27px]">
            Africa-Focused
          </h2>
          <p className="text-[#655D59] text-[1rem] leading-[30px] font-normal text-center">
            We understand the unique dynamics of African markets and provide solutions that resonate
            with your operational realities.
          </p>
        </div>

        {/* Cost-Effective */}
        <div className="flex flex-col items-center gap-6 p-6 border-[3px] border-[#EEEEEE] rounded w-[90%] lg:w-full">
          <div className="bg-[#FF8C53] w-[52px] h-[52px] rounded-full flex justify-center items-center">
            <FaMoneyBillWave size={30} color="#fff" />
          </div>
          <h2 className="text-[#F36400] text-[1.125rem] font-semibold leading-[27px]">
            Cost-Effective
          </h2>
          <p className="text-[#655D59] text-[1rem] leading-[30px] font-normal text-center">
            High-quality training programs at competitive prices, ensuring value for every
            investment.
          </p>
        </div>

        {/* Proven Expertise */}
        <div className="flex flex-col items-center gap-6 p-6 border-[3px] border-[#EEEEEE] rounded w-[90%] lg:w-full">
          <div className="bg-[#FF8C53] w-[52px] h-[52px] rounded-full flex justify-center items-center">
            <FaLightbulb size={30} color="#fff" />
          </div>
          <h2 className="text-[#F36400] text-[1.125rem] font-semibold leading-[27px]">
            Proven Expertise
          </h2>
          <p className="text-[#655D59] text-[1rem] leading-[30px] font-normal text-center">
            Backed by Haelsoft’s extensive experience in digital transformation and skill
            development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseHaelsoft;
