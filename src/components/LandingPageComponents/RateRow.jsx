import React from 'react'
import { TiStarFullOutline } from 'react-icons/ti'

const RateRow = () => {
  return (
    <section className='bg-main h-[223px] flex justify-center items-center'>
        <div className='max-w-[1250px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center place-items-center gap-10'>
            <div className='w-full flex flex-col justify-center items-center text-white text-[1.125rem] leading-[22.3px] lg:leading-[30px] lg:text-[1.875rem] font-semibold gap-4 text-center'>
                <div className='w-[250px] text-whtie text-[2.25rem] flex justify-center items-center'>
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                </div>
                <p>Kusnap</p>
            </div>
            <div className='w-full flex flex-col justify-center items-center text-white text-[1.125rem] leading-[22.3px] lg:leading-[30px] lg:text-[1.875rem] font-semibold gap-4 text-center'>
                <div className='w-[250px] text-whtie text-[2.25rem] flex justify-center items-center'>
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                </div>
                <p>Google</p>
            </div>
            <div className='w-full flex flex-col justify-center items-center text-white text-[1.125rem] leading-[22.3px] lg:leading-[30px] lg:text-[1.875rem] font-semibold gap-4 text-center'>
                <div className='w-[250px] text-whtie text-[2.25rem] flex justify-center items-center'>
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                </div>
                <p>Fincra</p>
            </div>
        </div>
    </section>
  )
}

export default RateRow