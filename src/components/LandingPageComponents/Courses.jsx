import React from 'react'
import online from '../../../public/assets/courses.svg'
import CourseCards from './CourseCards'
import Image from 'next/image'
 
const Courses = () => {
  
  return (
    <section className='pb-[40px] pt-[100px] lg:pb-0 relative lg:min-h-screen 2xl:h-[138vh] overflow-hidden'>
        <div className='flex flex-col justify-center items-center gap-6 px-5 lg:px-8 text-center'>
          <div className='flex flex-col justify-center items-center gap-5'>
            <h1 className='text-[#F36400] text-[2.125rem] font-semibold leading-9'>
              Transformative Online Courses for Future Leaders
            </h1>
            <div className='w-[48px] h-[4px] rounded bg-[#FFCF00]'></div>
          </div>
          <p className='w-full relative z-10 lg:w-[879px] text-center text-base text-grayTwo mb-5'>
            Our online classes are crafted to equip you with essential digital skills. With a select range of expert-led courses, you&apos;ll gain practical knowledge and hands-on experience in a flexible format. Discover our offerings and advance your career with targeted, high-impact learning.
          </p>
        </div>
        <div className='flex justify-start items-center max-w-[1000px] mx-auto mt-[6em] xl:mt-[7em] pb-5 px-10 xl:px-0'>
          <CourseCards/>
          <Image width={1200} src={online} className='hidden md:flex w-full xl:w-[1200px] lg:min-h-screen xl:h-[1350px] 2xl:h-[1435px] object-cover z-[5px] absolute right-[-5%]' alt="Workers" />
        </div>
    </section>
  )
}

export default Courses