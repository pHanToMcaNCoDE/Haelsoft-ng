import StartHiring from '@/components/LandingPageComponents/StartHiring'
import Image from 'next/image'
import React from 'react'
import bg from '../../../public/assets/cert-course/EdTech Platform Hero Image.svg';
import { TiStarFullOutline } from "react-icons/ti";


const page = () => {
    const content = (
        <div className="relative z-10 flex flex-col justify-center items-start gap-4 w-full lg:w-[50%] xl:w-[400px] xl:mt-[100px]">
          <h1 className="text-white leading-[42px] font-bold text-[1.75rem]">
            Design Leadership Certificate
          </h1>
          <p className="text-white text-[1.125rem] leading-[43px] font-medium w-full xl:w-[574px]">
            Explore the possibilities of AI and how this emerging technology can drive business value and shape the future of work. Prepare for the future of AI with curated, hands-on learning from AI experts. Get on-demand access to courses on ChatGPT, prompt engineering, and more.
          </p>
        </div>
      )
  return (
    <main>
        <section className='relative min-h-screen w-full pb-[100px]'>
            <Image height={948} src={bg} alt='Background Image' className='absolute w-screen h-[948px] z-[3px] top-0 left-0 object-cover'></Image>
            <StartHiring contentTwo={content} />
        </section>
        <section className='bg-main h-[223px] flex justify-center items-center'>
            <div className='max-w-[1250px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center place-items-center gap-10'>
                <div className='w-full flex flex-col justify-center items-center text-white text-[1.125rem] leading-[22.3px] lg:leading-[30px] lg:text-[1.875rem] font-semibold gap-4 text-center'>
                    <div className='w-[250px] text-whtie text-[2.25rem] flex justify-center items-center'>
                        <TiStarFullOutline />
                        <TiStarFullOutline />
                        <TiStarFullOutline />
                        <TiStarFullOutline />
                        <TiStarFullOutline />
                    </div>
                    <p>Kusnap</p>
                </div>
                <div className='w-full flex flex-col justify-center items-center text-white text-[1.125rem] leading-[22.3px] lg:leading-[30px] lg:text-[1.875rem] font-semibold gap-4 text-center'>
                    <div className='w-[250px] text-whtie text-[2.25rem] flex justify-center items-center'>
                        <TiStarFullOutline />
                        <TiStarFullOutline />
                        <TiStarFullOutline />
                        <TiStarFullOutline />
                        <TiStarFullOutline />
                    </div>
                    <p>Google</p>
                </div>
                <div className='w-full flex flex-col justify-center items-center text-white text-[1.125rem] leading-[22.3px] lg:leading-[30px] lg:text-[1.875rem] font-semibold gap-4 text-center'>
                    <div className='w-[250px] text-whtie text-[2.25rem] flex justify-center items-center'>
                        <TiStarFullOutline />
                        <TiStarFullOutline />
                        <TiStarFullOutline />
                        <TiStarFullOutline />
                        <TiStarFullOutline />
                    </div>
                    <p>Fincra</p>
                </div>
            </div>
        </section>
        <section className='h-screen w-full relative flex justify-center items-center px-6'>
            <p className='text-black font-bold leading-8 lg:leading-[43px] text-[1.5rem] lg:text-[2rem]'>Course overview video</p>
            <div className='absolute top-0 left-0 w-full h-screen bg-[#FFDBCC]'></div>
        </section>
        
    </main>
  )
}

export default page