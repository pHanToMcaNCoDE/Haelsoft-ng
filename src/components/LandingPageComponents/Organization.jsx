import React from 'react'
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

const Organization = () => {
  return (
    <section className='py-[100px] bg-[#F7F7F7]'>
        <div className='max-w-[1200px] 2xl:max-w-[1500px] mx-auto px-5 flex flex-col justify-center items-center gap-[8em]'>
            <div className='flex flex-col gap-2 justify-center items-center'>
                <h1 className='text-[1.625rem] leading-[36px] text-[#201A18] font-semibold text-center w-full lg:w-[433px]'>
                    Orgabnizations Empowering Their Employees at Haelsoft
                </h1>
                <div className='bg-[#F1C118] h-[4px] w-[56px] rounded'></div>
            </div>
            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 justify-items-center gap-6 w-full xl:w-[1114px] xl:h-[264px]'>
                <div className='w-full md:w-[100px] md:h-[100px] flex justify-center items-center'>
                    <Image width={150} height={150} src={edo} alt="Edo State Government"></Image>
                </div>
                <div className='w-full md:w-[100px] md:h-[100px] flex justify-center items-center'>
                    <Image width={150} height={150} src={esi} alt="Edo State Investment Promotion Office"></Image>
                </div>
                <div className='w-full md:w-[100px] md:h-[100px] flex justify-center items-center'>
                    <Image width={150} height={150} src={farm} alt="Farm Industria"></Image>
                </div>
                <div className='w-full md:w-[100px] md:h-[100px] flex justify-center items-center'>
                    <Image width={150} height={150} src={giz} alt="Giz"></Image>
                </div>
                <div className='w-full md:w-[100px] md:h-[100px] flex justify-center items-center'>
                    <Image width={150} height={150} src={gro} alt="Grovane"></Image>
                </div>
                <div className='w-full md:w-[100px] md:h-[100px] flex justify-center items-center'>
                    <Image width={150} height={150} src={fin} alt="Fincra"></Image>
                </div>
                <div className='w-full md:w-[100px] md:h-[100px] flex justify-center items-center'>
                    <Image width={150} height={150} src={goo} alt="Google"></Image>
                </div>
                <div className='w-full md:w-[100px] md:h-[100px] flex justify-center items-center'>
                    <Image width={150} height={150} src={srv} alt="SRV Grid Limited"></Image>
                </div>
                <div className='w-full md:w-[100px] md:h-[100px] flex justify-center items-center'>
                    <Image width={150} height={150} src={ser} alt="Servo"></Image>
                </div>
                <div className='w-full md:w-[100px] md:h-[100px] flex justify-center items-center'>
                    <Image width={150} height={150} src={kle} alt="Kleenol"></Image>
                </div>
                <div className='w-full md:w-[100px] md:h-[100px] flex justify-center items-center'>
                    <Image width={150} height={150} src={kor} alt="Korahq"></Image>
                </div>
                <div className='w-full md:w-[100px] md:h-[100px] flex justify-center items-center'>
                    <Image width={150} height={150} src={kus} alt="Kusnap"></Image>
                </div>
            </div>
        </div>




          {/* <SplideSlide className=" w-[97px] h-[90px] flex items-center justify-center">
            <Image width={150} height={150} src={lfi} alt="Leatherback Financials"></Image>
          </SplideSlide>
          <SplideSlide className=" w-[97px] h-[90px] flex items-center justify-center">
            <Image width={150} height={150} src={min} alt="Mintyn"></Image>
          </SplideSlide>
          <SplideSlide className=" w-[97px] h-[90px] flex items-center justify-center">
            <Image width={150} height={150} src={nex} alt="Nexgate Group"></Image>
          </SplideSlide>
          <SplideSlide className=" w-[97px] h-[90px] flex items-center justify-center">
            <Image width={150} height={150} src={val} alt="Valdo Furniture"></Image>
          </SplideSlide>
          <SplideSlide className=" w-[97px] h-[90px] flex items-center justify-center">
            <Image width={150} height={150} src={zen} alt="Zenith Bank"></Image>
          </SplideSlide> */}
    </section>
  )
}

export default Organization