'use client';

import React, { useEffect, useState } from 'react';
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
import axios from 'axios';
import { courseDetails } from '@/raw-data/data';
import { usePathname, useSearchParams } from 'next/navigation';


const Page = () => {
  const pathname = usePathname();
  const courseTitle = decodeURIComponent(pathname.split('/').pop());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const searchParams = useSearchParams();
  const courseTtl = searchParams.get('details');
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourse = () => {
      const allCourses = Object.values(courseDetails).flat();

      // Ensure courseTtl and courseTitle are defined before using .toLowerCase()
      const normalizedCourseTitle = courseTtl ? courseTtl.toLowerCase() : courseTitle.toLowerCase();

      const cartDataCourse = allCourses.find(
        (c) => c.title && c.title.toLowerCase() === normalizedCourseTitle
      );
      const displayDataCourse = allCourses.find(
        (c) => c.course_title && c.course_title.toLowerCase() === normalizedCourseTitle
      );

      // Merge the found courses
      const mergedCourseData = {
        ...(cartDataCourse || {}),
        ...(displayDataCourse || {})
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

  return (
    <>
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
      {/* <Footer/> */}
    </>
  );
};

export default Page;
