import Image from 'next/image'
import React from 'react'
import img from '../../../public/assets/EdTech Platform 5.svg';
import org from '../../../public/assets/org.svg';
import obj from '../../../public/assets/EdTech Platform Group 312.svg';

const BootcampGetStarted = ({gain, main, sub}) => {
  return (
    <section className='bg-[#F7F7F7] xl:h-[987px] relative'>
        <div className='flex flex-col justify-between items-center gap-10'>
            <div className='py-[100px] flex flex-col justify-center items-start gap-20 2xl:gap-[50px] max-w-[1120px] mx-auto px-6'>
                <div className='flex flex-col justify-center items-start gap-4'>
                    <Image width={40} height={40} className='object-cover' src={obj} alt='Box Vector'></Image>
                    <h1 className='text-[#201A18] text-[1.75rem] font-bold leading-[34.13px]'>Get Started</h1>
                </div>

                <div className='relative w-full xl:w-[763px] min-h-[871px] bg-white shadow-lg z-20 p-[36px]'>
                    <Image width={763} height={276} src={org} alt='Orange Background' className='absolute z-[5px] top-0 right-0 left-0'></Image>
                    <div className='relative z-10 flex flex-col justify-center items-start gap-20'>
                        <div className='flex flex-col justify-center items-start gap-10'>
                            <div className='w-full lg:w-[485px] flex flex-col justify-center items-start gap-4'>
                                <h1 className='text-white font-semibold text-[1.5rem] leading-[29.26px]'>{main}</h1>
                                <div>
                                    <p className='text-white text-[1rem] font-medium leading-[19.5px] w-full'>
                                        {sub}
                                    </p>
                                </div>
                                <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
                            </div>
                        </div>
                    </div>
                    <div className='pt-[150px] flex flex-col justify-center items-start gap-8'>
                        <div className='flex flex-col justify-center items-start gap-4'>
                            <h1 className='text-[#201A18] font-semibold text-[1.5rem] leading-[29.26px]'>What You'll Learn</h1>
                            <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
                        </div>
                        {gain}
                    </div> 
                </div>
            </div>
            <Image className='w-[958px] h-[987px] absolute top-0 right-0 z-10' src={img} alt=''></Image>
        </div>
    </section>
  )
}

export default BootcampGetStarted