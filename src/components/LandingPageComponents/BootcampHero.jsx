import React from 'react'

const BootcampHero = ({title, desc}) => {
  return (
    <section className='bg-main py-[100px] p-6'>
        <div className='flex flex-col lg:flex-row justify-between items-center max-w-[1250px] mx-auto gap-20'>
            <div className='flex flex-col justify-center items-start gap-10'>
                <div className='w-full lg:w-[560px] flex flex-col justify-center items-start gap-4'>
                    <h1 className='text-white font-bold text-[2.063rem] leading-[55px]'>{title}</h1>
                    <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
                </div>
                <p className='text-white w-full xl:w-[578px] text-[1rem] font-normal leading-[30px]'>
                    {desc}
                </p>
                <button className='w-[194px] h-[50px] bg-[#FF8C53] border border-[#FF8C53] p-[10px] flex justify-center items-center gap-[10px] rounded text-white text-[.875rem] font-semibold leading-[30px]'>Start Free Tutorial</button>
            </div>
            <div className='w-full xl:w-[597px] h-[472px] bg-white rounded'></div>
        </div>
    </section>
  )
}

export default BootcampHero