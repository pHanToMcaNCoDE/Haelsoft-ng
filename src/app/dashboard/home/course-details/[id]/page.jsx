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

const Page = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [apiResponse, setApiResponse] = useState(null);

  const { id } = useParams();
  
  // Get token only when needed to avoid SSR issues
  useEffect(() => {
    const fetchCourse = async () => {
      setLoading(true);
      
      try {
        const token = secureLocalStorage.getItem('token');

        const url = `${process.env.NEXT_PUBLIC_BASE_URL}courses/single/${id}`;
        console.log('Fetching course with ID:', id);
        console.log('API URL:', url);
        
        const response = await axios.get(url, {
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        
        setApiResponse(response.data);
        console.log('Full API Response:', response.data);
        
        if (response.data && response.data.data && response.data.data.course) {
          console.log('Course data found:', response.data.data.course);
          setCourses(response.data.data.course);
        } else {
          console.error('Unexpected API response structure:', response.data);
          setError('Course data structure not as expected');
        }
      } catch (error) {
        console.error('API Error:', error.response || error);
        setError(`Failed to load course: ${error.message}`);
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
    return <div className="p-4">No course data available. Please check console for API response details.</div>;
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
          <Community />
        </>
      )}
    </div>
  );
};

export default Page;