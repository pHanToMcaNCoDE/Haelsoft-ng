import React from 'react'

const TestimonialHero = () => {
  return (
    <section className='w-full relative h-[422px] lg:h-[552px] testimonial-hero overflow-hidden pb-[100px] pt-[100px] lg:pt-[200px] px-[16px]'>
      <div className='h-[422px] lg:h-[552px] absolute bg-main/[30%] top-0 w-full left-0 z-[5px]'></div>

      <div className='flex flex-col justify-center items-start gap-3 max-w-[1200px] mx-auto relative z-[10px]'>
        <h2 className='text-yellow-400 font-bold text-[1.115rem]'>Testimonials</h2>
        <h1 className='text-white text-[1.75rem] lg:text-[3.5rem] font-bold leading-10'>Voices Of Success</h1>
        <p className='w-full lg:w-[583px] text-white text-[1.125rem] leading-8 font-semibold'>Inspiring words from our students and graduates about their growth with Haeltech.</p>
      </div>
    </section>
  )
}

export default TestimonialHero