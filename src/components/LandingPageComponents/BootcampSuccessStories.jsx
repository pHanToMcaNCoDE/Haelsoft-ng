import Image from 'next/image'
import React from 'react'
import woman from '../../../public/assets/get-certificate/EdTech Platform Image 156 2.svg';
import obj from '../../../public/assets/get-certificate/EdTech Platform 4.svg';

const BootcampSuccessStories = ({comment}) => {
  return (
    <section className='max-w-[1213px] mx-auto gap-10 flex justify-between items-center py-[100px] px-6'>
        
        <div className='flex flex-col justify-between items-center gap-10 lg:gap-20 xl:gap-[40px] relative'>
            <div className='flex flex-col justify-center items-center gap-3'>
                <h2 className="text-[#201A18] text-[1.5rem] leading-[29.26px] font-semibold">Success Stories</h2>
                <div className='bg-[#F1C118] w-[56px] h-[4px] rounded-[4px]'></div>
            </div>
            <div className='flex flex-col lg:flex-row justify-between items-center gap-10'>
                <div className='flex flex-col justify-center items-start gap-[5px] relative'>
                    <Image className='object-cover absolute z-[5px] top-[-25px]' src={obj} alt='Quotes'></Image>
                    <div className='flex flex-col justify-center items-start w-full md:w-[463px] gap-10 relative z-10'>
                        <div className='flex flex-col justify-center items-start gap-[10px]'>
                            <h2 className='uppercase text-grayTwo font-semibold text-[1.125rem] leading-[21.94px]'>featured story</h2>
                            <h1 className='text-[#201A18] leading-[30px] lg:leading-[45px] font-semibold text-[1.25rem] lg:text-[1.875rem]'>{comment}</h1>
                        </div>
                        <h2 className='text-[#201A18] font-normal text-[1rem] leading-[30px]'>Mary Smith, Marketer at Haelsoft</h2>
                    </div>
                    <Image className='object-cover absolute z-[5px] bottom-[-35px] right-0' src={obj} alt='Quotes'></Image>
                </div>
                <Image width={548} height={439} className='object-cover' src={woman} alt='White Woman Smiling'></Image>
            </div>
        </div>
    </section>
  )
}

export default BootcampSuccessStories