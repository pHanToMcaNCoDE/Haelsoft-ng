"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import Hero from "../components/Hero";
import CourseTrailer from "../components/CourseTrailer";
import CourseContent from "../CourseContent";
import Instructors from "../Instructors";
import OnlineClassroom from "../OnlineClassroom";
import Community from "../Community";
import axios from "axios";
import secureLocalStorage from "react-secure-storage";
import Loader from "@/components/Loader";
import CourseAccordion from "../components/CourseAccordion";
import { toast } from "react-toastify";
import RelatedCourses from "../components/RelatedCourses";

const Page = () => {
  const [courses, setCourses] = useState(null);
  const [relatedCourses, setRelatedCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [apiResponse, setApiResponse] = useState(null);

  const { id } = useParams();
  
  useEffect(() => {
    const fetchCourse = async () => {
      setLoading(true);
       
      try {

        const url = `${process.env.NEXT_PUBLIC_BASE_URL}courses/single/${id}`;
        console.log('Fetching course with ID:', id);
        console.log('API URL:', url);
        
        const response = await axios.get(url, {
          headers: {
            'Accept': 'application/json'
          }
        });
        
        setApiResponse(response.data);
        console.log('Full API Response:', response.data);
        
        if (response.data && response.data.data && response.data.data.course) {
          console.log('All courses gotten', response.data)
          setCourses(response.data.data.course);
          setRelatedCourses(response.data.data.relatedCourse);
        } else {
          console.error('Unexpected API response structure:', response.data);
          setError('Course data structure not as expected');
        }
      } catch (error) {
        toast.error(error.response.data.message || error.response.message)
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchCourse();
  }, [id]);

  useEffect(() => {
    console.log('Current courses state:', courses);
  }, [courses]);

  useEffect(() => {
    console.log('Current API response state:', apiResponse);
  }, [apiResponse]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>;
  }

  // Additional null check with more information
  if (!courses) {
    return <div className="p-4 w-full h-full flex justify-center items-center">No course data available. Please check console for API response details.</div>;
  }

  return (
    <div>
      {courses && (
        <>
          <Hero courses={courses} />
          <CourseTrailer courses={courses} />
          <CourseContent courses={courses} /> 
          {/* <Instructors courses={courses} /> */}
          {/* <OnlineClassroom courses={courses} /> */}
          <CourseAccordion courses={courses} />
          <RelatedCourses relatedCourses={relatedCourses} />
          <Community />
        </>
      )}
    </div>
  );
};

export default Page;