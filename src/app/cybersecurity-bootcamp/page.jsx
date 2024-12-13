'use client'

import BootcampFeatures from '@/components/LandingPageComponents/BootcampFeatures';
import BootcampGetStarted from '@/components/LandingPageComponents/BootcampGetStarted';
import BootcampHero from '@/components/LandingPageComponents/BootcampHero'
import BootcampSuccessStories from '@/components/LandingPageComponents/BootcampSuccessStories';
import BootcampWho from '@/components/LandingPageComponents/BootcampWho';
import BootcampWhyEnroll from '@/components/LandingPageComponents/BootcampWhyEnroll';
import GetStarted from '@/components/LandingPageComponents/GetStarted';
import WhyThisCourse from '@/components/LandingPageComponents/WhyThisCourse';
import { bootcampCY, bootcampDM, bootcampUX, featuresDM, featuresDS, featuresUx, whoCY, whoDM, whoUx } from '@/raw-data/data';
import React, { useState } from 'react'

const page = () => {
    const [title, setTitle] = useState('Protect the Future: Join Haelsoft EdTech’s Cybersecurity Bootcamp');
    const [desc, setDesc] = useState('Become a defender of digital systems and data. Gain the skills to secure organizations against evolving cyber threats.');

    const [sub, setSub] = useState('Cybersecurity is one of the fastest-growing fields, offering high demand, lucrative salaries, and meaningful work');
    const [main, setMain] = useState('Why Choose a Career in Cybersecurity?');
    const gain = (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div className='flex flex-col justify-start items-start gap-6 w-full lg:w-[274px]'>
                <h2 className='text-[#201A18] text-[.875rem] leading-[30px] font-semibold'>
                    High Demand
                </h2>
                <p className='text-[#201A18] font-normal text-[1rem] leading-[30px]'>
                    Organizations worldwide are in constant need of skilled cybersecurity professionals.                
                </p>
            </div>
            <div className='flex flex-col justify-start items-start gap-6 w-full lg:w-[274px]'>
                <h2 className='text-[#201A18] text-[.875rem] leading-[30px] font-semibold'>
                    Competitive Salaries
                </h2>
                <p className='text-[#201A18] font-normal text-[1rem] leading-[30px]'>
                    Earn top-tier pay with roles ranging from ethical hacking to risk management.
                </p>
            </div>
            <div className='flex flex-col justify-start items-start gap-6 w-full lg:w-[274px]'>
                <h2 className='text-[#201A18] text-[.875rem] leading-[30px] font-semibold'>
                    Diverse Opportunities
                </h2>
                <p className='text-[#201A18] font-normal text-[1rem] leading-[30px]'>
                    Work in industries such as finance, healthcare, government, and tech.            
                </p>
            </div>
            <div className='flex flex-col justify-start items-start gap-6 w-full lg:w-[274px]'>
                <h2 className='text-[#201A18] text-[.875rem] leading-[30px] font-semibold'>
                    Job Security
                </h2>
                <p className='text-[#201A18] font-normal text-[1rem] leading-[30px]'>
                    Cybersecurity roles are future-proof in an increasingly digital world.Combine creative thinking with data-driven strategies to deliver impactful results.              
                </p>
            </div>
        </div>
    )
    
    const [cy, setCy] = useState(bootcampCY);
    const [comment, setComment] = useState('Haelsoft EdTech’s UX Design Bootcamp transformed my career. I learned how to create impactful designs, and the portfolio I built helped me land a job as a UX Designer at a top tech firm');

    const [features, setFeatures] = useState(featuresDS);
    const [who, setWho] = useState(whoCY);

    const [whyTitle, setWHyTitle] = useState('Why Enroll in Haelsoft EdTech’s Cybersecurity Bootcamp?');
    const [whyDesc, setWhyDesc] = useState('Our bootcamp is designed to give you real-world expertise, helping you stand out in a competitive job market.');
  return (
    <main>
        <BootcampHero title={title} desc={desc} />
        <BootcampGetStarted gain={gain} main={main} sub={sub} />
        <BootcampWhyEnroll whyTitle={whyTitle} whyDesc={whyDesc} item={cy}/>
        <BootcampSuccessStories comment={comment}/>
        <WhyThisCourse />
        <BootcampFeatures features={features} />
        <BootcampWho who={who} />

        <div className="pt-[200px] px-6 xl:px-0 flex flex-col lg:flex-row justify-end items-start gap-10 max-w-[1250px] mx-auto py-[100px]">
          <div className="flex flex-col justify-center items-start gap-6 relative z-10 w-full xl:w-[50%]">
            <div className='flex flex-col justify-center items-start gap-3 w-full lg:w-[458px]'>
                <h2 className="text-[#201A18] text-[1.5rem] leading-[29.26px] font-semibold">Take the First Step Toward a Rewarding Career in Cybersecurity</h2>
                <div className='bg-[#F1C118] w-[56px] h-[4px] rounded-[4px]'></div>
            </div>
            <p className="w-full xl:w-[500px] text-[#201A18] leading-[30px] font-normal text-base">
                The future of cybersecurity starts with you. With Haelsoft EdTech&apos;s Cybersecurity Bootcamp, you&apos;ll gain the expertise to protect organizations from threats and become a valuable asset in the tech industry.
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