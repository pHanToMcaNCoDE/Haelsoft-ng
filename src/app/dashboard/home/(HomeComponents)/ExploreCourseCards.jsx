"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { IoIosArrowRoundForward } from "react-icons/io";

const ExploreCourseCards = ({ courses = [], rating, setRating }) => {
  if (!courses || courses.length === 0) {
    return <p>No courses available.</p>; // Fallback message when courses is empty or undefined
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {courses.map((course) => (
        <div
          key={course.title}
          className="p-3 bg-white w-full md:w-[304px] border-[2px] border-[#cfcece] rounded-[12px] flex flex-col gap-6 items-start cursor-pointer"
        >
          <Image
            width={523}
            height={300}
            className="object-contain rounded-lg"
            src={
              course?.img_course
                ? `https://res.cloudinary.com/dmpqdaupc/${course.img_course}`
                : "/fallback-image.jpg"
            }
            alt={course.title}
          />
          <div className="flex flex-col justify-end items-start w-full gap-1">
            <h1 className="text-black text-lg font-semibold">{course.title}</h1>
            <div className="flex justify-between items-center w-full gap-3">
              <Rating
                style={{ maxWidth: 80 }}
                value={rating || 0}
                onChange={setRating}
              />
              <p className="text-[#655D59] font-medium text-[.75rem]">
                ₦{course.price || "N/A"}
              </p>
            </div>
            <p className="text-[#655D59] font-medium text-[.75rem]">(1000)</p>
            <Link
              href={{
                pathname: "/dashboard/home/course-details",
                query: {
                  details: course.title,
                  id: course.course_id,
                },
              }}
              className="text-main text-base flex justify-center items-center gap-2"
            >
              View course <IoIosArrowRoundForward />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExploreCourseCards;
