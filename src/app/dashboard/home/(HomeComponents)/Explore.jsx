"use client";

import React, { useState, useEffect } from "react";
import ExploreCourseCards from "./ExploreCourseCards";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";

const Explore = ({ courses, paginationData, setPaginationData, setCourses }) => {
  const [searchText, setSearchText] = useState("");

  // Handle search filtering
  const filteredCourses = courses.filter((course) =>
    searchText ? course.title.toLowerCase().includes(searchText.toLowerCase()) : course
  );

  // Function to handle page changes (using the pagination URLs)
  const handlePageChange = (url) => {
    if (!url) return;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // Update courses and pagination data
        setCourses(data.data);
        setPaginationData(data.meta);
      })
      .catch((err) => console.error("Error fetching courses:", err));
  };

  // Safe check for paginationData
  const safePaginationData = paginationData || {};

  return (
    <section className="max-w-[1250px] 2xl:max-w-[1500px] mx-auto gap-2">
      <div className="flex flex-col md:flex-row justify-between w-full items-start md:items-center gap-3 my-5">
        <div className="text-[#201A18] font-bold text-[1.5rem] lg:text-[2rem] leading-[45px] flex flex-wrap justify-between w-full items-start sm:items-center gap-5 my-5">
          <h1>All Courses</h1>
          <form className="w-[238px] h-[38px] rounded-[4px] px-2 py-5 flex justify-between items-center gap-2 border border-[#e0e0e0]">
            <FiSearch className="text-xl text-[#e0e0e0]" />
            <input
              type="text"
              placeholder="Search..."
              className="text-black text-base font-normal w-full outline-none px-2 placeholder:text-base"
              onChange={(e) => setSearchText(e.target.value)}
            />
          </form>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <ExploreCourseCards courses={filteredCourses} />
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-8 gap-5">
        {/* Add safe checks for paginationData */}
        <IoArrowBackOutline
          className={`cursor-pointer ${!safePaginationData.prev_page_url ? "text-gray-400" : ""}`}
          onClick={() => handlePageChange(safePaginationData.prev_page_url)}
        />
        <div className="flex gap-[10px] justify-center items-center">
          {/* Displaying the page numbers */}
          {Array.from({ length: safePaginationData.last_page || 1 }, (_, index) => index + 1).map((page) => (
            <button
              key={page}
              className={`relative ${safePaginationData.current_page === page ? "text-black font-semibold" : "text-[#201A18]"} w-4 leading-[46px]`}
              onClick={() => handlePageChange(`${process.env.NEXT_PUBLIC_BASE_URL}courses?page=${page}`)}
            >
              {page}
              {safePaginationData.current_page === page && <div className="w-4 bg-main rounded-lg h-[4px] absolute bottom-0"></div>}
            </button>
          ))}
        </div>
        <IoArrowForwardOutline
          className={`cursor-pointer ${!safePaginationData.next_page_url ? "text-gray-400" : ""}`}
          onClick={() => handlePageChange(safePaginationData.next_page_url)}
        />
      </div>
    </section>
  );
};

export default Explore;
