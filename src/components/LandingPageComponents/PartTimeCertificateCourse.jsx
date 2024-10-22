import React from "react";
import imgCover from '../../../public/assets/EdTech Platform 2.svg';
import cover from '../../../public/assets/EdTech Platform Vector 1.svg';
import CourseCrd from "./CourseCrd";
import Image from "next/image";

const PartTimeCertificateCourse = () => {
  return (
    <section className="relative w-full min-h-screen xl:h-[137vh] 2xl:h-[120vh]">
      <div className="absolute hidden md:flex top-[180px] 2xl:top-[150px]">
        <Image 
          src={imgCover}
          className="lg:max-h-[1000px] 2xl:max-h-[1100px] lg:w-[1500px] 2xl:w-[3000px]"
          alt="Background Image"
        />
      </div>
      <Image 
        width={1000} 
        height={100} 
        className="lg:w-[1440px] xl:w-full 2xl:w-[3000px] h-[900px] lg:h-[756px] xl:h-[750px] 2xl:h-[850px] absolute top-0 left-0 z-10 object-cover" 
        src={cover} 
        alt="Orange Cover"
      />
      <div className="relative py-[30px] max-w-[1260px] mx-auto px-5 flex flex-col justify-center items-center gap-[16px] z-20">
        <div className="flex flex-col justify-center items-center text-center gap-[10px] mt-4">
          <h1 className="text-white text-[2.125rem] font-bold leading-[36px]">
            Part-Time Certificate Courses
          </h1>
          <p className="lg:w-[800px] xl:w-[1049px] text-gray-200 leading-[24px] text-[1rem] font-normal">
            Enroll in our flexible part-time courses and gain valuable certifications that will advance your career. Learn from experienced professionals and engage in hands-on projects to build your skills.
          </p>
        </div>

        {/* Courses */}
        <CourseCrd/>
      </div>

      <div className='absolute z-[30] bottom-[-15%] w-full lg:w-[1040px] left-[15%] h-[276px] py-[64px] px-[88px] flex justify-between items-center bg-white shadow-md rounded py-[48px] px-[12px] mb-8'>
        <div className="flex flex-col justify-center items-start gap-[24px]">
          <h1 className="text-[3.5rem] font-bold leading-[43px] text-black">100+</h1>
          <div className='w-[48px] h-[4px] rounded-full bg-[#FFCF00]'></div>
          <p className='text-black text-[1.25rem] font-medium'>Countries</p>
        </div>
      </div>
    </section>
  );
};

export default PartTimeCertificateCourse;
