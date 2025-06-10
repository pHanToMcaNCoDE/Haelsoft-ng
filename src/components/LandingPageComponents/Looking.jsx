import React from 'react'
import img from '../../../public/assets/EdTech Platform Vector 8 2.svg';
import Image from 'next/image';

const Looking = () => {
  return (
    <section className='px-6 relative h-screen'>
        <Image width={1484} height={1279} src={img} alt='Orange Background' className='top-[-30%] h-full object-cover absolute left-0 right-0 z-[5px] w-screen'></Image>

        <div className='relative z-10 flex flex-col py-[200px] lg:flex-row justify-center items-center gap-10 max-w-[1250px] mx-auto'>
            <h1 className='w-full lg:w-[213px] text-white leading-[34.13px] text-[1.75rem] font-bold'>Looking for Another Programming Language?</h1>
            <div className='w-full xl:w-[796px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px] justify-items-center'>
                <div className='flex flex-col justify-end p-[15px] items-center w-full lg:w-[259px] h-[244px] bg-white'>
                    <button className='bg-[#FF8C53] border border-[#FF8C53] flex justify-center items-center gap-[10px] p-[10px] rounded w-[180px] h-[35px] text-white font-semibold text-[.875rem] leading-[30px] '>Learn</button>
                </div>
                <div className='flex flex-col justify-end p-[15px] items-center w-full lg:w-[259px] h-[244px] bg-white'>
                    <button className='bg-[#FF8C53] border border-[#FF8C53] flex justify-center items-center gap-[10px] p-[10px] rounded w-[180px] h-[35px] text-white font-semibold text-[.875rem] leading-[30px] '>Learn</button>
                </div>
                <div className='flex flex-col justify-end p-[15px] items-center w-full lg:w-[259px] h-[244px] bg-white'>
                    <button className='bg-[#FF8C53] border border-[#FF8C53] flex justify-center items-center gap-[10px] p-[10px] rounded w-[180px] h-[35px] text-white font-semibold text-[.875rem] leading-[30px] '>Learn</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Looking