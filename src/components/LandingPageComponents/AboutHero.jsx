import React from 'react'
import family from '../../../public/assets/fam.jpg'
import Image from 'next/image'

const AboutHero = () => {
  return (
    <section className='w-full relative hero h-[70vh] lg:h-[657px]'>
      <Image className='absolute' src={family} alt="We are Family" />
      <div className="hero-content px-5 lg:px-8 w-full gap-[2em]">
        <div className='max-w-[1200px] 2xl:max-w-[1530px] mx-auto'>
            <div className='flex flex-col gap-[6em] py-[100px]'>
                <div className='flex flex-col gap-1'>
                  <h1 className='text-[1.875rem] lg:text-[2.625rem] text-left text-white font-semibold leading-[55px] lg:leading-[75px] w-full lg:w-[649px]'>Redefining Learning for a Digital World</h1>
                  <p className='text-[1.5rem] leading-7 text-white font-semibold text-left'>Jumpstart Your Tech Career and Lead the Future</p>
                </div>
            </div>
        </div>
      </div>

      <div className='absolute bg-[#D98E47]/70 md:bg-[#D98E47]/[20%] w-full h-screen'></div>
    </section>
  )
}

export default AboutHero