import React from 'react'
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
                    <Image className='grayscale object-contain' width={194} height={194} src={afro} alt="" />
                </div>
                <div className='w-full md:w-[100px] md:h-[100px] flex justify-center items-center'>
                    <Image className='grayscale object-contain' width={194} height={194} src={photiz} alt="" />
                </div>
                <div className='w-full md:w-[100px] md:h-[100px] flex justify-center items-center'>
                    <Image className='grayscale object-contain' width={194} height={194} src={swun} alt="" />
                </div>
                <div className='w-full md:w-[100px] md:h-[100px] flex justify-center items-center'>
                    <Image className='grayscale object-contain' width={194} height={194} src={kusnap} alt="" />
                </div>
                <div className='w-full md:w-[100px] md:h-[100px] flex justify-center items-center'>
                    <Image className='grayscale object-contain' width={194} height={194} src={lb} alt="" />
                </div>
                <div className='w-full md:w-[100px] md:h-[100px] flex justify-center items-center'>
                    <Image className='grayscale object-contain' width={194} height={194} src={gd} alt="" />
                </div>
                <div className='w-full md:w-[100px] md:h-[100px] flex justify-center items-center'>
                    <Image className='grayscale object-contain' width={194} height={194} src={pc} alt="" />
                </div>
                <div className='w-full md:w-[100px] md:h-[100px] flex justify-center items-center'>
                    <Image className='grayscale object-contain' width={194} height={194} src={peppa} alt="" />
                </div>
                <div className='w-full md:w-[100px] md:h-[100px] flex justify-center items-center'>
                    <Image className='grayscale object-contain' width={194} height={194} src={rh} alt="" />
                </div>
                <div className='w-full md:w-[100px] md:h-[100px] flex justify-center items-center'>
                    <Image className='grayscale object-contain' width={194} height={194} src={iso} alt="" />
                </div>
                <div className='w-full md:w-[100px] md:h-[100px] flex justify-center items-center'>
                    <Image className='grayscale object-contain' width={194} height={194} src={znz} alt="" />
                </div>
                <div className='w-full md:w-[100px] md:h-[100px] flex justify-center items-center'>
                    <Image className='grayscale object-contain' width={194} height={194} src={lcp} alt="" />
                </div>
            </div>
        </div>

    </section>
  )
}

export default Organization