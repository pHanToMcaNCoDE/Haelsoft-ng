'use client'

import BlogHero from '@/components/LandingPageComponents/BlogHero'
import BlogList from '@/components/LandingPageComponents/BlogList'
import Navbar from '@/components/LandingPageComponents/Navbar'
import React, { useState } from 'react'

const Blogs = () => {  
  const [clicked, setClicked] = useState('');
  const [boolclick, setBoolClick] = useState(false);


  return (
    <main className='relative'>
      <Navbar 
        clicked={clicked} 
        setClicked={setClicked} 
        boolclick={boolclick} 
        setBoolClick={setBoolClick} 
      />
      <div className="bg-white shadow-lg absolute top-[4%] md:top-[8%] 2xl:top-[15%] z-20 lg:left-[6%] py-8 px-5 w-[95%] md:w-[587px] lg:w-[787px] lg:h-[463px] rounded gap-10 mx-2 flex justify-start items-center">
        <div className='max-w-[1200px] 2xl:max-w-[1530px] mx-auto'>
          <div className='flex flex-col h-full'>
              <div className='flex flex-col justify-center gap-[3em]'>
                <div className='flex flex-col gap-8'>
                  <p className='text-[#1358DB] underline text-[.75rem] leading-8'>Haelsoft News / Daily</p>
                  <h1 className='text-[1.875rem] lg:text-[2.625rem] text-left text-black font-semibold leading-[55px] lg:leading-[75px] w-full lg:w-[649px]'>Redefining Learning for a Digital World</h1>
                  <div className='bg-[#F1C118] h-[4px] w-[56px] rounded'></div>
                </div>
                <p className='text-[.75rem] uppercase leading-7 text-[#767676] font-semibold text-left'>September 23, 2024</p>
              </div>
          </div>
        </div>
      </div>
      <BlogHero/>
      <BlogList/>
    </main>
  )
}

export default Blogs