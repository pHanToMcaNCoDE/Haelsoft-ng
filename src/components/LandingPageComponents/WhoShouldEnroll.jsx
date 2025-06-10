import React from 'react';
import { FaUserTie, FaPalette, FaLightbulb, FaRocket } from 'react-icons/fa';

const WhoShouldEnroll = ({who}) => {
  return (
    <section className="py-[100px] flex flex-col gap-10 justify-center items-center max-w-[1250px] mx-auto px-6 md:px-12 xl:px-0">
      {/* Section Title */}
      <div className="flex flex-col justify-center items-center text-center md:text-left gap-6">
        <h2 className="text-[#201A18] text-[1.5rem] md:text-[2rem] leading-[29.26px] font-semibold">
          Who Should Enroll?
        </h2>
        <div className="bg-[#F1C118] w-[56px] h-[4px] rounded-[4px]"></div>
      </div>

      {/* Content */}
      {who}
    </section>
  );
};

export default WhoShouldEnroll;
