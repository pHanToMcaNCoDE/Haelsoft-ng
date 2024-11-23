'use client'

import Navbar from '@/components/LandingPageComponents/Navbar';
import React, { useState } from 'react';
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
                        Become a UX Designer with Haelsoft EdTech
                    </h1>
                    <p className='w-full xl:w-[605px] text-[#FFFFFF] leading-[30px] font-normal text-base'>
                        Design meaningful experiences that shape how people interact with technology.
                    </p>
                </div>
                <GetStarted />
            </div>
        </section>

        <section className='py-[100px] max-w-[1200px] mx-auto px-6 xl:px-0 flex flex-col justify-center items-center gap-10'>
            <div className='w-full xl:w-[838px] flex flex-col justify-center items-start gap-10'>
                <h2 className='text-[#201A18] text-[1.5rem] font-bold leading-[34.13px]'>
                    Why Choose a Career in UX Design?
                </h2>
                <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                    UX design is at the heart of creating intuitive and engaging digital experiences. A career in this field offers:
                </p>
                <ul className='list-disc list-inside text-[#655D59]'>
                    <li>High Demand: Companies prioritize user experience to stay competitive.</li>
                    <li>Creative Problem-Solving: Combine empathy, creativity, and strategy to craft impactful solutions.</li>
                    <li>Dynamic Work: Collaborate with developers, product teams, and stakeholders.</li>
                    <li>Rewarding Salaries: UX designers are among the most sought-after professionals in tech.</li>
                </ul>
            </div>

            <div className='flex flex-col justify-center items-start gap-10 w-full xl:w-[838px]'>
                <h2 className='text-[#201A18] text-[1.5rem] font-bold leading-[34.13px]'>
                    Why Learn UX Design with Haelsoft EdTech?
                </h2>
                <ul className='list-decimal list-inside text-[#655D59]'>
                    <li><strong>Industry-Driven Curriculum:</strong> Our program is tailored to meet the latest UX trends and employer demands.</li>
                    <li><strong>Project-Based Learning:</strong> Build a portfolio of user-focused designs that showcase your skills to employers.</li>
                    <li><strong>Expert Instructors:</strong> Learn from seasoned UX professionals with real-world experience.</li>
                    <li><strong>Flexible and Accessible:</strong> Study at your own pace with 24/7 access to our online platform.</li>
                    <li><strong>Career Support:</strong> Receive mentorship, resume reviews, and interview preparation to secure your dream job.</li>
                </ul>
            </div>

            <div className='w-full xl:w-[977px] flex flex-col justify-center items-start gap-20 pt-[200px]'>
                <div className='flex flex-col justify-center items-start gap-4'>
                    <h2 className='text-[#201A18] leading-[34.13px] text-[1.75rem] font-bold'>
                        What You’ll Learn
                    </h2>
                    <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
                </div>
                <ul className='list-disc list-inside text-[#655D59]'>
                    <li>User Research & Empathy: Understand user needs and behaviors through interviews and surveys.</li>
                    <li>Wireframing & Prototyping: Create visual blueprints using tools like Figma, Adobe XD, and Sketch.</li>
                    <li>Design Thinking Process: Learn to ideate, iterate, and innovate.</li>
                    <li>Information Architecture: Organize content for intuitive navigation and usability.</li>
                    <li>Visual Design Principles: Balance aesthetics with functionality for impactful designs.</li>
                    <li>Usability Testing: Evaluate and improve designs based on user feedback.</li>
                    <li>Collaboration Tools: Work effectively with teams using platforms like Slack and Trello.</li>
                </ul>
            </div>

            <div className='w-full xl:w-[838px]'>
                <h2 className='text-[#201A18] text-[1.5rem] font-bold leading-[34.13px]'>Who Should Enroll?</h2>
                <ul className='list-disc list-inside text-[#655D59]'>
                    <li>Creative thinkers eager to break into the tech industry.</li>
                    <li>Professionals transitioning to a design role from other careers.</li>
                    <li>Entrepreneurs looking to design user-friendly products for their businesses.</li>
                    <li>Current designers seeking to deepen their UX expertise.</li>
                </ul>
            </div>

            <div className='w-full xl:w-[977px]'>
                <h2 className='text-[#201A18] text-[1.5rem] font-bold leading-[34.13px]'>Success Stories</h2>
                <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                    "Thanks to Haelsoft EdTech, I now work as a UX designer at a leading startup. The portfolio I built during the program helped me stand out in interviews." – Mary A., Haelsoft Graduate
                </p>
            </div>

            <div className='w-full xl:w-[977px]'>
                <h2 className='text-[#201A18] text-[1.5rem] font-bold leading-[34.13px]'>Shape the Future of Digital Experiences</h2>
                <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                    The world needs designers who can create seamless, user-centered digital products. Start your UX design journey with Haelsoft EdTech and turn your passion into a fulfilling career.
                </p>
            </div>
        </section>
    </main>
  );
};

export default page;
