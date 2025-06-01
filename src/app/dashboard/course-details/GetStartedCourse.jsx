import React from 'react'

const GetStartedCourse = ({courses}) => {
  return (
    <section className='w-full pt-[100px] pb-[200px] bg-white max-w-[1260px] mx-auto px-3 xl:px-0 flex flex-col md:flex-row justify-between'>
        <div className='w-full md:w-[50%] md:my-[4em] gap-[36px]'>
            <h1 className='text-[#FF7F3C] font-semibold leading-[43px] text-[1.5rem]'>Get Started</h1>
            <p className='text-base font-normal text-[#FF7F3C] leading-[43px] md:w-[420px]'>
                Build and showcase your {courses.course_title} portfolio through many projects you will undertake while learning at Haelsoft. You will be closely guided with steps to develop your final {courses.course_title} project. At the end of            
            </p>
        </div>
        <div className='w-full md:w-[50%] flex justify-center items-end'>
            <div className='bg-white w-[608px] h-[348px] shadow-lg'></div>
        </div>
    </section>
  )
}

export default GetStartedCourse