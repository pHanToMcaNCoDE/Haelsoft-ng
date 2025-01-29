"use client";

import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { SlArrowDown } from "react-icons/sl";
import "@splidejs/react-splide/css";

const CourseAccordion = ({ courses }) => {
  if (!courses?.units?.length) {
    return <div>No units available.</div>;
  }

  return (
    <Splide
      options={{
        type: "slide",
        perPage: 1,
        pagination: false,
        arrows: true,
        gap: "1rem",
        autoplay: false,
      }}
      className="w-full"
    >
      {courses.units.map((unit, index) => (
        <SplideSlide key={index} className="border-b-[4px] border-[#FF8C5380] p-4">
          <div className="flex flex-col">
            <h1 className="text-[#201A18] text-[1.75rem] font-semibold leading-[43px]">
              {unit?.title || "No title available"}
            </h1>
            <p className="text-[#201A18] text-[1.5rem] font-normal leading-[43px]">
              {unit?.sub || "No description available"}
            </p>
            <div className="py-4 h-[160px]">
              {unit?.description || "No additional details available."}
            </div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default CourseAccordion;