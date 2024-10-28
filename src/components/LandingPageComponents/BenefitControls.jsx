'use client'

import React from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import './benefits.css'
import { FaBarsProgress } from 'react-icons/fa6';
import { RiProgress5Line } from 'react-icons/ri';
import { GrCertificate, GrDirections } from 'react-icons/gr';
import { BsHourglassTop } from 'react-icons/bs';

const BenefitControls = ({ click, setClick, currentBenefit, setCurrentBenefit }) => {

  return (
    <section className='max-w-[986px] flex flex-col justify-center items-start h-[102px] z-10'>
        {/* <div className="relative flex justify-center items-center gap-6 w-full h-[65px]"> */}
            <Splide
                // extensions={{ AutoScroll }}
                options={{
                    type: 'loop',
                    gap: '10px',
                    perPage: 4,
                    perMove: 1,
                    height: '102px',
                    arrows: true,
                    pagination: false,
                    autoScroll: { speed: 1 },
                    classes: {
                        pagination: 'splide__p custom-p',
                        arrow: 'custom-arw',
                        prev: 'custom-arw--prev',
                        next: 'custom-arw--next',
                    },
                }}
                className="max-w-[986px] mx-auto relative"
            >
                <SplideSlide onClick={() => setCurrentBenefit('Progress Tracking')} className={currentBenefit === 'Progress Tracking' ? ("cursor-pointer rounded w-full lg:w-[148px] h-[86px] py-[30px] px-[12px] flex items-center justify-center gap-3 bg-orange-700 text-white duration-200"):("cursor-pointer rounded w-full lg:w-[148px] h-[86px] py-[30px] px-[12px] flex items-center justify-center gap-3 bg-white text-black duration-200")}>
                    <RiProgress5Line className='text-[1.5rem]' />
                    <p className='text-base font-bold'>Progress Tracking</p>
                </SplideSlide>

                <SplideSlide onClick={() => setCurrentBenefit('Increased Flexibility')} className={currentBenefit === 'Increased Flexibility' ? ("cursor-pointer rounded w-full lg:w-[148px] h-[86px] py-[30px] px-[12px] flex items-center justify-center gap-3 bg-orange-700 text-white duration-200"):("cursor-pointer rounded w-full lg:w-[148px] h-[86px] py-[30px] px-[12px] flex items-center justify-center gap-3 bg-white text-black duration-200")}>
                    <GrDirections className='text-[1.5rem]' />
                    <p className='text-base font-bold'>Increased Flexibility</p>
                </SplideSlide>

                <SplideSlide onClick={() => setCurrentBenefit('Self-Paced Learning')} className={currentBenefit === 'Self-Paced Learning' ? ("cursor-pointer rounded w-full lg:w-[148px] h-[86px] py-[30px] px-[12px] flex items-center justify-center gap-3 bg-orange-700 text-white duration-200"):("cursor-pointer rounded w-full lg:w-[148px] h-[86px] py-[30px] px-[12px] flex items-center justify-center gap-3 bg-white text-black duration-200")}>
                    <BsHourglassTop className='text-[1.5rem]' />
                    <p className='text-base font-bold'>Self-Paced Learning</p>
                </SplideSlide>

                <SplideSlide onClick={() => setCurrentBenefit('Certification Benefits')} className={currentBenefit === 'Certification Benefits' ? ("cursor-pointer rounded w-full lg:w-[148px] h-[86px] py-[30px] px-[12px] flex items-center justify-center gap-3 bg-orange-700 text-white duration-200"):("cursor-pointer rounded w-full lg:w-[148px] h-[86px] py-[30px] px-[12px] flex items-center justify-center gap-3 bg-white text-black duration-200")}>
                    <GrCertificate className='text-[1.5rem]' />
                    <p className='text-base font-bold'>Certification Benefits</p>
                </SplideSlide>
            </Splide>
        {/* </div> */}
    </section>
  )
}

export default BenefitControls