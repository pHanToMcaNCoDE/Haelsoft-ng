import React from 'react'
import badge from '../../../public/assets/get-certificate/EdTech Platform Group 326.svg';
import man from '../../../public/assets/get-certificate/EdTech Platform 2.svg';
import vector from '../../../public/assets/get-certificate/EdTech Platform Group 325.svg';
import Image from 'next/image';
import obj from '../../../public/assets/get-certificate/EdTech Platform Group.svg';

const GetCertificate = ({header}) => {
  return (
    <section className='w-full min-h-[120vh] bg-white relative px-6 overflow-hidden'>
        <Image width={1712.94} height={2736.35} className='object-cover absolute z-10 top-[-100px] left-[200px]' src={obj} alt='Vector'></Image>
        <div className='flex flex-col justify-center items-start gap-4 max-w-[1250px] mx-auto pt-[96px]'>
            <Image width={195} height={234} className='object-cover' src={badge} alt='Haelsoft Certificate Badge'></Image>
            <div className='w-full lg:w-[356px] flex flex-col justify-center items-start gap-4'>
                {header}
                <div className='w-[56px] h-[4px] rounded-[4px] bg-[#F1C118]'></div>
            </div>
            <p className='font-normal text-grayTwo leading-[30px] text-[1rem] w-full xl:w-[542px]'>
                <span className='font-semibold'>Lead with Impact, Innovate with Strategy, and Drive Results</span> In today&apos;s dynamic business environment, effective marketing leadership is the cornerstone of brand success and growth. Haelsoft EdTech Platform&apos;s Marketing Leadership course is designed to transform you into a visionary marketing leader who can craft strategies, inspire teams, and deliver measurable results. Whether you&apos;re an experienced marketer aiming to take on leadership roles or a professional transitioning into marketing, this course will provide the skills and insights needed to lead in a rapidly evolving marketing landscape.
            </p>
        </div>
        <div>
            <Image width={640} height={564} src={man} alt='Black Man smiling' className='object-cover xl:absolute right-0 top-0 z-20'></Image>
            <Image
                width={750}
                height={486}
                src={vector}
                alt="Vector"
                className="object-cover xl:absolute right-0 top-[549px] z-[5px]"
            />
        </div>
    </section>
  )
}

export default GetCertificate