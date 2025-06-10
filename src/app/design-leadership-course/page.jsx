import EarnCertificate from '@/components/LandingPageComponents/EarnCertificate';
import GetCertificate from '@/components/LandingPageComponents/GetCertificate';
import JoinGlobalCommunity from '@/components/LandingPageComponents/JoinGlobalCommunity';
import LeadershipHero from '@/components/LandingPageComponents/LeadershipHero';
import OverviewVideo from '@/components/LandingPageComponents/OverviewVideo';
import RateRow from '@/components/LandingPageComponents/RateRow';
import SuccessStory from '@/components/LandingPageComponents/SuccessStory';
import TutorialGetStarted from '@/components/LandingPageComponents/TutorialGetStarted';
import WhatYoullLearn from '@/components/LandingPageComponents/WhatYoullLearn';
import WhoShouldEnroll from '@/components/LandingPageComponents/WhoShouldEnroll';
import WhyLeadership from '@/components/LandingPageComponents/WhyLeadership';
import WhyThisCourse from '@/components/LandingPageComponents/WhyThisCourse';
import React from 'react'
import team from '../../../public/assets/leadership-icons/Mask Group EdTech Platform.svg';
import impact from '../../../public/assets/leadership-icons/Mask Group EdTech Platform (1).svg';
import lead from '../../../public/assets/leadership-icons/EdTech Platform Mask Group.svg';
import growth from '../../../public/assets/leadership-icons/Mask Group EdTech Platform (2).svg';
import { FaLightbulb, FaPalette, FaRocket, FaUserTie } from 'react-icons/fa6';
import Image from 'next/image';


