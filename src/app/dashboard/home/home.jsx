'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Explore from "./(HomeComponents)/Explore";
import Loading from '../(dashboardcomponents)/loading';
import { useDispatch } from 'react-redux';
import { addCourses } from '@/features/courses/courseSlice';
import TopSection from './(HomeComponents)/TopSection';
import AppFooter from '@/components/AppFooter';

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingCourses, setLoadingCourses] = useState(true);
  const [errorCategories, setErrorCategories] = useState(null);
  const [errorCourses, setErrorCourses] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch Categories
    axios.get(`https://edtech-backend-q2ud.onrender.com/course/api/category/`)
      .then((res) => {
        setCategories(res.data.data);
        setLoadingCategories(false);
      })
      .catch((err) => {
        console.log('Categories Error', err);
        setErrorCategories('Failed to fetch categories: Network error');
        setLoadingCategories(false);
      });

    // Fetch Courses
    axios.get(`https://edtech-backend-q2ud.onrender.com/course/api/course/`)
      .then((res) => {
        console.log("Fetched data:", res);
        if (res.data.status === "Success" && Array.isArray(res.data.data)) {
          setCourses(res.data.data);
          dispatch(addCourses(res.data.data));
        } else {
          setErrorCourses("Failed to fetch courses: Invalid response structure");
        }
        setLoadingCourses(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setErrorCourses("Failed to fetch data: Network error");
        setLoadingCourses(false);
      });
  }, [dispatch]);

  if (errorCategories || errorCourses) {
    return (
      <div className="text-red-500 flex justify-center items-center">
        Error: {errorCategories || errorCourses}
      </div>
    );
  }

  return (
    <section className='bg-white'>
      {(loadingCategories || loadingCourses) ? (
        <Loading />
      ) : (
        <section className='w-full min-h-screen'>
          <TopSection />
          {/* <Categories categories={categories} /> */}
          <div className='pt-[30px] pb-[200px] px-4'>
            <Explore courses={courses} />
          </div>
        </section>
      )}
    </section>
  );
};

export default HomePage;
