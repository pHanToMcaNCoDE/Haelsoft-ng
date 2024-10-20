"use client";
import React, { useEffect, useState } from "react";
import draw from "../../../asset/draw.svg";
import Image from "next/image";
import check from "../../../asset/draw.svg";
import { IoCloseOutline } from "react-icons/io5";
import Modules from "./Modules";
import { data } from "@/Service/validation";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import secureLocalStorage from "react-secure-storage";
import Loading from "@/app/dashboard/(dashboardcomponents)/loading";

const SideNav = ({
  setVideoUrl,
  open,
  setopen,
  videoData,
  courseContentData,
}) => {
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [hoveredLesson, setHoveredLesson] = useState(null);
  const [visibleModules, setVisibleModules] = useState({});

  useEffect(() => {
    // Set the first lesson under the first module as selected initially
    console.log("cwodwds1");

    //   console.log("cwodwds2");
    setSelectedLesson({ moduleIndex: 0, lessonIndex: 0 });
    setVideoUrl(
      videoData?.data?.modules?.length <= 0
        ? ""
        : videoData.data.modules[0].lessons[0].video_url
    );

    // Initialize visibility of all modules to true
    const initialVisibility = {};
    videoData.data.modules.forEach((_, index) => {
      initialVisibility[index] = true;
    });
    setVisibleModules(initialVisibility);
  }, []);

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

  return (
    <div
      className={`md:col-span-3 pl-4 lg:py-10 md:pl-10 pr-4 py-4 w-full max-w-[270px] overflow-auto bg-white shadow-xl md:block fixed md:static top-0 z-[180] md:z-[2] ${
        open ? "block" : "hidden"
      }`}
    >
      <Image
        onClick={() => setopen(!open)}
        src={draw}
        className="mt-4 cursor-pointer  hidden md:block"
        alt="Draw"
      />
      <div
        onClick={() => setopen(!open)}
        className="flex items-center fixed lg:hidden top-4 left-[60%] justify-end text-[#f36402]"
      >
        <div>Close</div>
        <IoCloseOutline
          //
          className=" text-4xl cursor-pointer "
        />
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
              setopen={setopen}
              open={open}
            />
          );
        })}
    </div>
  );
};

export default SideNav;
