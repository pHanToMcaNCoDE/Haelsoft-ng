import React from 'react'
import img from '../../../public/assets/EdTech Platform transformed.svg';
import email from '../../../public/assets/cut-icons/Email Marketing 1.svg';
import Image from 'next/image';

const TeachingHaelsoft = () => {
  return (
    <section className='py-[100px] max-w-[1200px] 2xl:max-w-[1500px] mx-auto px-5 flex flex-col-reverse lg:flex-row justify-between lg:items-start gap-[5em]'>
        <div className='flex justify-center lg:justify-start items-center'>
            <Image width={720} height={984} className='w-full lg:w-[720px] object-contain' src={img} alt="Black People at work" />
        </div>
        <div className='h-full flex flex-col gap-[4em] md:mt-5'>
            <div className='flex flex-col gap-2'>
                <h1 className='text-[1.625rem] font-semibold leading-[45px] text-[#F36400]'>Teaching at Haelsoft</h1>
                <div className='bg-[#F1C118] h-[4px] w-[56px] rounded'></div>
            </div>
            <div className='flex flex-col gap-[3em] md:gap-[5em]'>
                <div className='flex flex-col md:flex-row justify-between items-start gap-6 w-full lg:lg:w-[435px]'>
                    <Image width={50} height={50} className='object-contain' src={email} alt="Email Icon" />
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-[#F36400] text-lg font-semibold'>Teaching at Haelsoft</h1>
                        <p className='w-full lg:w-[369px] text-[#655D59] font-normal text-base'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget 
                        </p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row justify-between items-start gap-6 w-full lg:lg:w-[435px]'>
                    <Image width={50} height={50} className='object-contain' src={email} alt="Email Icon" />
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-[#F36400] text-lg font-semibold'>Teaching at Haelsoft</h1>
                        <p className='w-full lg:w-[369px] text-[#655D59] font-normal text-base'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget 
                        </p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row justify-between items-start gap-6 w-full lg:lg:w-[435px]'>
                    <Image width={50} height={50} className='object-contain' src={email} alt="Email Icon" />
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-[#F36400] text-lg font-semibold'>Teaching at Haelsoft</h1>
                        <p className='w-full lg:w-[369px] text-[#655D59] font-normal text-base'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget 
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <button className='bg-[#F36400] text-white h-[52px] w-[214px] rounded flex justify-center items-center'>Learn More</button>
            </div>
        </div>
    </section>
  )
}

export default TeachingHaelsoft