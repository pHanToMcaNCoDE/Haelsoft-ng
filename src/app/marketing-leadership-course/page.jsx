import GetCertificate from '@/components/LandingPageComponents/GetCertificate'
import LeadershipHero from '@/components/LandingPageComponents/LeadershipHero'
import OverviewVideo from '@/components/LandingPageComponents/OverviewVideo'
import RateRow from '@/components/LandingPageComponents/RateRow'
import WhyLeadership from '@/components/LandingPageComponents/WhyLeadership'
import React from 'react'
import team from '../../../public/assets/leadership-icons/Mask Group EdTech Platform.svg';
import impact from '../../../public/assets/leadership-icons/Mask Group EdTech Platform (1).svg';
import lead from '../../../public/assets/leadership-icons/EdTech Platform Mask Group.svg';
import growth from '../../../public/assets/leadership-icons/Mask Group EdTech Platform (2).svg';
import WhatYoullLearn from '@/components/LandingPageComponents/WhatYoullLearn'
import SuccessStory from '@/components/LandingPageComponents/SuccessStory'
import WhyThisCourse from '@/components/LandingPageComponents/WhyThisCourse'
import WhoShouldEnroll from '@/components/LandingPageComponents/WhoShouldEnroll'
import EarnCertificate from '@/components/LandingPageComponents/EarnCertificate'
import JoinGlobalCommunity from '@/components/LandingPageComponents/JoinGlobalCommunity'
import Image from 'next/image'
import { FaBullhorn, FaChartLine, FaLightbulb, FaUsers } from 'react-icons/fa6'

