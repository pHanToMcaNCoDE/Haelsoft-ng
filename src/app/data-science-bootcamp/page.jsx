'use client'

import BootcampFeatures from '@/components/LandingPageComponents/BootcampFeatures';
import BootcampGetStarted from '@/components/LandingPageComponents/BootcampGetStarted';
import BootcampHero from '@/components/LandingPageComponents/BootcampHero'
import BootcampSuccessStories from '@/components/LandingPageComponents/BootcampSuccessStories';
import BootcampWho from '@/components/LandingPageComponents/BootcampWho';
import BootcampWhyEnroll from '@/components/LandingPageComponents/BootcampWhyEnroll';
import GetStarted from '@/components/LandingPageComponents/GetStarted';
import WhyThisCourse from '@/components/LandingPageComponents/WhyThisCourse';
import { bootcampDM, bootcampDS, bootcampUX, featuresDM, featuresUx, whoDM, whoDS, whoUx } from '@/raw-data/data';
import React, { useState } from 'react'

const page = () => {
    const [title, setTitle] = useState('Unlock the Power of Data: Join Haelsoft EdTech’s Data Science Bootcamp');
    const [desc, setDesc] = useState('Transform raw data into actionable insights and become a sought-after professional in one of the most lucrative fields today.');

    const [sub, setSub] = useState('Data is the backbone of decision-making in the modern world. Here’s why Data Science is a smart career choice');
    const [main, setMain] = useState('Why Choose a Career in Data Science?');
    const gain = (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div className='flex flex-col justify-start items-start gap-6 w-full lg:w-[274px]'>
                <h2 className='text-[#201A18] text-[.875rem] leading-[30px] font-semibold'>
                    High Demand
                </h2>
                <p className='text-[#201A18] font-normal text-[1rem] leading-[30px]'>
                    Companies across industries are actively seeking skilled data scientists.             
                </p>
            </div>
            <div className='flex flex-col justify-start items-start gap-6 w-full lg:w-[274px]'>
                <h2 className='text-[#201A18] text-[.875rem] leading-[30px] font-semibold'>
                    Competitive Salaries
                </h2>
                <p className='text-[#201A18] font-normal text-[1rem] leading-[30px]'>
                    Enjoy one of the highest-paying careers in tech.
                </p>
            </div>
            <div className='flex flex-col justify-start items-start gap-6 w-full lg:w-[274px]'>
                <h2 className='text-[#201A18] text-[.875rem] leading-[30px] font-semibold'>
                    Diverse Opportunities
                </h2>
                <p className='text-[#201A18] font-normal text-[1rem] leading-[30px]'>
                    Work in healthcare, finance, retail, tech, and more.            
                </p>
            </div>
            <div className='flex flex-col justify-start items-start gap-6 w-full lg:w-[274px]'>
                <h2 className='text-[#201A18] text-[.875rem] leading-[30px] font-semibold'>
                    Meaningful Impact
                </h2>
                <p className='text-[#201A18] font-normal text-[1rem] leading-[30px]'>
                    Use data to solve complex problems and drive innovation.                
                </p>
            </div>
        </div>
    )
    
    const [ds, setDs] = useState(bootcampDS);
    const [comment, setComment] = useState('Haelsoft EdTech’s UX Design Bootcamp transformed my career. I learned how to create impactful designs, and the portfolio I built helped me land a job as a UX Designer at a top tech firm');

    const [features, setFeatures] = useState(featuresDM);
    const [who, setWho] = useState(whoDS);

    const [whyTitle, setWHyTitle] = useState('Why Enroll in Haelsoft EdTech’s Data Science Bootcamp?');
    const [whyDesc, setWhyDesc] = useState('Our bootcamp equips you with the tools and skills to extract insights from data and transform them into impactful solutions.');
  return (
    <main>
        <BootcampHero title={title} desc={desc} />
        <BootcampGetStarted gain={gain} main={main} sub={sub} />
        <BootcampWhyEnroll whyTitle={whyTitle} whyDesc={whyDesc} item={ds}/>
        <BootcampSuccessStories comment={comment}/>
        <WhyThisCourse />
        <BootcampFeatures features={features} />
        <BootcampWho who={who} />

        <div className="pt-[200px] px-6 xl:px-0 flex flex-col lg:flex-row justify-end items-start gap-10 max-w-[1250px] mx-auto py-[100px]">
          <div className="flex flex-col justify-center items-start gap-6 relative z-10 w-full xl:w-[50%]">
            <div className='flex flex-col justify-center items-start gap-3 w-full lg:w-[458px]'>
                <h2 className="text-[#201A18] text-[1.5rem] leading-[29.26px] font-semibold">Take the first step towards a Data-Driven Career</h2>
                <div className='bg-[#F1C118] w-[56px] h-[4px] rounded-[4px]'></div>
            </div>
            <p className="w-full xl:w-[500px] text-[#201A18] leading-[30px] font-normal text-base">
                Data Science is the future, and you can be part of it. With Haelsoft EdTech&apos;s Data Science Bootcamp, you&apos;ll gain the knowledge, tools, and experience to thrive in this exciting field.
            </p>
            <div className='w-full xl:w-[500px] flex flex-col justify-center items-start gap-1'>
                <p className="text-[#201A18] leading-[30px] font-normal text-base">Enroll Now</p>
                <p className="text-[#201A18] leading-[30px] font-normal text-base">
                    Have questions? Contact us at [Insert Contact Info] or schedule a free consultation to learn more about the bootcamp.
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