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
    <div className='gap-10 flex flex-col justify-center items-start text-left'>
      <div className='flex flex-col justify-center items-start'>
        <h1 className="text-white leading-[42px] font-bold text-[1.75rem]">
          Hire A Halsoft Talent
        </h1>
        <div className='bg-[#F1C118] h-[4px] w-[56px] rounded'></div>
      </div>
      <p className="text-white text-[1.125rem] leading-[40px] font-medium w-full xl:w-[774px] text-left">
        At Haelsoft EdTech Platform, we understand the unique challenges faced by organizations in today’s fast-paced, technology-driven world. That’s why we offer Corporate Hire services designed to meet the specific needs of businesses, government institutions, and non-profit organizations across Africa. Whether you’re looking to upskill your workforce, foster leadership development, or implement industry-specific training, our platform provides comprehensive solutions to drive your organization’s success.
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

  const why = (
    <div className="flex flex-col justify-center items-start gap-4 w-full lg:w-[50%] xl:mt-[100px]">
      <h1 className="text-[#201A18] leading-[42px] font-bold text-[1.75rem] mb-8">Why Choose Haelsoft?</h1>
      <p className="text-grayTwo text-[1.125rem] leading-[43px] font-medium w-full xl:w-[574px]">
        Haelsoft is uniquely attuned to the dynamics of African markets, offering solutions tailored to your operational realities. Our training programs are designed to provide high-quality results at competitive prices, ensuring you receive exceptional value for your investment.
      </p>
      <p className="text-grayTwo text-[1.125rem] leading-[43px] font-medium w-full xl:w-[574px]">
        With extensive experience in digital transformation and skill development, Haelsoft delivers proven expertise to empower individuals and organizations. Our commitment to innovation and excellence ensures that we remain a trusted partner in achieving your goals.
      </p>
    </div>
  )

  const partner = (
    <div className='gap-10 flex flex-col justify-center items-start text-left'>
      <div className='flex flex-col justify-center items-start'>
        <h1 className='text-white text-[1.875rem] lg:text-[2.625rem] w-full lg:w-[620px] font-semibold gap-10'>
          Join a Global Team Committed to Excellence and Innovation
        </h1>
        <div className='bg-[#F1C118] h-[4px] w-[56px] rounded'></div>
      </div>
      <p className="text-white text-[1.125rem] leading-[40px] font-medium w-full xl:w-[774px] text-left">
        At the heart of our organization is a diverse and talented team of passionate learners dedicated to making a difference. We are seeking individuals who are not only creative and driven but also share our vision of making quality education accessible to everyone. Whether you are an experienced educator, a cutting-edge tech innovator, a visionary designer, a strategic thinker, or an advocate for transformative change, there is a meaningful role for you here. By joining our team, you become part of a mission to create a brighter future for learners across the globe, leveraging your unique skills and perspectives to drive impactful change.
      </p>
      <p className="text-white text-[1.125rem] leading-[40px] font-medium w-full xl:w-[774px] text-left">
        When you join us, you’ll find yourself in an environment that thrives on collaboration, innovation, and mutual respect. Our team is united by a shared commitment to excellence and the belief that teamwork and creativity are the cornerstones of meaningful progress. Together, we design and deliver solutions that empower learners everywhere and address the evolving challenges in education. If you’re looking for an opportunity to make a tangible impact while working alongside like-minded professionals who value your contributions, our team is the perfect place for you to grow and thrive.
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
      <Hire content={content}/>
      <EdtechRoles why={why}/>
      <EdtechGraduates partner={partner}/>
      <Plan/>
      <StartHiring contentTwo={contentTwo}/>
    </main>
  )
}

export default page