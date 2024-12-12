'use client'

import Navbar from '@/components/LandingPageComponents/Navbar';
import React, { useRef, useState } from 'react'
import img from '../../../public/EdTech Platform Vector 13.svg';
import Image from 'next/image';
import GetStarted from '@/components/LandingPageComponents/GetStarted';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

const page = () => {
    const [clicked, setClicked] = useState('');
    const [boolclick, setBoolClick] = useState(false);

    let consultRef = useRef(null);

    const scrollToConsult = () => {
        if(consultRef.current){
          consultRef.current.scrollIntoView({behavior: 'smooth'})
        }
      }
    return (
        <main className='relative w-full'>
            <Navbar 
                clicked={clicked} 
                setClicked={setClicked} 
                boolclick={boolclick} 
                setBoolClick={setBoolClick} 
            />
            <section ref={consultRef} className='w-full overflow-hidden min-h-screen'>
                <Image width={1440} height={830} className='object-cover w-full absolute z-[5px] h-screen xl:h-auto' src={img} alt='Background Image'></Image>
                <div className='pt-[200px] px-6 xl:px-0 flex flex-col lg:flex-row justify-end items-start gap-10 max-w-[1250px] mx-auto'>
                    <div className='flex flex-col justify-center items-start gap-2 relative z-10 w-full xl:w-[50%]'>
                        <h1 className='w-full xl:w-[605px] font-bold leading-[55px] text-[2.75rem] text-white'>
                            How to Become a Web Developer
                        </h1>
                        <p className='w-full xl:w-[605px] text-[#FFFFFF] leading-[30px] font-normal text-base'>
                            The path to becoming a Web Developer involves mastering programming skills, problem-solving, and acquiring knowledge in system design, development, and testing. Whether you’re starting from scratch or looking to advance your career, this guide provides practical steps to help you succeed.
                        </p>
                    </div>
                    <GetStarted />
                </div>
            </section>

            <section className='py-[100px] max-w-[1200px] mx-auto px-6 xl:px-0 flex flex-col justify-center items-center gap-10'>
                <div className='w-full xl:w-[977px] flex flex-col justify-center items-start gap-10'>
                    <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                        The journey of a thousand miles begins with a single step. If you aspire to be a Web Developer, start by focusing on foundational skills, building real-world projects, and embracing continuous learning.
                    </p>
                    <div className='flex flex-col justify-center items-start gap-2'>
                        <div className='flex flex-col justify-center items-start gap-2'>
                            <h1 className='text-[#201A18] leading-[34.13px] text-[1.75rem] font-bold'>How to become a Web Developer:</h1>
                            <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
                        </div>
                        <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                            Start by exploring the various disciplines of Web Developering, such as frontend, backend, and mobile development. Choose the path that excites you the most and aligns with your career aspirations.
                        </p>
                    </div>
                </div>

                {[
                    {
                        step: "Step 1",
                        title: "Learn Web Developering Fundamentals",
                        texts: [
                            "Start by mastering a programming language, such as Python, JavaScript, or Java.",
                            "Understand the basics of algorithms, data structures, and system design.",
                            "Work on small projects to apply your knowledge in practical scenarios."
                        ]
                    },
                    {
                        step: "Step 2",
                        title: "Build Projects and Gain Experience",
                        texts: [
                            "Create personal projects to showcase your skills.",
                            "Contribute to open-source projects to collaborate with others.",
                            "Build a portfolio that highlights your best work."
                        ]
                    },
                    {
                        step: "Step 3",
                        title: "Learn Advanced Topics",
                        texts: [
                            "Deepen your knowledge in areas like cloud computing, databases, and APIs.",
                            "Explore frameworks and libraries relevant to your chosen field.",
                            "Understand the principles of software testing and debugging."
                        ]
                    },
                    {
                        step: "Step 4",
                        title: "Network and Seek Opportunities",
                        texts: [
                            "Attend tech meetups, webinars, and hackathons.",
                            "Join professional communities and connect with experienced developers.",
                            "Apply for internships and junior-level positions to gain industry experience."
                        ]
                    }
                ].map(({ step, title, texts }, index) => (
                    <div key={index} className='flex flex-col justify-center items-start gap-2 w-full lg:w-[835px]'>
                        <h2 className='text-[#201A18] text-base leading-[30px] font-normal uppercase'>{step}</h2>
                        <div className='flex flex-col justify-center items-start gap-2'>
                            <h1 className='text-[#201A18] leading-[34.13px] text-[1.75rem] font-bold'>{title}</h1>
                            <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
                        </div>
                        <div className='flex flex-col justify-center items-start gap-2'>
                            {texts.map((text, idx) => (
                                <p key={idx} className='text-[#655D59] text-base font-normal leading-[30px]'>{text}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </section>



        <div className='flex flex-col justify-between items-center gap-10 max-w-[1250px] mx-auto pb-[80px] px-6 xl:px-0'>
            <div className='bg-[#FF8C53] w-full xl:w-[1242px] mx-auto border-[2px] border-[#FF8C53] h-[1px] rounded'></div>
            <div className='w-full flex flex-col md:flex-row justify-between items-center pt-[10px]'>
                <div className='flex flex-col justify-center items-start gap-2'>
                    <Link href={`/become-a-software-engineer`} className='text-[#201A18] leading-[30px] font-normal text-[.75rem] flex justify-center items-center gap-2'>
                        <FaArrowLeft />
                        Previous
                    </Link>
                    <p className='text-[#F36400] leading-[30px] font-semibold text-[.875rem]'>Become a Software Engineer</p>
                </div>
                <div className='flex flex-col justify-center items-start gap-2'>
                    <Link href={`/become-a-ux-designer`} className='text-[#201A18] leading-[30px] font-normal text-[.75rem] flex justify-center items-center gap-2'>
                        Next
                        <FaArrowRight />
                    </Link>
                    <p className='text-[#F36400] leading-[30px] font-semibold text-[.875rem]'>Become a UX Designer</p>
                </div>
            </div>
        </div>

        <section className='w-full bg-[#E1884A] py-[100px] px-6 xl:px-0 xl:h-[624px]'>
            <div className='max-w-[1250px] mx-auto flex flex-col justify-center items-center gap-20'>
                <div className='w-full xl:w-[514px] flex flex-col justify-center items-center gap-20'>
                    <div className='text-center w-full xl:w-[514px] flex flex-col justify-center items-center gap-3'>
                        <h2 className='text-white text-[1rem] leading-[30px] font-normal uppercase'>get started</h2>
                        <div className='flex flex-col justify-center items-center gap-4'>
                            <h1 className='text-white leading-[34.13px] lg:leading-[55.5px] text-[1.75rem] lg:text-[2.5rem] font-bold'>Kickstart your Software Engineer Career</h1>
                            <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
                        </div>
                        <p className='text-white text-[1rem] lg:text-[1.125rem] leading-[30px] font-normal'>
                            The world needs designers who can create seamless, user-centered digital products. Start your UX design journey with Haelsoft EdTech and turn your passion into a fulfilling career.
                        </p>
                    </div>

                    <button onClick={scrollToConsult} className='bg-[#F36400] w-[221px] h-[50px] text-white leading-[30px] text-[.875rem] font-semibold gap-[10px] p-[10px] rounded border border-[#FF8C53]'>Request a Consultation</button>
                </div>
            </div>
        </section>
        </main>
    );
};

export default page;
