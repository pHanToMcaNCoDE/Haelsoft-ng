'use client'

import Comments from '@/components/LandingPageComponents/Comments'
import Courses from '@/components/LandingPageComponents/Courses'
import Hire from '@/components/LandingPageComponents/Hire'
import Navbar from '@/components/LandingPageComponents/Navbar'
import Network from '@/components/LandingPageComponents/Network'
import Plan from '@/components/LandingPageComponents/Plan'
import Random from '@/components/LandingPageComponents/Random'
import ResponsiveNetwork from '@/components/LandingPageComponents/ResponsiveNetwork'
import StartHiring from '@/components/LandingPageComponents/StartHiring'
import TalentNetwork from '@/components/LandingPageComponents/TalentNetwork'
import TrainingBenefits from '@/components/LandingPageComponents/TrainingBenefits'
import React, { useState } from 'react'

const page = () => {

  const [clicked, setClicked] = useState('');
  const [boolclick, setBoolClick] = useState(false);


  const content = (
    <div className="relative z-10 flex flex-col justify-center items-start gap-4 w-full lg:w-[50%] xl:mt-[100px]">
      <h1 className="text-white leading-[42px] font-bold text-[1.75rem]">
        Empowering Teams, Transforming Organizations
      </h1>
      <p className="text-white text-[1.125rem] leading-[43px] font-medium w-full xl:w-[574px]">
        At Haelsoft EdTech Platform, we believe that the strength of any organization lies in its people. Our Corporate Training programs are designed to equip your workforce with the skills, knowledge, and confidence to excel in today’s competitive business environment.
      </p>
      <p className="text-white text-[1.125rem] leading-[43px] font-medium w-full xl:w-[574px]">
        With a focus on Africa’s dynamic market, we provide tailored training solutions that address the unique needs of businesses, government institutions, and non-profit organizations. Our programs are designed to foster innovation, enhance productivity, and drive measurable results.
      </p>
    </div>
  )


  const contentTwo = (
    <div className="flex flex-col justify-center items-start gap-4 w-full lg:w-[50%] xl:mt-[100px]">
    <h1 className="text-[#F36400] leading-[42px] font-bold text-[1.75rem]">Partner with Haelsoft for Excellence</h1>
    <p className="text-[#655D59] text-[1.125rem] leading-[43px] font-medium w-full xl:w-[574px]">
      Invest in your people, and you’ll invest in the future of your organization. Let Haelsoft EdTech Platform help you build a workforce that’s ready to tackle today’s challenges and tomorrow’s opportunities. To learn more about our Corporate Training programs or schedule a consultation, contact us at [your email address]. At Haelsoft, we don’t just train teams; we empower them to lead, innovate, and excel.
    </p>
    <span className='text-black font-bold text-[1.125rem] leading-[43px] w-full xl:w-[574px]'>
      At Haelsoft, we don’t just train teams; we empower them to lead, innovate, and excel.
    </span>
  </div>
  )

  return (
    <main>
      <Navbar 
        clicked={clicked} 
        setClicked={setClicked} 
        boolclick={boolclick} 
        setBoolClick={setBoolClick} 
      />
      <Hire content={content}/>
      <TalentNetwork/>
      {/* <TrainingBenefits/> */}
      <Network />
      <ResponsiveNetwork />
      <Courses/>
      {/* <Random/> */}
      {/* <Comments/> */}
      <Plan/>
      <StartHiring contentTwo={contentTwo}/>
    </main>
  )
}

export default page