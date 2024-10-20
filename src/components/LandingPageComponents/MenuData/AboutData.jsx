import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const AboutData = () => {
  return (
    <div className='flex justify-center items-start gap-[4em] h-full w-full xl:max-w-[1500px] mx-auto'>
      <div className='h-full hidden lg:flex flex-col justify-start items-start gap-5'>
        <h1 className='text-[1.625rem] leading-9 font-semibold text-black'>About</h1>
        <p className='text-[.875rem] leading-[18px] font-normal text-[#655D59] w-full md:w-[398px]'>
          Learn more about our tailored corporate training programs designed to boost your team&apos;s expertise. With flexible online courses spanning 5 to 10 weeks, we ensure skill development that fits effortlessly into your schedule while delivering real-world, practical insights.
        </p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-6 lg:gap-10 w-full lg:w-auto'>
          <Link href={`/our-story`} className='bg-white text-[#201A18] hover:bg-[#F36400] hover:border-[2px] hover:border-[#F36400] hover:text-white cursor-pointer duration-150 p-[24px] shadow-l w-full xl:w-[309px] h-[130px] rounded border-[#EEEEEEEE] border-[2px] flex flex-col gap-2'>
              <div className='flex items-center gap-2'>
                  <h1 className='font-medium text-base hover:underline'>Our Story</h1>
                  <IoIosArrowForward className='text-base' />
              </div>
              <p className='leading-[18px] w-[243px] font-normal text-[0.75rem]'>
                  Build and showcase your Data Science portfolio through many projects you will undertake while 
              </p>
          </Link>
          <div className='bg-white text-[#201A18] hover:bg-[#F36400] hover:border-[2px] hover:border-[#F36400] hover:text-white cursor-pointer duration-200 p-[24px] shadow-l w-full xl:w-[309px] h-[130px] rounded border-[#EEEEEEEE] border-[2px] flex flex-col gap-2'>
            <div className='flex items-center gap-2'>
              <h1 className='font-medium text-base hover:underline'>Testimonials</h1>
              <IoIosArrowForward className='text-base' />
            </div>
            <p className='leading-[18px] w-[243px] font-normal text-[0.75rem]'>
              Build and showcase your Data Science portfolio through many projects you will undertake while 
            </p>
          </div>
          <Link href={`/careers`} className='bg-white text-[#201A18] hover:bg-[#F36400] hover:border-[2px] hover:border-[#F36400] hover:text-white cursor-pointer duration-200 p-[24px] shadow-l w-full xl:w-[309px] h-[130px] rounded border-[#EEEEEEEE] border-[2px] flex flex-col gap-2'>
            <div className='flex items-center gap-2'>
              <h1 className='font-medium text-base hover:underline'>Careers</h1>
              <IoIosArrowForward className='text-base' />
            </div>
            <p className='leading-[18px] w-[243px] font-normal text-[0.75rem]'>
              Build and showcase your Data Science portfolio through many projects you will undertake while 
            </p>
          </Link>
      </div>
    </div>
  )
}

export default AboutData