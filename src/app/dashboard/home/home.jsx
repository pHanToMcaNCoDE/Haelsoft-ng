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
import { baseURL } from '@/Service/validation';
import Loader from '@/components/Loader';
import secureLocalStorage from 'react-secure-storage';

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingCourses, setLoadingCourses] = useState(true);
  const [errorCategories, setErrorCategories] = useState(null);
  const [errorCourses, setErrorCourses] = useState(null);
  const dispatch = useDispatch();

  const token = secureLocalStorage.getItem('token');

  useEffect(() => {
    // Fetch Categories
    // axios.get(`https://edtech-backend-q2ud.onrender.com/course/api/category/`)
    //   .then((res) => {
    //     setCategories(res.data.data);
    //     setLoadingCategories(false);
    //   })
    //   .catch((err) => {
    //     // setErrorCategories('Failed to fetch categories: Network error');
    //     setLoadingCategories(false);
    //   });

    // Fetch Courses

    axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}courses`, {
      headers: {
        'Accept': 'application/json',
        'Authorizathion': `Bearer ${token}`
      }
    })
      .then((res) => {
        if (res.data.data) {
          setCourses(res.data.data.data);
          dispatch(addCourses(res.data.data.data));
          console.log("course Rep", res.data.data.data);
        }

        setLoadingCourses(false);
      })
      .catch((error) => {
        // console.error("Error fetching data:", error);
        // setErrorCourses("Failed to fetch data: Network error");
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
      {(loadingCourses) ? (
        <Loader />
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
