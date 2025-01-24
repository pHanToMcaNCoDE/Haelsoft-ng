'use client'

import AboutHero from '@/components/LandingPageComponents/AboutHero'
import AboutStart from '@/components/LandingPageComponents/AboutStart'
import CuttingEdgeSkills from '@/components/LandingPageComponents/CuttingEdgeSkills'
import DigitalTransformation from '@/components/LandingPageComponents/DigitalTransformation'
import EnterpriseTrainingFeatures from '@/components/LandingPageComponents/EnterpriseTrainingFeatures'
import Leaders from '@/components/LandingPageComponents/Leaders'
import Navbar from '@/components/LandingPageComponents/Navbar'
import Organization from '@/components/LandingPageComponents/Organization'
import TrainingPathways from '@/components/LandingPageComponents/TrainingPathways'
import React, { useState } from 'react'

import skill from '../../../public/upskill.webp';
import corporate from '../../../public/corporate.jpg';
import support from '../../../public/support.jpg';
import teamwork from '../../../public/teamwork.jpg';
import Link from "next/link";
import obj4 from '../../../public/assets/Polygon 4.svg';
import Image from 'next/image'

const page = () => {

  const [clicked, setClicked] = useState('');
  const [boolclick, setBoolClick] = useState(false);

  const aboutTitle = 'Career Services'
  const aboutSubTitle = 'We provide you with the necessary tools for you to succeed in your chosen career.'

  const storyContent = (
    <>
      <div className='flex flex-col'>
        {/* <p className='text-[#655D59] uppercase text-[0.75rem] leading-[18px] font-medium'>our story</p> */}
        <h1 className='text-[1.625rem] font-semibold leading-[45px] text-[#F36400]'>Start Your Career</h1>
        <div className='bg-[#F1C118] h-[4px] w-[56px] rounded'></div>
      </div>
      <p className='text-[1rem] leading-[24px] text-[#655D59] font-normal w-full lg:w-[469px]'>
        At <span className='font-bold text-black'>Haelsoft</span>, we clearly understand the challenge of navigating the job market. Irrespective of your pursuit - whether you want to change your career to tech or someone looking to advance in your current field, our dedicated Career Services are available to support you on every step. We are driven by the passion to help you accelerate your job search and achieve your career goals.
      </p>
    </>
  )

  const storyContentTwo = (
    <>
      <div className='flex flex-col gap-2'>
        <h1 className='text-[1.625rem] font-semibold leading-[35px] text-[#F36400]'>Improve Your Resume And COver Letter</h1>
        <div className='bg-[#F1C118] h-[4px] w-[56px] rounded'></div>
      </div>
      <p className='text-[.875rem] leading-[24px] text-[#655D59] font-normal w-full lg:w-[469px]'>
        You are not alone in pursuing your career when you partner with us. Our Career Services team knows what a recruiter looks for in the hiring process. We will help you make a powerful impression with a professionally developed resume and cover letter. Our experts at Haeltech will guide you through the latest trends and AI-powered tools to ensure your documents attract employers. We will also spend considerable time uncovering new job leads. So learn how to highlight your skills and experiences efficiently and curate tailored applications to attract employers&apos; attention.
      </p>
    </>
  )

  const skillsContent = (
    <>
      <div className='flex flex-col justify-center items-center gap-1'>
        <h1 className='text-[1.625rem] text-[#201A18] font-semibold leading-[36px]'>Optimize Your Time and Resources</h1>
        <div className='bg-[#F1C118] h-[4px] w-[56px] rounded'></div>
      </div>
    </>
  )

  const leaderContent = (
    <>
      <div className='w-full lg:w-[50%] h-full flex flex-col gap-8'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-[1.625rem] font-bold leading-[35px] text-white'>Understand Job Hunting Techniques</h1>
          <div className='bg-[#F1C118] h-[4px] w-[56px] rounded'></div>
        </div>
        <p className='text-[.875rem] leading-[24px] text-white font-normal w-full lg:w-[469px]'>
            Enhance your job hunt with advanced strategies and techniques. We will teach you how to tailor your job search process and quickly increase your chances of getting your preferred role. This includes taking advantage of job boards and networking opportunities and using advanced job search tools. We will also prepare you to answer the most common employer questions and handle many different types of interviews.
        </p> 
        <p className='text-[.875rem] leading-[24px] text-white font-normal w-full lg:w-[469px]'>
            We regularly contact employers on behalf of our students and work with an extensive database of employers who have hired our students and graduates over the years. While we expect you to work hard on your job search, we will work just as hard as you do to land your ideal job role.
        </p>
      </div>
    </>
  )


  const features = (
    <>
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-1/2 p-4 flex flex-col justify-center items-start gap-8">
            <div className='flex flex-col gap-2'>
                <h1 className="text-2xl font-bold">Optimize Your LinkedIn Profile</h1>
                <div className='bg-[#F1C118] h-[4px] w-[56px] rounded'></div>
            </div>
            <p className="text-gray-700 mb-4">
                Your LinkedIn profile is your professional online profile that can help you attract top recruiters. We will guide and help you optimize your profile to showcase your skills, experience, and professional accomplishments. Improve your profile with relevant keywords and engaging content to attract employers and grow your professional network
            </p>
        </div>
        <div className="lg:w-1/2 relative">
            <Image width={599} height={420} className='absolute z-[3px] left-[-10px] md:left-[-10px] lg:left-[-30px] top-[-30px] md:top-[10px] lg:top-[-40px]' src={obj4} alt="Work Family" />
            <Image
            src={skill}
            alt="Upskills"
            className="w-full relative z-10 rounded-md"
            ></Image>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        <div className="lg:w-1/2 relative">
            <Image width={599} height={420} className='absolute z-[3px] left-[-10px] md:left-[-10px] lg:left-[-30px] top-[-30px] md:top-[10px] lg:top-[-40px]' src={obj4} alt="Work Family" />
            <Image
            src={corporate}
            alt="Professionalism"
            className="w-full relative z-10 rounded-md"
            ></Image>
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center items-start gap-8">
            <div className='flex flex-col gap-2'>
                <h1 className="text-2xl font-bold">Streamline Your Career Transition With Our IT Career Preparatory Class</h1>
                <div className='bg-[#F1C118] h-[4px] w-[56px] rounded'></div>
            </div>
            <p className="text-gray-700 mb-4">
                Start your career in tech with an IT career preparatory class designed to provide essential tools and insights for a seamless transition into the job market. Learn and benefit from laser-focused career exploration, expert-curated resumes, LinkedIn optimization, and advanced interview preparation to land your perfect IT role.
            </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2 p-4 flex flex-col justify-center items-start gap-8">
                <div className='flex flex-col gap-2'>
                    <h1 className="text-2xl font-bold">Take A Leap Into Your Career</h1>
                    <div className='bg-[#F1C118] h-[4px] w-[56px] rounded'></div>
                </div>
                <p className="text-gray-700 mb-4">
                    Ready to get started in your career? Contact us now to learn more about how Haeltech&apos;s Career Services can help you succeed in landing your ideal IT job. Our team is committed to providing the support and resources you need to achieve your career goals.
                </p>
                <Link href={`/contact`} className="bg-main flex justify-center items-center p-3 w-[250px] h-[64px] rounded text-white font-base">Get Started Today</Link>
            </div>
            <div className="lg:w-1/2 relative">
                <Image width={599} height={420} className='absolute z-[3px] left-[-10px] md:left-[-10px] lg:left-[-30px] top-[-30px] md:top-[10px] lg:top-[-40px]' src={obj4} alt="Work Family" />
                <Image
                    src={support}
                    alt="We Are Here To Help"
                    className="w-full relative z-10 rounded-md"
                ></Image>
            </div>
        </div>
      </div>
    </>
  )

  return (
    <main>
      <Navbar 
        clicked={clicked} 
        setClicked={setClicked} 
        boolclick={boolclick} 
        setBoolClick={setBoolClick} 
      />
      <AboutHero aboutTitle={aboutTitle} aboutSubTitle={aboutSubTitle} />
      <AboutStart storyContent={storyContent} storyContentTwo={storyContentTwo} />
      {/* <DigitalTransformation/> */}
      <CuttingEdgeSkills skillsContent={skillsContent}/>
      {/* <TrainingPathways/> */}
      <Leaders leaderContent={leaderContent}/>
      <EnterpriseTrainingFeatures features={features} />
      {/* <Organization/> */}
    </main>
  )
}

export default page