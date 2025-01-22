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

  const storyContentTwo = (
    <>
      <div className='flex flex-col'>
        <h1 className='text-[1.625rem] font-semibold leading-[45px] text-[#F36400]'>Why Haelsoft?</h1>
        <div className='bg-[#F1C118] h-[4px] w-[56px] rounded'></div>
      </div>
      <p className='text-[.875rem] leading-[24px] text-[#655D59] font-normal w-full lg:w-[469px]'>
        We set out to build more than just an online learning platform; we aimed to create a movement—a movement that bridges the skills gap, sparks innovation, and accelerates development across the continent. Our story is one of collaboration, resilience, and unwavering commitment to fostering progress.
      </p>
      <p className='text-[.875rem] leading-[24px] text-[#655D59] font-normal w-full lg:w-[469px]'>
        Today, the Haelsoft EdTech Platform stands as a testament to our belief that education is the key to unlocking Africa’s potential. By combining advanced technology with culturally relevant and impactful content, we are transforming lives and building the future of Africa, one learner at a time.
      </p>
    </>
  )

  const skillsContent = (
    <>
      <div className='flex flex-col justify-center items-center gap-1'>
        <h1 className='text-[1.625rem] text-[#201A18] font-semibold leading-[36px]'>Cutting-Edge Digital Skills</h1>
        <div className='bg-[#F1C118] h-[4px] w-[56px] rounded'></div>
      </div>
      <p className='text-[1rem] text-[#655D59] font-normal leading-[24px] w-full lg:w-[779px]'>
        Digital transformation is at the heart of modern organizational growth, enabling businesses to adapt, innovate, and thrive in a rapidly evolving digital landscape. At Haelsoft, we specialize in guiding organizations through this transformation, leveraging cutting-edge technologies to optimize processes, enhance customer experiences, and drive measurable results. With a focus on strategy, innovation, and seamless execution, Haelsoft empowers businesses to unlock their full potential in the digital age. 
      </p>
    </>
  )

  const leaderContent = (
    <>
      <div className='w-full lg:w-[50%] h-full flex flex-col gap-8'>
        <div className='flex flex-col'>
          <h1 className='text-[1.625rem] font-bold leading-[45px] text-white'>Empowering Leaders of Tomorrow</h1>
          <div className='bg-[#F1C118] h-[4px] w-[56px] rounded'></div>
        </div>
        <p className='text-[.875rem] leading-[24px] text-white font-normal w-full lg:w-[469px]'>
          At Haelsoft, we are committed to nurturing the next generation of leaders by equipping them with the skills, knowledge, and tools needed to excel in a dynamic and ever-changing world. Through innovative training programs, personalized mentorship, and cutting-edge insights, we empower individuals to drive transformation, inspire change, and achieve their full potential as leaders of tomorrow.
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
      <Leaders leaderContent={leaderContent}/>
      <Organization/>
    </main>
  )
}

export default page