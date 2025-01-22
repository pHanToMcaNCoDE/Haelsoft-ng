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
            Once we fully grasp your business or agency’s objectives, we will talk with your IT team to assess their ideal state of technology. We will assist them to get as close as possible to achieve their goals. We’ll help you select courses that fit your corporate needs - and when applicable, we will recommend customized training for your IT teams to succeed as fast as possible with standardized courses.
        </p> 
        <p className='text-[.875rem] leading-[24px] text-white font-normal w-full lg:w-[469px]'>
            A quick fact - companies or government agencies that contact us for training their IT teams are more likely to get better results because we develop a training roadmap that is aligned with their corporate objectives.
        </p>
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
      <EnterpriseTrainingFeatures/>
      {/* <Organization/> */}
    </main>
  )
}

export default page