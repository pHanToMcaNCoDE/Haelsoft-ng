'use client';

import React, { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { courseDetails } from "../../../../raw-data/data";
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
import Loading from "@/app/dashboard/(dashboardcomponents)/loading";

const CourseDetailPage = () => {
  const pathname = usePathname();
  const courseTitle = decodeURIComponent(pathname.split("/").pop());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const searchParams = useSearchParams();
  const courseTtl = searchParams.get("details");
  const [courses, setCourses] = useState([]);
  const id = searchParams.get("id");

  const fetchCourse = () => {
    const allCourses = Object.values(courseDetails).flat();
    

    const normalizedCourseTitle = courseTtl
      ? courseTtl.toLowerCase()
      : courseTitle.toLowerCase();

    const cartDataCourse = allCourses.find(
      (c) => c.title && c.title.toLowerCase() === normalizedCourseTitle
    );
    const displayDataCourse = allCourses.find(
      (c) =>
        c.course_title && c.course_title.toLowerCase() === normalizedCourseTitle
    );

    const mergedCourseData = {
      ...(cartDataCourse || {}),
      ...(displayDataCourse || {}),
    };

    if (Object.keys(mergedCourseData).length > 0) {
      setCourses(mergedCourseData);
    } else {
      setError("Course not found");
    }
  };

  useEffect(() => {
    fetchCourse();
    setLoading(false);
  }, [courseTitle, courseTtl]);

  if (loading) return <Loading />;
  if (error) return <div>{error}</div>;

  return (
    <div className="">
      <Hero courses={courses} />
      <CourseTrailer courses={courses} />
      <CourseTutor courses={courses} />
      <ImageDisplay />
      <CourseContent courses={courses} />
      <Instructors courses={courses} />
      <BuildYourPortfolio courses={courses} />
      <Expectation courses={courses} />
      <OnlineClassroom courses={courses} />
      <GraduateFeedback courses={courses} />
      <Community />
      <GetStartedCourse courses={courses} />
    </div>
  );
};

export default CourseDetailPage;
