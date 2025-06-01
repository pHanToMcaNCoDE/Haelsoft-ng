import React from 'react'
import { SiBookstack } from "react-icons/si";
import { FaRegLightbulb } from "react-icons/fa6";
import { GiBullseye } from "react-icons/gi";


const OnlineClassroom = () => {
  return (
    <section className='bg-white w-full h-full flex flex-col justify-end'>
        <div className='max-w-[1260px] mx-auto px-3 lg:px-0 flex flex-col justify-end items-center h-full pt-[200px] pb-[100px] gap-[100px]'>
            <div className='flex flex-col justify-center items-center gap-3 text-center'>
                <h1 className='text-black text-[2rem] lg:text-[2.5rem] font-semibold leading-[43px]'>Learn In Our Next-Gen Online Classroom</h1>
                <div className='bg-yellow-400 w-[96px] rounded h-[3px]'></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center justify-items-center gap-6'>
                <div className='flex flex-col justify-center items-center gap-4 text-center'>
                    <div className='w-[80px] h-[80px] bg-main rounded-full flex justify-center items-center'>
                        <SiBookstack className='text-white text-3xl' />
                    </div>
                    <h1 className='text-black text-[1.5rem] leading-10 font-semibold'>Hands-On Learning</h1>
                    <p className='text-[1.125rem] font-medium leading-10 text-grayTwo'>
                        Gain real-world experience by working on multiple projects as you progress through our cutting-edge courses.
                    </p>
                </div>
                <div className='flex flex-col justify-center items-center gap-4 text-center'>
                    <div className='w-[80px] h-[80px] bg-main rounded-full flex justify-center items-center'>
                        <FaRegLightbulb className='text-white text-3xl' />
                    </div>
                    <h1 className='text-black text-[1.5rem] leading-10 font-semibold'>Portfolio Development</h1>
                    <p className='text-[1.125rem] font-medium leading-10 text-grayTwo'>
                        Showcase your skills by building an impressive portfolio, guided by expert mentors every step of the way.
                    </p>
                </div>
                <div className='flex flex-col justify-center items-center gap-4 text-center'>
                    <div className='w-[80px] h-[80px] bg-main rounded-full flex justify-center items-center'>
                        <GiBullseye className='text-white text-3xl' />
                    </div>
                    <h1 className='text-black text-[1.5rem] leading-10 font-semibold'>Final Project Mastery</h1>
                    <p className='text-[1.125rem] font-medium leading-10 text-grayTwo'>
                        Receive structured guidance to complete your final project with confidence and demonstrate your expertise.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OnlineClassroom