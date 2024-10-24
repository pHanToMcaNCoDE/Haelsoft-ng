import React from 'react'
import img from '../../../public/EdTech Platform Vector 4.svg';
import Image from 'next/image';

const LearnOnline = () => {
  return (
    <section className='overflow-hidden min-h-screen xl:h-[1536px] w-full pb-[100px] relative pt-[300px] bg-main'>
        <Image width={888} height={1156.22} className='absolute top-[5%] z-[5px] right-[-1%] object-cover bottom-0' src={img} alt='Image'></Image>
        <div className='max-w-[1200px] 2xl:max-w-[1530px] mx-auto min-h-screen pt-[111px]'>
            <div className='bg-white w-full lg:w-[520px] rounded-[5px] h-[600px] relative z-10'></div>
        </div>
    </section>
  )
}

export default LearnOnline