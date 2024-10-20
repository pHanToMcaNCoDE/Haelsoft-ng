'use client'

import React, { Suspense, useState } from "react";
import RecentViewCourse from "../(dashboardcomponents)/RecentViewCourse";
import Course from "../(dashboardcomponents)/Course";
import CourseCategories from "../(dashboardcomponents)/CourseCategories";
import CoursesFetch from "./CoursesFetch";
import Loading from "../(dashboardcomponents)/loading";
// import CompletedCourse from "../(dashboardcomponents)/CompletedCourse";
import Incompletetedcourses from "./incompletedcourses/page";
import CompletedCourses from "./completedcourses/page";

const Courses = () => {
  // const dater = fetchData("") ?? [];
  const [completeIncomplete, setCompleteIncomplete] = useState(true);

  return (
    <section className="bg-[#f6f6f6] w-full h-screen py-[100px]">
      <div className="max-w-[1250px] mx-auto p-3 h-screen py-[100px]">
        <div className='flex flex-col justify-start items-start gap-3'>
          <h1 className="text-[#000000] text-[1.5rem] leading-9 font-semibold">My Courses</h1>
          <div className="flex gap-3 items-center">
            <div className='text-[#7F7571] font-semibold leading-[27px] text-[1.125rem] relative'>
              In progress
              <div className='w-[70px] h-[3px] bg-[#FF8C53] rounded-full absolute mx-auto'></div>
            </div>
            <div className='text-[#7F7571] font-semibold leading-[27px] text-[1.125rem] relative'>
              Completed
              <div className='w-[70px] h-[3px] bg-[#FF8C53] rounded-full absolute mx-auto'></div>
            </div>
          </div>
        </div>
        {
          completeIncomplete ? (<CompletedCourses/>) : (<Incompletetedcourses/>)
        }
        {/* <Suspense fallback={<Loading />}>
          <CoursesFetch/>
        </Suspense> */}
      </div>
    </section>
  );
};

export default Courses;
