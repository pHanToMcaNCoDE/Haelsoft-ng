'use client'

import BootcampFeatures from '@/components/LandingPageComponents/BootcampFeatures';
import BootcampGetStarted from '@/components/LandingPageComponents/BootcampGetStarted';
import BootcampHero from '@/components/LandingPageComponents/BootcampHero'
import BootcampSuccessStories from '@/components/LandingPageComponents/BootcampSuccessStories';
import BootcampWho from '@/components/LandingPageComponents/BootcampWho';
import BootcampWhyEnroll from '@/components/LandingPageComponents/BootcampWhyEnroll';
import GetStarted from '@/components/LandingPageComponents/GetStarted';
import WhyThisCourse from '@/components/LandingPageComponents/WhyThisCourse';
import { bootcampSE, bootcampUX, featuresSE, featuresUx, whoSE, whoUx } from '@/raw-data/data';
import React, { useState } from 'react'

const page = () => {
    const [title, setTitle] = useState('Accelerate Your Career with Haelsoft EdTech’s Software Engineering & Web Development Bootcamps');
    const [desc, setDesc] = useState('Learn the skills you need to build innovative software and dynamic websites in just weeks!');

    const [sub, setSub] = useState('Software Engineering is one of the most dynamic and essential disciplines in today’s tech-driven world, offering exciting career opportunities and the chance to build innovative solutions that make a difference.');
    const [main, setMain] = useState('Why Choose a Career in Software Engineering ?');
    const gain = (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div className='flex flex-col justify-start items-start gap-6 w-full lg:w-[274px]'>
                <h2 className='text-[#201A18] text-[.875rem] leading-[30px] font-semibold'>
                    Programming Languages:
                </h2>
                <p className='text-[#201A18] font-normal text-[1rem] leading-[30px]'>
                    Python, JavaScript, Java, and more               
                </p>
            </div>
            <div className='flex flex-col justify-start items-start gap-6 w-full lg:w-[274px]'>
                <h2 className='text-[#201A18] text-[.875rem] leading-[30px] font-semibold'>
                    Data Structures & Algorithms
                </h2>
                <p className='text-[#201A18] font-normal text-[1rem] leading-[30px]'>
                    Build efficient, scalable solutions
                </p>
            </div>
            <div className='flex flex-col justify-start items-start gap-6 w-full lg:w-[274px]'>
                <h2 className='text-[#201A18] text-[.875rem] leading-[30px] font-semibold'>
                    Software Development Life Cycle (SDLC)
                </h2>
                <p className='text-[#201A18] font-normal text-[1rem] leading-[30px]'>
                    From planning to deployment             
                </p>
            </div>
            <div className='flex flex-col justify-start items-start gap-6 w-full lg:w-[274px]'>
                <h2 className='text-[#201A18] text-[.875rem] leading-[30px] font-semibold'>
                    Backend Development
                </h2>
                <p className='text-[#201A18] font-normal text-[1rem] leading-[30px]'>
                    Work with databases, APIs, and server-side frameworks              
                </p>
            </div>
            <div className='flex flex-col justify-start items-start gap-6 w-full lg:w-[274px]'>
                <h2 className='text-[#201A18] text-[.875rem] leading-[30px] font-semibold'>
                    DevOps
                </h2>
                <p className='text-[#201A18] font-normal text-[1rem] leading-[30px]'>
                    Learn about CI/CD pipelines and cloud services             
                </p>
            </div>
        </div>
    )
    
    const [se, setSe] = useState(bootcampSE);
    const [comment, setComment] = useState('Haelsoft EdTech’s UX Design Bootcamp transformed my career. I learned how to create impactful designs, and the portfolio I built helped me land a job as a Software Engineer at a top tech firm');

    const [features, setFeatures] = useState(featuresSE);
    const [who, setWho] = useState(whoSE);

    const [whyTitle, setWhyTitle] = useState('Why Enroll in Haelsoft EdTech’s Software Engineering Bootcamp?');
    const [whyDesc, setWhyDesc] = useState('Our bootcamp focuses on building the skills you need to succeed in the field of Software Engineering.');

  return (
    <main>
        <BootcampHero title={title} desc={desc} />
        <BootcampGetStarted gain={gain} main={main} sub={sub} />
        <BootcampWhyEnroll whyTitle={whyTitle} whyDesc={whyDesc} item={se}/>
        <BootcampSuccessStories comment={comment}/>
        <WhyThisCourse />
        <BootcampFeatures features={features} />
        <BootcampWho who={who} />

        <div className="pt-[200px] px-6 xl:px-0 flex flex-col lg:flex-row justify-end items-start gap-10 max-w-[1250px] mx-auto py-[100px]">
          <div className="flex flex-col justify-center items-start gap-6 relative z-10 w-full xl:w-[50%]">
            <div className='flex flex-col justify-center items-start gap-3 w-full lg:w-[458px]'>
                <h2 className="text-[#201A18] text-[1.5rem] leading-[29.26px] font-semibold">Take the First Step Toward a Data-Driven Career</h2>
                <div className='bg-[#F1C118] w-[56px] h-[4px] rounded-[4px]'></div>
            </div>
            <p className="w-full xl:w-[500px] text-[#201A18] leading-[30px] font-normal text-base">
                Whether you’re interested in software engineering or web development, Haelsoft EdTech’s bootcamps will equip you with the skills to thrive in the tech industry.
            </p>
            <div className='w-full xl:w-[500px] flex flex-col justify-center items-start gap-1'>
                <p className="text-[#201A18] leading-[30px] font-normal text-base">Enroll Now</p>
                <p className="text-[#201A18] leading-[30px] font-normal text-base">
                    Have questions? Contact us at info@haelsoft.com or schedule a free consultation to learn more about the bootcamp.
                </p>
            </div>
            <button className='bg-main w-[298px] h-[58px] py-[10px] flex justify-center items-center text-white font-normal leading-10 text-[1.125rem]'>Enroll Now</button>
          </div>
          <GetStarted />
        </div>
    </main>
  )
}

export default page