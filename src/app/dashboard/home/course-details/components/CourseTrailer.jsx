import React from 'react'
// import banner from '../../../asset/course-details/Confident Business Woman.svg'

const CourseTrailer = ({courses}) => {
    // const trailerCover = {
    //     backgroundImage: `url(${banner})`,
    //     height: '81.3vh',
    //     width: '100%'
    // }
  return (
    <section className='trailer w-full h-screen md:h-[95vh] flex flex-col justify-center items-center'>
        <div className='md:mt-10 text-center'>
            <h1 className="text-[rgb(243,100,2)] font-bold text-[3.4rem]">
                Haelsoft
            </h1>
            <p className='text-[2.07rem] text-white leading-[43px] font-bold'>{courses.course_title}</p>
        </div>
        <p className='text-[1.5rem] leading-[43px] font-normal text-white my-3 md:my-8'>Certificate</p>
        <button className='text-white bg-[rgb(243,100,2)] py-[2px] px-[15px] gap-[5px] rounded-lg text-base font-semibold leading-[46px] w-[214px] h-[58px]'>Watch</button>
    </section>
  )
}

export default CourseTrailer