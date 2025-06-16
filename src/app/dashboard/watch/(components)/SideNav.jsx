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
import { FaCheck, FaPlay, FaCircle } from "react-icons/fa";
import { MdRadioButtonUnchecked, MdCheckCircle } from "react-icons/md";

const SideNav = ({
  open,
  setOpen,
  videoData,
  videoUrl,
  setVideoUrl,
  sideNavClicked,
  completedLessons,
  toggleLessonCompletion,
  currentLesson
}) => {
  const [currentTab, setCurrentTab] = useState('Course content');

  console.log('Video Data', videoData);

  const getModuleProgress = (module) => {
    if (!module.lessons || module.lessons.length === 0) return 0;
    const completedCount = module.lessons.filter(lesson => 
      completedLessons.has(lesson.id)
    ).length;
    return Math.round((completedCount / module.lessons.length) * 100);
  };

  const isCurrentLesson = (lesson) => {
    return currentLesson && currentLesson.id === lesson.id;
  };

  const isLessonCompleted = (lessonId) => {
    return completedLessons.has(lessonId);
  };

  return (
    <aside
      className={`w-[45%] lg:w-[40%] min-h-screen overflow-auto shadow-xl md:block fixed lg:static top-0 z-40 transition-all flex flex-col gap-4 p-0 justify-start duration-200 items-start border-l border-[#e5e5e5] bg-white ${sideNavClicked ? 'left-0' : 'left-[-100%]'}`}
    >

      <div className="w-full p-4 bg-gray-50 my-3">
        <div className="text-center">
          <h3 className="font-semibold text-gray-800 mb-2">Course Progress</h3>
          <div className="flex justify-center items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <MdCheckCircle className="text-green-500" />
              <span>{completedLessons.size} Completed</span>
            </div>
            <div className="flex items-center gap-1">
              <MdRadioButtonUnchecked className="text-gray-400" />
              <span>
                {videoData.reduce((total, module) => total + (module.lessons?.length || 0), 0) - completedLessons.size} Remaining
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full flex flex-col justify-start items-end'>
        {currentTab === 'Course content' && (
          videoData?.map((module, moduleIndex) => {
            const moduleProgress = getModuleProgress(module);
            const completedLessonsInModule = module.lessons?.filter(lesson => 
              completedLessons.has(lesson.id)
            ).length || 0;
            const totalLessonsInModule = module.lessons?.length || 0;

            return (
              <div className="w-full p-0" key={module.uid}>
                <Accordion className='w-full flex flex-col gap-2 p-0'>
                  <AccordionItem 
                    aria-label={`Module ${moduleIndex + 1}`} 
                    title={
                      <div className="flex flex-col justify-start items-start w-full gap-2">
                        <div className="flex items-center justify-between w-full">
                          <h1 className="text-[rgb(32,26,24)] text-[1.125rem] font-bold">
                            Module {moduleIndex + 1}: {module.name}
                          </h1>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-600">
                              {completedLessonsInModule}/{totalLessonsInModule}
                            </span>
                            {moduleProgress === 100 && (
                              <MdCheckCircle className="text-green-500 text-lg" />
                            )}
                          </div>
                        </div>
                        
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div 
                            className="bg-gradient-to-r from-green-400 to-green-600 h-1.5 rounded-full transition-all duration-300" 
                            style={{ width: `${moduleProgress}%` }}
                          ></div>
                        </div>
                      </div>
                    } 
                    key={module.id} 
                    className="bg-[#f6f7f9] border-b-[2px] rounded-[3px] border-[#e7e8ec] p-1"
                  >
                    <div className="flex flex-col">
                      <div className="text-base text-grayTwo font-normal min-h-full">
                        {module.lessons?.map((lesson, lessonIndex) => {
                          const isCompleted = isLessonCompleted(lesson.id);
                          const isCurrent = isCurrentLesson(lesson);
                          
                          return (
                            <div key={lessonIndex} className='w-full flex flex-col justify-end items-end gap-3'>
                              <div className={`p-2 cursor-pointer w-full flex justify-start items-start gap-3 rounded-md transition-all duration-200 hover:bg-gray-100 mb-3 ${
                                isCurrent ? 'bg-main/[20%] border-l-4 border-main' : ''
                              }`}>
                                
                                <div 
                                  className="flex-shrink-0 mt-1 cursor-pointer" 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleLessonCompletion(lesson.id);
                                  }}
                                >
                                  {isCompleted ? (
                                    <MdCheckCircle className="text-green-500 text-lg hover:text-green-600 transition-colors" />
                                  ) : isCurrent ? (
                                    <FaPlay className="text-main text-sm ml-0.5 mt-0.5" />
                                  ) : (
                                    <MdRadioButtonUnchecked className="text-gray-400 text-lg hover:text-gray-600 transition-colors" />
                                  )}
                                </div>

                                <div className="flex flex-col w-full justify-start items-start gap-2 min-h-[65px]">
                                  <div 
                                    onClick={() => setVideoUrl(lesson.link, lesson, moduleIndex, lessonIndex)} 
                                    className="w-full flex justify-between items-center gap-2 cursor-pointer group"
                                  >
                                    <div className="flex justify-center items-center gap-2">
                                      <p className="text-md font-medium text-gray-700">{lessonIndex + 1}.</p>
                                      <p className={`text-md font-medium transition-colors group-hover:text-main ${
                                        isCurrent ? 'text-main font-semibold' : isCompleted ? 'text-gray-600' : 'text-black'
                                      }`}>
                                        {lesson.name}
                                      </p>
                                    </div>
                                    {isCurrent && (
                                      <span className="text-xs bg-main/[10%] text-main px-2 py-1 rounded-full font-medium">
                                        Playing
                                      </span>
                                    )}
                                    {isCompleted && !isCurrent && (
                                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                                        Completed
                                      </span>
                                    )}
                                  </div>

                                  <div className="flex justify-start items-center gap-1">
                                    <IoMdStopwatch size={18} className="text-gray-500" />
                                    <p className="text-sm font-normal text-gray-600">{lesson.duration} mins</p>
                                  </div>
                                </div>
                              </div>

                              {lesson.resources?.length > 0 && (
                                <div className="w-full pl-8 space-y-2 flex justify-end items-center">
                                  {lesson.resources.map((resource) => {
                                    const fileType = resource.link.split('.').pop().toUpperCase();
                                    return (
                                      <a
                                        key={resource.uid}
                                        href={`${process.env.NEXT_PUBLIC_STORAGE_URL}${resource.link}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='inline-flex items-center gap-2 px-3 py-2 text-sm text-orange-600 border border-orange-200 bg-orange-50 hover:bg-orange-100 rounded-md transition-colors duration-200 font-medium'
                                      >
                                        <RiDownload2Line className="text-lg" />
                                        <span>Download Resource ({fileType})</span>
                                      </a>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </AccordionItem>
                </Accordion>
              </div>
            );
          })
        )}
      </div>
      
    </aside>
  );
};

export default SideNav;