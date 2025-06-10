import Image from 'next/image'
import React from 'react'
import img from '../../../public/assets/get-certificate/EdTech Platform Image 134.svg';

import build from '../../../public/assets/get-certificate/Bulb Icon EdTech Platform.svg';
import asmnt from '../../../public/assets/get-certificate/EdTech Platform Assessment Alt.svg';
import inter from '../../../public/assets/get-certificate/EdTech Platform Interaction 1.svg';

import logo from '../../../public/assets/EdTech Platform Figma.svg';

const WhyThisCourse = () => {
  return (
    <section className='relative xl:h-[911px] w-full px-6 md:px-12 py-[200px]'>
        <Image width={1440} className='w-screen h-full absolute top-0 left-0 z-[5px]' src={img} alt='Image Background'></Image>
        <div className='max-w-[1187px] mx-auto relative z-10 flex flex-col justify-center items-center gap-20 text-center'>
            <div className='flex flex-col justify-center items-center gap-2'>
                <Image width={100} height={20} className='object-cover' src={logo} alt='Haelsoft Logo'></Image>
                <p className='text-white font-semibold leading-[29.26px] text-[1.5rem]'>Why Choose Haelsoft&apos;s Product Leadership Course?</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center place-items-center gap-10'>
                <div className='flex flex-col justify-center items-center gap-5 w-full sm:w-[324px]'>
                    <Image width={50} height={50} className='object-cover' src={build} alt='Build Icon'></Image>
                    <h2 className='text-white font-semibold leading-[29.26px] text-[1.5rem]'>Industry Experts</h2>
                    <p className='text-[1rem] font-normal leading-[30px] text-white'>Gain insights from seasoned design leaders and industry veterans.</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-5 w-full sm:w-[324px]'>
                    <Image width={50} height={50} className='object-cover' src={asmnt} alt='Assessment Icon'></Image>
                    <h2 className='text-white font-semibold leading-[29.26px] text-[1.5rem]'>Real-World Applications</h2>
                    <p className='text-[1rem] font-normal leading-[30px] text-white'>Work on live projects and case studies that mirror industry scenarios.</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-5 w-full sm:w-[324px]'>
                    <Image width={50} height={50} className='object-cover' src={inter} alt='Interaction Icon'></Image>
                    <h2 className='text-white font-semibold leading-[29.26px] text-[1.5rem]'>Global Perspective</h2>
                    <p className='text-[1rem] font-normal leading-[30px] text-white'>Stay updated with global design trends and best practices</p>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row justify-center items-center gap-10'>
                <div className='flex flex-col justify-center items-center gap-5 w-full sm:w-[324px]'>
                    <Image width={50} height={50} className='object-cover' src={inter} alt='Interaction Icon'></Image>
                    <h2 className='text-white font-semibold leading-[29.26px] text-[1.5rem]'>Real-World Applications</h2>
                    <p className='text-[1rem] font-normal leading-[30px] text-white'>Work on live projects and case studies that mirror industry scenarios.</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-5 w-full sm:w-[324px]'>                    
                    <Image width={50} height={50} className='object-cover' src={inter} alt='Interaction Icon'></Image>
                    <h2 className='text-white font-semibold leading-[29.26px] text-[1.5rem]'>Global Perspective</h2>
                    <p className='text-[1rem] font-normal leading-[30px] text-white'>Stay updated with global design trends and best practices</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyThisCourse