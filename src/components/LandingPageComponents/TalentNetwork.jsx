import Image from 'next/image'
import React from 'react'
import img from '../../../public/EdTech Platform (6).svg';

const TalentNetwork = () => {
  return (
    <section className='max-w-full ml-auto min-h-screen relative flex flex-col lg:flex-row'>
        <div className='py-[100px] w-full xl:w-[516px] flex flex-col justify-center items-start gap-10 px-6 xl:px-0'>
            <h1 className='w-full lg:w-[271px] text-main leading-[43px] text-[2.063rem] font-bold'>Haelsoft Talent Network</h1>
            <p className='text-[1rem] text-[#655D59] leading-[30px] font-normal'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a felis maximus, aliquet est in, feugiat nibh. Sed nec felis et eros aliquet vehicula eu ut sapien. Praesent et neque eu arcu congue lacinia. Aenean euismod libero massa, a malesuada elit tincidunt eget. In ornare nibh at dui iaculis, ac cursus ligula facilisis. Pellentesque porta, augue ac interdum blandit, nisl nisl molestie orci, ac luctus ex augue in est. Pellentesque orci lacus, dictum vitae nisi vel, mollis vehicula nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a felis maximus, aliquet est in, feugiat nibh. Sed nec felis et eros aliquet vehicula eu ut sapien. Praesent et neque.
            </p>
        </div>
        <Image src={img} alt='Talents'></Image>

        <div className='absolute -bottom-[10%] max-w-[1178px] xl:left-[5%] mx-6 xl:mx-auto gap-[10px] flex flex-col xl:flex-row justify-center items-center'>
            <div className='bg-main w-full xl:w-[386px] h-full lg:h-[323px] rounded p-6 flex flex-col justify-center gap-20 items-start'>
                <div className='flex flex-col justify-center items-start gap-4'>
                    <h1 className='text-white text-[2.25rem] leading-[43.88px] font-bold'>100%</h1>
                    <p className='w-full lg:w-[321px] text-white text-[1rem] leading-[19.5px] font-semibold'>
                        Explore the possibilities of AI and how this emerging technology can
                    </p>
                </div>
                <div className='flex flex-col justify-center items-start gap-3'>
                    <div className='rounded bg-[#F1C118] w-[53px] h-[3px]'></div>
                    <p className='text-white leading-[30px] text-[1rem] font-normal'>Source:</p>
                </div>
            </div>
            <div className='bg-main w-full xl:w-[386px] h-full lg:h-[323px] rounded p-6 flex flex-col justify-center gap-20 items-start'>
                <div className='flex flex-col justify-center items-start gap-4'>
                    <h1 className='text-white text-[2.25rem] leading-[43.88px] font-bold'>100%</h1>
                    <p className='w-full lg:w-[321px] text-white text-[1rem] leading-[19.5px] font-semibold'>
                        Explore the possibilities of AI and how this emerging technology can
                    </p>
                </div>
                <div className='flex flex-col justify-center items-start gap-3'>
                    <div className='rounded bg-[#F1C118] w-[53px] h-[3px]'></div>
                    <p className='text-white leading-[30px] text-[1rem] font-normal'>Source:</p>
                </div>
            </div>
            <div className='bg-main w-full xl:w-[386px] h-full lg:h-[323px] rounded p-6 flex flex-col justify-center gap-20 items-start'>
                <div className='flex flex-col justify-center items-start gap-4'>
                    <h1 className='text-white text-[2.25rem] leading-[43.88px] font-bold'>100%</h1>
                    <p className='w-full lg:w-[321px] text-white text-[1rem] leading-[19.5px] font-semibold'>
                        Explore the possibilities of AI and how this emerging technology can
                    </p>
                </div>
                <div className='flex flex-col justify-center items-start gap-3'>
                    <div className='rounded bg-[#F1C118] w-[53px] h-[3px]'></div>
                    <p className='text-white leading-[30px] text-[1rem] font-normal'>Source:</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TalentNetwork