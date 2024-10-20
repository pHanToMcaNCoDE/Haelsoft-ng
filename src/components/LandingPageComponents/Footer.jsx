import React, { useEffect, useState } from 'react'
import logo from '../../public/whiteLogo.svg'
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { FaXTwitter } from 'react-icons/fa6'
import Image from 'next/image'

const Footer = () => {
    const [year, setYear] = useState('')

    useEffect(() => {
        setYear(new Date().getFullYear())
    }, [])
  return (
    <footer className='bg-[#F36400] w-full pt-[70px] pb-[10px] px-5 xl:px-0'>
        <div className='max-w-[1200px] 2xl:max-w-[1500px] border-t-[3px] border-t-white pt-[100px] mx-auto flex flex-col lg:flex-row justify-center items-start gap-[6em] lg:gap-10 xl:gap-[6em]'>
            <div className='h-full flex flex-col justify-between items-start gap-6 xl:gap-[12.5em] 2xl:gap-[11em]'>
                <div className='flex flex-col gap-6 justify-center items-start'>
                    <Image className='object-contain' src={logo} alt="Haelsoft Logo" />
                    <p className='w-full sm:w-[296px] text-base font-normal text-white'>
                        Haelsoft&apos;s Data Science course was designed to groom for market-demanded data skills. Earn a Data Science certificate after learning the fundamentals of data science, data.
                    </p>
                </div>
                <div className="flex items-center gap-x-1 text-white">
                    <a href="https://www.linkedin.com/company/haelsoft">
                        <FaLinkedinIn size={25} />
                    </a>
                    <a href="https://www.linkedin.com/company/haelsoft/mycompany/">
                        <FaXTwitter size={25} />
                    </a>
                    <a href="https://www.instagram.com/haelsoft">
                        <FiInstagram size={25} />
                    </a>
                    <a href="https://wa.link/ul0ttk">
                        <FaWhatsapp size={25} />
                    </a>
                </div>
            </div>
            <div className='w-full grid grid-cols-1 lg:grid-cols-3 justify-items-start xl:justify-items-center gap-10 xl:gap-2 text-white'>
                <div className='w-full flex flex-col gap-6'>
                    <h1 className='uppercase font-bold text-[1.125rem] leading-[19.07px]'>Certificate Courses</h1>
                    <ul className='w-full flex flex-col gap-1'>
                        <li className='font-normal leading-[37.54px] text-[1rem]'>Artificial Intelligence</li>
                        <li className='font-normal leading-[37.54px] text-[1rem]'>Data Analytics</li>
                        <li className='font-normal leading-[37.54px] text-[1rem]'>Digital Marketing</li>
                        <li className='font-normal leading-[37.54px] text-[1rem]'>Python</li>
                        <li className='font-normal leading-[37.54px] text-[1rem]'>Search Engine Marketing </li>
                        <li className='font-normal leading-[37.54px] text-[1rem]'>Social Media Marketing</li>
                        <li className='font-normal leading-[37.54px] text-[1rem]'>User Experience Design</li>
                    </ul>
                </div>
                <div className='w-full flex flex-col gap-6'>
                    <div className='w-full flex flex-col gap-6'>
                        <h1 className='uppercase font-bold text-[1.125rem] leading-[19.07px]'>Leadership Courses</h1>
                        <ul className='w-full flex flex-col gap-1'>
                            <li className='font-normal leading-[37.54px] text-[1rem]'>Design Leadership</li>
                            <li className='font-normal leading-[37.54px] text-[1rem]'>Marketing Leadership</li>
                            <li className='font-normal leading-[37.54px] text-[1rem]'>Product Leadership</li>
                        </ul>
                    </div>

                    <div className='w-full flex flex-col gap-6'>
                        <h1 className='uppercase font-bold text-[1.125rem] leading-[19.07px]'>Corporate</h1>
                        <ul className='w-full flex flex-col gap-1'>
                            <li className='font-normal leading-[37.54px] text-[1rem]'>Corporate Training </li>
                            <li className='font-normal leading-[37.54px] text-[1rem]'>Hire a Ed-Tech Graduate</li>
                        </ul>
                    </div>

                    {/* <div className='w-full flex flex-col gap-6'>
                        <h1 className='uppercase font-bold text-[1.125rem] leading-[19.07px]'>Other Information</h1>
                        <ul className='w-full flex flex-col gap-1'>
                            <li className='font-normal leading-[37.54px] text-[1rem]'>Privacy Policy</li>
                            <li className='font-normal leading-[37.54px] text-[1rem]'>Terms of Service</li>
                        </ul>
                    </div> */}
                </div>
                <div className='w-full flex flex-col gap-6'>
                    <h1 className='uppercase font-bold text-[1.125rem] leading-[19.07px]'>About Us</h1>
                    <ul className='w-full flex flex-col gap-1'>
                        <li className='font-normal leading-[37.54px] text-[1rem]'>Blog</li>
                        <li className='font-normal leading-[37.54px] text-[1rem]'>Careers</li>
                        <li className='font-normal leading-[37.54px] text-[1rem]'>Our Story</li>
                        <li className='font-normal leading-[37.54px] text-[1rem]'>Reviews</li>
                    </ul>
                    <div className='w-full flex flex-col gap-6'>
                        <h1 className='uppercase font-bold text-[1.125rem] leading-[19.07px]'>Other Information</h1>
                        <ul className='w-full flex flex-col gap-1'>
                            <li className='font-normal leading-[37.54px] text-[1rem]'>Privacy Policy</li>
                            <li className='font-normal leading-[37.54px] text-[1rem]'>Terms of Service</li>
                        </ul>
                    </div>
                </div>
                <div className='w-full flex flex-col gap-6'>
                    <div className='w-full flex flex-col gap-6'>
                        <h1 className='uppercase font-bold text-[1.125rem] leading-[19.07px]'>Contact Information</h1>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                {/* <ul>
                    <h1></h1>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul> */}
            </div>
        </div> 
        <div className='text-center border-t-[3px] mt-8 max-w-[1200px] 2xl:max-w-[1500px] mx-auto border-t-white py-2 flex flex-col md:flex-row justify-between items-start lg:items-center gap-1 text-white'>
                <p className='font-normal leading-[21px] text-[.875rem]'>&copy; {year} Haelsoft. All rights reserved.</p>
                <ul className='flex justify-center space-x-4'>
                    <li className='font-normal leading-[21px] text-[.875rem]'>Privacy Policy</li>
                    <li className='font-normal leading-[21px] text-[.875rem]'>Terms & Conditions</li>
                </ul>
            </div>
    </footer>
  )
}

export default Footer