"use client";

import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Link from "next/link";
import Image from "next/image";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import card from "../../../../asset/course-details/EdTech Platform Frame.png";
import { IoIosArrowRoundForward } from "react-icons/io";

const ExploreCourseCards = ({ courses, rating, setRating }) => {
  const [flippedCard, setFlippedCard] = useState(null);

  const handleMouseOver = (courseId) => {
    setFlippedCard(courseId);
  };

  const handleMouseOut = () => {
    setFlippedCard(null);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[11px] gap-y-[5em] justify-items-center">
      {courses.map((course, index) => (
        <div
          key={index}
          className="p-3 bg-white hover:shadow-gray-200 shadow-sm w-full md:w-[304px] lg:min-h-[320px] border border-[#F0F0F0] rounded-2xl flex flex-col gap-6 items-start cursor-pointer"
        >
          <div className="w-full gap-4 flex flex-col">
          <Image width={523}
          height={200}
        
              className="object-contain rounded-lg"
              src={
                `https://res.cloudinary.com/dmpqdaupc/` + course?.img_course ?? ""
              }
              alt={course.title}
            />

            <div className="flex flex-col justify-end items-start w-full gap-1">
              <div className="flex justify-between items-center gap-3">
                <h1 className="text-black text-lg font-semibold">
                  {course.title}
                </h1>
              </div>
              <div className="flex justify-between w-full items-center gap-3">
                <Rating
                  style={{ maxWidth: 80 }}
                  value={rating}
                  onChange={setRating}
                />
                <p className="text-[#655D59] font-medium text-[.75rem] leading-[18px]">
                  {course.price}
                </p>
              </div>

              <p className="text-[#655D59] font-medium text-[.75rem] leading-[18px]">
                (1000)
              </p>
              {/* <p className='text-lg leading-[46px] font-medium'>Beginner, 6 Months</p> */}
              <div className="flex justify-between items-center gap-1">
                <Link
                  href={{
                    pathname: "/dashboard/home/course-details",
                    query: {
                      details: course.title,
                      id: course.course_id,
                    },
                  }}
                  passHref
                  className="text-main text-base flex justify-center items-center gap-2"
                >
                  View course <IoIosArrowRoundForward />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExploreCourseCards;
