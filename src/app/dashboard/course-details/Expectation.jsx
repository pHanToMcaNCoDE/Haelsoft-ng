import React from 'react'

const Expectation = ({courses}) => {
  return (
    <section className='w-full py-[100px] bg-white max-w-[1260px] mx-auto px-3 xl:px-0 flex flex-col md:flex-row justify-between'>
        <div className='w-full md:w-[50%] md:my-[4em]'>
            <p className='text-base font-normal text-grayTwo leading-[43px] xl:w-[644px]'>
                You will be eligible for a Haelsoft {courses.course_title} Certificate upon the completion of your course. This is a shareable certificate that you can add to your resume to attract potential employees and add to your page on LinkedIn.
            </p>
        </div>
        <div className='w-full md:w-[50%] flex justify-center items-end'>
            <div className='bg-[#F36400] w-[500px] h-[424px]'></div>
        </div>
    </section>
  )
}

export default Expectation