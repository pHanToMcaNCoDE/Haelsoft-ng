import React, { useState, useEffect } from "react";
import RecentViewCourse from "../(dashboardcomponents)/RecentViewCourse";
import Course from "../(dashboardcomponents)/Course";
import CourseCategories from "../(dashboardcomponents)/CourseCategories";
import { fetchData } from "@/app/lib/actions";

const CoursesFetch = () => {
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoursesAndCategories = async () => {
      try {
        const coursesData = await fetchData("/course/api/course/");
        setCourses(coursesData);

        // const categoriesData = await fetchData("/course/api/category/");
        // setCategories(categoriesData);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchCoursesAndCategories();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="pb-10 mt-10">
        <div className="flex text-grayTwo text-[18px]">Recently Viewed</div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 mt-4 gap-4 gap-y-10 justify-items-start">
          {/* Uncomment this when ready */}
          {/* {courses.slice(0, 3).map((item, index) => (
            <div className="a" key={index}>
              <RecentViewCourse item={item} />
            </div>
          ))} */}
        </div>
        
        <div className="flex text-grayTwo mt-10 text-[18px]">Categories</div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 mt-4 w-full gap-4 gap-y-10">
          {/* Uncomment this when ready */}
          {/* {categories.map((item, index) => (
            <div className="a" key={index}>
              <CourseCategories name={item.name} />
            </div>
          ))} */}
        </div>

        <div className="flex text-grayTwo mt-10 text-[18px]">Best selling courses</div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 mt-4 w-full gap-4 gap-y-10">
          {courses.map((item, index) => (
            <div className="a" key={index}>
              <Course item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesFetch;
