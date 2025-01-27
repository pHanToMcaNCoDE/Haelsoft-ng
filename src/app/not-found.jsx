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
        <section className='not-found-background w-full bg-white h-screen flex flex-col justify-center items-center gap-7 relative px-[24px] lg:px-[100px] xl:px-[200px]'>      
            <div className='h-full absolute bg-main/[30%] top-0 w-full left-0 z-[5px]'></div>
            <div className='flex flex-col w-full text-left justify-center items-start gap-3 h-full relative z-10'>
                <h1 className='text-white font-bold text-[2rem] leading-[45px]'>Oh Dear! something went wrong.</h1>
                <p className='w-full lg:w-[565px] text-white font-normal text-[1.125rem] leading-[30px]'>The page you're looking for could not be found. Please go back to homepage</p>
                <Link className='h-[52px] w-[190px] bg-main text-white text-[1rem] leading-[30px] flex justify-center items-center rounded-[6px]' href={`/`}>Back to Homepage</Link>
            </div>
        </section>
    </main>
  )
}

export default NotFound