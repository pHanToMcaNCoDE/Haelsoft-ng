import React from 'react'
import one from '../../../public/assets/EdTech Platform.svg';
import two from '../../../public/assets/EdTech Platform Flexibility.svg';
import three from '../../../public/assets/EdTech Platform Solution 2.svg';
import Image from 'next/image';

const EdtechGraduates = () => {
  return (
    <section className='px-5 max-w-[1250px] mx-auto py-[100px] flex flex-col gap-[6em]'>
        <div className='flex flex-col gap-6 justify-center items-center'>
            <h1 className='text-[#F36400] font-semibold text-[1.5rem] leading-9'>Why Hire Ed-Tech Graduates</h1>
            <p className='w-full xl:w-[889px] text-[1.125rem] text-[#655D59] leading-[27px] font-medium'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur. </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10'>
            <div className='w-full px-[20px] flex flex-col justify-center items-start lg:w-[402px] h-[366px] rounded border-[2px] border-[#EEEEEEEE]/[93.3%]'>
                <div className='flex flex-col gap-6'>
                    <div className='bg-[#FF8C53] w-[52px] h-[52px] rounded-full flex justify-center items-center'>
                        <Image width={30} height={30} src={one} alt="Candidate Icon" />
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h2 className='text-[#F36400] text-[1.125rem] font-semibold leading-[27px]'>Expert Screening and Evaluation</h2>
                        <p className='text-[#655D59] text-[1.125rem] font-medium leading-[43px] w-full lg:w-[368px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula ..</p>
                    </div>
                </div>
            </div>


            <div className='w-full px-[20px] flex flex-col justify-center items-start lg:w-[402px] h-[366px] rounded border-[2px] border-[#EEEEEEEE]/[93.3%]'>
                <div className='flex flex-col gap-6'>
                    <div className='bg-[#FF8C53] w-[52px] h-[52px] rounded-full flex justify-center items-center'>
                        <Image width={30} height={30} src={two} alt="Flexibility Icon" />
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h2 className='text-[#F36400] text-[1.125rem] font-semibold leading-[27px]'>Expert Screening and Evaluation</h2>
                        <p className='text-[#655D59] text-[1.125rem] font-medium leading-[43px] w-full lg:w-[368px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula ..</p>
                    </div>
                </div>
            </div>


            <div className='w-full px-[20px] flex flex-col justify-center items-start lg:w-[402px] h-[366px] rounded border-[2px] border-[#EEEEEEEE]/[93.3%]'>
                <div className='flex flex-col gap-6'>
                    <div className='bg-[#FF8C53] w-[52px] h-[52px] rounded-full flex justify-center items-center'>
                        <Image width={30} height={30} src={three} alt="Solution Icon" />
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h2 className='text-[#F36400] text-[1.125rem] font-semibold leading-[27px]'>Expert Screening and Evaluation</h2>
                        <p className='text-[#655D59] text-[1.125rem] font-medium leading-[43px] w-full lg:w-[368px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula ..</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default EdtechGraduates