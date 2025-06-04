"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";
import { TbFaceIdError } from "react-icons/tb";
import { GrCart } from "react-icons/gr";
import Loader from "@/components/Loader";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";

const ExploreCourseCards = ({ courses = [], rating, setRating }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { token } = useSelector((state) => state.userDetails);

  const handleAddToCartRequest = async (courseId) => {
    if (!courseId) {
      toast.error("Course ID is required");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}cart/add-to-cart/${courseId}`,
        {},
        {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(response.data.message);
      
      setTimeout(() => {
        window.location.reload();

      }, 2000)

    } catch (error) {
      const errorMessage = error.response?.data?.message || "Failed to add course to cart";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  if (!courses || courses.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center gap-2 w-full h-full py-[30px] px-4">
        <TbFaceIdError className="text-[2.5rem] text-black" />
        <p className="text-base text-black font-medium">No Courses Available</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {isLoading && <Loader />}
      {courses.map((course) => (
        <div
          key={course.uid}
          className="bg-white w-full h-full lg:h-[425px] border border-[#cfcece] rounded-[6px] flex flex-col justify-between gap-2 items-start cursor-pointer"
        >
          <Image
            width={523}
            height={300}
            className="object-cover rounded-tl-[6px] rounded-tr-[6px] w-[523px] h-[300px] overflow-hidden"
            src={
              course?.cover_image
                ? `${process.env.NEXT_PUBLIC_STORAGE_URL}${course.cover_image}`
                : "/fallback-image.jpg"
            }
            alt={course.title}
          />

          <div className="px-3 pb-5 flex flex-col justify-end items-start w-full gap-2">
            <h1 className="text-black text-xl font-semibold">
              {course.title.length > 40 ? course.title.substr(0, 40) + '...' : course.title}
            </h1>
            <p className="text-grayTwo text-sm text-[.75rem]">
              {course.sub_title.length > 30 ? course.sub_title.substr(0, 30) + '...' : course.sub_title}
            </p>
            <div className="flex flex-wrap justify-between items-center w-full gap-5">
              <Rating
                style={{ maxWidth: 80 }}
                value={rating || 0}
                onChange={setRating}
              />
              <p className="text-grayTwo text-base text-[.75rem]">(1000)</p>
            </div>
            <div className="flex flex-col justify-center items-start gap-2 w-full">
              <p className="text-grayTwo font-bold text-lg text-[.75rem]">
                ₦ {Number(course.price).toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) || "N/A"}
              </p>
              <div className='w-full flex flex-col md:flex-row justify-between items-center gap-2 mt-2'>
                <Link
                  href={`/dashboard/course-details/${course.uid}`}
                  className="text-main bg-transparent border border-main p-2 rounded text-base flex justify-center items-center gap-2 duration-200 hover:text-white hover:bg-main"
                >
                  View course <IoIosArrowRoundForward />
                </Link>
                <button
                  disabled={isLoading}
                  className="p-3 bg-main cursor-pointer text-white duration-200 hover:text-main hover:bg-transparent border border-main rounded-full font-semibold"
                  onClick={() => handleAddToCartRequest(course.uid)}
                >
                  <GrCart size={22} />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExploreCourseCards;