import Image from 'next/image'
import React from 'react'
import obj from '../../../public/assets/EdTech Platform (2) 4.svg';

const WhyLeadership = ({why}) => {
  return (
    <section className='w-full xl:h-[644px] py-[96px] px-6 bg-[#F7F7F7]'>
        <div className='max-w-[1208px] mx-auto flex flex-col justify-center items-center gap-20'>
            <div className='flex flex-col justify-center items-center text-center gap-4'>
                <Image width={40} height={40} src={obj} alt='Object'></Image>
                <h1 className='text-main leading-8 lg:leading-[43px] font-bold text-[1.5rem] lg:text-[2.063rem]'>Why Design Leadership?</h1>
            </div>
            {why}
        </div>
    </section>
  )
}

export default WhyLeadership