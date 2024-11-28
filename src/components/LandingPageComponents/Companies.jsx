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

const Companies = () => {
  return (
    <section className='w-full py-6 flex flex-col gap-[3em] bg-[#F2F2F2]'>
        
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
          className="flex items-center justify-center w-full h-[55px] gap-20"
          aria-label="My Favorite Images"
        >
          <SplideSlide className="grayscale w-[97px] h-[71px] flex items-center justify-center">
            <Image width={200} height={200} src={edo} alt="Edo State Government"></Image>
          </SplideSlide>
          <SplideSlide className="grayscale w-[97px] h-[61px] flex items-center justify-center">
            <Image width={200} height={200} src={esi} alt="Edo State Investment Promotion Office"></Image>
          </SplideSlide>
          <SplideSlide className="grayscale w-[97px] h-[61px] flex items-center justify-center">
            <Image width={200} height={200} src={farm} alt="Farm Industria"></Image>
          </SplideSlide>
          <SplideSlide className="grayscale w-[97px] h-[61px] flex items-center justify-center">
            <Image width={200} height={200} src={giz} alt="Giz"></Image>
          </SplideSlide>

          <SplideSlide className="grayscale w-[97px] h-[61px] flex items-center justify-center">
          {/* <Image width={130} height={130} src={srv} alt="srv"></Image> */}
          </SplideSlide>
          <SplideSlide className="grayscale w-[97px] h-[61px] flex items-center justify-center">
            <Image width={200} height={200} src={gro} alt="Grovane"></Image>
          </SplideSlide>
          <SplideSlide className="grayscale w-[97px] h-[61px] flex items-center justify-center">
            <Image width={200} height={200} src={fin} alt="Fincra"></Image>
          </SplideSlide>
          <SplideSlide className="grayscale w-[97px] h-[61px] flex items-center justify-center">
            <Image width={200} height={200} src={goo} alt="Google"></Image>
          </SplideSlide>

          <SplideSlide className="grayscale w-[97px] h-[61px] flex items-center justify-center">
            <Image width={200} height={200} src={srv} alt="SRV Grid Limited"></Image>
          </SplideSlide>
          <SplideSlide className="grayscale w-[97px] h-[61px] flex items-center justify-center">
            <Image width={200} height={200} src={ser} alt="Servo"></Image>
          </SplideSlide>
          <SplideSlide className="grayscale w-[97px] h-[61px] flex items-center justify-center">
            <Image width={200} height={200} src={kle} alt="Kleenol"></Image>
          </SplideSlide>
          <SplideSlide className="grayscale w-[97px] h-[61px] flex items-center justify-center">
            <Image width={200} height={200} src={kor} alt="Korahq"></Image>
          </SplideSlide>
          <SplideSlide className="grayscale w-[97px] h-[61px] flex items-center justify-center">
            <Image width={200} height={200} src={kus} alt="Kusnap"></Image>
          </SplideSlide>


          <SplideSlide className="grayscale w-[97px] h-[61px] flex items-center justify-center">
            <Image width={200} height={200} src={lfi} alt="Leatherback Financials"></Image>
          </SplideSlide>
          <SplideSlide className="grayscale w-[97px] h-[61px] flex items-center justify-center">
            <Image width={200} height={200} src={min} alt="Mintyn"></Image>
          </SplideSlide>
          <SplideSlide className="grayscale w-[97px] h-[61px] flex items-center justify-center">
            <Image width={200} height={200} src={nex} alt="Nexgate Group"></Image>
          </SplideSlide>
          <SplideSlide className="grayscale w-[97px] h-[61px] flex items-center justify-center">
            <Image width={200} height={200} src={val} alt="Valdo Furniture"></Image>
          </SplideSlide>
          <SplideSlide className="grayscale w-[97px] h-[61px] flex items-center justify-center">
            <Image width={200} height={200} src={zen} alt="Zenith Bank"></Image>
          </SplideSlide>
        </Splide>
      </div>
    </section>
  )
}

export default Companies