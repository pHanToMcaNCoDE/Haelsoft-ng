'use client'

import ConnectTalent from '@/components/LandingPageComponents/ConnectTalent'
import CorporateGallary from '@/components/LandingPageComponents/CorporateGallary'
import EdtechGraduates from '@/components/LandingPageComponents/EdtechGraduates'
import EdtechRoles from '@/components/LandingPageComponents/EdtechRoles'
import Hire from '@/components/LandingPageComponents/Hire'
import Navbar from '@/components/LandingPageComponents/Navbar'
import Network from '@/components/LandingPageComponents/Network'
import Plan from '@/components/LandingPageComponents/Plan'
import ResponsiveNetwork from '@/components/LandingPageComponents/ResponsiveNetwork'
import ResponsiveWorkAt from '@/components/LandingPageComponents/ResponsiveWorkAt'
import StartHiring from '@/components/LandingPageComponents/StartHiring'
import WhereTheyWork from '@/components/LandingPageComponents/WhereTheyWork'
import WorkAt from '@/components/LandingPageComponents/WorkAt'
import hire from '../../../public/hire.jpg';
import React, { useState } from 'react'

const page = () => {
  const [clicked, setClicked] = useState('');
  const [boolclick, setBoolClick] = useState(false);



  const content = (
    <div className='gap-7 flex flex-col justify-center items-start'>
      <h1 className="text-white leading-[42px] font-bold text-[1.75rem]">
        Hire A Halsoft Talent
      </h1>
      <p className="text-white text-[1.125rem] leading-[43px] font-medium w-full xl:w-[574px]">
        At Haelsoft EdTech Platform, we understand the unique challenges faced by organizations in today’s fast-paced, technology-driven world. That’s why we offer Corporate Hire services designed to meet the specific needs of businesses, government institutions, and non-profit organizations across Africa. 
      </p>
      <p className="text-white text-[1.125rem] leading-[43px] font-medium w-full xl:w-[574px]">
        Whether you’re looking to upskill your workforce, foster leadership development, or implement industry-specific training, our platform provides comprehensive solutions to drive your organization’s success.
      </p>
    </div>
  )

  const contentTwo = (
    <div className="flex flex-col justify-center items-start gap-4 w-full lg:w-[50%] xl:mt-[100px]">
      <h1 className="text-white leading-[42px] font-bold text-[1.75rem]">Partner with Haelsoft for Excellence</h1>
      <p className="text-white text-[1.125rem] leading-[43px] font-medium w-full xl:w-[574px]">
        Empower your organization with the skills and knowledge it needs to thrive. To learn more about our Corporate Hire services or to schedule a consultation, contact us at [your email address].
        At Haelsoft, we’re not just training teams—we’re building capabilities that drive long-term success.
      </p>
    </div>
  )

  const [corpImg, setCorpImg] = useState(hire)
  const corpAlt = 'Corporate Hire'


  return (
    <main>
      <Navbar 
        clicked={clicked} 
        setClicked={setClicked} 
        boolclick={boolclick} 
        setBoolClick={setBoolClick} 
      />
      <Hire content={content} corpImg={corpImg} corpAlt={corpAlt}/>
      {/* <ConnectTalent/> */}

      <WhereTheyWork/>
      {/* <WorkAt/> */}
      {/* <Network/> */}
      {/* <ResponsiveNetwork/> */}
      {/* <ResponsiveWorkAt/> */}
      {/* <CorporateGallary/> */}
      <EdtechRoles/>
      <EdtechGraduates/>
      <Plan/>
      <StartHiring contentTwo={contentTwo}/>
    </main>
  )
}

export default page