const page = () => {
    const content = (
      <div className="overflow-hidden relative z-10 flex flex-col justify-center items-start gap-6 w-full lg:w-[50%] xl:w-[400px] xl:mt-[100px]">
        <h1 className="text-white leading-[43px] font-bold text-[2rem]">
          Marketing Leadership Certificate
        </h1>
        <p className="text-white text-[1.125rem] leading-[40px] font-medium w-full">
          In today&apos;s dynamic business environment, effective marketing leadership is the cornerstone of brand success and growth. Haelsoft EdTech Platform&apos;s Marketing Leadership course is designed to transform you into a visionary marketing leader who can craft strategies, inspire teams, and deliver measurable results.
        </p>
      </div>
    )


    const why = (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center place-items-center gap-10'>
          <div className='flex flex-col justify-center items-center text-center gap-3'>
              <Image width={70} height={70} src={team} alt='Team Icon'></Image>
              <div className='flex flex-col justify-center items-center text-center gap-[7px]'>
                  <h2 className='text-main font-semibold text-[1.125rem] leading-[21.94px]'>Strategic Vision</h2>
                  <p className='text-grayTwo font-normal text-[1rem] leading-[30px]'>Learn to align marketing goals with overarching business objectives.</p>
              </div>
          </div>
          <div className='flex flex-col justify-center items-center text-center gap-3'>
              <Image width={70} height={70} src={impact} alt='Impact icon'></Image>
              <div className='flex flex-col justify-center items-center text-center gap-[7px]'>
                  <h2 className='text-main font-semibold text-[1.125rem] leading-[21.94px]'>Team Empowerment</h2>
                  <p className='text-grayTwo font-normal text-[1rem] leading-[30px]'>Build and lead high-performing marketing teams that thrive on innovation.</p>
              </div>
          </div>
          <div className='flex flex-col justify-center items-center text-center gap-3'>
              <Image width={70} height={70} src={lead} alt='Lead Icon'></Image>
              <div className='flex flex-col justify-center items-center text-center gap-[7px]'>
                  <h2 className='text-main font-semibold text-[1.125rem] leading-[21.94px]'>Data-Driven Insights</h2>
                  <p className='text-grayTwo font-normal text-[1rem] leading-[30px]'>Use analytics to make informed decisions and optimize campaigns.</p>
              </div>
          </div>
          <div className='flex flex-col justify-center items-center text-center gap-3'>
              <Image width={70} height={70} src={growth} alt='Growth Icon'></Image>
              <div className='flex flex-col justify-center items-center text-center gap-[7px]'>
                  <h2 className='text-main font-semibold text-[1.125rem] leading-[21.94px]'>Career Advancement</h2>
                  <p className='text-grayTwo font-normal text-[1rem] leading-[30px]'>Unlock opportunities in high-growth industries as a product leader.</p>
              </div>
          </div>
      </div>
    )


    const learn = (
      <ul className="text-white grid grid-cols-1 md:grid-cols-2 justify-items-center place-items-center gap-[55px]">
          <li className='w-full sm:w-[283px] flex flex-col justify-center items-start gap-[5px]'>
              <h3 className="font-semibold text-[1.125rem] leading-[21.94px]">Marketing Strategy Development</h3>
              <p className="font-normal text-[1rem] leading-[30px]">
                Master the art of creating compelling, customer-centric strategies.
              </p>
          </li>
          <li className='w-full sm:w-[283px] flex flex-col justify-center items-start gap-[5px]'>
              <h3 className="font-semibold text-[1.125rem] leading-[21.94px]">Brand Leadership</h3>
              <p className="font-normal text-[1rem] leading-[30px]">
                Build and sustain powerful brands that resonate with audiences.
              </p>
          </li>
          <li className='w-full sm:w-[283px] flex flex-col justify-center items-start gap-[5px]'>
              <h3 className="font-semibold text-[1.125rem] leading-[21.94px]">Digital Transformation</h3>
              <p className="font-normal text-[1rem] leading-[30px]">
                Leverage the latest marketing tools and technologies for competitive advantage.
              </p>
          </li>
          <li className='w-full sm:w-[283px] flex flex-col justify-center items-start gap-[5px]'>
              <h3 className="font-semibold text-[1.125rem] leading-[21.94px]">Consumer Behavior Insights</h3>
              <p className="font-normal text-[1rem] leading-[30px]">
                Understand how to analyze and predict customer needs and trends.
              </p>
          </li>
          <li className='w-full sm:w-[283px] flex flex-col justify-center items-start gap-[5px]'>
              <h3 className="font-semibold text-[1.125rem] leading-[21.94px]">Performance Measurement</h3>
              <p className="font-normal text-[1rem] leading-[30px]">
                Learn to track and measure ROI for impactful campaigns.
              </p>
          </li>
          <li className='w-full sm:w-[283px] flex flex-col justify-center items-start gap-[5px]'>
              <h3 className="font-semibold text-[1.125rem] leading-[21.94px]">Crisis Management</h3>
              <p className="font-normal text-[1rem] leading-[30px]">
                Handle marketing challenges and reputational risks with confidence and finesse.
              </p>
          </li>
      </ul>
    )




    const who = (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 justify-items-center place-items-center w-full">
        <div className="flex flex-col gap-4 justify-center items-center">
          <FaBullhorn className="text-main text-3xl mt-[4px]" />
          <p className="text-[#201A18] text-[1rem] leading-[1.8]">
            Marketing professionals aiming to step into leadership roles.
          </p>
        </div>

        <div className="flex flex-col gap-4 justify-center items-center">
          <FaLightbulb className="text-main text-3xl mt-[4px]" />
          <p className="text-[#201A18] text-[1rem] leading-[30px] font-normal">
            Entrepreneurs looking to lead innovative marketing strategies for their businesses.
          </p>
        </div>

        <div className="flex flex-col gap-4 justify-center items-center">
          <FaUsers className="text-main text-3xl mt-[4px]" />
          <p className="text-[#201A18] text-[1rem] leading-[30px] font-normal">
            Managers seeking to sharpen their strategic marketing skills.
          </p>
        </div>

        <div className="flex flex-col gap-4 justify-center items-center">
          <FaChartLine className="text-main text-3xl mt-[4px]" />
          <p className="text-[#201A18] text-[1rem] leading-[30px] font-normal">
            Aspiring marketers who want to build strong leadership capabilities.
          </p>
        </div>
      </div>
    )


    const header = (
      <h1 className='text-[#201A18] w-full lg:w-[386px] font-semibold text-[1.5rem] lg:text-[2.063rem] leading-[50px]'>Get Certified in Marketing Leadership</h1>
    )


    const comment = (
      <p className='text-[#201A18] text-[1.5rem] lg:text-[1.875rem] font-semibold leading-8 lg:leading-[45px]'>
       The Market Leadership Course provided me with a clear roadmap to lead successful campaigns. It empowered me to make data-driven decisions and inspire my team to achieve exceptional results.
      </p>
    )

  return (
    <main>
      <LeadershipHero content={content}/>
      <RateRow/>
      <OverviewVideo/>
      <GetCertificate header={header}/>
      <WhyLeadership why={why}/>
      <WhatYoullLearn learn={learn}/>
      <SuccessStory comment={comment}/>
      <WhyThisCourse/>
      <WhoShouldEnroll who={who}/>
      <EarnCertificate/>
      <JoinGlobalCommunity/>
    </main>
  )
}

export default page