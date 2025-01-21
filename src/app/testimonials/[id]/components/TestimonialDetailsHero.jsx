import React from 'react'
import obj from "../../../../../public/assets/EdTech Platform (3).svg";
import Image from 'next/image';
import Link from 'next/link';
import { MdArrowBack } from 'react-icons/md';


const TestimonialDetailsHero = () => {
  return (
    <section className='w-full lg:h-[483px] bg-main relative px-6 py-[100px] overflow-hidden'>
        <Image className="z-[10] absolute top-0 w-screen h-full object-cover" src={obj} alt='Object'></Image>
        <div className='relative z-10 max-w-[1200px] mx-auto text-white flex flex-col justify-center items-start gap-5'>
            <Link href={`/testimonials`} className='text-white duration-150 hover:underline text-[1rem] flex justify-center items-center gap-2'>
                <MdArrowBack/>
                <p>All Testimonials</p>
            </Link>
            <h1 className='text-[1.75rem] lg:text-[3.5rem] xl:text-[4.5rem] leading-10 lg:leading-[65px] font-bold'>Alumni Stories</h1>
            <p className='text-[1rem] lg:text-[1.25rem] xl:text-[1.5rem] leading-6 lg:leading-8 w-full lg:w-[536px]'>
                Explore the inspiring journeys of our alumni and how they achieved success with our support.
            </p>
            <p className='mt-10 text-[1rem] leading-6 font-normal w-full lg:w-[536px] flex flex-col md:flex-row justify-center items-center gap-2'>
                <span className='font-bold text-[1.25rem] lg:text-[2rem]'>+10</span>
                <span>
                    testimonials that showcase real achievements and impactful stories.
                </span>
            </p>
        </div>
    </section>
  )
}

export default TestimonialDetailsHero