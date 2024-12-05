'use client'

import React, { useState } from 'react'
import notfound from '../../public/404 Error Broken Robot.svg';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/LandingPageComponents/Navbar';

const NotFound = () => {
    const [clicked, setClicked] = useState('');
    const [boolclick, setBoolClick] = useState(false);

  return (
    <main>
        <Navbar 
            clicked={clicked} 
            setClicked={setClicked} 
            boolclick={boolclick} 
            setBoolClick={setBoolClick} 
        />
        <section className='w-full bg-white h-[911px] flex flex-col justify-center items-center gap-7'>
            <Image className='object-cover' width={394.24} height={320} src={notfound} alt='404 Error Broken Robot'></Image>
            <div className='flex flex-col w-full lg:w-[423px] text-center justify-center items-center gap-3'>
                <h1 className='text-[#201A18] font-bold text-[2rem] leading-[45px]'>Page not found</h1>
                <p className='text-[#655D59] font-normal text-[1.125rem] leading-[30px]'>The page you  requested for could not be found. Please go back to homepage</p>
            </div>
            <Link className='h-[52px] w-[239px] bg-main text-white text-[1rem] leading-[30px] flex justify-center items-center rounded-[12px]' href={`/`}>Back to Homepage</Link>
        </section>
    </main>
  )
}

export default NotFound