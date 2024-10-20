import React from 'react'
import ben from '/public/assets/Black Man Receiving Award.jpg'
import benTwo from '/public/assets/Black Man Receiving Award by Anna Nekrashevich.jpg'
import benThree from '/public/assets/benefit3.jpg'
import BenefitCards from './BenefitCards'
import Image from 'next/image'

const Benefits = () => {
  return (
    <section className='min-h-screen w-full flex justify-between items-center'>
      <div className='px-5 lg:px-8 hidden xl:flex min-h-screen py-[100px] gap-[4em] flex-col justify-start bg-[#D98E47]/20 w-full lg:w-[40%] xl:w-[45%] 2xl:w-[50%]'>
        <h1 className='text-[#F36400] text-[2.125rem] font-semibold leading-10 w-full 2xl:w-[690px]'>Interactive Learning & Certification Benefits</h1>
        <div className='relative h-[50vh]'>
          <Image className='-rotate-[10deg] object-cover rounded-2xl absolute left-[5%] 2xl:left-[10%]' width={330} height={330} src={ben} alt="" />
          <Image className='rotate-6 object-cover rounded-2xl absolute left-[30%] 2xl:left-[40%]' width={330} height={330} src={benTwo} alt="" />
        </div>
      </div>
      <div className='w-full xl:w-[55%] 2xl:w-[50%] xl:relative xl:right-[6%] 2xl:right-[5%] 2xl:px-0 px-8 flex flex-col justify-center items-center gap-10 h-full xl:h-auto py-[100px]'>
        <h1 className='text-[#F36400] flex xl:hidden text-[2.125rem] font-semibold leading-10 w-full lg:w-[690px] text-center'>Interactive Learning & Certification Benefits</h1>
        <BenefitCards/>
      </div>
    </section>
  )
}

export default Benefits