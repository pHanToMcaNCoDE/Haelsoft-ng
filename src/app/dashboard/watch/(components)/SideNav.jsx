"use client";
import React, { useEffect, useState } from "react";
import draw from "../../../../asset/draw.svg";
import Image from "next/image";
import check from "../../../../asset/draw.svg";
import { IoCloseOutline } from "react-icons/io5";
import Modules from "./Modules";
import { data } from "@/Service/validation";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import secureLocalStorage from "react-secure-storage";
import Loading from "@/app/dashboard/(dashboardcomponents)/loading";
import { useSelector } from "react-redux";
import Link from "next/link";

const SideNav = ({
  setVideoUrl,
  open,
  setOpen,
  videoData,
  // courseContentData,
}) => {
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [hoveredLesson, setHoveredLesson] = useState(null);
  const [visibleModules, setVisibleModules] = useState({});

  useEffect(() => {
    
    if (!videoData?.data?.modules || videoData.data.modules.length === 0) {
      console.warn("Modules array is empty or undefined.");
      return;
    }

    setSelectedLesson({ moduleIndex: 0, lessonIndex: 0 });
    setVideoUrl(videoData.data.modules[0].lessons[0]?.video_url || "");

    const initialVisibility = {};
    videoData.data.modules.forEach((_, index) => {
      initialVisibility[index] = true;
    });
    setVisibleModules(initialVisibility);
  }, [videoData]);

  const toggleVisibility = (moduleIndex) => {
    setVisibleModules((prev) => ({
      ...prev,
      [moduleIndex]: !prev[moduleIndex],
    }));
  };

  const handleLessonClick = (moduleIndex, lessonIndex) => {
    const isFirstLesson = moduleIndex === 0 && lessonIndex === 0;
    if (videoData.isPaid || isFirstLesson) {
      setSelectedLesson({ moduleIndex, lessonIndex });
      setVideoUrl(
        videoData.data.modules.length <= 0
          ? ""
          : videoData.data.modules[moduleIndex].lessons[lessonIndex].video_url
      );
    }
  };


  const { course } = useSelector((state) => state.courses);

  return (
    <div
      className={`w-[45%] h-full lg:w-[25%] md:col-span-3 px-3 py-7 overflow-auto bg-white shadow-xl md:block fixed lg:static top-0 z-[180] md:z-[2] transition-all flex flex-col justify-start items-start gap-6 ${open ? "left-0" : "left-[-200%] lg:left-0"}`}
    >
      {/* <Image
        onClick={() => setOpen(!open)}
        src={draw}
        className="mt-4 cursor-pointer hidden md:block"
        alt="Draw"
      /> */}
      {
        open && (
          <div
            onClick={() => setOpen(!open)}
            className="flex items-center mb-4 fixed lg:hidden top-4 justify-end text-[#f36402]"
          >
            <IoCloseOutline className="text-3xl cursor-pointer" />
            <p>close</p>
          </div>
        )
      }

      <div className={`flex flex-col justify-start items-start gap-6 mt-2`}>
        <p className="font-bold text-xl">
          {course?.title}
        </p>
        
        <div className=" w-full max-w-[300px] flex flex-col justify-end item-center">
          <p className="text-gray-700 whitespace-nowrap font-medium text-sm">
            Progress: 20%
          </p>
          <div className="w-full max-w-[300px] bg-gray-300 rounded-xl h-3 overflow-hidden border border-main">
            <div className={`h-full bg-main`} style={{ width: `${20}%` }}></div>
          </div>
        </div>
      </div>
      
      {videoData?.data?.modules?.length > 0 &&
        videoData?.data?.modules.map((module, moduleIndex) => {
          return (

              <Modules
                key={moduleIndex}
                module={module}
                moduleIndex={moduleIndex}
                selectedLesson={selectedLesson}
                setSelectedLesson={handleLessonClick}
                hoveredLesson={hoveredLesson}
                setHoveredLesson={setHoveredLesson}
                isVisible={visibleModules[moduleIndex]}
                toggleVisibility={toggleVisibility}
                isPaid={videoData.isPaid}
                setVideoUrl={setVideoUrl}
                setOpen={setOpen}
                open={open}
              />
          );
        })}
    </div>
  );
};

export default SideNav;
