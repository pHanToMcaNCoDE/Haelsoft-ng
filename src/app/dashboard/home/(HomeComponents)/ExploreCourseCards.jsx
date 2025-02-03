"use client";

import React from "react";
import Link from "next/link";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";
import { TbFaceIdError } from "react-icons/tb";

const ExploreCourseCards = ({ courses = [], rating, setRating }) => {
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
                <p className="text-[#655D59] text-base text-[.75rem]">(1000)</p>
              </div>
              <div className="flex flex-col justify-center items-start gap-2">
                <p className="text-[#655D59] font-bold text-lg text-[.75rem]">
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
  );
};

export default ExploreCourseCards;
