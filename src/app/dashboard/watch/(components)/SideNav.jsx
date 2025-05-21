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
import SideNavTab from "./SideNavTab";
import {
  CustomAccordion as Accordion,
  CustomAccordionSummary as AccordionSummary,
  CustomAccordionDetails as AccordionDetails,
  CustomTypography as Typography,
  CustomExpandMoreIcon as ExpandMoreIcon,
  CustomButton as Button
} from '../(components)/CustomAccordion';
import { ImStopwatch } from "react-icons/im";




const SideNav = ({
  open,
  setOpen,
  videoData,
  videoUrl,
  setVideoUrl
  // courseContentData,
}) => {
  // const [selectedLesson, setSelectedLesson] = useState(null);
  // const [hoveredLesson, setHoveredLesson] = useState(null);
  // const [visibleModules, setVisibleModules] = useState({});

  const [currentTab, setCurrentTab] = useState('Course content');

  console.log('Video Data', videoData)

  // useEffect(() => {
    
  //   if (!videoData?.data?.modules || videoData.data.modules.length === 0) {
  //     console.warn("Modules array is empty or undefined.");
  //     return;
  //   }

  //   setSelectedLesson({ moduleIndex: 0, lessonIndex: 0 });
  //   setVideoUrl(videoData.data.modules[0].lessons[0]?.video_url || "");

  //   const initialVisibility = {};
  //   videoData.data.modules.forEach((_, index) => {
  //     initialVisibility[index] = true;
  //   });
  //   setVisibleModules(initialVisibility);
  // }, [videoData]);

  // const toggleVisibility = (moduleIndex) => {
  //   setVisibleModules((prev) => ({
  //     ...prev,
  //     [moduleIndex]: !prev[moduleIndex],
  //   }));
  // };

  // const handleLessonClick = (moduleIndex, lessonIndex) => {
  //   const isFirstLesson = moduleIndex === 0 && lessonIndex === 0;
  //   if (videoData.isPaid || isFirstLesson) {
  //     setSelectedLesson({ moduleIndex, lessonIndex });
  //     setVideoUrl(
  //       videoData.data.modules.length <= 0
  //         ? ""
  //         : videoData.data.modules[moduleIndex].lessons[lessonIndex].video_url
  //     );
  //   }
  // };



  return (
    <aside
      className={`w-[45%] lg:w-[32%] h-full md:col-span-3 overflow-auto bg-white shadow-xl md:block fixed lg:static top-0 z-[180] md:z-[2] transition-all flex flex-col justify-start items-start gap-6 border-l border-gray`}
    >
      {/* <Image
        onClick={() => setOpen(!open)}
        src={draw}
        className="mt-4 cursor-pointer hidden md:block"
        alt="Draw"
      /> */}
      {/* {
        open && (
          <div
            onClick={() => setOpen(!open)}
            className="flex items-center mb-4 fixed lg:hidden top-4 justify-end text-[#f36402]"
          >
            <IoCloseOutline className="text-3xl cursor-pointer" />
            <p>close</p>
          </div>
        )
      } */}

      <SideNavTab/>


      <div className='w-full flex flex-col justify-start items-end'>
        {
          currentTab === 'Course content' && (
            videoData?.map((module, index) => {
              return (
                <div key={module.uid}>
                  <Accordion className="shadow-none border-0">
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon className='text-[.75rem]' />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                      className="w-full py-5 border-0 outline-none bg-[#f6f7f9] px-3 flex justify-between items-center gap-3"
                    >
                      <Typography className='font-bold text-md' component="span">Module {index+1}: {module.name}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {
                        module.lessons.map((lesson, index) => (
                          <div key={index} className={`cursor-pointer w-full flex justify-start items-start p-3 gap-2 ${videoUrl ? 'bg-[#e5e5e5]' : ''}`}>
                            <div className='w-3 h-3 rounded-full border border-gray mt-1'></div>
                            <div className="flex flex-col w-full justify-start items-start gap-2 h-[65px]">
                              <div onClick={() => setVideoUrl(lesson.link)} className="w-full flex justify-start items-center gap-2">
                                <p className="text-md font-medium">{index+1}.</p>
                                <p className="text-md font-medium">{lesson.name}</p>
                              </div>

                              <div className="flex justify-start items-center gap-1">
                                <ImStopwatch size={22} />
                                <p className="text-sm font-normal">{lesson.duration} mins</p>
                              </div>
                            </div>
                          </div>
                        ))
                      }
                    </AccordionDetails>
                  </Accordion>
                </div>
              );
            })
          )
        }
      </div>
    </aside>
  );
};

export default SideNav;