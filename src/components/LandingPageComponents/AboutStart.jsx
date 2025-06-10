// import { section } from 'framer-motion/client'
import React from 'react'
import img from '../../../public/assets/fm.svg';
import obj from '../../../public/assets/EdTech Platform Logo.svg';
import obj2 from '../../../public/assets/EdTech Platform Union.svg';
import obj3 from '../../../public/assets/EdTech Platform (11).svg';
import img2 from '../../../public/assets/EdTech Platform (1).svg';
import obj4 from '../../../public/assets/Polygon 4.svg';
import obj5 from '../../../public/assets/EdTech Platform (2).svg';
import Image from 'next/image';

const AboutStart = ({storyContent, storyContentTwo}) => {
  return (
    <section className='min-h-screen py-[100px] xl:pt-[200px] flex flex-col gap-[15em] max-w-[1200px] 2xl:max-w-[1500px] mx-auto px-5 lg:px-8'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-[4em] md:gap-[8em] h-full'>
            <div className='w-full lg:w-[50%] h-full flex flex-col gap-8'>
                {storyContent}
            </div>
            <div className='relative w-full lg:w-[50%]'>
                <Image width={433} height={256} className='relative z-20 w-full md:w-[400px] lg:w-[576px] h-[325px]' src={img} alt="Work Family" />

                <Image className='absolute top-5 lg:top-0 z-10 right-0 md:right-3 lg:right-[-6%] w-[210px] lg:w-auto' src={obj} alt="Work Family" />

                <Image width={599} height={420} className='absolute left-[-10px] md:left-[-30px] xl:left-[-40px] z-[3px] top-[-20px] md:top-0 xl:top-[-30px] w-auto md:w-[350px] lg:w-[395px] xl:w-[598.57px]' src={obj2} alt="Work Family" />

                <Image className='absolute bottom-[-50px] z-[5px] right-0 md:right-[-3%] lg:right-[-5%]' src={obj3} alt="Work Family" />
            </div>
        </div>


        <div className='flex flex-col md:flex-row justify-between items-center gap-[4em] md:gap-[8em] h-full'>
            <div className='relative w-full lg:w-[50%]'>
                <Image width={433} height={256} className='relative w-[576px] h-[325px] z-20' src={img2} alt="Work Family" />

                <Image width={599} height={420} className='absolute z-[3px] top-[-70px] left-[-40px]' src={obj4} alt="Work Family" />

                <Image className='absolute z-[5px] left-[-23%] top-[-50px]' src={obj5} alt="Work Family" />
            </div>
            <div className='w-full lg:w-[50%] h-full flex flex-col gap-8'>
                {storyContentTwo}
            </div>
        </div>
    </section>
  )
}

export default AboutStart