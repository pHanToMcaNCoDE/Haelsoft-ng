'use client'

import React from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";


import edo from '../../../public/assets/clients/Edo State Government Haelsoft Clients.png';
import esi from '../../../public/assets/clients/Edo State Investment Promotion Office from Haelsoft.png';
import farm from '../../../public/assets/clients/Farm Industria Logo.png';
import giz from '../../../public/assets/clients/Giz Logo II.png';
import gro from '../../../public/assets/clients/Grovane Logo Blue.png';
import fin from '../../../public/assets/clients/Haelsoft Clients Edtech Platform.png';
import goo from '../../../public/assets/clients/Haelsoft Clients Edtech.png';
import srv from '../../../public/assets/clients/Haelsoft Edtech Logo (1).png';
import ser from '../../../public/assets/clients/Haelsoft Edtech Logo.png';
import kle from '../../../public/assets/clients/Kleenol Logo.png';
import kor from '../../../public/assets/clients/Korahq Edtech Clients.jpg';
import kus from '../../../public/assets/clients/Kusnap Logo from Haelsoft Edtech.png'
import lfi from '../../../public/assets/clients/Leatherback Financials Haelsoft Clients.png';
import min from '../../../public/assets/clients/Mintyn Logo.png';
import nex from '../../../public/assets/clients/Nexgate Official Logo.png';
import val from '../../../public/assets/clients/Valdo Furniture Interiors.png';
import zen from '../../../public/assets/clients/Zenith Logo from Haelsoft.png';
import Image from 'next/image';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { GoCheck } from 'react-icons/go';

const WhereTheyWork = () => {
  return (
    <section className='bg-white py-[100px] overflow-hidden flex flex-col justify-center items-center gap-[60px]'>
        <div className='flex flex-col justify-center items-center gap-4'>
          <h1 className='text-[#201A18] text-[1.5rem] font-semibold leading-[29.26px]'>
            Haelsoft Grads Work At
          </h1>
          <div className='bg-[#F1C118] w-[81px] rounded-[5px] h-[6.89px]'></div>
        </div>
        <div className="flex flex-col justify-between items-center gap-3 overflow-hidden relative clients h-full">  
            
          <div className="flex justify-center items-center gap-3 clients h-[120px]">
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
                    className="flex items-center justify-center w-full h-[120px] gap-20"
                    aria-label="My Favorite Images"
                >
                    
                    <SplideSlide className="w-[97px] h-[120px] flex items-center justify-center">
                        <Image width={120} height={120} src={edo} alt="Edo State Government"></Image>
                    </SplideSlide>
                    <SplideSlide className="w-[97px] h-[120px] flex items-center justify-center">
                        <Image width={120} height={120} src={esi} alt="Edo State Investment Promotion Office"></Image>
                    </SplideSlide>
                    <SplideSlide className="w-[97px] h-[120px] flex items-center justify-center">
                        <Image width={120} height={120} src={farm} alt="Farm Industria"></Image>
                    </SplideSlide>
                    <SplideSlide className="w-[97px] h-[120px] flex items-center justify-center">
                        <Image width={120} height={120} src={giz} alt="Giz"></Image>
                    </SplideSlide>
                    <SplideSlide className="w-[97px] h-[120px] flex items-center justify-center">
                        <Image width={120} height={120} src={gro} alt="Grovane"></Image>
                    </SplideSlide>
                    <SplideSlide className="w-[97px] h-[120px] flex items-center justify-center">
                        <Image width={120} height={120} src={fin} alt="Fincra"></Image>
                    </SplideSlide>
                    <SplideSlide className="w-[97px] h-[120px] flex items-center justify-center">
                        <Image width={120} height={120} src={goo} alt="Google"></Image>
                    </SplideSlide>
                    <SplideSlide className="w-[97px] h-[120px] flex items-center justify-center">
                        <Image width={120} height={120} src={srv} alt="SRV Grid Limited"></Image>
                    </SplideSlide>
                </Splide>
            </div>
            <div className="flex justify-center items-center gap-3 clients h-[120px]">
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
                    className="flex items-center justify-center w-full h-[120px] gap-20"
                    aria-label="My Favorite Images"
                >
                    <SplideSlide className="w-[97px] h-[120px] flex items-center justify-center">
                        <Image width={120} height={120} src={ser} alt="Servo"></Image>
                    </SplideSlide>
                    <SplideSlide className="w-[97px] h-[120px] flex items-center justify-center">
                        <Image width={120} height={120} src={kle} alt="Kleenol"></Image>
                    </SplideSlide>
                    <SplideSlide className="w-[97px] h-[120px] flex items-center justify-center">
                        <Image width={120} height={120} src={kor} alt="Korahq"></Image>
                    </SplideSlide>
                    <SplideSlide className="w-[97px] h-[120px] flex items-center justify-center">
                        <Image width={120} height={120} src={kus} alt="Kusnap"></Image>
                    </SplideSlide>
                    <SplideSlide className="w-[97px] h-[120px] flex items-center justify-center">
                        <Image width={120} height={120} src={lfi} alt="Leatherback Financials"></Image>
                    </SplideSlide>
                    <SplideSlide className="w-[97px] h-[120px] flex items-center justify-center">
                        <Image width={120} height={120} src={min} alt="Mintyn"></Image>
                    </SplideSlide>
                    <SplideSlide className="w-[97px] h-[120px] flex items-center justify-center">
                        <Image width={120} height={120} src={nex} alt="Nexgate Group"></Image>
                    </SplideSlide>
                    <SplideSlide className="w-[97px] h-[120px] flex items-center justify-center">
                        <Image width={120} height={120} src={val} alt="Valdo Furniture"></Image>
                    </SplideSlide>
                    <SplideSlide className="w-[97px] h-[120px] flex items-center justify-center">
                        <Image width={120} height={120} src={zen} alt="Zenith Bank"></Image>
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    </section>
  )
}

export default WhereTheyWork