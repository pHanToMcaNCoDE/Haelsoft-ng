import React from 'react'

const TestimonialMetrices = () => {
  return (
    <section className='bg-[#e5e5e5] w-full px-[24px] py-[20px]'>
        <div className='max-w-[1200px] mx-auto grid grid-cols-3 gap-6 lg:gap-10 place-items-center justify-items-center'>
            <div className='flex flex-col justify-center items-center text-center gap-2'>
                <p className='text-black text-[1.125rem] lg:text-[1.5rem] font-bold leading-6 lg:leading-8'>10+</p>
                {/* <h2>3.8</h2> */}
                <p className='text-[1rem] lg:text-[1.25rem] font-semibold text-black'>Alumni Reviews</p>
            </div>
            <div className='flex flex-col justify-center items-center text-center gap-2'>
                <p className='text-black text-[1.125rem] lg:text-[1.5rem] font-bold leading-6 lg:leading-8'>3+</p>
                {/* <h2>3.8</h2> */}
                <p className='text-[1rem] lg:text-[1.25rem] font-semibold text-black'>Companies</p>
            </div>
            <div className='flex flex-col justify-center items-center text-center gap-2'>
                <p className='text-black text-[1.125rem] lg:text-[1.5rem] font-bold leading-6 lg:leading-8'>5+</p>
                {/* <h2>3.8</h2> */}
                <p className='text-[1rem] lg:text-[1.25rem] font-semibold text-black'>Industries</p>
            </div>
            {/* <div className='flex flex-col justify-center items-center text-center'>
                <p>Brand Name</p>
                <h2>3.8</h2>
                <p>100+ Reviews</p>
            </div> */}
        </div>
    </section>
  )
}

export default TestimonialMetrices