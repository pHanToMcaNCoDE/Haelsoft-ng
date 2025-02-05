'use client'

import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import CourseAccordion from './components/CourseAccordion'
import { GoGlobe } from 'react-icons/go'

const CourseContent = ({ courses = { units: [] } }) => {
  // Check if courses.units is defined and is an array
  if (!Array.isArray(courses.units) || courses.units.length === 0) {
    return <div>No course units available.</div>;
  }

  return (
    <section className='min-h-screen'>
      <div className='bg-[#FBFBFB]'>
        <div className='max-w-[1260px] mx-auto px-[20px] md:px-[50px] py-[100px]'>
          <h1 className='text-[#FF8C53] text-[1.75rem] lg:text-[2.125rem] leading-[43px] font-semibold'>Course Content</h1>
          <div className='py-4'>
            <p className='text-base text-grayTwo font-normal leading-[30px]'>
              This course provides a comprehensive guide to mastering skills in {courses.course_title}. You will learn how to build real-world projects, work with modern frameworks & technologies, and understand the best practices in the industry. The content is structured to offer hands-on experience and practical knowledge that you can apply immediately. By the end of this course, you will be well-equipped to tackle real-world projects and advance your career.
            </p>
            {/* <Link href='#' className='text-base flex items-center gap-3 mt-4 text-main font-semibold leading-[43px]'>
              Read more <IoIosArrowForward />
            </Link> */}
          </div>

          {/* <div className='max-w-[1240px] min-h-[182px] border-[6px] px-2 md:px-[24px] py-[8px] md:py-[40px] rounded-[4px] border-[#F0F0F0] bg-white mt-[3em]'>
            <CourseAccordion courses={courses} />
          </div> */}
        </div>
      </div>
      <div className='w-full min-h-screen'>
        {courses.units.map((unit, index) => (
          <div key={index} className={`w-full relative ${index === 1 || index === 3 ? 'bg-white' : 'bg-main'}`}>
            <div className='flex justify-start items-start max-w-[1260px] mx-auto'>
              <div className={`w-[6%] md:w-[4%] flex flex-col items-center relative`}>
                <div className={`w-6 h-6 rounded-full absolute top-[10%] ${index === 1 || index === 3 ? 'bg-main' : 'bg-white'}`}></div>
                <div className={`w-[5px] min-h-[119vh] ${index === 1 || index === 3 ? 'bg-main' : 'bg-white'}`}></div>
              </div>
              <div className='w-[94%] px-3 md:px-0 md:w-[96%] min-h-screen xl:h-[1115px] flex flex-col justify-start items-start gap-[40px] pt-[100px]'>
                <div className='flex flex-col justify-start items-start'>
                  <h1 className={`font-semibold text-[1.5rem] leading-[43px] ${index === 1 || index === 3 ? 'text-main' : 'text-white'}`}>{unit.title}</h1>
                  <p className={`font-semibold text-[1.5rem] leading-[43px] ${index === 1 || index === 3 ? 'text-main' : 'text-white'}`}>{unit.sub}</p>
                </div>
                <div className='flex flex-col gap-[20px]'>
                  <p className={`font-semibold leading-[43px] text-base w-full md:w-[57%] ${index === 1 || index === 3 ? 'text-main' : 'text-white'}`}>
                    {unit.description}
                  </p>
                </div>
                <div className='md:w-[576px] h-[51px] flex flex-col md:flex-row gap-x-3 items-start md:items-center my-[4em] md:my-[2em]'>
                  <p className={`text-[1.25rem] leading-[43px] font-semibold ${index === 1 || index === 3 ? 'text-main' : 'text-white'}`}>Relevant Skills:</p>
                  <div className='flex flex-wrap gap-3 items-center'>
                    {unit.skills && unit.skills.map((skill, skillIndex) => (
                      <button key={skillIndex} className={`text-[.75rem] leading-[43px] font-normal py-1 px-[10px] rounded gap-1 h-[51px] ${index === 1 || index === 3 ? 'bg-main text-white' : 'bg-white text-main'}`}>{skill}</button>
                    ))}
                  </div>
                </div>
                <div className='mt-[2em] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-start gap-10 xl:mx-auto'>
                  {unit.details && unit.details.map((detail, detailIndex) => (
                    <div key={detailIndex}>
                      <GoGlobe className={`text-[2.25rem] ${index === 1 || index === 3 ? 'text-main' : 'text-white'}`} />
                      <h1 className={`text-[1.25rem] font-semibold leading-[43px] ${index === 1 || index === 3 ? 'text-main' : 'text-white'}`}>{detail.title}</h1>
                      <p className={`text-base font-medium leading-[25px] md:w-[344px] ${index === 1 || index === 3 ? 'text-main' : 'text-white'}`}>
                        {detail.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CourseContent
