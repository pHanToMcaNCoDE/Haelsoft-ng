import React from "react";
import imgCover from '../../../public/assets/EdTech Platform 2.svg';
import cover from '../../../public/assets/EdTech Platform Vector 1.svg';
import CourseCrd from "./CourseCrd";
import Image from "next/image";
import map from '../../../public/World Map.svg';
import res from '../../../public/res.svg';

const PartTimeCertificateCourse = () => {
  return (
    <section className="bg-main lg:bg-none relative w-full min-h-screen lg:h-[137vh] 2xl:h-[120vh]">
      <div className="absolute hidden md:flex top-[180px] 2xl:top-[150px]">
        <Image 
          src={imgCover}
          className="hidden lg:flex lg:max-h-[1000px] 2xl:max-h-[1100px] lg:w-[1500px] 2xl:w-[3000px]"
          alt="Background Image"
        />
        <Image 
          width={487}
          height={520}
          src={res}
          className="relative z-10 flex lg:hidden w-full"
          alt="Background Image"
        />
      </div>
      <Image 
        width={1000} 
        height={100} 
        className="hidden lg:flex lg:w-[1440px] xl:w-full 2xl:w-[3000px] h-[900px] lg:h-[756px] xl:h-[750px] 2xl:h-[850px] absolute top-0 left-0 z-10 object-cover" 
        src={cover} 
        alt="Orange Cover"
      />
      <div className="relative py-[30px] max-w-[1260px] mx-auto px-5 flex flex-col justify-center items-center gap-[16px] z-20">
        <div className="flex flex-col justify-center items-center text-center gap-[20px] mt-4">
          <div className='flex flex-col justify-center items-center gap-2'>
            <h1 className="text-white text-[2.125rem] font-bold leading-[36px]">
              Part-Time Certificate Courses
            </h1>
            <div className='w-[48px] h-[4px] rounded bg-[#FFCF00]'></div>
          </div>
          <p className="lg:w-[800px] xl:w-[1049px] text-gray-200 leading-[24px] text-[1rem] font-normal">
            Enroll in our flexible part-time courses and gain valuable certifications that will advance your career. Learn from experienced professionals and engage in hands-on projects to build your skills.
          </p>
        </div>

        {/* Courses */}
        <CourseCrd/>
      </div>

      <div className='relative z-[30] lg:bottom-[-10%] xl:bottom-[-8%] w-[90%] xl:w-[1040px] mx-auto xl:h-[276px] py-[34px] lg:py-[64px] px-[24px] lg:px-[88px] flex justify-between items-center bg-white overflow-hidden shadow-md rounded mb-8'>
        <div className="flex flex-col justify-center items-start gap-[55px] relative z-10">
          <div className="flex flex-col gap-9">
            <h1 className="text-[3.5rem] font-bold leading-[43px] text-black">100+</h1>
            <div className='w-[48px] h-[4px] rounded-full bg-[#FFCF00]'></div>
          </div>
          <p className='text-black text-[1.25rem] font-medium'>Countries</p>
        </div>
        <Image className="absolute top-[-5%] right-[-3%] w-[80%] xl:w-auto z-[5px]" src={map} alt="World Map"></Image>
      </div>
    </section>
  );
};

export default PartTimeCertificateCourse;
