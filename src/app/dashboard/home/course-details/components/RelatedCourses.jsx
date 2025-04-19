"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";
import { TbFaceIdError } from "react-icons/tb";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addCourses } from "@/features/courses/courseSlice";

const RelatedCourses = () => {
  const [categories, setCategories] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingCourses, setLoadingCourses] = useState(true);
  const [errorCategories, setErrorCategories] = useState(null);
  const [errorCourses, setErrorCourses] = useState(null);
  const [rating, setRating] = useState(null) 
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch Categories
    axios.get(`https://edtech-backend-q2ud.onrender.com/course/api/category/`)
      .then((res) => {
        setCategories(res.data.data);
        setLoadingCategories(false);
      })
      .catch((err) => {
        // console.log('Categories Error', err);
        setErrorCategories('Failed to fetch categories: Network error');
        setLoadingCategories(false);
      });

    // Fetch Courses
    axios.get(`https://edtech-backend-q2ud.onrender.com/course/api/course/`)
      .then((res) => {
        // console.log("Fetched data:", res);
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
      <div className="text-red-500 flex justify-center items-center py-[100px] text-center">
        Error: {errorCategories || errorCourses}
      </div>
    );
  }

  return (
    <section className="py-[100px] flex flex-col justify-center items-start gap-4 max-w-[1250px]">
        <h1 className="text-black text-3xl font-bold leading-7">Related Courses</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {courses.map((course) => {
            // const background = course?.img_course
            //   ? ;

            return (
            <div
                key={course.title}
                className="bg-white w-full h-full lg:h-[425px] border border-[#cfcece] rounded-[6px] flex flex-col justify-between gap-2 items-start cursor-pointer"
            >
                {/* <div
                className="h-[200px] w-full bg-cover bg-center bg-no-repeat rounded-t-[6px]"
                style={{ backgroundImage: `url(${course?.img_course ? `https://res.cloudinary.com/dmpqdaupc/image/upload/${course.img_course}` : "/fallback-image.jpg"})` }}
                ></div> */}

                <Image
                    width={523}
                    height={300}
                    className="object-contain rounded-tl-[6px] rounded-tr-[6px]"
                    src={
                        course?.img_course
                        ? `https://res.cloudinary.com/dmpqdaupc/${course.img_course}`
                        : "/fallback-image.jpg"
                    }
                    alt={course.title}
                />

                <div className="px-3 pb-5 flex flex-col justify-end items-start w-full gap-2">
                <h1 className="text-black text-2xl font-semibold">{course.title}</h1>
                <div className="flex flex-wrap justify-between items-center w-full gap-5">
                    <Rating
                    style={{ maxWidth: 80 }}
                    value={rating || 0}
                    onChange={setRating}
                    />
                    <p className="text-grayTwo text-base text-[.75rem]">(1000)</p>
                </div>
                <div className="flex flex-col justify-center items-start gap-2">
                    <p className="text-grayTwo font-bold text-lg text-[.75rem]">
                    ₦{course.price || "N/A"}
                    </p>
                    <Link
                    href={{
                        pathname: "/dashboard/home/course-details",
                        query: {
                        details: course.title,
                        id: course.course_id,
                        },
                    }}
                    className="text-main bg-transparent border border-main p-2 rounded text-base flex justify-center items-center gap-2"
                    >
                    View course <IoIosArrowRoundForward />
                    </Link>
                </div>
                </div>
            </div>
            );
        })}
        </div>
    </section>
  )
}

export default RelatedCourses