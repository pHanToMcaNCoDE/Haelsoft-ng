import Image from 'next/image';
import React from 'react'
import { FaCheck } from "react-icons/fa";
import obj from "../../../public/assets/EdTech Platform (3).svg";
import img from '../../../public/c-support.png';

const ReadyToGetStarted = () => {
  return (
    <section className='bg-main relative min-h-[50vh] w-full px-6 xl:px-0 overflow-hidden'>
        <Image className="z-[10] absolute top-0 w-screen h-full object-cover" src={obj} alt='Object'></Image>
        <div className='bg-main w-full xl:w-[1064px] py-[111px] px-[12px] mx-auto h-full lg:h-[555.87px] relative z-[20] flex flex-col lg:flex-row justify-between items-center gap-[47px] xl:gap-[87px]'>
            <div className='flex flex-col justify-center items-start gap-[50px]'>
                <div className='flex flex-col justify-center items-start gap-6'>
                    <h1 className='text-[2.125rem] text-white font-semibold leading-10'>Ready to Get Started</h1>
                    <p className='w-full xl:w-[433.33px] text-[.875rem] leading-5 font-normal text-white'>
                        Join a network of over 250,000 professionals who are transforming and accelerating their careers through cutting edge tech skills. Speak with a Learning Advisor, who can help answer any of your questions.
                    </p>
                </div>
                <ul className='flex flex-col justify-center items-start gap-1 w-full lg:w-auto xl:w-full'>
                    <li className='flex justify-center items-start gap-3 text-[.875rem] leading-5 font-normal text-white'>
                        <p className='text-[#FFCF00]'>
                            <FaCheck />
                        </p>
                        <p>
                            Learn more about Haelsoft certificate courses and coding bootcamps.
                        </p>
                    </li>
                    <li className='flex justify-center items-start gap-3 text-[.875rem] leading-5 font-normal text-white'>
                        <p className='text-[#FFCF00]'>
                            <FaCheck />
                        </p>
                        <p>
                            Discuss tuition and payment plans.
                        </p>
                    </li>
                    <li className='flex justify-center items-start gap-3 w-full text-[.875rem] leading-5 font-normal text-white'>
                        <p className='text-[#FFCF00]'>
                            <FaCheck />
                        </p>
                        <p>
                            Figure out which course or bootcamp is right for your learning and career goals.
                        </p>
                    </li>
                </ul>
            </div>
            <div className='py-[36px] px-[28px] w-full lg:w-[480px] xl:w-[520px] flex flex-col justify-center items-start gap-[20px] h-full lg:h-[271.19px] rounded-lg bg-[#000000] border-t-8 border-t-[#FFCF00]'>
                <h2 className='text-[1.625rem] text-white font-semibold leading-8'>Speak with a Learning Advisor</h2>
                <p className='text-base font-normal text-white'>Select a date and time and a Learning Advisor will be in touch.</p>
                <div className='flex justify-center items-center gap-4 p-[24px] bg-white w-full xl:w-[464px] lg:h-[98px] rounded'>   
                    <Image width={31} height={34} className='object-cover' src={img} alt='Learner Support'></Image>
                    <p className='text-black text-[.875rem] font-6 w-full lg:w-[367px]'>There are currently no Learning Advisors available in your location</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ReadyToGetStarted