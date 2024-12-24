import Image from 'next/image'
import React from 'react'

import cert from '../../../public/assets/get-certificate/EdTech Platform Certificate.svg';
import vector from '../../../public/assets/get-certificate/EdTech Platform Group 279.svg';

const CustomEarn = ({cusTitle, cusImg, cusDesc}) => {
  return ( 
    <section class="relative bg-[#C75C27] text-white">
        <div class="absolute inset-0 hidden lg:flex -skew-y-3 origin-top-left w-full  bg-main" style={{ clipPath: 'polygon(0 0, 70% 60%, 0 100%)' }}></div>
        
        <div class="relative z-10 max-w-[1290px] 2xl:max-w-[1380px] mx-auto px-6 py-12 flex flex-col lg:flex-row justify-between items-center overflow-hidden">
            <div className='w-full lg:w-[517px] flex flex-col justify-center items-start gap-4'>
                <div className='w-full lg:w-[486px] flex flex-col justify-center items-start gap-4'>
                    <h1 className='text-white w-full font-semibold text-[1.5rem] lg:text-[2.063rem] leading-[50px]'>{cusTitle}</h1>
                    <div className='w-[56px] h-[4px] rounded-[4px] bg-[#F1C118]'></div>
                </div>
                <p className='text-[#fafafa] text-[1rem] font-normal leading-[30px]'>
                    {cusDesc}
                </p>
            </div>
            <div className='relative'>
                <Image width={530} height={525} className='object-cover relative z-10' src={cusImg} alt='Certificate'></Image>
                <Image className='absolute right-[-93px] z-[5px] top-[15px]' src={vector} alt='Vector'></Image>
            </div>
        </div>
    </section>
  )
}

export default CustomEarn