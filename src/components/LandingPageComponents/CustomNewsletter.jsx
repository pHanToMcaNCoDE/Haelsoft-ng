import React from 'react'

const CustomNewsletter = () => {
  return (
    <div className='bg-main text-white px-[32px] py-[48px] rounded-lg w-full lg:w-[1050px] lg:h-[200px] flex flex-col lg:flex-row justify-between items-center gap-10 mx-auto'>
        <div className='w-full lg:w-[380px] flex flex-col gap-6'>
            <h1 className='text-[1.625rem] font-medium leading-8'>Subscribe to Our Newsletter</h1>
            <p className='w-full md:w-[380px] h-[50px] text-[.875rem] leading-6 font-normal'>
                Get the latest on upcoming courses, programs, events, and more — straight to your inbox.
            </p>
        </div>
        <form action="" className='w-full lg:w-[380px] flex flex-col gap-6'>
            <div className='flex flex-col md:flex-row justify-start gap-8 items-start'>
                <input className='text-black w-full sm:w-[245px] h-[46px] bg-white outline-none border-none py-[10px] px-[20px] rounded' placeholder='Email Address' type="text" />
                <button className='flex justify-center items-center border border-white w-full sm:w-[118px] h-[46px] rounded py-[12px] px-[24px] text-base font-normal'>Subscribe</button>
            </div>
            <p className='text-base font-normal'>By clicking &quot;Subscribe&quot;, you accept our <span className='underline'>Terms</span></p>
        </form>
    </div>
  )
}

export default CustomNewsletter