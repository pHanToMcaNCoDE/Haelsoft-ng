import React from 'react'
import img from '../../../public/assets/EdTech Platform (9) 3.svg';
import img2 from '../../../public/assets/EdTech Platform (10).svg';
import Image from 'next/image';
const TrainingBenefits = () => {
  return (
    <section className='max-w-[1200px] 2xl:max-w-[1500px] mx-auto py-[100px] flex flex-col gap-[10em] px-5'>
      <div className='flex flex-col-reverse lg:flex-row justify-between items-center gap-[4em]'>
        <Image src={img} width={662} height={756} className='w-full lg:w-[462px] xl:w-[662px] object-contain' alt="People Working" />
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-1'>
            <p className='text-[#201A18] text-[.875rem] font-normal leading-5'>COPORATE TRAINING</p>
            <h1 className='text-[#F36400] font-semibold text-[1.875rem] leading-10'>Hire A Ed-Tech Talent</h1>
          </div>
          <p className='text-[1.125rem] leading-[43px] font-normal w-full xl:w-[497px] text-grayTwo'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec 
          </p>
        </div>
      </div>


      <div className='flex flex-col lg:flex-row justify-between items-center gap-[4em]'>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-1'>
            <p className='text-[#201A18] text-[.875rem] font-normal leading-5'>COPORATE TRAINING</p>
            <h1 className='text-[#F36400] font-semibold text-[1.875rem] leading-10'>Hire A Ed-Tech Talent</h1>
          </div>
          <p className='text-[1.125rem] leading-[43px] font-normal w-full xl:w-[497px] text-grayTwo'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec 
          </p>
        </div>
        <Image src={img2} width={662} height={756} className='w-full lg:w-[462px] xl:w-[662px] object-contain' alt="People Working" />
      </div>

      <div className='mx-auto bg-[#FBFBFB] flex flex-col md:flex-row justify-between items-center w-full gap-4'>

        <div className='flex flex-col justify-between items-start p-8 gap-4 bg-main w-full md:w-[356px] md:h-[219px] rounded'>
          <div className='flex justify-center w-full items-start gap-4'>
            <div className=' w-full xl:w-[40%]'>
              <h1 className='text-[1.75rem] text-[#F1C118] leading-[34.13px] font-bold'>50%</h1>
              <p className='text-white font-semibold leading-[30px] text-[.875rem]'>Write a quote</p>
            </div>
            <div className='flex w-full xl:w-[60%]'>
              <div className='bg-[#FFE8D2] w-full xl:w-[100px] h-[100px]'></div>
              <div className='bg-[#845238] w-full xl:w-[100px] h-[100px]'></div>
            </div>
          </div>
          <div className='flex flex-col justify-center items-start gap-2'>
            <div className='bg-[#F1C118] rounded h-[2px] w-[56px]'></div>
            <p className='text-[14px] text-white leading-[9.75px] font-normal'>Write a quote</p>
          </div>
        </div>
        
        <div className='flex flex-col justify-between items-start p-8 gap-4 bg-main w-full md:w-[356px] md:h-[219px] rounded'>
          <div className='flex justify-center w-full items-start gap-4'>
            <div className=' w-full xl:w-[40%]'>
              <h1 className='text-[1.75rem] text-[#F1C118] leading-[34.13px] font-bold'>50%</h1>
              <p className='text-white font-semibold leading-[30px] text-[.875rem]'>Write a quote</p>
            </div>
            <div className='flex w-full xl:w-[60%]'>
              <div className='bg-[#005246] w-full xl:w-[100px] h-[100px]'></div>
              <div className='bg-[#BCA79D] w-full xl:w-[100px] h-[100px]'></div>
            </div>
          </div>
          <div className='flex flex-col justify-center items-start gap-2'>
            <div className='bg-[#F1C118] rounded h-[2px] w-[56px]'></div>
            <p className='text-[14px] text-white leading-[9.75px] font-normal'>Write a quote</p>
          </div>
        </div>
        
        <div className='flex flex-col justify-between items-start p-8 gap-4 bg-main w-full md:w-[356px] md:h-[219px] rounded'>
          <div className='flex justify-center w-full items-start gap-4'>
            <div className=' w-full xl:w-[40%]'>
              <h1 className='text-[1.75rem] text-[#F1C118] leading-[34.13px] font-bold'>50%</h1>
              <p className='text-white font-semibold leading-[30px] text-[.875rem]'>Write a quote</p>
            </div>
            <div className='flex w-full xl:w-[60%]'>
              <div className='w-full xl:w-[100px] h-[100px]'></div>
              <div className='w-full xl:w-[100px] h-[100px]'></div>
            </div>
          </div>
          <div className='flex flex-col justify-center items-start gap-2'>
            <div className='bg-[#F1C118] rounded h-[2px] w-[56px]'></div>
            <p className='text-[14px] text-white leading-[9.75px] font-normal'>Write a quote</p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default TrainingBenefits