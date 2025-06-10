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
import { FaBullhorn, FaChartLine, FaLightbulb, FaRocket, FaUsers } from 'react-icons/fa6'
import { FaBalanceScale, FaProjectDiagram, FaSyncAlt } from 'react-icons/fa'

const page = () => {
    const content = (
      <div className="overflow-hidden relative z-10 flex flex-col justify-center items-start gap-6 w-full lg:w-[50%] xl:w-[400px] xl:mt-[100px]">
        <h1 className="text-white leading-[43px] font-bold text-[2rem]">
          Product Leadership Certificate
        </h1>
        <p className="text-white text-[1.125rem] leading-[40px] font-medium w-full">
            In today&apos;s fast-paced and competitive landscape, great products don&apos;t just happen—they require vision, strategy, and leadership. The Product Leadership course by Haelsoft EdTech Platform is designed to equip aspiring and current product leaders with the skills and knowledge needed to excel in creating, managing, and scaling successful products.
        </p>
      </div>
    )


    const why = (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center place-items-center gap-10'>
          <div className='flex flex-col justify-center items-center text-center gap-3'>
              <Image width={70} height={70} src={team} alt='Team Icon'></Image>
              <div className='flex flex-col justify-center items-center text-center gap-[7px]'>
                  <h2 className='text-main font-semibold text-[1.125rem] leading-[21.94px]'>Drive Business Impact</h2>
                  <p className='text-grayTwo font-normal text-[1rem] leading-[30px]'>Learn how to align product strategies with business objectives to maximize value.</p>
              </div>
          </div>
          <div className='flex flex-col justify-center items-center text-center gap-3'>
              <Image width={70} height={70} src={impact} alt='Impact icon'></Image>
              <div className='flex flex-col justify-center items-center text-center gap-[7px]'>
                  <h2 className='text-main font-semibold text-[1.125rem] leading-[21.94px]'>Lead with Confidence</h2>
                  <p className='text-grayTwo font-normal text-[1rem] leading-[30px]'>Develop the leadership skills to inspire teams and stakeholders.</p>
              </div>
          </div>
          <div className='flex flex-col justify-center items-center text-center gap-3'>
              <Image width={70} height={70} src={growth} alt='Growth Icon'></Image>
              <div className='flex flex-col justify-center items-center text-center gap-[7px]'>
                  <h2 className='text-main font-semibold text-[1.125rem] leading-[21.94px]'>Stay Ahead of Trends</h2>
                  <p className='text-grayTwo font-normal text-[1rem] leading-[30px]'>Master cutting-edge tools and techniques in product management and innovation.</p>
              </div>
          </div>
          <div className='flex flex-col justify-center items-center text-center gap-3'>
              <Image width={70} height={70} src={lead} alt='Lead Icon'></Image>
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
              <h3 className="font-semibold text-[1.125rem] leading-[21.94px]">Product Strategy</h3>
              <p className="font-normal text-[1rem] leading-[30px]">
                Understand how to define product visions, roadmaps, and KPIs.
              </p>
          </li>
          <li className='w-full sm:w-[283px] flex flex-col justify-center items-start gap-[5px]'>
              <h3 className="font-semibold text-[1.125rem] leading-[21.94px]">Market Research & Validation</h3>
              <p className="font-normal text-[1rem] leading-[30px]">
                Learn to analyze customer needs and market trends for data-driven decisions.
              </p>
          </li>
          <li className='w-full sm:w-[283px] flex flex-col justify-center items-start gap-[5px]'>
              <h3 className="font-semibold text-[1.125rem] leading-[21.94px]">Design Thinking</h3>
              <p className="font-normal text-[1rem] leading-[30px]">
                Master frameworks for ideating and creating user-centered products
              </p>
          </li>
          <li className='w-full sm:w-[283px] flex flex-col justify-center items-start gap-[5px]'>
              <h3 className="font-semibold text-[1.125rem] leading-[21.94px]">Agile & Lean Practices</h3>
              <p className="font-normal text-[1rem] leading-[30px]">
                Implement agile methodologies for iterative development and efficient delivery.
              </p>
          </li>
          <li className='w-full sm:w-[283px] flex flex-col justify-center items-start gap-[5px]'>
              <h3 className="font-semibold text-[1.125rem] leading-[21.94px]">Team Leadership</h3>
              <p className="font-normal text-[1rem] leading-[30px]">
                Develop collaboration, communication, and conflict-resolution skills to lead cross-functional teams.
              </p>
          </li>
          <li className='w-full sm:w-[283px] flex flex-col justify-center items-start gap-[5px]'>
              <h3 className="font-semibold text-[1.125rem] leading-[21.94px]">Go-To-Market Strategy</h3>
              <p className="font-normal text-[1rem] leading-[30px]">
                Plan successful launches, marketing strategies, and customer adoption tactics.
              </p>
          </li>
      </ul>
    )




    const who = (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 justify-items-center place-items-center w-full">
        <div className="flex flex-col gap-4 justify-center items-center w-full sm:w-[314px] text-center">
        <FaProjectDiagram className="text-main text-3xl mt-[4px]" />
          <p className="text-[#201A18] text-[1rem] leading-[1.8]">
            Product managers looking to advance their skills.
          </p>
        </div>

        <div className="flex flex-col gap-4 justify-center items-center w-full sm:w-[314px] text-center">
          <FaRocket className="text-main text-3xl mt-[4px]"  />
          <p className="text-[#201A18] text-[1rem] leading-[30px] font-normal">
            Entrepreneurs and startup founders creating innovative products.
          </p>
        </div>

        <div className="flex flex-col gap-4 justify-center items-center w-full sm:w-[314px] text-center">     
          <FaSyncAlt className="text-main text-3xl mt-[4px]" />
          <p className="text-[#201A18] text-[1rem] leading-[30px] font-normal">
            Professionals transitioning into product management roles.
          </p>
        </div>

        <div className="flex flex-col gap-4 justify-center items-center w-full sm:w-[314px] text-center">
            <FaBalanceScale className="text-main text-3xl mt-[4px]" />
          <p className="text-[#201A18] text-[1rem] leading-[30px] font-normal">
            Leaders aiming to align business and product strategies effectively.
          </p>
        </div>
      </div>
    )


    const header = (
      <h1 className='text-[#201A18] w-full lg:w-[386px] font-semibold text-[1.5rem] lg:text-[2.063rem] leading-[50px]'>Get Certified in Product Leadership</h1>
    )


    
    const comment = (
        <p className='text-[#201A18] text-[1.5rem] lg:text-[1.875rem] font-semibold leading-8 lg:leading-[45px]'>
         The Product Leadership Course equipped me with the tools and insights to align product strategies with business goals. It has been instrumental in helping me drive innovation and deliver products that truly make an impact.
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