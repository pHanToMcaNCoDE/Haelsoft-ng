import React from 'react'
import jk from '../../../public/assets/EdTech Platform People.svg';
import twk from '../../../public/assets/EdTech Platform Teamwork.svg';
import Image from 'next/image';

const ConnectTalent = () => {
  return (
    <section className='bg-[#F36400] py-[100px]'>
        <div className='px-5 flex flex-col lg:flex-row justify-between items-center max-w-[1250px] mx-auto'>
            <div className='flex flex-col justify-center items-start gap-4 w-full lg:w-[50%] xl:mt-[100px]'>
                <h1 className='text-white w-full xl:w-[448px] leading-[42px] font-bold text-[1.75rem]'>We Help Connect Talent with Opportunity</h1>
                <p className='text-white text-[1.125rem] leading-[43px] font-medium w-full xl:w-[521px]'>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec  
                </p>
            </div>
            <div className='w-full lg:w-[50%] flex flex-col justify-center items-center gap-10'>
                <Image width={608} height={330} className='object-cover' src={jk} alt="Teamwork" />
                <Image width={608} height={330} className='object-cover' src={twk} alt="Teamwork" />
            </div>
        </div>
    </section>
  )
}

export default ConnectTalent