const page = () => {
    const content = (
        <div className="overflow-hidden relative z-10 flex flex-col justify-center items-start gap-6 w-full xl:mt-[100px]">
        <h1 className="text-white leading-[43px] font-bold text-[2rem]">
            Design Leadership Certificate
        </h1>
        <p className="text-white text-[1.125rem] leading-[40px] font-medium w-full xl:w-[574px]">
            In a world where design shapes user experiences, brand identity, and innovation, strong leadership in design is critical. Haelsoft EdTech Platform&apos;s Design Leadership course empowers you to lead design teams, craft visionary strategies, and deliver exceptional solutions that resonate with audiences and drive business success.
        </p>
        {/* <p className="text-white text-[1.125rem] leading-[40px] font-medium w-full xl:w-[574px]">
            Whether you&apos;re an aspiring design leader, a creative professional, or a business strategist, this course equips you with the skills and tools to thrive at the intersection of creativity and leadership.
        </p> */}
        </div>
    )

    const why = (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center place-items-center gap-10'>
            <div className='flex flex-col justify-center items-center text-center gap-3'>
                <Image width={70} height={70} src={team} alt='Team Icon'></Image>
                <div className='flex flex-col justify-center items-center text-center gap-[7px]'>
                    <h2 className='text-main font-semibold text-[1.125rem] leading-[21.94px]'>Transform Teams</h2>
                    <p className='text-grayTwo font-normal text-[1rem] leading-[30px]'>Inspire and empower designers to achieve their full potential.</p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center text-center gap-3'>
                <Image width={70} height={70} src={impact} alt='Impact icon'></Image>
                <div className='flex flex-col justify-center items-center text-center gap-[7px]'>
                    <h2 className='text-main font-semibold text-[1.125rem] leading-[21.94px]'>Strategic Impact</h2>
                    <p className='text-grayTwo font-normal text-[1rem] leading-[30px]'>Align design strategies with business goals to maximize results.</p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center text-center gap-3'>
                <Image width={70} height={70} src={lead} alt='Lead Icon'></Image>
                <div className='flex flex-col justify-center items-center text-center gap-[7px]'>
                    <h2 className='text-main font-semibold text-[1.125rem] leading-[21.94px]'>Lead Innovation</h2>
                    <p className='text-grayTwo font-normal text-[1rem] leading-[30px]'>Stay ahead of trends and foster a culture of creativity.</p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center text-center gap-3'>
                <Image width={70} height={70} src={growth} alt='Growth Icon'></Image>
                <div className='flex flex-col justify-center items-center text-center gap-[7px]'>
                    <h2 className='text-main font-semibold text-[1.125rem] leading-[21.94px]'>Career Growth</h2>
                    <p className='text-grayTwo font-normal text-[1rem] leading-[30px]'>Take your career to the next level by leading impactful design initiatives.</p>
                </div>
            </div>
        </div>
    )

    const learn = (
        <ul className="text-white grid grid-cols-1 md:grid-cols-2 justify-items-center place-items-center gap-[55px]">
            <li className='w-full sm:w-[283px] flex flex-col justify-center items-start gap-[5px]'>
                <h3 className="font-semibold text-[1.125rem] leading-[21.94px]">Visionary Leadership</h3>
                <p className="font-normal text-[1rem] leading-[30px]">
                    Craft and communicate compelling design visions.
                </p>
            </li>
            <li className='w-full sm:w-[283px] flex flex-col justify-center items-start gap-[5px]'>
                <h3 className="font-semibold text-[1.125rem] leading-[21.94px]">Collaboration Mastery</h3>
                <p className="font-normal text-[1rem] leading-[30px]">
                    Work effectively with cross-functional teams, clients, and stakeholders.
                </p>
            </li>
            <li className='w-full sm:w-[283px] flex flex-col justify-center items-start gap-[5px]'>
                <h3 className="font-semibold text-[1.125rem] leading-[21.94px]">Design System Implementation</h3>
                <p className="font-normal text-[1rem] leading-[30px]">
                    Build scalable design systems that enhance consistency and efficiency.
                </p>
            </li>
            <li className='w-full sm:w-[283px] flex flex-col justify-center items-start gap-[5px]'>
                <h3 className="font-semibold text-[1.125rem] leading-[21.94px]">Design Thinking</h3>
                <p className="font-normal text-[1rem] leading-[30px]">
                    Apply human-centered design principles to solve complex challenges.
                </p>
            </li>
            <li className='w-full sm:w-[283px] flex flex-col justify-center items-start gap-[5px]'>
                <h3 className="font-semibold text-[1.125rem] leading-[21.94px]">Project Management</h3>
                <p className="font-normal text-[1rem] leading-[30px]">
                    Deliver projects on time, within budget, and with outstanding quality.
                </p>
            </li>
            <li className='w-full sm:w-[283px] flex flex-col justify-center items-start gap-[5px]'>
                <h3 className="font-semibold text-[1.125rem] leading-[21.94px]">Creative Problem-Solving</h3>
                <p className="font-normal text-[1rem] leading-[30px]">
                    Use innovative techniques to tackle design and business challenges.
                </p>
            </li>
        </ul>
    )

    const who = (

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center place-items-center gap-20 w-full">

            <div className="flex flex-col gap-4 justify-center items-center w-full sm:w-[314px] text-center">
                <FaUserTie className="text-main text-3xl mt-[4px]" />
                <p className="text-[#201A18] text-[1rem] leading-[30px] font-normal">
                Experienced designers aiming to step into leadership roles.
                </p>
            </div>

            <div className="flex flex-col gap-4 justify-center items-center w-full sm:w-[314px] text-center">
                <FaPalette className="text-main text-3xl mt-[4px]" />
                <p className="text-[#201A18] text-[1rem] leading-[30px] font-normal">
                Creative professionals managing design teams or projects.
                </p>
            </div>


            <div className="flex flex-col gap-4 justify-center items-center w-full sm:w-[314px] text-center">
                <FaLightbulb className="text-main text-3xl mt-[4px]" />
                <p className="text-[#201A18] text-[1rem] leading-[30px] font-normal">
                Entrepreneurs seeking to enhance their product or brand design strategies.
                </p>
            </div>

            <div className="flex flex-col gap-4 justify-center items-center w-full sm:w-[314px] text-center">
                <FaRocket className="text-main text-3xl mt-[4px]" />
                <p className="text-[#201A18] text-[1rem] leading-[30px] font-normal">
                Anyone passionate about leading innovation in design.
                </p>
            </div>
        </div>
    )


    const header = (
        <h1 className='text-[#201A18] w-full lg:w-[386px] font-semibold text-[1.5rem] lg:text-[2.063rem] leading-[50px]'>Get Certified in Design Leadership</h1>
    )



    const comment = (
        <p className='text-[#201A18] text-[1.5rem] lg:text-[1.875rem] font-semibold leading-8 lg:leading-[45px]'>
         The Design Leadership Course taught me how to build and guide creative teams effectively. The lessons on design thinking and collaboration have made a significant difference in my ability to deliver impactful solutions.
        </p>
    )


  return (
    <main>
        <LeadershipHero content={content}/>
        <RateRow/>
        <OverviewVideo/>
        <GetCertificate header={header}/>
        <WhyLeadership why={why}/>
        <WhatYoullLearn learn={learn} />
        <SuccessStory comment={comment}/>
        <WhyThisCourse/>
        <WhoShouldEnroll who={who}/>
        <EarnCertificate/>
        <JoinGlobalCommunity/>
    </main>
  )
}

export default page