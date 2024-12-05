'use client'

import Navbar from '@/components/LandingPageComponents/Navbar';
import React, { useState } from 'react'
import img from '../../../public/EdTech Platform Vector 13.svg';
import Image from 'next/image';
import GetStarted from '@/components/LandingPageComponents/GetStarted';

const page = () => {
    const [clicked, setClicked] = useState('');
    const [boolclick, setBoolClick] = useState(false);
    
  return (
    <main className='relative w-full'>
        <Navbar 
            clicked={clicked} 
            setClicked={setClicked} 
            boolclick={boolclick} 
            setBoolClick={setBoolClick} 
        />
        <section className='w-full overflow-hidden min-h-screen'>
            <Image width={1440} height={830} className='object-cover w-full absolute z-[5px] h-screen xl:h-auto' src={img} alt='Background Image'></Image>
            <div className='pt-[200px] px-6 xl:px-0 flex flex-col lg:flex-row justify-end items-start gap-10 max-w-[1250px] mx-auto'>
                <div className='flex flex-col justify-center items-start gap-2 relative z-10 w-full xl:w-[50%]'>
                    <h1 className='w-full xl:w-[605px] font-bold leading-[55px] text-[2.75rem] text-white'>
                        Become a Digital Marketer with Haelsoft EdTech
                    </h1>
                    <p className='w-full xl:w-[605px] text-[#FFFFFF] leading-[30px] font-normal text-base'>
                        Transform your creativity into a thriving career in the fast-paced world of digital marketing!
                    </p>
                </div>
                <GetStarted/>
            </div>
        </section>

        <section className='py-[100px] max-w-[1200px] mx-auto px-6 xl:px-0 flex flex-col justify-center items-center gap-10'>
           <div className='w-full xl:w-[838px] flex flex-col justify-center items-start gap-10'>
                <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                    Digital marketing is one of the fastest-growing industries, offering endless opportunities to innovate and succeed. Businesses of all sizes need digital marketers to grow their online presence, making this a great career choice.
                </p>
                <div className='flex flex-col justify-center items-start gap-2'>
                    <h2 className='text-[#201A18] text-base leading-[30px] font-normal'>Why Choose a Career in Digital Marketing?</h2>
                    <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                        Digital marketing is booming. It's a field with high demand, diverse opportunities, flexibility, and attractive earnings potential.
                    </p>
                </div>
           </div>

           <div className='flex flex-col justify-center items-start gap-10 w-full xl:w-[838px]'>
                <div className='flex flex-col justify-center items-start gap-2'>
                    <h2 className='text-[#201A18] text-base leading-[30px] font-normal uppercase'>Why Learn Digital Marketing with Haelsoft EdTech?</h2>
                    <div className='flex flex-col justify-center items-start gap-2'>
                        <h1 className='text-[#201A18] leading-[34.13px] text-[1.75rem] font-bold'>Comprehensive Curriculum</h1>
                        <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
                    </div>
                    <div className='flex flex-col justify-center items-start gap-2'>
                        <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                            Learn all aspects of digital marketing, from strategy to execution, across multiple platforms.
                        </p>
                    </div>
                </div>


                <div className='flex flex-col justify-center items-start gap-2'>
                    <h2 className='text-[#201A18] text-base leading-[30px] font-normal uppercase'>Step 1</h2>
                    <div className='flex flex-col justify-center items-start gap-2'>
                        <h1 className='text-[#201A18] leading-[34.13px] text-[1.75rem] font-bold'>Hands-On Training</h1>
                        <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
                    </div>
                    <div className='flex flex-col justify-center items-start gap-2'>
                        <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                            Work on live projects and campaigns to gain practical experience.
                        </p>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-start gap-2'>
                    <h2 className='text-[#201A18] text-base leading-[30px] font-normal uppercase'>Step 2</h2>
                    <div className='flex flex-col justify-center items-start gap-2'>
                        <h1 className='text-[#201A18] leading-[34.13px] text-[1.75rem] font-bold'>Expert Mentorship</h1>
                        <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
                    </div>
                    <div className='flex flex-col justify-center items-start gap-2'>
                        <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                            Learn from industry leaders who have years of real-world digital marketing expertise.
                        </p>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-start gap-2'>
                    <h2 className='text-[#201A18] text-base leading-[30px] font-normal uppercase'>Step 3</h2>
                    <div className='flex flex-col justify-center items-start gap-2'>
                        <h1 className='text-[#201A18] leading-[34.13px] text-[1.75rem] font-bold'>Flexible Online Learning</h1>
                        <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
                    </div>
                    <div className='flex flex-col justify-center items-start gap-7'>
                        <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                            Access our self-paced modules anytime, anywhere, with live support when you need it.
                        </p>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-start gap-2'>
                    <h2 className='text-[#201A18] text-base leading-[30px] font-normal uppercase'>Step 4</h2>
                    <div className='flex flex-col justify-center items-start gap-2'>
                        <h1 className='text-[#201A18] leading-[34.13px] text-[1.75rem] font-bold'>Career Advancement Support</h1>
                        <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
                    </div>
                    <div className='flex flex-col justify-center items-start gap-7'>
                        <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                            Get resume-building guidance, interview preparation, and job placement assistance.
                        </p>
                    </div>
                </div>
            </div>

            <div className='w-full xl:w-[977px] flex flex-col justify-center items-start gap-20 pt-[200px]'>
                    <div className='flex flex-col justify-center items-start gap-4'>
                        <h1 className='text-[#201A18] leading-[34.13px] text-[1.75rem] font-bold'>What You’ll Learn</h1>
                        <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
                    </div>
                    
                    <div className='flex flex-col justify-center items-start gap-2 w-full xl:w-[838px] mx-auto'>
                        <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                            Our program covers every essential skill and tool for a successful digital marketing career:
                        </p>
                        <ul className='list-disc ml-6 text-[#655D59] text-base font-normal leading-[30px]'>
                            <li>Search Engine Optimization (SEO): Rank websites on search engines and increase organic traffic.</li>
                            <li>Social Media Marketing: Build brand awareness and engagement across platforms like Facebook, Instagram, and LinkedIn.</li>
                            <li>Content Marketing: Create compelling content that drives traffic and conversions.</li>
                            <li>Email Marketing: Design and run campaigns that boost customer retention and sales.</li>
                            <li>Pay-Per-Click (PPC) Advertising: Master Google Ads and other platforms for targeted advertising.</li>
                            <li>Analytics & Reporting: Use tools like Google Analytics to track and optimize campaign performance.</li>
                            <li>Marketing Automation: Automate marketing processes and workflows for improved efficiency.</li>
                        </ul>
                    </div>
            </div>
        </section>
    </main>
  )
}

export default page
