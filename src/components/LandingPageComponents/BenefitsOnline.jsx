import React from 'react'
import img from '../../../public/EdTech Platform Vector 4.svg';
import Image from 'next/image';
import BenefitControls from './BenefitControls';
import icon from '../../../public/Online class icon.png';

const BenefitsOnline = () => {
  return (
    <section className='overflow-hidden min-h-screen xl:h-[1536px] w-full pb-[100px] relative pt-[300px] bg-main'>
        <Image width={888} height={1156.22} className='absolute top-[5%] z-[5px] right-[-1%] object-cover bottom-0' src={img} alt='Image'></Image>
        <div className='max-w-[1200px] 2xl:max-w-[1530px] mx-auto min-h-screen pt-[111px] flex flex-col justify-between items-start gap-y-[150px]'>
          <div className='bg-white pt-[12px] px-[36px] w-full lg:w-[520px] rounded-[5px] h-[600px] relative z-10 flex flex-col justify-center items-center lg:items-start gap-10'>
            <div className='flex flex-col justify-center items-start gap-6'>
              <Image width={151} height={94} className='object-contain grayscale' src={icon} alt='Online Class Icon'></Image>
              <div className='flex flex-col justify-center items-start gap-7'>
                <h1 className="text-black text-[1.75rem] font-semibold leading-[36px]">
                  Digital Learning Benefits.
                </h1>
                <div className='w-[48px] h-[4px] rounded bg-[#FFCF00]'></div>
              </div>
            </div>
            <div>
              <p className='text-base text-[#655D59] text-center lg:text-left font-normal'>
                Interactive platforms often include tracking features that allow you to monitor your progress over time. You can see how well you’re doing, identify areas that need improvement, and set goals to achieve better results.
              </p>
            </div>
          </div>
          <BenefitControls/>
        </div>
    </section>
  )
}

export default BenefitsOnline