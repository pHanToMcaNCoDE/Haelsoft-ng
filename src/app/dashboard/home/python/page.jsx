"use client";

import React, { useEffect, useState, Suspense } from 'react';
import Hero from '../course-details/components/Hero';
import CourseTrailer from '../course-details/components/CourseTrailer';
import CourseTutor from '../course-details/CourseTutor';
import ImageDisplay from '../course-details/ImageDisplay';
import CourseContent from '../course-details/CourseContent';
import Instructors from '../course-details/Instructors';
import BuildYourPortfolio from '../course-details/BuildYourPortfolio';
import Expectation from '../course-details/Expectation';
import OnlineClassroom from '../course-details/OnlineClassroom';
import GraduateFeedback from '../course-details/GraduateFeedback';
import Community from '../course-details/Community';
import GetStartedCourse from '../course-details/GetStartedCourse';
import { courseDetails } from '@/raw-data/data';
import { usePathname, useSearchParams } from 'next/navigation';

const Page = () => {
  const pathname = usePathname();
  const courseTitle = decodeURIComponent(pathname.split('/').pop());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [courses, setCourses] = useState([]);

  // Using Suspense for `useSearchParams`
  const SuspendedSearchParams = () => {
    const searchParams = useSearchParams();
    return searchParams.get('details');
  };

  const courseTtl = SuspendedSearchParams();

  useEffect(() => {
    const fetchCourse = () => {
      const allCourses = Object.values(courseDetails).flat();
      const normalizedCourseTitle = courseTtl ? courseTtl.toLowerCase() : courseTitle.toLowerCase();

      const cartDataCourse = allCourses.find(
        (c) => c.title && c.title.toLowerCase() === normalizedCourseTitle
      );
      const displayDataCourse = allCourses.find(
        (c) => c.course_title && c.course_title.toLowerCase() === normalizedCourseTitle
      );

      const mergedCourseData = {
        ...(cartDataCourse || {}),
        ...(displayDataCourse || {}),
      };

      if (Object.keys(mergedCourseData).length > 0) {
        setCourses(mergedCourseData);
      } else {
        setError('Course not found');
      }
      setLoading(false);
    };

    fetchCourse();
  }, [courseTitle, courseTtl]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
};

export default Page;
