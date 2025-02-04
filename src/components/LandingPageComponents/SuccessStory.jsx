import Image from 'next/image'
import React from 'react'

import woman from '../../../public/assets/get-certificate/EdTech Platform Image 156 2.svg';
import obj from '../../../public/assets/get-certificate/EdTech Platform 4.svg';

const SuccessStory = ({comment}) => {
  return (
    <section className='py-[100px] max-w-[1250px] mx-auto px-6 md:px-12 xl:px-0 flex flex-col justify-center items-center gap-20'>
        <div className='flex flex-col justify-center items-center gap-[5px]'>
            <h2 className="text-[#201A18] text-[1.5rem] leading-[29.26px] font-semibold">
                Success Stories
            </h2>
            <div className='bg-[#F1C118] w-[56px] h-[4px] rounded-[4px]'></div>
        </div>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-20 xl:gap-[100px] relative'>
            <Image className='object-cover absolute z-[5px] top-[-25px]' src={obj} alt='Quotes'></Image>
            <div className='flex flex-col justify-center items-start w-full md:w-[463px] gap-10 relative z-10'>
                <div className='flex flex-col justify-center items-start gap-[10px]'>
                    <h2 className='uppercase text-grayTwo font-semibold text-[1.125rem] leading-[21.94px]'>featured story</h2>
                    {comment}
                </div>
                <h2 className='text-[#201A18] font-normal text-[1rem] leading-[30px]'>Mary Smith, Marketer at Haelsoft</h2>
            </div>
            <Image width={548} height={439} className='object-cover' src={woman} alt='White Woman Smiling'></Image>
        </div>
    </section>
  )
}

export default SuccessStory