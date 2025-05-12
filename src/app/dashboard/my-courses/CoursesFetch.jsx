import React, { useState, useEffect } from "react";
import RecentViewCourse from "../(dashboardcomponents)/RecentViewCourse";
import Course from "../(dashboardcomponents)/Course";
import CourseCategories from "../(dashboardcomponents)/CourseCategories";
import { fetchData } from "@/app/lib/actions";
import axios from "axios";
import secureLocalStorage from "react-secure-storage";
import SkeletonLoader from "../my-learning/(mylearningcomponent)/SkeletonLoader";

const CoursesFetch = () => {
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = secureLocalStorage.getItem("token")

  useEffect(() => {
    const fetchCoursesAndCategories = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}learning`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        console.log('My Courses', response.data)

        setCourses(response.data.data);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    if(token) fetchCoursesAndCategories();
  }, [token]);

  if (loading) {
    return <SkeletonLoader/>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="w-full h-full">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 mt-4 w-full gap-4 gap-y-10 h-full">
          {courses.map((item, index) => (
            <div className="w-full flex flex-col gap-6" key={index}>
              <Course item={item} />
            </div>
          ))}
        </div>
    </div>
  );
};

export default CoursesFetch;
