'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Explore from "./(HomeComponents)/Explore";
import Loading from '../(dashboardcomponents)/loading';
import { useDispatch, useSelector } from 'react-redux';
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

  // Pagination state
  const [paginationData, setPaginationData] = useState({
    current_page: 1,
    last_page: 1,
    per_page: 20,
    total: 0,
    from: 0,
    to: 0
  });

  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.userDetails);

  // Fetch courses function with pagination
  const fetchCourses = async (page = 1) => {
    setLoadingCourses(true);
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}courses?page=${page}`,
        {
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}` // Fixed typo: was 'Authorizathion'
          }
        }
      );

      console.log('All Courses from Backend', response.data);

      if (response.data.status && response.data.data) {
        const { data: coursesArray, ...pagination } = response.data.data;
        
        setCourses(coursesArray);
        setPaginationData(pagination);
        dispatch(addCourses(coursesArray));
        
        console.log("Course Response", coursesArray);
        console.log("Pagination Data", pagination);
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
      // Uncomment if you want to show error messages
      // const errorMessage = error.response?.data?.message || "Failed to fetch courses";
      // toast.error(errorMessage);
      // setErrorCourses(errorMessage);
    } finally {
      setLoadingCourses(false);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchCourses(1);
  }, [dispatch, token]);

  if (errorCategories || errorCourses) {
    return (
      <div className="text-red-500 flex justify-center items-center">
        Error: {errorCategories || errorCourses}
      </div>
    );
  }

  return (
    <section className='bg-white'>
      {loadingCourses && courses.length === 0 ? (
        <Loader />
      ) : (
        <section className='w-full min-h-screen'>
          <TopSection />
          <div className='pt-[30px] pb-[200px] px-4'>
            <Explore 
              courses={courses} 
              paginationData={paginationData}
              setPaginationData={setPaginationData}
              setCourses={setCourses}
              fetchCourses={fetchCourses}
              loading={loadingCourses}
            />
          </div>
        </section>
      )}
    </section>
  );
};

export default HomePage;