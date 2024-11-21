import Image from 'next/image'
import React from 'react'
import ai from '../../../public/EdTech Platform Creative 2.svg';
import ux from '../../../public/EdTech Platform Design 3.svg';
import sm from '../../../public/EdTech Platform Marketing.svg';
import dm from '../../../public/Digital Marketing 2.svg';
import se from '../../../public/Paid Search.svg';

const EdtechRoles = () => {
  return (
    <section className='max-w-[1400px] mx-auto px-5 py-[100px] flex flex-col gap-[60px]'>
        <h1 className='text-[#F36400] font-semibold text-[1.5rem] leading-[36px]'>Ed-Tech Graduates Fit In Following Roles</h1>
        <div className='w-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-[65px] lg:justify-items-center'>
            <ul className='flex flex-col gap-4'>
                <Image src={dm} alt='Digital Marketing Icon'></Image>
                <h2 className='texr-[#655D59] leading-[21.94px] text-[1.125rem] font-semibold'>Digital Marketing</h2>            
                <div>
                    <li className='text-[#655D59] leading-[30px] text-[1rem] font-normal'>Data Scientist</li>
                    <li className='text-[#655D59] leading-[30px] text-[1rem] font-normal'>Data Analyst</li>
                    <li className='text-[#655D59] leading-[30px] text-[1rem] font-normal'>Data Engineer</li>
                    <li className='text-[#655D59] leading-[30px] text-[1rem] font-normal'>Consultant</li>
                    <li className='text-[#655D59] leading-[30px] text-[1rem] font-normal'>Product Manager</li>
                </div>
            </ul>
            {/* <ul className='flex flex-col gap-4'>
                <h2 className='texr-[#201A18] leading-[43px] text-[1.125rem] font-medium'>Data Science</h2>
                <div>
                    <li className='text-[#000000] leading-[43px] text-[1rem] font-normal'>Data Scientist</li>
                    <li className='text-[#000000] leading-[43px] text-[1rem] font-normal'>Data Analyst</li>
                    <li className='text-[#000000] leading-[43px] text-[1rem] font-normal'>Data Engineer</li>
                    <li className='text-[#000000] leading-[43px] text-[1rem] font-normal'>Consultant</li>
                    <li className='text-[#000000] leading-[43px] text-[1rem] font-normal'>Product Manager</li>
                </div>
            </ul> */}
            <ul className='flex flex-col gap-4'>
                <Image src={ux} alt='UX Icon'></Image>
                <h2 className='texr-[#655D59] leading-[21.94px] text-[1.125rem] font-semibold'>Ux Design</h2>
                <div>
                    <li className='text-[#655D59] leading-[30px] text-[1rem] font-normal'>Data Scientist</li>
                    <li className='text-[#655D59] leading-[30px] text-[1rem] font-normal'>Data Analyst</li>
                    <li className='text-[#655D59] leading-[30px] text-[1rem] font-normal'>Data Engineer</li>
                    <li className='text-[#655D59] leading-[30px] text-[1rem] font-normal'>Consultant</li>
                    <li className='text-[#655D59] leading-[30px] text-[1rem] font-normal'>Product Manager</li>
                </div>
            </ul>
            <ul className='flex flex-col gap-4'>
                <Image src={sm} alt='Social Media Marketing Icon'></Image>
                <h2 className='texr-[#655D59] leading-[21.94px] text-[1.125rem] font-semibold'>Social Media Marketing</h2>
                <div>
                    <li className='text-[#655D59] leading-[30px] text-[1rem] font-normal'>Data Scientist</li>
                    <li className='text-[#655D59] leading-[30px] text-[1rem] font-normal'>Data Analyst</li>
                    <li className='text-[#655D59] leading-[30px] text-[1rem] font-normal'>Data Engineer</li>
                    <li className='text-[#655D59] leading-[30px] text-[1rem] font-normal'>Consultant</li>
                    <li className='text-[#655D59] leading-[30px] text-[1rem] font-normal'>Product Manager</li>
                </div>
            </ul>
            <ul className='flex flex-col gap-4'>
                <Image src={ai} alt='AI icon'></Image>
                <h2 className='texr-[#655D59] leading-[21.94px] text-[1.125rem] font-semibold'>Artificial Intelligence</h2>
                <div>
                    <li className='text-[#655D59] leading-[30px] text-[1rem] font-normal'>Data Scientist</li>
                    <li className='text-[#655D59] leading-[30px] text-[1rem] font-normal'>Data Analyst</li>
                    <li className='text-[#655D59] leading-[30px] text-[1rem] font-normal'>Data Engineer</li>
                    <li className='text-[#655D59] leading-[30px] text-[1rem] font-normal'>Consultant</li>
                    <li className='text-[#655D59] leading-[30px] text-[1rem] font-normal'>Product Manager</li>
                </div>
            </ul>
            <ul className='flex flex-col gap-4'>
                <Image src={se} alt='UX Icon'></Image>
                <h2 className='texr-[#655D59] leading-[21.94px] text-[1.125rem] font-semibold'>Search Engine Marketing</h2>
                <div>
                    <li className='text-[#655D59] leading-[30px] text-[1rem] font-normal'>Data Scientist</li>
                    <li className='text-[#655D59] leading-[30px] text-[1rem] font-normal'>Data Analyst</li>
                    <li className='text-[#655D59] leading-[30px] text-[1rem] font-normal'>Data Engineer</li>
                    <li className='text-[#655D59] leading-[30px] text-[1rem] font-normal'>Consultant</li>
                    <li className='text-[#655D59] leading-[30px] text-[1rem] font-normal'>Product Manager</li>
                </div>
            </ul>
        </div>
    </section>
  )
}

export default EdtechRoles