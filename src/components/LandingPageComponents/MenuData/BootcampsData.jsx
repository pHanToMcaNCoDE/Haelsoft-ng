import React from 'react'
import { FaCode, FaSearchDollar } from 'react-icons/fa'
import { FiSettings } from 'react-icons/fi'
import { IoIosArrowForward } from 'react-icons/io'
import { LuScatterChart } from 'react-icons/lu'
import { MdBorderColor, MdContactMail, MdOutlineDesignServices } from 'react-icons/md'
import { TbAtom } from 'react-icons/tb'

const BootcampsData = () => {
  return (
    <div className='flex justify-normal xl:justify-center items-start gap-[4em] h-full w-full xl:max-w-[1500px] mx-auto'>
        <div className='h-full hidden xl:flex flex-col justify-start items-start gap-5'>
          <h1 className='text-[1.625rem] leading-9 font-semibold text-black'>Bootcamps</h1>
          <p className='text-[.875rem] leading-[18px] font-normal text-[#655D59] w-full md:w-[398px]'>
            Enhance your skills with our comprehensive bootcamps. Our part-time certificate programs, available online, are designed to fit into your busy schedule. Spanning 5 to 10 weeks, these courses provide practical, hands-on training to help you advance in your career and gain expertise in the latest digital technologies.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center w-full xl:w-auto gap-6'>
          <div className='bg-white text-[#201A18] hover:bg-[#F36400] hover:border-[#F36400] hover:text-white cursor-pointer duration-150 p-[24px] shadow-l w-full xl:w-[309px] h-[78px] rounded border-[#EEEEEEEE] border-[2px] flex justify-between items-center gap-2'>
            <div className='flex justify-center items-center gap-3'>
            <TbAtom className='text-2xl' />
              <h1 className='font-semibold text-[.875rem] leading-5 w-[198px]'>Data Science Bootcamp</h1>
            </div>
            <IoIosArrowForward className='text-base' />
          </div>

          <div className='bg-white text-[#201A18] hover:bg-[#F36400] hover:border-[#F36400] hover:text-white cursor-pointer duration-150 p-[24px] shadow-l w-full xl:w-[309px] h-[78px] rounded border-[#EEEEEEEE] border-[2px] flex justify-between items-center gap-2'>
            <div className='flex justify-center items-center gap-3'>
              <MdContactMail className='text-2xl' />
              <h1 className='font-semibold text-[.875rem] leading-5 w-[198px]'>Digital Marketing Bootcamp</h1>
            </div>
            <IoIosArrowForward className='text-base' />
          </div>

          <div className='bg-white text-[#201A18] hover:bg-[#F36400] hover:border-[#F36400] hover:text-white cursor-pointer duration-150 p-[24px] shadow-l w-full xl:w-[309px] h-[78px] rounded border-[#EEEEEEEE] border-[2px] flex justify-between items-center gap-2'>
            <div className='flex justify-center items-center gap-3'>
              <FaSearchDollar className='text-2xl' />
              <h1 className='font-semibold text-[.875rem] leading-5 w-[198px]'>SEO Bootcamp</h1>
            </div>
            <IoIosArrowForward className='text-base' />
          </div>

          <div className='bg-white text-[#201A18] hover:bg-[#F36400] hover:border-[#F36400] hover:text-white cursor-pointer duration-150 p-[24px] shadow-l w-full xl:w-[309px] h-[78px] rounded border-[#EEEEEEEE] border-[2px] flex justify-between items-center gap-2'>
            <div className='flex justify-center items-center gap-3'>
              <MdOutlineDesignServices className='text-2xl' />
              <h1 className='font-semibold text-[.875rem] leading-5 w-[198px]'>UI Design Bootcamp</h1>
            </div>
            <IoIosArrowForward className='text-base' />
          </div>

          <div className='bg-white text-[#201A18] hover:bg-[#F36400] hover:border-[#F36400] hover:text-white cursor-pointer duration-150 p-[24px] shadow-l w-full xl:w-[309px] h-[78px] rounded border-[#EEEEEEEE] border-[2px] flex justify-between items-center gap-2'>
            <div className='flex justify-center items-center gap-3'>
              <MdBorderColor className='text-2xl' />
              <h1 className='font-semibold text-[.875rem] leading-5 w-[198px]'>UX Design Bootcamp</h1>
            </div>
            <IoIosArrowForward className='text-base' />
          </div>

          <div className='bg-white text-[#201A18] hover:bg-[#F36400] hover:border-[#F36400] hover:text-white cursor-pointer duration-150 p-[24px] shadow-l w-full xl:w-[309px] h-[78px] rounded border-[#EEEEEEEE] border-[2px] flex justify-between items-center gap-2'>
            <div className='flex justify-center items-center gap-3'>
              <FaCode className='text-2xl' />
              <h1 className='font-semibold text-[.875rem] leading-5 w-[198px]'>Web Development Bootcamp</h1>
            </div>
            <IoIosArrowForward className='text-xl' />
          </div>
        </div>
    </div>
  )
}

export default BootcampsData