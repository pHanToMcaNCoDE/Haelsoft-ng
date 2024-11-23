'use client'

import React from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

import afro from '../../../public/assets/clients/Afro a.png';
import photiz from '../../../public/assets/clients/Afro c.png';
import swun from '../../../public/assets/clients/Colur Code.jpg';
// import srv from '../../public/assets/clients/IMG_8040.JPG';
import kusnap from '../../../public/assets/clients/KUSNAP.png';
import lb from '../../../public/assets/clients/leatherback.png';
import gd from '../../../public/assets/clients/Logo 2.png';
import pc from '../../../public/assets/clients/Logo 4.png';
import peppa from '../../../public/assets/clients/png peppa 1.png';
import rh from '../../../public/assets/clients/Rhebuch-Logo.png';
import iso from '../../../public/assets/clients/Untitled-1.png';
import znz from '../../../public/assets/clients/Zaph and Zoe B.png';
import lcp from '../../../public/assets/clients/Zaph and Zoe.png'
import Image from 'next/image';

const Network = () => {
  return (
    <section className='w-full hidden md:flex flex-col gap-[4em] pt-[400px] pb-[100px] relative'>
        <div className='flex flex-col justify-center items-center max-w-[1200px] mx-auto text-center gap-4'>
            <h1 className='text-[#F36400] text-[2.125rem] font-semibold leading-9'>Trusted by Leading Companies</h1>
            {/* <p className='w-full lg:w-[936px] text-center text-base text-[#655D59]'>
                At Haelsoft, we partner with renowned digital brands and professionals to deliver cutting-edge online courses, events, and bootcamp experiences, empowering learners worldwide.
            </p> */}
        </div>
        <div className="flex flex-col justify-between items-center gap-6 overflow-hidden relative before:absolute before:top-0 before:bottom-0 before:w-[35%] before:bg-gradient-to-r before:from-white before:to-transparent before:z-10 before:left-0 after:right-0 after:absolute after:top-0 after:bottom-0 after:w-[35%] after:z-10 after:bg-gradient-to-r after:from-transparent after:to-white clients h-full">  
            <div className="flex justify-center items-center gap-6 clients relative h-[65px]">
                {/* <div className='absolute w-[100px] bg-white'></div> */}
                <Splide
                    extensions={{ AutoScroll }}
                    options={{
                        type: "loop",
                        gap: "30px",
                        pauseOnHover: false,
                        pauseOnFocus: false,
                        perPage: 8,
                        arrows: false,
                        pagination: false,
                        autoScroll: { pauseOnHover: false, speed: 1 },
                    }}
                    className="flex items-center justify-center w-full gap-20"
                    aria-label="My Favorite Images"
                >
                    <SplideSlide className="w-[97px] h-[71px] flex items-center justify-center">
                        <Image width={300} height={300} src={afro} alt="Afro"></Image>
                    </SplideSlide>
                    <SplideSlide className="w-[97px] h-[61px] flex items-center justify-center">
                        <Image width={300} height={300} src={photiz} alt="Photiz"></Image>
                    </SplideSlide>
                    <SplideSlide className="w-[97px] h-[61px] flex items-center justify-center">
                        <Image width={300} height={300} src={kusnap} alt="Kusnap Icon"></Image>
                    </SplideSlide>
                    <SplideSlide className="grayscale w-[97px] h-[61px] flex items-center justify-center">
                        <Image width={300} height={300} src={swun} alt="Swun"></Image>
                    </SplideSlide>

                    <SplideSlide className="w-[97px] h-[61px] flex items-center justify-center">
                    {/* <Image width={130} height={130} src={srv} alt="srv"></Image> */}
                    </SplideSlide>
                    <SplideSlide className="w-[97px] h-[61px] flex items-center justify-center">
                        <Image width={300} height={300} src={lb} alt="lb"></Image>
                    </SplideSlide>
                    <SplideSlide className="w-[97px] h-[61px] flex items-center justify-center">
                        <Image width={300} height={300} src={gd} alt="gd"></Image>
                    </SplideSlide>
                </Splide>
            </div>
            <div className="flex justify-center items-center gap-6 clients h-[65px]">
                <Splide
                    extensions={{ AutoScroll }}
                    options={{
                    type: "loop",
                    gap: "30px",
                    
                    pauseOnHover: false,
                    pauseOnFocus: false,
                    perPage: 8,
                    arrows: false,
                    pagination: false,
                    autoScroll: { pauseOnHover: false, speed: 1 },
                    }}
                    className="flex items-center justify-center w-full gap-20"
                    aria-label="My Favorite Images"
                >
                    <SplideSlide className="w-[97px] h-[61px] flex items-center justify-center">
                            <Image width={300} height={300} src={pc} alt="pc"></Image>
                        </SplideSlide>

                        <SplideSlide className="w-[97px] h-[61px] flex items-center justify-center">
                            <Image width={300} height={300} src={peppa} alt="peppa"></Image>
                        </SplideSlide>
                        <SplideSlide className="w-[97px] h-[61px] flex items-center justify-center">
                            <Image width={300} height={300} src={rh} alt="rh"></Image>
                        </SplideSlide>
                        <SplideSlide className="w-[97px] h-[61px] flex items-center justify-center">
                            <Image width={300} height={300} src={iso} alt="iso"></Image>
                        </SplideSlide>
                        <SplideSlide className="w-[97px] h-[61px] flex items-center justify-center">
                            <Image width={300} height={300} src={znz} alt="znz"></Image>
                        </SplideSlide>
                        <SplideSlide className="w-[97px] h-[61px] flex items-center justify-center">
                            <Image width={300} height={300} src={lcp} alt="lcp"></Image>
                        </SplideSlide>
                </Splide>
            </div>
            <div className="flex justify-center items-center gap-6 clients h-[65px]">
                <Splide
                    extensions={{ AutoScroll }}
                    options={{
                    type: "loop",
                    gap: "30px",
                    
                    pauseOnHover: false,
                    pauseOnFocus: false,
                    perPage: 8,
                    arrows: false,
                    pagination: false,
                    autoScroll: { pauseOnHover: false, speed: 1 },
                    }}
                    className="flex items-center justify-center w-full gap-20"
                    aria-label="My Favorite Images"
                >
                    <SplideSlide className="w-[97px] h-[61px] flex items-center justify-center">
                            <Image width={300} height={300} src={pc} alt="pc"></Image>
                        </SplideSlide>

                        <SplideSlide className="w-[97px] h-[61px] flex items-center justify-center">
                            <Image width={300} height={300} src={peppa} alt="peppa"></Image>
                        </SplideSlide>
                        <SplideSlide className="w-[97px] h-[61px] flex items-center justify-center">
                            <Image width={300} height={300} src={rh} alt="rh"></Image>
                        </SplideSlide>
                        <SplideSlide className="w-[97px] h-[61px] flex items-center justify-center">
                            <Image width={300} height={300} src={iso} alt="iso"></Image>
                        </SplideSlide>
                        <SplideSlide className="w-[97px] h-[61px] flex items-center justify-center">
                            <Image width={300} height={300} src={znz} alt="znz"></Image>
                        </SplideSlide>
                        <SplideSlide className="w-[97px] h-[61px] flex items-center justify-center">
                            <Image width={300} height={300} src={lcp} alt="lcp"></Image>
                        </SplideSlide>
                </Splide>
            </div>
            <div className="flex justify-center items-center gap-6 clients h-[65px]">
                <Splide
                    extensions={{ AutoScroll }}
                    options={{
                    type: "loop",
                    gap: "30px",
                    
                    pauseOnHover: false,
                    pauseOnFocus: false,
                    perPage: 8,
                    arrows: false,
                    pagination: false,
                    autoScroll: { pauseOnHover: false, speed: 1 },
                    }}
                    className="flex items-center justify-center w-full gap-20"
                    aria-label="My Favorite Images"
                >
                    <SplideSlide className="w-[97px] h-[61px] flex items-center justify-center">
                            <Image width={300} height={300} src={pc} alt="pc"></Image>
                        </SplideSlide>

                        <SplideSlide className="w-[97px] h-[61px] flex items-center justify-center">
                            <Image width={300} height={300} src={peppa} alt="peppa"></Image>
                        </SplideSlide>
                        <SplideSlide className="w-[97px] h-[61px] flex items-center justify-center">
                            <Image width={300} height={300} src={rh} alt="rh"></Image>
                        </SplideSlide>
                        <SplideSlide className="w-[97px] h-[61px] flex items-center justify-center">
                            <Image width={300} height={300} src={iso} alt="iso"></Image>
                        </SplideSlide>
                        <SplideSlide className="w-[97px] h-[61px] flex items-center justify-center">
                            <Image width={300} height={300} src={znz} alt="znz"></Image>
                        </SplideSlide>
                        <SplideSlide className="w-[97px] h-[61px] flex items-center justify-center">
                            <Image width={300} height={300} src={lcp} alt="lcp"></Image>
                        </SplideSlide>
                </Splide>
            </div>
            <div className="flex justify-center items-center gap-6 clients h-[65px]">
                <Splide
                    extensions={{ AutoScroll }}
                    options={{
                    type: "loop",
                    gap: "30px",
                    
                    pauseOnHover: false,
                    pauseOnFocus: false,
                    perPage: 8,
                    arrows: false,
                    pagination: false,
                    autoScroll: { pauseOnHover: false, speed: 1 },
                    }}
                    className="flex items-center justify-center w-full gap-20"
                    aria-label="My Favorite Images"
                >
                    <SplideSlide className="w-[97px] h-[61px] flex items-center justify-center">
                            <Image width={300} height={300} src={pc} alt="pc"></Image>
                        </SplideSlide>

                        <SplideSlide className="w-[97px] h-[61px] flex items-center justify-center">
                            <Image width={300} height={300} src={peppa} alt="peppa"></Image>
                        </SplideSlide>
                        <SplideSlide className="w-[97px] h-[61px] flex items-center justify-center">
                            <Image width={300} height={300} src={rh} alt="rh"></Image>
                        </SplideSlide>
                        <SplideSlide className="w-[97px] h-[61px] flex items-center justify-center">
                            <Image width={300} height={300} src={iso} alt="iso"></Image>
                        </SplideSlide>
                        <SplideSlide className="w-[97px] h-[61px] flex items-center justify-center">
                            <Image width={300} height={300} src={znz} alt="znz"></Image>
                        </SplideSlide>
                        <SplideSlide className="w-[97px] h-[61px] flex items-center justify-center">
                            <Image width={300} height={300} src={lcp} alt="lcp"></Image>
                        </SplideSlide>
                </Splide>
            </div>
            <div className="flex justify-center items-center gap-6 clients h-[65px]">
                <Splide
                    extensions={{ AutoScroll }}
                    options={{
                    type: "loop",
                    gap: "30px",
                    
                    pauseOnHover: false,
                    pauseOnFocus: false,
                    perPage: 8,
                    arrows: false,
                    pagination: false,
                    autoScroll: { pauseOnHover: false, speed: 1 },
                    }}
                    className="flex items-center justify-center w-full gap-20"
                    aria-label="My Favorite Images"
                >
                    <SplideSlide className="w-[97px] h-[61px] flex items-center justify-center">
                            <Image width={300} height={300} src={pc} alt="pc"></Image>
                        </SplideSlide>

                        <SplideSlide className="w-[97px] h-[61px] flex items-center justify-center">
                            <Image width={300} height={300} src={peppa} alt="peppa"></Image>
                        </SplideSlide>
                        <SplideSlide className="w-[97px] h-[61px] flex items-center justify-center">
                            <Image width={300} height={300} src={rh} alt="rh"></Image>
                        </SplideSlide>
                        <SplideSlide className="w-[97px] h-[61px] flex items-center justify-center">
                            <Image width={300} height={300} src={iso} alt="iso"></Image>
                        </SplideSlide>
                        <SplideSlide className="w-[97px] h-[61px] flex items-center justify-center">
                            <Image width={300} height={300} src={znz} alt="znz"></Image>
                        </SplideSlide>
                        <SplideSlide className="w-[97px] h-[61px] flex items-center justify-center">
                            <Image width={300} height={300} src={lcp} alt="lcp"></Image>
                        </SplideSlide>
                </Splide>
            </div>
        </div>
      
    </section>
  )
}

export default Network