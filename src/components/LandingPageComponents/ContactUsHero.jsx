import React from 'react'
import vector from '../../../public/Group.svg';
import Image from 'next/image';

const ContactUsHero = () => {
  return (
    <section className='contact-us h-[422px] w-full relative overflow-hidden px-7 py-[100px] flex flex-col lg:flex-row justify-center items-center gap-10'>      
    <div className='h-[422px] absolute bg-main/[30%] top-0 w-full left-0 z-[5px]'></div>

        {/* <Image className='absolute left-0 object-cover w-[800px] h-[523.86px] bottom-[-30%]' src={vector} alt='Vector'></Image> */}
        <div className='w-full mx-auto flex flex-col justify-center items-center text-center gap-4 relative z-20'>
            <h1 className='w-full lg:w-[560.46px] text-[2rem] lg:text-[2.75rem] leading-[30px] lg:leading-10 font-bold text-white'>Contact Us</h1>
        </div>
    </section>
  )
}

export default ContactUsHero