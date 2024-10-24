import React from 'react'
import Expert from './Expert'
// import ResponsiveExpert from './ResponsiveExpert'

const Instructors = () => {
  return (
    <section className='min-h-screen w-full pt-[100px] xl:pt-[150px] 2xl:pt-[100px] pb-[100px] flex flex-col gap-[55px]'>
      <div className='max-w-[1200px] mx-auto px-5 lg:px-8 flex flex-col gap-2 text-center'>
        <div className='flex flex-col justify-center items-center gap-10'>
          <h1 className='text-[#F36400] text-[2.125rem] font-semibold leading-9'>Meet Our Expert Instructors</h1>
          <div className='w-[48px] h-[4px] rounded bg-[#FFCF00]'></div>
        </div>
        <h1 className="text-white text-[2.125rem] font-bold leading-[36px]">
          Part-Time Certificate Courses
        </h1>
        <p className='w-full lg:w-[1040px] text-center text-base text-[#655D59]'>
          Our team of seasoned professionals brings extensive industry experience and expertise to guide your learning journey. They are dedicated to providing valuable insights, personalized support, and real-world knowledge to help you succeed.
        </p>
      </div>
      <Expert/>
      {/* <ResponsiveExpert/> */}
    </section>
  )
}

export default Instructors