import Image from 'next/image'
import React from 'react'

import cert from '../../../public/assets/get-certificate/EdTech Platform Certificate.svg';
import vector from '../../../public/assets/get-certificate/EdTech Platform Group 279.svg';

const EarnCertificate = () => {
  return (
    <section className='flex flex-col lg:flex-row justify-between items-center gap-10 overflow-hidden max-w-[1250px] mx-auto py-[100px] px-6 md:px-12 xl:px-0'>
        <div className='w-full lg:w-[517px] flex flex-col justify-center items-start gap-4'>
            <div className='w-full lg:w-[456px] flex flex-col justify-center items-start gap-4'>
                <h1 className='text-main w-full lg:w-[426px] font-semibold text-[1.5rem] lg:text-[2.063rem] leading-[50px]'>Earn a Ed-Tech<br/> Digital Marketing Certificate</h1>
                <div className='w-[56px] h-[4px] rounded-[4px] bg-[#F1C118]'></div>
            </div>
            <p className='text-[#655D59] text-[1rem] font-normal leading-[30px]'>
                You will be eligible for a Haelsoft UX designCertificate upon the completion of your course. This is a shareable certificate that you can add to your resume to attract potential employees and add to your page on LinkedIn.
            </p>
        </div>
        <div className='relative'>
            <Image width={530} height={525} className='object-cover relative z-10' src={cert} alt='Certificate'></Image>
            <Image className='absolute right-[-165px] z-[5px] top-[15px]' src={vector} alt='Vector'></Image>
        </div>
    </section>
  )
}

export default EarnCertificate