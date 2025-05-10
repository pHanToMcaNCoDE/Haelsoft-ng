import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const CorporateData = () => {
  return (
    <div className='flex justify-center items-start gap-[4em] h-full w-full xl:max-w-[1500px] mx-auto'>
        <div className='h-full hidden lg:flex flex-col justify-start items-start gap-5'>
            <h1 className='text-[1.625rem] leading-9 font-semibold text-black'>Corporate</h1>
            <p className='text-[.875rem] leading-[18px] font-normal text-grayTwo w-full md:w-[398px]'>
                Enhance your team’s skills with our flexible corporate training programs. These online courses, ranging from 5 to 10 weeks, fit seamlessly into busy schedules and offer practical, hands-on learning.
            </p>
        </div>
        <div className='flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-10 w-full lg:w-auto'>
            <Link href={`/corporate-hire`} className='bg-white text-[#201A18] hover:bg-[#F36400] hover:border-[2px] hover:border-[#F36400] hover:text-white cursor-pointer duration-150 p-[24px] shadow-l w-full xl:w-[309px] h-[130px] rounded border-[#EEEEEEEE] border-[2px] flex flex-col gap-2'>
                <div className='flex items-center gap-2'>
                    <h1 className='font-medium text-base hover:underline'>Hire an Ed-tech Graduate</h1>
                    <IoIosArrowForward className='text-base' />
                </div>
                <p className='leading-[18px] w-[243px] font-normal text-[0.75rem]'>
                    Build and showcase your Data Science portfolio through many projects you will undertake while 
                </p>
            </Link>
            <Link href={`/corporate-training`} className='bg-white text-[#201A18] hover:bg-[#F36400] hover:border-[2px] hover:border-[#F36400] hover:text-white cursor-pointer duration-200 p-[24px] shadow-l w-full xl:w-[309px] h-[130px] rounded border-[#EEEEEEEE] border-[2px] flex flex-col gap-2'>
                <div className='flex items-center gap-2'>
                    <h1 className='font-medium text-base hover:underline'>Corporate Training</h1>
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

export default CorporateData