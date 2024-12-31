import React from 'react'
import img from '../../../public/assets/leaders/EdTech Platform (1).svg';
import obj from '../../../public/assets/leaders/Vector 7.svg';
import Image from 'next/image';

const Leaders = () => {
  return (
    <section className='max-w-[1200px] 2xl:max-w-[1500px] mx-auto px-5 py-[100px]'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-[4em] md:gap-[8em] h-full'>
            <div className='w-full lg:w-[50%] h-full flex flex-col gap-8'>
                <div className='flex flex-col'>
                    <h1 className='text-[1.625rem] font-semibold leading-[45px] text-[#201A18]'>Empowering Leaders of Tomorrow</h1>
                    <div className='bg-[#F1C118] h-[4px] w-[56px] rounded'></div>
                </div>
                <p className='text-[.875rem] leading-[24px] text-[#655D59] font-normal w-full lg:w-[469px]'>
                    At Haelsoft, we are committed to nurturing the next generation of leaders by equipping them with the skills, knowledge, and tools needed to excel in a dynamic and ever-changing world. Through innovative training programs, personalized mentorship, and cutting-edge insights, we empower individuals to drive transformation, inspire change, and achieve their full potential as leaders of tomorrow.
                </p>
            </div>
            <div className='relative w-full lg:w-[50%]'>
                <Image width={576} height={325} className='relative w-[576px] h-[325px] z-20' src={img} alt="Work Family" />
                <Image width={642} height={407} className='absolute z-[3px] left-[-10px] md:left-[-10px] lg:left-[-30px] top-[-30px] md:top-[10px] lg:top-[-40px]' src={obj} />
            </div>
        </div>
    </section>
  )
}

export default Leaders