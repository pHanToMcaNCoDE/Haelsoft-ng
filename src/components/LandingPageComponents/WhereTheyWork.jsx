import React from 'react'
import jk from '../../../public/assets/EdTech Platform People.svg';
import twk from '../../../public/assets/EdTech Platform Teamwork.svg';
import Image from 'next/image';
import companies from '../../../public/EdTech Platform Frame.svg';

const WhereTheyWork = () => {
  return (
    <section className='bg-white py-[100px] overflow-hidden flex flex-col justify-center items-center gap-20'>
        <div className='flex flex-col justify-center items-center gap-4'>
          <h1 className='text-[#201A18] text-[1.5rem] font-semibold leading-[29.26px]'>
            Haelsoft Grads Work At
          </h1>
          <div className='bg-[#F1C118] w-[81px] rounded-[5px] h-[6.89px]'></div>
        </div>

        <div className='grid grid-cols-2 lg:grid-cols-3 justify-center items-center max-w-[1200px] ml-auto 2xl:mx-0 gap-3'>
          <Image width={532} height={222} className='object-cover' src={companies} alt='Companies'></Image>
          <Image width={532} height={222} className='object-cover' src={companies} alt='Companies'></Image>
          <Image width={532} height={222} className='object-cover' src={companies} alt='Companies'></Image>
          <Image width={532} height={222} className='object-cover' src={companies} alt='Companies'></Image>
          <Image width={532} height={222} className='object-cover' src={companies} alt='Companies'></Image>
          <Image width={532} height={222} className='object-cover' src={companies} alt='Companies'></Image>
        </div>
    </section>
  )
}

export default WhereTheyWork