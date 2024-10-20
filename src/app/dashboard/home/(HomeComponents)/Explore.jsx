"use client";

import React, { useState } from "react";
import ExploreCourseCards from "./ExploreCourseCards";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const Explore = ({ courses }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [clickFilter, setClickFilter] = useState(false);
  const [rating, setRating] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Trending");
  const [selectedFilter, setSelectedFilter] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
    setClickFilter(false);
  };

  const filteredCourses = courses.filter((course) => {
    let categoryMatch = selectedCategory === "Trending" || course.category === selectedCategory;
    let filterMatch = !selectedFilter || course[selectedFilter.key] === selectedFilter.value;

    return categoryMatch && filterMatch;
  });

  return (
    <section className="max-w-[1250px] 2xl:max-w-[1500px] mx-auto p-3 lg:p-0 gap-6">
      <div className="flex flex-col md:flex-row justify-between w-full items-start md:items-center gap-5 my-10">
        <div className="flex justify-between items-center gap-3">
          <button onClick={() => handleCategoryClick()} className="bg-main text-white text-[.85rem] font-medium leading-5 rounded-full py-2 px-8">
            Trending
          </button>
          <button onClick={() => handleCategoryClick("Development")} className="bg-main text-white text-[.85rem] font-medium leading-5 rounded-full py-2 px-8">
            Development
          </button>
          <button onClick={() => handleCategoryClick("Design")} className="bg-main text-white text-[.85rem] font-medium leading-5 rounded-full py-2 px-8">
            Design
          </button>
          <button onClick={() => handleCategoryClick("Marketing")} className="bg-main text-white text-[.85rem] font-medium leading-5 rounded-full py-2 px-8">
            Marketing
          </button>
        </div>
        <div className="relative">
          <div
            onClick={() => setClickFilter((prev) => !prev)}
            className="z-40 bg-white relative w-[169px] h-[38px] rounded-lg px-4 py-5 flex justify-between items-center cursor-pointer"
          >
            <p className="text-lg text-[#201A18] leading-[46px] font-medium">Filter</p>
            <IoIosArrowDown
              size={20}
              className={`duration-200 cursor-pointer text-main ${clickFilter ? "rotate-[180deg]" : "rotate-0"}`}
            />
          </div>
          <div
            className={`absolute flex gap-4 flex-col justify-center items-start right-0 duration-200 w-full md:w-[169px] shadow-lg shadow-slate-200 mt-2 rounded-lg bg-white ${
              clickFilter ? "opacity-100 z-30" : "opacity-0 z-0"
            }`}
          >
            <p
              onClick={() => handleFilterClick({ key: "level", value: "Beginner" })}
              className="cursor-pointer text-[1.25rem] font-medium leading-7 text-[#7F7571] hover:text-white hover:bg-main duration-100 rounded-lg py-2 px-3 w-full"
            >
              Level
            </p>
            <p
              onClick={() => handleFilterClick({ key: "price", value: "Free" })}
              className="cursor-pointer text-[1.25rem] font-medium leading-7 text-[#7F7571] hover:text-white hover:bg-main duration-100 rounded-lg py-2 px-3 w-full"
            >
              Price
            </p>
            <p
              onClick={() => handleFilterClick({ key: "duration", value: "Short" })}
              className="cursor-pointer text-[1.25rem] font-medium leading-7 text-[#7F7571] hover:text-white hover:bg-main duration-100 rounded-lg py-2 px-3 w-full"
            >
              Duration
            </p>
            <p
              onClick={() => handleFilterClick({ key: "popularity", value: "Most Popular" })}
              className="cursor-pointer text-[1.25rem] font-medium leading-7 text-[#7F7571] hover:text-white hover:bg-main duration-100 rounded-lg py-2 px-3 w-full"
            >
              Most Popular
            </p>
            <p
              onClick={() => handleFilterClick({ key: "rating", value: "Highest Rated" })}
              className="cursor-pointer text-[1.25rem] font-medium leading-7 text-[#7F7571] hover:text-white hover:bg-main duration-100 rounded-lg py-2 px-3 w-full"
            >
              Most Rated
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <ExploreCourseCards courses={filteredCourses} rating={rating} setRating={setRating} />
      </div>

      <div className="flex justify-center items-center mt-[5em] gap-5">
        <IoArrowBackOutline />
        <div className="flex gap-[10px] justify-center items-center">
          <button className="relative text-black w-4 font-semibold text-base leading-[46px]">
            1
            <div className="w-4 bg-main rounded-lg h-[4px] absolute bottom-0"></div>
          </button>
          <button className="text-[#201A18] font-semibold text-sm w-4 leading-[46px]">2</button>
          <button className="text-[#201A18] font-semibold text-sm w-4 leading-[46px]">3</button>
        </div>
        <IoArrowForwardOutline />
      </div>
    </section>
  );
};

export default Explore;
