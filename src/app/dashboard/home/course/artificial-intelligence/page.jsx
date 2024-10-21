"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useSelector } from 'react-redux';
import Hero from '../../course-details/components/Hero';
import CourseTrailer from '../../course-details/components/CourseTrailer';
import CourseTutor from '../../course-details/CourseTutor';
import ImageDisplay from '../../course-details/ImageDisplay';
import CourseContent from '../../course-details/CourseContent';
import Instructors from '../../course-details/Instructors';
import BuildYourPortfolio from '../../course-details/BuildYourPortfolio';
import Expectation from '../../course-details/Expectation';
import OnlineClassroom from '../../course-details/OnlineClassroom';
import GraduateFeedback from '../../course-details/GraduateFeedback';
import Community from '../../course-details/Community';
import GetStartedCourse from '../../course-details/GetStartedCourse';
import Loading from '@/app/dashboard/(dashboardcomponents)/loading';

const CoursePage = () => {
  const pathname = usePathname();
  const courseTitle = decodeURIComponent(pathname.split('/').pop());
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { courses } = useSelector((state) => state.courses);

  return (
    <Suspense fallback={<Loading />}>
      <CourseContentWrapper
        courseTitle={courseTitle}
        courses={courses}
        setCourse={setCourse}
        setLoading={setLoading}
        setError={setError}
      />
      {loading ? (
        <Loading />
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <main>
          <Hero course={course} />
          <CourseTrailer course={course} />
          <CourseTutor course={course} />
          <ImageDisplay />
          <CourseContent course={course} />
          <Instructors course={course} />
          <BuildYourPortfolio course={course} />
          <Expectation course={course} />
          <OnlineClassroom course={course} />
          <GraduateFeedback course={course} />
          <Community />
          <GetStartedCourse course={course} />
        </main>
      )}
    </Suspense>
  );
};

const CourseContentWrapper = ({ courseTitle, courses, setCourse, setLoading, setError }) => {
  const searchParams = useSearchParams();
  const courseTtl = searchParams.get('details');

  useEffect(() => {
    const fetchCourse = () => {
      const allCourses = Object.values(courseDetails).flat();

      const cartDataCourse = courses.find((c) =>
        c.title.toLowerCase() === (courseTtl ? courseTtl.toLowerCase() : courseTitle.toLowerCase())
      );

      const displayDataCourse = allCourses.find((c) =>
        c.course_title.toLowerCase() === (courseTtl ? courseTtl.toLowerCase() : courseTitle.toLowerCase())
      );

      const mergedCourseData = {
        ...cartDataCourse,
        ...displayDataCourse,
      };

      if (displayDataCourse && cartDataCourse) {
        setCourse(mergedCourseData);
      } else {
        setError('Course not found');
      }
      setLoading(false);
    };

    fetchCourse();
  }, [courseTitle, courseTtl, courses]);

  return null;
};

export default CoursePage;
