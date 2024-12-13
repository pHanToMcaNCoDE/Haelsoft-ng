import Image from 'next/image'
import React from 'react'
import obj from '../../../public/assets/EdTech Platform Group 312.svg';

const BootcampFeatures = ({features}) => {
  return (
    <main className='bg-[#F7F7F7] lg:h-[700px] w-full py-[100px] px-6'>
        <div className='flex flex-col justify-between items-center gap-[200px]'>
            <div className='flex flex-col justify-center items-center text-center gap-8'>
                <Image width={40} height={40} className='object-cover' src={obj} alt='Box Vector'></Image>
                <h1 className='text-main font-bold leading-[30px] lg:leading-[43px] text-[1.5rem] lg:text-[2rem]'>Bootcamp Features</h1>
            </div>
            <div className='max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
                {
                    features.map((feature) => (
                        <div key={feature.id} className='w-full lg:w-[248px] gap-[7px] flex flex-col justify-center items-center text-center'>
                            <h1 className='text-[1.125rem] text-main font-semibold leading-[21.94px]'>{feature.name}</h1>
                            <p className='leading-[30px] text-[#655D59] font-normal text-[1rem]'>{feature.desc}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </main>
  )
}

export default BootcampFeatures