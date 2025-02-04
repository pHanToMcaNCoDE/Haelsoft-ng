import React from 'react'
import CompletedCourse from '../../(dashboardcomponents)/CompletedCourse'

const CompletedCourses = () => {
  return (
    <div><div>
    <div className="pb-10 mt-10">
      {/* <div className="flex text-grayTwo  text-[18px]">Recently Viewed</div> */}
      <div className="flex flex-col justify-center items-start">
        <div className='w-full flex justify-between items-center'>
          <p className='text-[1.125rem] text-main leading-[27px] font-semibold'>Ed-tech Course</p>
          <p className='text-[1.125rem] text-main leading-[27px] font-semibold'>2 0f 2 Completed</p>
        </div>
        <CompletedCourse />
      </div>
    </div>
  </div></div>
  )
}

export default CompletedCourses