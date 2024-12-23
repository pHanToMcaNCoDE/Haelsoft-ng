import Image from 'next/image'
import React from 'react'
import obj from '../../../public/assets/EdTech Platform Group 312.svg';

const CertificateBenefits = ({why, whyTitle}) => {
  return (
    <section className='w-full bg-[#fafafa] py-[100px] flex flex-col justify-center items-center gap-20 px-6'>
        <div className='w-full md:w-[463px] lg:w-[763px] flex flex-col justify-center items-center gap-6 text-center'>
            <Image width={40} height={40} src={obj} alt='Object'></Image>
            <h1 className='text-black text-[1.5rem] lg:text-[3rem] font-semibold leading-10 lg:leading-[4rem]'>{whyTitle}</h1>
        </div>
        <div className='max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center place-items-center gap-10'>
            {
                why?.map((w) => (
                    <div className='w-full lg:w-[343px] min-h-[216px] flex flex-col justify-center items-center text-center gap-[16px]' key={w.id}>
                        {w.icon}
                        <h1 className='text-black text-[1.5rem] leading-[38.88px] font-semibold'>{w.name}</h1>
                        <p className='text-base font-normal leading-[31.5px] text-[#655D59]'>{w.desc}</p>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default CertificateBenefits