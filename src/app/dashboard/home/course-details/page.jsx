"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Loading from "@/app/dashboard/(dashboardcomponents)/loading";
import Hero from "./components/Hero";
import CourseTrailer from "./components/CourseTrailer";
import CourseTutor from "./CourseTutor";
import ImageDisplay from "./ImageDisplay";
import CourseContent from "./CourseContent";
import Instructors from "./Instructors";
import BuildYourPortfolio from "./BuildYourPortfolio";
import Expectation from "./Expectation";
import OnlineClassroom from "./OnlineClassroom";
import GraduateFeedback from "./GraduateFeedback";
import Community from "./Community";
import GetStartedCourse from "./GetStartedCourse";

import { courseDetails } from '@/raw-data/data';
import CourseAccordion from "./components/CourseAccordion";
import RelatedCourses from "./components/RelatedCourses";
import DetailsSkeletonLoader from "./components/DetailsSkeletonLoader";
// import Hero from "./Hero";
// import CourseTrailer from "./CourseTrailer";
// import CourseTutor from "../CourseTutor";
// import ImageDisplay from "../ImageDisplay";
// import CourseContent from "../CourseContent";
// import Instructors from "../Instructors";
// import BuildYourPortfolio from "../BuildYourPortfolio";
// import Expectation from "../Expectation";
// import OnlineClassroom from "../OnlineClassroom";
// import GraduateFeedback from "../GraduateFeedback";
// import Community from "../Community";
// import GetStartedCourse from "../GetStartedCourse";

const Page = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const courseTitle = searchParams.get("details") || "";
  const id = searchParams.get("id") || "";

  useEffect(() => {
    // console.log('Title', courseTitle)
    // console.log('ID', id)

    const fetchCourse = async () => {
      try {
        const allCourses = Object.values(courseDetails).flat();


        const normalizedCourseTitle = courseTitle
          ? courseTitle.toLowerCase() : '';


        const cartDataCourse = allCourses.find(
          (c) => c.title && c.title.toLowerCase() === normalizedCourseTitle
        );

        const displayDataCourse = allCourses.find(
          (c) =>
            c.course_title &&
            c.course_title.toLowerCase() === normalizedCourseTitle
        );


        const mergedCourseData = {
          ...(cartDataCourse || {}),
          ...(displayDataCourse || {}),
        };


        if (Object.keys(mergedCourseData).length > 0) {
          setCourses(mergedCourseData);
        } else {
          throw new Error("Course not found");
        }
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [courseTitle, courseDetails]);

  if (loading) {
    return <DetailsSkeletonLoader/>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {courses && (
        <>
          <Hero courses={courses} />
          <CourseTrailer courses={courses} />
          {/* <CourseTutor courses={courses} /> */}
          {/* <ImageDisplay /> */}
          <CourseContent courses={courses} /> 
          <Instructors courses={courses} />
          {/* <BuildYourPortfolio courses={courses} /> */}
          {/* <Expectation courses={courses} /> */}
          <OnlineClassroom courses={courses} />
          <CourseAccordion courses={courses} />
          {/* <GraduateFeedback courses={courses} /> */}
          <Community />
          {/* <RelatedCourses /> */}
          {/* <GetStartedCourse courses={courses} /> */}
        </>
      )}
    </div>
  );
};

export default Page;
