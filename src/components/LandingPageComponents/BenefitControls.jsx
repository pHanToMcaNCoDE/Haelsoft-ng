import React from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import './benefits.css'
import { FaBarsProgress } from 'react-icons/fa6';
import { RiProgress5Line } from 'react-icons/ri';
import { GrCertificate, GrDirections } from 'react-icons/gr';
import { BsHourglassTop } from 'react-icons/bs';

const BenefitControls = () => {
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
                <SplideSlide className="rounded w-full lg:w-[148px] h-[86px] py-[30px] px-[12px] flex items-center justify-center gap-3 bg-orange-700 text-white">
                    <RiProgress5Line className='text-[1.5rem] text-white' />
                    <p className='text-base font-bold'>Progress Tracking</p>
                </SplideSlide>
                <SplideSlide className="bg-white rounded w-full lg:w-[148px] h-[86px] py-[30px] px-[12px] flex items-center justify-center gap-3">
                    <GrDirections className='text-[1.5rem] text-black' />
                    <p className='text-base font-bold'>Increased Flexibility</p>
                </SplideSlide>
                <SplideSlide className="bg-white rounded w-full lg:w-[148px] h-[86px] py-[30px] px-[12px] flex items-center justify-center gap-3">
                    <BsHourglassTop className='text-[1.5rem] text-black' />
                    <p className='text-base font-bold'>Self-Paced Learning</p>
                </SplideSlide>
                <SplideSlide className="bg-white rounded w-full lg:w-[148px] h-[86px] py-[30px] px-[12px] flex items-center justify-center gap-3">
                    <GrCertificate className='text-[1.5rem] text-black' />
                    <p className='text-base font-bold'>Certification Benefits</p>
                </SplideSlide>
            </Splide>
        {/* </div> */}
    </section>
  )
}

export default BenefitControls