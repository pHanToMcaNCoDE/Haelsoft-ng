"use client";

import React, { useState, useEffect, Fragment } from "react";
import ExploreCourseCards from "./ExploreCourseCards";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import Loader from "@/components/Loader";

const Explore = ({ 
  courses, 
  paginationData, 
  setPaginationData, 
  setCourses, 
  fetchCourses,
  loading = false
}) => {
  const [searchText, setSearchText] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (searchText.trim()) {
      setIsSearching(true);
      const filtered = courses.filter((course) =>
        course.title.toLowerCase().includes(searchText.toLowerCase()) ||
        course.sub_title?.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredCourses(filtered);
      setIsSearching(false);
    } else {
      setFilteredCourses(courses);
    }
  }, [searchText, courses]);

  
  const handlePageChange = async (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= paginationData.last_page) {
      
      setSearchText("");
      await fetchCourses(pageNumber);
      
      window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
      });
    }
  };

  const getVisiblePages = () => {
    const maxVisible = 5;
    const current = paginationData.current_page;
    const last = paginationData.last_page;
    
    if (last <= maxVisible) {
      return Array.from({ length: last }, (_, i) => i + 1);
    }
    
    const pages = [];
    const halfVisible = Math.floor(maxVisible / 2);
    
    let start = Math.max(1, current - halfVisible);
    let end = Math.min(last, current + halfVisible);
    
    if (end - start + 1 < maxVisible) {
      if (start === 1) {
        end = Math.min(last, start + maxVisible - 1);
      } else {
        start = Math.max(1, end - maxVisible + 1);
      }
    }
    
    if (start > 1) {
      pages.push(1);
      if (start > 2) pages.push('...');
    }
    
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    
    if (end < last) {
      if (end < last - 1) pages.push('...');
      pages.push(last);
    }
    
    return pages;
  };

  const visiblePages = getVisiblePages();

  const safePaginationData = paginationData || {
    current_page: 1,
    last_page: 1,
    total: 0,
    per_page: 20,
    from: 0,
    to: 0
  };

  return (
    <section className="max-w-[1250px] 2xl:max-w-[1500px] mx-auto gap-2">
      {/* Loading overlay for page changes */}
      {loading && <Loader />}
      
      <div className="flex flex-col md:flex-row justify-between w-full items-start md:items-center gap-3 my-5">
        <div className="text-[#201A18] font-bold text-[1.5rem] lg:text-[2rem] leading-[45px] flex flex-wrap justify-between w-full items-start sm:items-center gap-5 my-5">
          <h1>All Courses</h1>
          <form className="w-[238px] h-[38px] rounded-[4px] px-2 py-5 flex justify-between items-center gap-2 border border-[#e0e0e0]">
            <FiSearch className="text-xl text-[#e0e0e0]" />
            <input
              type="text"
              placeholder="Search courses..."
              className="text-black text-base duration-200 focus:border-main font-normal w-full outline-none px-2 placeholder:text-base"
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
            />
          </form>
        </div>
      </div>

      {/* Results info */}
      <div className="mb-4">
        {searchText ? (
          <p className="text-gray-600 text-sm">
            {isSearching ? 'Searching...' : `Found ${filteredCourses.length} course(s) matching "${searchText}"`}
          </p>
        ) : (
          <p className="text-gray-600 text-sm">
            Showing {safePaginationData.from} to {safePaginationData.to} of {safePaginationData.total} courses
          </p>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <ExploreCourseCards courses={filteredCourses} />
      </div>

      
      {!searchText && safePaginationData.last_page > 1 && (
        <div className="flex flex-col sm:flex-row justify-center items-center mt-8 gap-5">
          
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              safePaginationData.current_page <= 1 
                ? "text-gray-400 cursor-not-allowed bg-gray-100" 
                : "text-gray-700 hover:text-main hover:bg-gray-50 bg-white border"
            }`}
            onClick={() => safePaginationData.current_page > 1 && handlePageChange(safePaginationData.current_page - 1)}
            disabled={safePaginationData.current_page <= 1}
          >
            <IoArrowBackOutline className="text-lg" />
            <span className="hidden sm:inline">Previous</span>
          </button>

          <div className="flex gap-2 justify-center items-center">
            {visiblePages.map((page, index) => (
              <Fragment key={index}>
                {page === '...' ? (
                  <span className="px-3 py-2 text-gray-500">...</span>
                ) : (
                  <button
                    className={`relative w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
                      safePaginationData.current_page === page 
                        ? "bg-main text-white font-semibold" 
                        : "text-gray-700 hover:text-main hover:bg-gray-50 bg-white border"
                    }`}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </button>
                )}
              </Fragment>
            ))}
          </div>

          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              safePaginationData.current_page >= safePaginationData.last_page 
                ? "text-gray-400 cursor-not-allowed bg-gray-100" 
                : "text-gray-700 hover:text-main hover:bg-gray-50 bg-white border"
            }`}
            onClick={() => safePaginationData.current_page < safePaginationData.last_page && handlePageChange(safePaginationData.current_page + 1)}
            disabled={safePaginationData.current_page >= safePaginationData.last_page}
          >
            <span className="hidden sm:inline">Next</span>
            <IoArrowForwardOutline className="text-lg" />
          </button>
        </div>
      )}

      {searchText && filteredCourses.length === 0 && !isSearching && (
        <div className="text-center py-8">
          <p className="text-gray-500">No courses found matching "{searchText}"</p>
          <button 
            onClick={() => setSearchText("")}
            className="mt-2 text-main hover:underline"
          >
            Clear search
          </button>
        </div>
      )}
    </section>
  );
};

export default Explore;