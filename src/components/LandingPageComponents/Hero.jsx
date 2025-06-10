import React from 'react';
// import video from '../../../public/assets/Student note over wooden desk.mp4';
import { BsArrow90DegRight } from "react-icons/bs";

const Hero = ({scrollToCourses}) => {
  return (
    <section className='w-full relative hero h-[70vh] lg:h-[694px]'>
      <video autoPlay muted loop playsInline className="hero-video">
        <source src='/assets/Student note over wooden desk.mp4' type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content px-5 lg:px-8 w-full gap-[2em]">
        <div className='max-w-[1200px] 2xl:max-w-[1530px] mx-auto'>
            <div className='flex flex-col gap-[6em] py-[100px]'>
                <div className='flex flex-col gap-2'>
                  <h1 className='text-[3.5rem] lg:text-[4.313rem] text-left text-[#FFCF00] font-semibold leading-[55px] lg:leading-[75px]'>Innovate. Lead. Succeed.</h1>
                  <p className='text-[1.25rem] leading-6 text-white text-left'>Jumpstart Your Career and Lead the Future</p>
                </div>
                <button onClick={scrollToCourses} className="py-[15px] border border-[#F36400] bg-[#F36400] text-white font-semibold  text-[.875rem] h-[48.4px] w-[181px] flex justify-center items-center gap-4 rounded">
                  Browse Courses
                  <BsArrow90DegRight className='text-[1rem] font-bold rotate-[90deg]' />
                </button>
            </div>
        </div>
      </div>

      <div className='absolute bg-[#D98E47]/70 md:bg-[#D98E47]/[20%] w-full h-screen'></div>
    </section>
  );
};

export default Hero;
