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
import training from '../../../public/training.jpg';
import EdtechGraduates from '@/components/LandingPageComponents/EdtechGraduates'
import EdtechRoles from '@/components/LandingPageComponents/EdtechRoles'

const page = () => {

  const [clicked, setClicked] = useState('');
  const [boolclick, setBoolClick] = useState(false);


  const content = (
    <div className='gap-7 flex flex-col justify-center items-start text-left'>
      <div className='flex flex-col justify-center items-start w-full lg:w-[825px]'>
        <h1 className="text-white leading-[62px] font-bold text-[1.75rem]">
          Empowering Teams, Transforming Organizations
        </h1>
        <div className='bg-[#F1C118] h-[4px] w-[56px] rounded'></div>
      </div>
      <p className="text-white text-[1.125rem] leading-[43px] font-medium w-full xl:w-[774px] text-left">
        At Haelsoft EdTech Platform, we believe that the strength of any organization lies in its people. Our Corporate Training programs are designed to equip your workforce with the skills, knowledge, and confidence to excel in today’s competitive business environment. 
      {/* </p>
      <p className="text-white text-[1.125rem] leading-[43px] font-medium w-full xl:w-[574px] text-left"> */}
        With a focus on Africa’s dynamic market, we provide tailored training solutions that address the unique needs of businesses, government institutions, and non-profit organizations. Our programs are designed to foster innovation, enhance productivity, and drive measurable results. 
      </p>    
    </div>
  )


  const contentTwo = (
    <div className="flex flex-col justify-center items-start gap-4 w-full lg:w-[50%] xl:mt-[100px]">
    <h1 className="text-white leading-[42px] font-bold text-[1.75rem]">Partner with Haelsoft for Excellence</h1>
    <p className="text-white text-[1.125rem] leading-[43px] font-medium w-full xl:w-[574px]">
      Invest in your people, and you’ll invest in the future of your organization. Let Haelsoft EdTech Platform help you build a workforce that’s ready to tackle today’s challenges and tomorrow’s opportunities. To learn more about our Corporate Training programs or schedule a consultation, contact us at [your email address]. At Haelsoft, we don’t just train teams; we empower them to lead, innovate, and excel.
    </p>
    <span className='text-white font-bold text-[1.125rem] leading-[43px] w-full xl:w-[574px]'>
      At Haelsoft, we don’t just train teams; we empower them to lead, innovate, and excel.
    </span>
  </div>
  )


  const why = (
    <div className="flex flex-col justify-center items-start gap-4 w-full lg:w-[50%] xl:mt-[100px]">
      <h1 className="text-[#201A18] leading-[42px] font-bold text-[1.75rem] mb-8">Our Corporate Training Solutions Include</h1>
      <p className="text-[#655D59] text-[1.125rem] leading-[43px] font-medium w-full xl:w-[774px]">
        Empower your workforce with comprehensive leadership development programs designed to inspire, navigate change effectively, and drive organizational success. We equip your leaders with the tools needed to foster innovation and resilience in a competitive business environment.
      </p>
      <p className="text-[#655D59] text-[1.125rem] leading-[43px] font-medium w-full xl:w-[774px]">
        Equip your teams with the technical skills needed to stay ahead in today’s rapidly evolving industries. Our training ensures your employees are adept at utilizing cutting-edge tools and technologies to enhance productivity and innovation.
      </p>
      <p className="text-[#655D59] text-[1.125rem] leading-[43px] font-medium w-full xl:w-[774px]">
        Enhance your organization's communication, teamwork, and problem-solving capabilities through our soft skills enhancement programs. These tailored solutions foster collaboration, adaptability, and effective interpersonal interactions.
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



  
    const [corpImg, setCorpImg] = useState(training)
    const corpAlt = 'Corporate Training'

  return (
    <main>
      <Navbar 
        clicked={clicked} 
        setClicked={setClicked} 
        boolclick={boolclick} 
        setBoolClick={setBoolClick} 
      />
      <Hire content={content} corpImg={corpImg} corpAlt={corpAlt}/>
      <EdtechRoles why={why}/>
      <EdtechGraduates partner={partner} />
      {/* <Plan/> */}
      <StartHiring contentTwo={contentTwo}/>
    </main>
  )
}

export default page