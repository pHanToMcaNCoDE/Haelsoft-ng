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
           <div className='w-full xl:w-[977px] flex flex-col justify-center items-start gap-10'>
                <p className='text-grayTwo text-base font-normal leading-[30px]'>
                    Software engineering is a dynamic and challenging field that requires constant learning and problem-solving. 
                </p>
                <div className='flex flex-col justify-center items-start gap-2'>
                    <div className='flex flex-col justify-center items-start gap-2'>
                        <h1 className='text-[#201A18] leading-[34.13px] text-[1.75rem] font-bold'>How to become a software engineer:</h1>
                        <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
                    </div>
                    <p className='text-grayTwo text-base font-normal leading-[30px]'>
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
                        <p className='text-grayTwo text-base font-normal leading-[30px]'>
                            Start by understanding core concepts like data structures, algorithms, and object-oriented programming (OOP).
                        </p>
                        <p className='text-grayTwo text-base font-normal leading-[30px]'>
                            Learn how to write clean, efficient, and maintainable code that meets industry standards.
                        </p>
                        <p className='text-grayTwo text-base font-normal leading-[30px]'>
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
                        <p className='text-grayTwo text-base font-normal leading-[30px]'>
                            Apply your knowledge by working on projects that solve real-world problems.
                        </p>
                        <p className='text-grayTwo text-base font-normal leading-[30px]'>
                            Contribute to open-source projects or build your own portfolio to showcase your skills.
                        </p>
                        <p className='text-grayTwo text-base font-normal leading-[30px]'>
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
                        <p className='text-grayTwo text-base font-normal leading-[30px]'>
                            Understand principles such as clean code, testing, and software architecture to create high-quality software.
                        </p>
                        <p className='text-grayTwo text-base font-normal leading-[30px]'>
                            Study methodologies like Agile and DevOps to work effectively within teams and deliver products on time.
                        </p>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-start gap-6'>
                    <h2 className='text-[#201A18] text-base leading-[30px] font-normal uppercase'>step4</h2>
                    <div className='flex flex-col justify-center items-start gap-2'>
                        <h1 className='text-[#201A18] leading-[34.13px] text-[1.75rem] font-bold'>Stay Updated with Industry Trends</h1>
                        <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
                    </div>
                    <div className='flex flex-col justify-center items-start gap-7'>
                        <p className='text-grayTwo text-base font-normal leading-[30px]'>
                            Software engineering is an ever-evolving field. Keep learning new languages, frameworks, and tools.
                        </p>
                        <p className='text-grayTwo text-base font-normal leading-[30px]'>
                            Follow industry leaders, read technical blogs, and attend conferences to stay informed about the latest advancements.
                        </p>
                    </div>
                </div>
            </div>

            <div className='w-full xl:w-[977px] flex flex-col justify-center items-start gap-8 pt-[80px]'>
                <div className='flex flex-col justify-center items-start gap-4'>
                    <h1 className='text-[#201A18] leading-[34.13px] text-[1.75rem] font-bold'>Master Core Engineering Skills</h1>
                    <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
                </div>
                    
                <div className='flex flex-col justify-center items-start gap-2 w-full xl:w-[977px] mx-auto'>
                    <p className='text-grayTwo text-base font-normal leading-[30px]'>
                        Master the essentials of software engineering including algorithms, data structures, and software development principles.
                    </p>
                    <p className='text-grayTwo text-base font-normal leading-[30px]'>
                        Learn to design efficient algorithms, write code that scales, and build systems that perform well under pressure.
                    </p>
                    <p className='text-grayTwo text-base font-normal leading-[30px]'>
                        Always strive to improve and learn new skills to stay competitive in the job market.
                    </p>
                </div>
            </div>

            <div className='w-full xl:w-[977px] flex flex-col justify-center items-start gap-8'>
                <div className='flex flex-col justify-center items-start gap-4'>
                    <h1 className='text-[#201A18] leading-[34.13px] text-[1.75rem] font-bold'>Start Your Journey Today!</h1>
                    <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
                </div>
                    
                <div className='flex flex-col justify-center items-start gap-10'>
                    <p className='text-grayTwo text-base font-normal leading-[30px]'>
                        It's time to start your career as a software engineer! Join thousands of learners worldwide who have taken the first step towards achieving their career goals.
                    </p>
                    <p className='text-grayTwo text-base font-normal leading-[30px]'>
                        Enroll today and begin learning the skills that will open doors to amazing opportunities in the tech world.
                    </p>
                </div>
            </div>
        </section>


        <div className='flex flex-col justify-between items-center gap-10 max-w-[1250px] mx-auto pb-[80px] px-6 xl:px-0'>
            <div className='bg-[#FF8C53] w-full xl:w-[1242px] mx-auto border-[2px] border-[#FF8C53] h-[1px] rounded'></div>
            <div className='w-full flex flex-col md:flex-row justify-between items-center pt-[10px]'>
                <div className='flex flex-col justify-center items-start gap-2'>
                    <button className='text-gray-500 leading-[30px] font-normal text-[.75rem] flex justify-center items-center gap-2'>
                        <FaArrowLeft />
                        Previous
                    </button>
                    <p className='text-[#F36400] leading-[30px] font-semibold text-[.875rem]'></p>
                </div>
                <div className='flex flex-col justify-center items-start gap-2'>
                    <Link href={`/become-a-web-developer`} className='text-[#201A18] leading-[30px] font-normal text-[.75rem] flex justify-center items-center gap-2'>
                        Next
                        <FaArrowRight />
                    </Link>
                    <p className='text-[#F36400] leading-[30px] font-semibold text-[.875rem]'>Become a Web Developer</p>
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
                            Don&apos;t wait to pursue the career of your dreams. Start your journey to becoming a software engineer with Haelsoft EdTech now!
                        </p>
                    </div>

                    <button onClick={scrollToConsult} className='bg-[#F36400] w-[221px] h-[50px] text-white leading-[30px] text-[.875rem] font-semibold gap-[10px] p-[10px] rounded border border-[#FF8C53]'>Request a Consultation</button>
                </div>
            </div>
        </section>
    </main>
  )
}

export default page;
