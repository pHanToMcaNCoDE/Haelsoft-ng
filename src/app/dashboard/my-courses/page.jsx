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
  // const [completeIncomplete, setCompleteIncomplete] = useState(true);

  return (
    <section className="bg-[#f6f6f6] w-full min-h-screen py-[40px]">
      <div className="max-w-[1250px] mx-auto p-5 py-[10px] flex flex-col gap-7">
        <div className='flex flex-col justify-start items-start gap-3'>
          <h1 className="text-[#000000] text-[1.5rem] lg:text-[2rem] leading-9 font-semibold">My Courses</h1>
        </div>
        {/* {
          completeIncomplete ? (<CompletedCourses/>) : (<Incompletetedcourses/>)
        } */}

        <CoursesFetch/>
        {/* <Suspense fallback={<Loading />}>
          <CoursesFetch/>
        </Suspense> */}
      </div>
    </section>
  );
};

export default Courses;
