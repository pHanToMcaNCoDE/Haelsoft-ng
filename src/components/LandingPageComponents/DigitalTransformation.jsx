import React from 'react'
import companies from '../../../public/EdTech Platform Frame.svg';
import Image from 'next/image';

const DigitalTransformation = () => {
  return (
    <section className='bg-[#F36400] py-[100px]'>
        <div className='max-w-[1200px] 2xl:max-w-[1500px] mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-10'>
            <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-1'>
                    <h1 className='text-[1.625rem] font-semibold leading-[45px] text-white'>Digital Transformation for Organizations</h1>
                    <div className='bg-[#F1C118] h-[4px] w-[56px] rounded'></div>
                </div>
                <p className='text-[.875rem] leading-[24px] text-white font-normal w-full lg:w-[530px]'>
                    At Haelsoft, we drive impactful digital transformation strategies tailored to help organizations succeed in a competitive digital-first world. By integrating innovative technologies and streamlining workflows, we empower businesses to adapt to changing market demands, improve operational efficiency, and deliver exceptional customer experiences. Our expertise ensures a seamless transition into the digital era, enabling sustainable growth and long-term success. 
                </p>
            </div>
            
            <div className='grid grid-cols-2 lg:grid-cols-3 justify-center items-center max-w-[1200px] ml-auto 2xl:mx-0 gap-3 h-full'>
                <Image width={565} height={565} className='object-cover' src={companies} alt='Companies'></Image>
                <Image width={565} height={565} className='object-cover' src={companies} alt='Companies'></Image>
                <Image width={565} height={565} className='object-cover' src={companies} alt='Companies'></Image>
                <Image width={565} height={565} className='object-cover' src={companies} alt='Companies'></Image>
                <Image width={565} height={565} className='object-cover' src={companies} alt='Companies'></Image>
                <Image width={565} height={565} className='object-cover' src={companies} alt='Companies'></Image>
            </div>
        </div>
    </section>
  )
}

export default DigitalTransformation