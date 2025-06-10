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
import Loader from "@/components/Loader";
import { GrCart } from "react-icons/gr";

const RelatedCourses = ({relatedCourses}) => {
  const [errorCourses, setErrorCourses] = useState(null);
  const [rating, setRating] = useState(null) 
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);


  return (
    <section className="pt-[40px] pb-[100px] px-5 flex flex-col justify-center items-start gap-8 max-w-[1250px]">
      {
        isLoading && (<Loader />)
      }
      <h1 className="text-black text-3xl font-bold leading-7">Related Courses</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {relatedCourses.map((course) => (
          <div
            key={course.uid}
            className="bg-white border border-[#cfcece] rounded-[6px] flex flex-col h-full overflow-hidden"
          >
            <Image
              width={523}
              height={300}
              className="object-cover w-full h-[200px]"
              src={
                course?.cover_image
                  ? `${process.env.NEXT_PUBLIC_STORAGE_URL}${course.cover_image}`
                  : "/fallback-image.jpg"
              }
              alt={course.title}
            />

            <div className="px-4 py-5 flex flex-col gap-2">
              <h2 className="text-black text-xl font-semibold">
                {course.title?.length > 40
                  ? course.title.slice(0, 40) + "..."
                  : course.title}
              </h2>
              <p className="text-grayTwo text-sm">
                {course.sub_title?.length > 30
                  ? course.sub_title.slice(0, 30) + "..."
                  : course.sub_title}
              </p>

              <div className="flex items-center justify-between mt-2">
                <p className="font-bold text-lg text-gray-800 mt-3">
                  ₦{" "}
                  {course.price
                    ? Number(course.price).toLocaleString("en-NG", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })
                    : "0.00"}
                </p>
                <p className="text-grayTwo text-sm">(1000)</p>
              </div>

              <div className="w-full flex flex-col md:flex-row justify-between items-center gap-2 mt-2">
                <Link
                  href={`/course-details/${course.uid}`}
                  className="text-main bg-transparent border border-main p-2 rounded text-base flex justify-center items-center gap-2 duration-200 hover:text-white hover:bg-main"
                >
                  View course <IoIosArrowRoundForward />
                </Link>
                <button
                  disabled={isLoading}
                  className="p-3 bg-main cursor-pointer text-white duration-200 hover:text-main hover:bg-transparent border border-main rounded-full font-semibold"
                  onClick={() => handleAddToCartRequest(course.course_id)}
                >
                  <GrCart size={22} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default RelatedCourses