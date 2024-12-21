import React from 'react'
import badge from '../../../public/assets/get-certificate/EdTech Platform Group 326.svg';
import man from '../../../public/assets/get-certificate/EdTech Platform 2.svg';
import vector from '../../../public/assets/get-certificate/EdTech Platform Group 325.svg';
import Image from 'next/image';
import obj from '../../../public/assets/get-certificate/EdTech Platform Group.svg';

const CustomGetCertificate = ({header, desc, img}) => {
  return (
    <section className='w-full min-h-[120vh] xl:h-[40vh] bg-white relative px-8 overflow-hidden'>
        <Image className='w-screen object-cover absolute z-10 top-[0px] left-0' src={obj} alt='Vector'></Image>
        <div className='flex flex-col justify-center items-start gap-4 max-w-[1250px] mx-auto pt-[96px]'>
            <Image width={195} height={234} className='object-cover' src={badge} alt='Haelsoft Certificate Badge'></Image>
            <div className='w-full lg:w-[412px] flex flex-col justify-center items-start gap-4'>
                {header}
                <div className='w-[56px] h-[4px] rounded-[4px] bg-[#F1C118]'></div>
            </div>
            <p className='font-normal text-[#655D59] leading-[30px] text-[1rem] w-full sm:w-[328px] md:w-[442px] xl:w-[542px]'>
                {desc}
            </p>
        </div>
        <div>
            <Image width={640} height={564} src={man} alt='Black Man smiling' className='object-cover xl:absolute right-0 top-0 z-20'></Image>
            <Image
                width={750}
                height={486}
                src={img}
                alt="Vector"
                className="object-cover xl:absolute right-0 top-[549px] z-[5px]"
            />
        </div>
    </section>
  )
}

export default CustomGetCertificate