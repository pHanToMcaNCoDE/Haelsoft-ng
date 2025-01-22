'use client'

import AboutHero from '@/components/LandingPageComponents/AboutHero'
import AboutStart from '@/components/LandingPageComponents/AboutStart'
import CuttingEdgeSkills from '@/components/LandingPageComponents/CuttingEdgeSkills'
import DigitalTransformation from '@/components/LandingPageComponents/DigitalTransformation'
import Leaders from '@/components/LandingPageComponents/Leaders'
import Navbar from '@/components/LandingPageComponents/Navbar'
import Organization from '@/components/LandingPageComponents/Organization'
import React, { useState } from 'react'

const page = () => {

  const [clicked, setClicked] = useState('');
  const [boolclick, setBoolClick] = useState(false);

  const aboutTitle = 'Redefining Learning for a Digital World'
  const aboutSubTitle = 'Jumpstart Your Tech Career and Lead the Future'

  const storyContent = (
    <>
      <div className='flex flex-col'>
        <p className='text-[#655D59] uppercase text-[0.75rem] leading-[18px] font-medium'>our story</p>
        <h1 className='text-[1.625rem] font-semibold leading-[45px] text-[#F36400]'>Haelsoft Ed-tech</h1>
        <div className='bg-[#F1C118] h-[4px] w-[56px] rounded'></div>
      </div>
      <p className='text-[1rem] leading-[24px] text-[#655D59] font-normal w-full lg:w-[469px]'>
        At <span className='font-bold text-black'>Haelsoft</span>, we have always been passionate about creating innovative solutions that empower individuals and businesses to thrive in an ever-changing world. Founded as a digital transformation agency, we have worked with brands across industries to help them leverage technology for growth and success. However, as we engaged with clients and communities across Africa, we recognized a deeper need—access to quality, affordable education and skills development tailored to the unique challenges and opportunities of our continent.
      </p>
      <p className='text-[1rem] leading-[24px] text-[#655D59] font-normal w-full lg:w-[469px]'>
        This realization inspired us to take a bold step: the creation of the Haelsoft EdTech Platform. Our journey began with a vision to empower Africa’s 54 nations with cutting-edge, accessible education for all—small businesses, ambitious entrepreneurs, professionals striving for growth, and even governments seeking innovative solutions for public service.
      </p>
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
      <AboutStart storyContent={storyContent}/>
      {/* <DigitalTransformation/> */}
      <CuttingEdgeSkills/>
      <Leaders/>
      <Organization/>
    </main>
  )
}

export default page