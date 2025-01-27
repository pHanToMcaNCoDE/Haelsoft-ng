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

  const aboutTitle = 'Enterprise Training'
  const aboutSubTitle = 'Upskill your team to power business and government’s growth.'

  const storyContent = (
    <>
      <div className='flex flex-col'>
        {/* <p className='text-[#655D59] uppercase text-[0.75rem] leading-[18px] font-medium'>our story</p> */}
        <h1 className='text-[1.625rem] font-semibold leading-[45px] text-[#F36400]'>Talk with our Experts</h1>
        <div className='bg-[#F1C118] h-[4px] w-[56px] rounded'></div>
      </div>
      <p className='text-[1rem] leading-[24px] text-[#655D59] font-normal w-full lg:w-[469px]'>
        <span className='font-bold text-black'>Haelsoft</span> addresses your unique needs and delivers a continuous cycle of IT training that aligns with the job roles, experience levels, and goals of your company as well as those of the Federal, State, or Local Government agencies/departments. You will work with our consultants and technology subject matter experts to help them understand your objectives, and they can design, develop, and deliver custom-built IT training programs.
      </p>
      {/* <p className='text-[1rem] leading-[24px] text-[#655D59] font-normal w-full lg:w-[469px]'>
        This realization inspired us to take a bold step: the creation of the Haelsoft EdTech Platform. Our journey began with a vision to empower Africa’s 54 nations with cutting-edge, accessible education for all—small businesses, ambitious entrepreneurs, professionals striving for growth, and even governments seeking innovative solutions for public service.
      </p> */}
    </>
  )

  const storyContentTwo = (
    <>
      <div className='flex flex-col gap-2'>
        <h1 className='text-[1.625rem] font-semibold leading-[35px] text-[#F36400]'>Make Your IT Training Decisions Faster, Easier, and Better</h1>
        <div className='bg-[#F1C118] h-[4px] w-[56px] rounded'></div>
      </div>
      <p className='text-[.875rem] leading-[24px] text-[#655D59] font-normal w-full lg:w-[469px]'>
        It can sometimes be slow and difficult to stay atop IT training. This is because finding which courses you need or where to go for training can be challenging. But you can make the decision simpler for you with Haeltech as you have one source for your IT strategy, planning, and delivery.
      </p>
      {/* <p className='text-[.875rem] leading-[24px] text-[#655D59] font-normal w-full lg:w-[469px]'>
        Today, the Haelsoft EdTech Platform stands as a testament to our belief that education is the key to unlocking Africa’s potential. By combining advanced technology with culturally relevant and impactful content, we are transforming lives and building the future of Africa, one learner at a time.
      </p> */}
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
          <h1 className='text-[1.625rem] font-bold leading-[35px] text-white'>Why Partner With Haeltech To Train Your IT Staff?</h1>
          <div className='bg-[#F1C118] h-[4px] w-[56px] rounded'></div>
        </div>
        <p className='text-[.875rem] leading-[24px] text-white font-normal w-full lg:w-[469px]'>
            Once we fully grasp your business or agency&apos;s objectives, we will talk with your IT team to assess their ideal state of technology. We will assist them to get as close as possible to achieve their goals. We’ll help you select courses that fit your corporate needs - and when applicable, we will recommend customized training for your IT teams to succeed as fast as possible with standardized courses.
        </p> 
        <p className='text-[.875rem] leading-[24px] text-white font-normal w-full lg:w-[469px]'>
            A quick fact - companies or government agencies that contact us for training their IT teams are more likely to get better results because we develop a training roadmap that is aligned with their corporate objectives.
        </p>
      </div>
    </>
  )

  const features = (
    <>
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-1/2 p-4 flex flex-col justify-center items-start gap-8">
            <div className='flex flex-col gap-2'>
                <h1 className="text-2xl font-bold">Upskilling and Reskilling</h1>
                <div className='bg-[#F1C118] h-[4px] w-[56px] rounded'></div>
            </div>
            <p className="text-gray-700 mb-4">
                IT teams will continuously need to reskill to learn new skills so they can do a different job, and upskilling involves learning more skills. Your IT teams need to learn technologies in the most effective ways to perform at the highest level.
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
                <h1 className="text-2xl font-bold">Client Enrolment Portal</h1>
                <div className='bg-[#F1C118] h-[4px] w-[56px] rounded'></div>
            </div>
            <p className="text-gray-700 mb-4">
                Our Client Enrolment Portal keeps track of employee training, budget, and more to streamline management.
            </p>
        </div>
      </div>


      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-1/2 p-4 flex flex-col justify-center items-start gap-8">
            <div className='flex flex-col gap-2'>
                <h1 className="text-2xl font-bold">Support</h1>
                <div className='bg-[#F1C118] h-[4px] w-[56px] rounded'></div>
            </div>
            <p className="text-gray-700 mb-4">
                Technology is essential to the effectiveness of any institution, enabling you to do more in less time. We will work with you to automate your application, infrastructure, data analytics, and IT teams to improve productivity.
            </p>
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


      <div className="max-w-[1200px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        <div className="lg:w-1/2 relative">
            <Image width={599} height={420} className='absolute z-[3px] left-[-10px] md:left-[-10px] lg:left-[-30px] top-[-30px] md:top-[10px] lg:top-[-40px]' src={obj4} alt="Work Family" />
            <Image
            src={teamwork}
            alt="Team work"
            className="w-full relative z-10 rounded-md"
            ></Image>
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center items-start gap-8">
            <div className='flex flex-col gap-2'>
                <h1 className="text-2xl font-bold">Your IT Road map</h1>
                <div className='bg-[#F1C118] h-[4px] w-[56px] rounded'></div>
            </div>
            <p className="text-gray-700 mb-4">
                Get all you need along your IT training journey, including tailored learning paths, program delivery of training solutions, IT tutors with a passion for teaching, student registration and communication, etc.
            </p>

            <Link href={`/contact`} className="bg-main flex justify-center items-center p-3 w-[250px] h-[64px] rounded text-white font-base">Hire Us For Your IT Training</Link>
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
      <TrainingPathways/>
      <Leaders leaderContent={leaderContent}/>
      <EnterpriseTrainingFeatures features={features} />
      {/* <Organization/> */}
    </main>
  )
}

export default page