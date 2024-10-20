import React from 'react'
import { FaCode, FaSearchDollar } from 'react-icons/fa'
import { MdContactMail, MdOutlineDesignServices } from 'react-icons/md'
import { TbAtom } from 'react-icons/tb'

const CoursesData = () => {
  return (
    <div className='flex justify-start xl:justify-center items-start gap-[4em] h-full w-full xl:max-w-[1500px] mx-auto'>
        <div className='h-full hidden lg:flex flex-col justify-start items-start gap-5'>
            <h1 className='text-[1.625rem] leading-9 font-semibold text-black'>Certificate Courses</h1>
            <p className='text-[.875rem] leading-[18px] font-normal text-[#655D59] w-full md:w-[398px]'>
                Master a new digital skill with our flexible, part-time certificate programs, available online. Designed to fit your schedule, these courses range from 5 to 10 weeks, offering hands-on learning to help you advance your career.
            </p>
        </div>
        <div className='hidden xl:grid grid-cols-1 xl:grid-cols-3 justify-items-start gap-4 xl:h-full'>
            <div className='w-full flex flex-col justify-start items-start gap-3'>
                <h1 className='text-base font-semibold text-black'>Development</h1>
                <ul className='flex flex-col justify-start items-start gap-3'>
                    <li className='relative text-[.875rem] leading-[18px] font-normal text-[#655D59] cursor-pointer before:absolute before:w-0 pb-1 before:h-[2px] before:bg-[#F36400] before:bottom-0 before:left-0 before:duration-200 hover:before:w-[55px]'>
                        Frontend Development
                    </li>
                    <li className='relative text-[.875rem] leading-[18px] font-normal text-[#655D59] cursor-pointer before:absolute before:w-0 pb-1 before:h-[2px] before:bg-[#F36400] before:bottom-0 before:left-0 before:duration-200 hover:before:w-[55px]'>
                        Backend Development
                    </li>
                    <li className='relative text-[.875rem] leading-[18px] font-normal text-[#655D59] cursor-pointer before:absolute before:w-0 pb-1 before:h-[2px] before:bg-[#F36400] before:bottom-0 before:left-0 before:duration-200 hover:before:w-[55px]'>
                        Full-Stack Development
                    </li>
                    {/* <li className='relative text-[.875rem] leading-[18px] font-normal text-[#655D59] cursor-pointer before:absolute before:w-0 pb-1 before:h-[2px] before:bg-[#F36400] before:bottom-0 before:left-0 before:duration-200 hover:before:w-[55px]'>
                        Block-Chain Development
                    </li> */}
                </ul>
            </div>
            <div className='w-full flex flex-col justify-start items-start gap-3'>
                <h1 className='text-base font-semibold text-black'>Data + AI</h1>
                <ul className='flex flex-col justify-start items-start gap-3'>
                    <li className='relative text-[.875rem] leading-[18px] font-normal text-[#655D59] cursor-pointer before:absolute before:w-0 pb-1 before:h-[2px] before:bg-[#F36400] before:bottom-0 before:left-0 before:duration-200 hover:before:w-[55px]'>Data Analytics</li>
                    <li className='relative text-[.875rem] leading-[18px] font-normal text-[#655D59] cursor-pointer before:absolute before:w-0 pb-1 before:h-[2px] before:bg-[#F36400] before:bottom-0 before:left-0 before:duration-200 hover:before:w-[55px]'>Data Science</li>
                    <li className='relative text-[.875rem] leading-[18px] font-normal text-[#655D59] cursor-pointer before:absolute before:w-0 pb-1 before:h-[2px] before:bg-[#F36400] before:bottom-0 before:left-0 before:duration-200 hover:before:w-[55px]'>Artificial Intelligence</li>
                    <li className='relative text-[.875rem] leading-[18px] font-normal text-[#655D59] cursor-pointer before:absolute before:w-0 pb-1 before:h-[2px] before:bg-[#F36400] before:bottom-0 before:left-0 before:duration-200 hover:before:w-[55px]'>Python</li>
                </ul>
            </div>
            <div className='w-full flex flex-col justify-start items-start gap-3'>
                <h1 className='text-base font-semibold text-black'>Design</h1>
                <ul className='flex flex-col justify-start items-start gap-3'>
                    <li className='relative text-[.875rem] leading-[18px] font-normal text-[#655D59] cursor-pointer before:absolute before:w-0 pb-1 before:h-[2px] before:bg-[#F36400] before:bottom-0 before:left-0 before:duration-200 hover:before:w-[55px]'>UI Design</li>
                    <li className='relative text-[.875rem] leading-[18px] font-normal text-[#655D59] cursor-pointer before:absolute before:w-0 pb-1 before:h-[2px] before:bg-[#F36400] before:bottom-0 before:left-0 before:duration-200 hover:before:w-[55px]'>UX Design</li>
                </ul>
            </div>
            <div className='w-full flex flex-col justify-start items-start gap-3'>
                <h1 className='text-base font-semibold text-black'>Digital Marketing</h1>
                <ul className='flex flex-col justify-start items-start gap-3'>
                    <li className='relative text-[.875rem] leading-[18px] font-normal text-[#655D59] cursor-pointer before:absolute before:w-0 pb-1 before:h-[2px] before:bg-[#F36400] before:bottom-0 before:left-0 before:duration-200 hover:before:w-[55px]'>Digital Marketing</li>
                </ul>
            </div>
            <div className='w-full flex flex-col justify-start items-start gap-3'>
                <h1 className='text-base font-semibold text-black'>Search Engine Optimization</h1>
                <ul className='flex flex-col justify-start items-start gap-3'>
                    <li className='relative text-[.875rem] leading-[18px] font-normal text-[#655D59] cursor-pointer before:absolute before:w-0 pb-1 before:h-[2px] before:bg-[#F36400] before:bottom-0 before:left-0 before:duration-200 hover:before:w-[55px]'>SEO Fundamentals</li>
                    <li className='relative text-[.875rem] leading-[18px] font-normal text-[#655D59] cursor-pointer before:absolute before:w-0 pb-1 before:h-[2px] before:bg-[#F36400] before:bottom-0 before:left-0 before:duration-200 hover:before:w-[55px]'>Advance SEO Concepts</li>
                </ul>
            </div>
        </div>


        <div className='xl:hidden grid grid-cols-1 xl:grid-cols-3 justify-items-start gap-10 xl:h-full w-full'>
            <div className='w-full flex flex-col justify-start items-start gap-3'>
                <div className='flex justify-center items-center gap-2'>
                    <FaCode className='text-[1.5rem]' />
                    <h1 className='text-base font-semibold text-black'>Development</h1>
                </div>
                <ul className='flex flex-col justify-start items-start gap-3 mx-8'>
                    <li className='relative text-[.875rem] leading-[18px] font-normal text-[#655D59] cursor-pointer before:absolute before:w-0 pb-1 before:h-[2px] before:bg-[#F36400] before:bottom-0 before:left-0 before:duration-200 hover:before:w-[55px]'>
                        Frontend Development
                    </li>
                    <li className='relative text-[.875rem] leading-[18px] font-normal text-[#655D59] cursor-pointer before:absolute before:w-0 pb-1 before:h-[2px] before:bg-[#F36400] before:bottom-0 before:left-0 before:duration-200 hover:before:w-[55px]'>
                        Backend Development
                    </li>
                    <li className='relative text-[.875rem] leading-[18px] font-normal text-[#655D59] cursor-pointer before:absolute before:w-0 pb-1 before:h-[2px] before:bg-[#F36400] before:bottom-0 before:left-0 before:duration-200 hover:before:w-[55px]'>
                        Full-Stack Development
                    </li>
                    {/* <li className='relative text-[.875rem] leading-[18px] font-normal text-[#655D59] cursor-pointer before:absolute before:w-0 pb-1 before:h-[2px] before:bg-[#F36400] before:bottom-0 before:left-0 before:duration-200 hover:before:w-[55px]'>
                        Block-Chain Development
                    </li> */}
                </ul>
            </div>
            <div className='w-full flex flex-col justify-start items-start gap-3'>
                <div className='flex justify-center items-center gap-2'>
                    <TbAtom className='text-[1.5rem]'/>
                    <h1 className='text-base font-semibold text-black'>Data + AI</h1>
                </div>
                <ul className='flex flex-col justify-start items-start gap-3 mx-8'>
                    <li className='relative text-[.875rem] leading-[18px] font-normal text-[#655D59] cursor-pointer before:absolute before:w-0 pb-1 before:h-[2px] before:bg-[#F36400] before:bottom-0 before:left-0 before:duration-200 hover:before:w-[55px]'>Data Analytics</li>
                    <li className='relative text-[.875rem] leading-[18px] font-normal text-[#655D59] cursor-pointer before:absolute before:w-0 pb-1 before:h-[2px] before:bg-[#F36400] before:bottom-0 before:left-0 before:duration-200 hover:before:w-[55px]'>Data Science</li>
                    <li className='relative text-[.875rem] leading-[18px] font-normal text-[#655D59] cursor-pointer before:absolute before:w-0 pb-1 before:h-[2px] before:bg-[#F36400] before:bottom-0 before:left-0 before:duration-200 hover:before:w-[55px]'>Artificial Intelligence</li>
                    <li className='relative text-[.875rem] leading-[18px] font-normal text-[#655D59] cursor-pointer before:absolute before:w-0 pb-1 before:h-[2px] before:bg-[#F36400] before:bottom-0 before:left-0 before:duration-200 hover:before:w-[55px]'>Python</li>
                </ul>
            </div>
            <div className='w-full flex flex-col justify-start items-start gap-3'>
                <div className='flex justify-center items-center gap-2'>
                    <MdOutlineDesignServices className='text-[1.5rem]' />
                    <h1 className='text-base font-semibold text-black'>Design</h1>
                </div>
                <ul className='flex flex-col justify-start items-start gap-3 mx-8'>
                    <li className='relative text-[.875rem] leading-[18px] font-normal text-[#655D59] cursor-pointer before:absolute before:w-0 pb-1 before:h-[2px] before:bg-[#F36400] before:bottom-0 before:left-0 before:duration-200 hover:before:w-[55px]'>UI Design</li>
                    <li className='relative text-[.875rem] leading-[18px] font-normal text-[#655D59] cursor-pointer before:absolute before:w-0 pb-1 before:h-[2px] before:bg-[#F36400] before:bottom-0 before:left-0 before:duration-200 hover:before:w-[55px]'>UX Design</li>
                </ul>
            </div>
            <div className='w-full flex flex-col justify-start items-start gap-3'>
                <div className='flex justify-center items-center gap-2'>
                    <MdContactMail className='text-2xl' />
                    <h1 className='text-base font-semibold text-black'>Digital Marketing</h1>
                </div>
                <ul className='flex flex-col justify-start items-start gap-3 mx-8'>
                    <li className='relative text-[.875rem] leading-[18px] font-normal text-[#655D59] cursor-pointer before:absolute before:w-0 pb-1 before:h-[2px] before:bg-[#F36400] before:bottom-0 before:left-0 before:duration-200 hover:before:w-[55px]'>Digital Marketing</li>
                </ul>
            </div>
            <div className='w-full flex flex-col justify-start items-start gap-3'>
                <div className='flex justify-center items-center gap-2'>
                    <FaSearchDollar className='text-2xl' />
                    <h1 className='text-base font-semibold text-black'>Search Engine Optimization</h1>
                </div>
                <ul className='flex flex-col justify-start items-start gap-3 mx-8'>
                    <li className='relative text-[.875rem] leading-[18px] font-normal text-[#655D59] cursor-pointer before:absolute before:w-0 pb-1 before:h-[2px] before:bg-[#F36400] before:bottom-0 before:left-0 before:duration-200 hover:before:w-[55px]'>SEO Fundamentals</li>
                    <li className='relative text-[.875rem] leading-[18px] font-normal text-[#655D59] cursor-pointer before:absolute before:w-0 pb-1 before:h-[2px] before:bg-[#F36400] before:bottom-0 before:left-0 before:duration-200 hover:before:w-[55px]'>Advance SEO Concepts</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default CoursesData