import React from 'react'
import img from '../../../public/assets/EdTech Platform (5).svg';
import Image from 'next/image';

const CultureBenefits = () => {
  return (
    <section className=' bg-[#F36400] relative w-full px-5 my-[8em]'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8 max-w-[1200px] 2xl:max-w-[1500px] mx-auto py-[100px]'>
            <div className='flex flex-col gap-10'>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-[1.875rem] lg:text-[2.625rem] text-white font-semibold leading-[54px] w-full lg:w-[520px]'>Culture & Benefits</h1>
                    <div className='bg-[#F1C118] h-[4px] w-[56px] rounded'></div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-[2em] lg:gap-[4em] xl:gap-[2em]'>
                    <div className='w-full lg:w-[246px] xl:w-[296px] lg:h-[209px] flex flex-col justify-center items-start gap-3'>
                        <h1 className='font-semibold text-lg text-white'>Culture + Benefits</h1>
                        <p className='text-base font-normal text-white'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, 
                        </p>
                    </div>
                    <div className='w-full lg:w-[246px] xl:w-[296px] lg:h-[209px] flex flex-col justify-center items-start gap-3'>
                        <h1 className='font-semibold text-lg text-white'>Culture + Benefits</h1>
                        <p className='text-base font-normal text-white'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, 
                        </p>
                    </div>
                    <div className='w-full lg:w-[246px] xl:w-[296px] lg:h-[209px] flex flex-col justify-center items-start gap-3'>
                        <h1 className='font-semibold text-lg text-white'>Culture + Benefits</h1>
                        <p className='text-base font-normal text-white'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, 
                        </p>
                    </div>
                    <div className='w-full lg:w-[246px] xl:w-[296px] lg:h-[209px] flex flex-col justify-center items-start gap-3'>
                        <h1 className='font-semibold text-lg text-white'>Culture + Benefits</h1>
                        <p className='text-base font-normal text-white'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, 
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex justify-end items-center mt-[9%]'>
                <Image width={606} height={446} className='w-full lg:w-[606px] object-contain' src={img} alt="Group Working" />
            </div>
        </div>
    </section>
  )
}

export default CultureBenefits