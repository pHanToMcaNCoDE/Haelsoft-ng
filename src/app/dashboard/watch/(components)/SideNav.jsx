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

import { Accordion, AccordionItem } from "@heroui/accordion";
import { IoMdStopwatch } from "react-icons/io";
import { RiDownload2Line } from "react-icons/ri";





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
      className={`w-[45%] lg:w-[40%] min-h-screen overflow-auto shadow-xl md:block fixed lg:static top-0 z-[180] md:z-[2] transition-all flex flex-col gap-4 p-0 justify-start items-start border-l border-[#e5e5e5]`}
    >

      <SideNavTab/>


      <div className='w-full flex flex-col justify-start items-end'>
        {
          currentTab === 'Course content' && (
            videoData?.map((module, index) => {
              return (
                <div className="w-full p-0" key={module.uid}>
                  <Accordion className='w-full flex flex-col gap-2 p-0'>
                    <AccordionItem aria-label="Accordion 1" title={
                      <div className="flex flex-col justify-between items-center w-full">
                        <h1 className="text-[rgb(32,26,24)] text-[1.125rem] font-bold">Module {index+1}: {module.name}</h1>
                      </div>
                    } key={module.id} className="bg-[#f6f7f9] border-b-[2px] rounded-[3px] border-[#e7e8ec] p-1">
                        <div className="flex flex-col">
                          <div className=" text-base text-grayTwo font-normal min-h-full">
                            {
                              module.lessons.map((lesson, index) => (
                                <div key={index} className='w-full flex flex-col justify-end items-end gap-3'>
                                  <div className={`p-1 cursor-pointer w-full flex justify-start items-start gap-2 ${videoUrl ? 'bg-[#d1d2df]' : ''}`}>
                                    <div className='w-3 h-3 rounded-full border border-grayTwo mt-1'></div>
                                    <div className="flex flex-col w-full justify-start items-start gap-2 h-[65px]">
                                      <div onClick={() => setVideoUrl(lesson.link)} className="w-full flex justify-start items-center gap-2">
                                        <p className="text-md font-medium">{index+1}.</p>
                                        <p className="text-md font-medium">{lesson.name}</p>
                                      </div>

                                      <div className="flex justify-start items-center gap-1">
                                        <IoMdStopwatch size={22} />
                                        <p className="text-sm font-normal">{lesson.duration} mins</p>
                                      </div>
                                    </div>
                                    {lesson.resources?.length > 0 && (
                                    <div className="space-y-3">
                                      {lesson.resources.map((resource) => {
                                        const fileType = resource.link.split('.').pop().toUpperCase();
                                        return (
                                          <div className="p-3 flex justify-center items-center gap-2 text-main border-main bg-transparent rounded-[4px] font-medium text-md" key={resource.uid}>
                                            <a
                                              href={`${process.env.NEXT_PUBLIC_BASE_URL}storage/resources/${resource.link}`}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                            >
                                              <RiDownload2Line/> Download ({fileType})
                                            </a>
                                          </div>
                                        );
                                      })}
                                    </div>
                                  )}
                                  </div>

                                  {/* {
                                    lesson.resources.map((resource) => (
                                      <button onClick={} className='px-3 p flex justify-center items-center gap-2 text-main border-main bg-transparent rounded-[4px] font-medium text-md'>
                                        
                                        <p>Resources</p>
                                      </button>
                                    ))
                                  } */}

                                  
                                </div>
                              ))
                            }
                          </div>
                        </div>
                      </AccordionItem>
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