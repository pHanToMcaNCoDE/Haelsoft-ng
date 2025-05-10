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
            key={course.uid}
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
                course?.cover_image
                  ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${course.cover_image}`
                  : "/fallback-image.jpg"
              }
              alt={course.title}
            />

            <div className="px-3 pb-5 flex flex-col justify-end items-start w-full gap-2">
              <h1 className="text-black text-xl font-semibold">{course.title}</h1>
              <p className="text-grayTwo text-sm text-[.75rem]">{course.sub_title}</p>
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
                  ₦{Number(course.price).toLocaleString() || "N/A"}
                </p>
                <Link
                  // href={{
                  //   pathname: "/dashboard/home/course-details",
                  //   query: {
                  //     // details: course.title,
                  //     id: course.uid,
                  //   },
                  // }}
                  href={`/dashboard/home/course-details/${course.uid}`}
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
