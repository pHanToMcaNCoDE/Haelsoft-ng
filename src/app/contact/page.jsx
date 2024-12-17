import React from 'react'
import vector from '../../../public/assets/EdTech Platform Group.svg';
import Image from 'next/image';

const page = () => {
  return (
    <section className='w-full min-h-screen'>
        <section className='bg-[#e1884a] lg:h-[385px] w-full relative overflow-hidden px-6 py-[100px]'>
            <Image className='absolute left-0 object-cover w-[800px] h-[523.86px] bottom-[-30%]' src={vector} alt='Vector'></Image>
            <div className='max-w-[1121px] mx-auto'>
                <h1 className='w-full lg:w-[560.46px] text-[1.5rem] lg:text-[2rem] leading-[30px] lg:leading-10 font-bold text-white'>Have questions about Haelsoft? Connect with us.</h1>
            </div>
            <div className='w-full lg:w-[353px] flex flex-col justify-center items-start gap-41'>

            </div>
        </section>
    </section>
  )
}

export default page