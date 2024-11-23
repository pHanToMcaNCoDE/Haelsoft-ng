'use client'

import Navbar from '@/components/LandingPageComponents/Navbar';
import React, { useState } from 'react'
import img from '../../../public/EdTech Platform Vector 13.svg';
import Image from 'next/image';
import GetStarted from '@/components/LandingPageComponents/GetStarted';

const page = () => {
    const [clicked, setClicked] = useState('');
    const [boolclick, setBoolClick] = useState(false);
  
    const handlePageClick = () => {
      setBoolClick(false);
      setClicked('');
    };
  return (
    <main className='relative w-full' onClick={handlePageClick}>
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
                        How to Become a Software Engineer
                    </h1>
                    <p className='w-full xl:w-[605px] text-[#FFFFFF] leading-[30px] font-normal text-base'>
                        Discover the journey to becoming a skilled software engineer by learning key programming concepts and software engineering principles.
                    </p>
                </div>
                <GetStarted/>
            </div>
        </section>

        <section className='py-[100px] max-w-[1200px] mx-auto px-6 xl:px-0 flex flex-col justify-center items-center gap-10'>
           <div className='w-full xl:w-[838px] flex flex-col justify-center items-start gap-10'>
                <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                    Software engineering is a dynamic and challenging field that requires constant learning and problem-solving. 
                </p>
                <div className='flex flex-col justify-center items-start gap-2'>
                    <h2 className='text-[#201A18] text-base leading-[30px] font-normal'>How to become a software engineer:</h2>
                    <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                        Becoming a software engineer involves learning core principles of programming, software development processes, and practical problem-solving.
                    </p>
                </div>
           </div>

           <div className='flex flex-col justify-center items-start gap-10 w-full xl:w-[838px]'>
                <div className='flex flex-col justify-center items-start gap-2'>
                    <h2 className='text-[#201A18] text-base leading-[30px] font-normal uppercase'>step1</h2>
                    <div className='flex flex-col justify-center items-start gap-2'>
                        <h1 className='text-[#201A18] leading-[34.13px] text-[1.75rem] font-bold'>Learn Software Engineering Fundamentals</h1>
                        <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
                    </div>
                    <div className='flex flex-col justify-center items-start gap-2'>
                        <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                            Start by understanding core concepts like data structures, algorithms, and object-oriented programming (OOP).
                        </p>
                        <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                            Learn how to write clean, efficient, and maintainable code that meets industry standards.
                        </p>
                        <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                            Familiarize yourself with version control systems like Git to collaborate on projects.
                        </p>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-start gap-2'>
                    <h2 className='text-[#201A18] text-base leading-[30px] font-normal uppercase'>step2</h2>
                    <div className='flex flex-col justify-center items-start gap-2'>
                        <h1 className='text-[#201A18] leading-[34.13px] text-[1.75rem] font-bold'>Practice with Real-World Projects</h1>
                        <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
                    </div>
                    <div className='flex flex-col justify-center items-start gap-2'>
                        <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                            Apply your knowledge by working on projects that solve real-world problems.
                        </p>
                        <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                            Contribute to open-source projects or build your own portfolio to showcase your skills.
                        </p>
                        <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                            Participate in hackathons and collaborate with other developers to enhance your problem-solving abilities.
                        </p>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-start gap-2'>
                    <h2 className='text-[#201A18] text-base leading-[30px] font-normal uppercase'>step3</h2>
                    <div className='flex flex-col justify-center items-start gap-2'>
                        <h1 className='text-[#201A18] leading-[34.13px] text-[1.75rem] font-bold'>Learn Software Engineering Principles</h1>
                        <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
                    </div>
                    <div className='flex flex-col justify-center items-start gap-7'>
                        <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                            Understand principles such as clean code, testing, and software architecture to create high-quality software.
                        </p>
                        <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                            Study methodologies like Agile and DevOps to work effectively within teams and deliver products on time.
                        </p>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-start gap-2'>
                    <h2 className='text-[#201A18] text-base leading-[30px] font-normal uppercase'>step4</h2>
                    <div className='flex flex-col justify-center items-start gap-2'>
                        <h1 className='text-[#201A18] leading-[34.13px] text-[1.75rem] font-bold'>Stay Updated with Industry Trends</h1>
                        <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
                    </div>
                    <div className='flex flex-col justify-center items-start gap-7'>
                        <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                            Software engineering is an ever-evolving field. Keep learning new languages, frameworks, and tools.
                        </p>
                        <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                            Follow industry leaders, read technical blogs, and attend conferences to stay informed about the latest advancements.
                        </p>
                    </div>
                </div>
            </div>

            <div className='w-full xl:w-[977px] flex flex-col justify-center items-start gap-20 pt-[200px]'>
                <div className='flex flex-col justify-center items-start gap-4'>
                    <h1 className='text-[#201A18] leading-[34.13px] text-[1.75rem] font-bold'>Master Core Engineering Skills</h1>
                    <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
                </div>
                    
                <div className='flex flex-col justify-center items-start gap-2 w-full xl:w-[838px] mx-auto'>
                    <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                        Master the essentials of software engineering including algorithms, data structures, and software development principles.
                    </p>
                    <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                        Learn to design efficient algorithms, write code that scales, and build systems that perform well under pressure.
                    </p>
                    <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                        Always strive to improve and learn new skills to stay competitive in the job market.
                    </p>
                </div>
            </div>

            <div className='w-full xl:w-[977px] flex flex-col justify-center items-start gap-12'>
                <div className='flex flex-col justify-center items-start gap-4'>
                    <h1 className='text-[#201A18] leading-[34.13px] text-[1.75rem] font-bold'>Start Your Journey Today!</h1>
                    <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
                </div>
                    
                <div className='flex flex-col justify-center items-start gap-10'>
                    <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                        It's time to start your career as a software engineer! Join thousands of learners worldwide who have taken the first step towards achieving their career goals.
                    </p>
                    <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                        Enroll today and begin learning the skills that will open doors to amazing opportunities in the tech world.
                    </p>
                </div>
            </div>
        </section>
    </main>
  )
}

export default page;
