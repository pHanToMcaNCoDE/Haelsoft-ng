"use client";

import React, { useEffect, useState } from "react";
import TopBarNav from "../(components)/TopBarNav";
import SideNav from "../(components)/SideNav";
import "next-cloudinary/dist/cld-video-player.css";
import VideoPlayer from "../(components)/VideoPlayer";
import axios from "axios";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { PulseLoader } from "react-spinners";

const Watch = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const [videoData, setVideoData] = useState([]);
  const [courseContent, setCourseContent] = useState({});
  const [currentTab, setCurrentTab] = useState("Overview");
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [nextLesson, setNextLesson] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentLessonIndex, setCurrentLessonIndex] = useState({ moduleIndex: 0, lessonIndex: 0 });

  const { token } = useSelector((state) => state.userDetails);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMyCourseDetails = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}learning/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json'
          }
        });

        console.log('My courses details', response.data);
        setIsLoading(false)
        const dataContent = response.data?.data?.my_course;
        const modules = response.data?.data?.my_course.modules;

        setVideoData(modules);
        setCourseContent(dataContent);

        console.log("Contents", dataContent);
        
        if (modules && modules.length > 0 && modules[0].lessons && modules[0].lessons.length > 0) {
          
          const firstLesson = modules[0].lessons[0];
          setVideoUrl(firstLesson.link);
          setCurrentLesson(firstLesson);
          
          if (modules[0].lessons.length > 1) {
            setNextLesson(modules[0].lessons[1]);
          } else if (modules.length > 1 && modules[1].lessons && modules[1].lessons.length > 0) {
            setNextLesson(modules[1].lessons[0]);
          }

          if (dispatch) {
            dispatch({ 
              type: 'SET_CURRENT_LESSON', 
              payload: firstLesson 
            });
          }
        }
      } catch (error) {
        console.log('My courses details errors', error);
        setError("Failed to load course details.");
        setIsLoading(false)
      }
    };

    if (token) fetchMyCourseDetails();
  }, [token, id, dispatch]);

  useEffect(() => {
    const fetchInstructor = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}instructors/single/${courseContent.intructor_uid}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
    
        console.log('Instructor', response.data);
      } catch (error) {
        console.log("Inst error", error);
      }
    };

    if (token && courseContent.intructor_uid) fetchInstructor();
  }, [token, courseContent.intructor_uid]);

  const handleSetVideoUrl = (newUrl, lesson, moduleIndex, lessonIndex) => {
    setVideoUrl(newUrl);
    setCurrentLesson(lesson);
    setCurrentLessonIndex({ moduleIndex, lessonIndex });
    
    findAndSetNextLesson(moduleIndex, lessonIndex);
    
    if (dispatch) {
      dispatch({ 
        type: 'SET_CURRENT_LESSON', 
        payload: lesson 
      });
    }
  };
  
  const findAndSetNextLesson = (moduleIndex, lessonIndex) => {
    if (!videoData || videoData.length === 0) return;
    
    const currentModule = videoData[moduleIndex];
    
    if (currentModule.lessons && lessonIndex < currentModule.lessons.length - 1) {
      setNextLesson(currentModule.lessons[lessonIndex + 1]);
      return;
    }
    
    if (moduleIndex < videoData.length - 1) {
      const nextModuleWithLessons = videoData.slice(moduleIndex + 1).find(module => 
        module.lessons && module.lessons.length > 0
      );
      
      if (nextModuleWithLessons) {
        setNextLesson(nextModuleWithLessons.lessons[0]);
        return;
      }
    }
    
    setNextLesson(null);
  };

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  const handlePlayNext = () => {
    if (!nextLesson) return;
    
    let foundNextModule = -1;
    let foundNextLesson = -1;
    
    videoData.forEach((module, moduleIndex) => {
      if (module.lessons) {
        const lessonIndex = module.lessons.findIndex(lesson => lesson.id === nextLesson.id);
        if (lessonIndex !== -1) {
          foundNextModule = moduleIndex;
          foundNextLesson = lessonIndex;
        }
      }
    });
    
    if (foundNextModule !== -1 && foundNextLesson !== -1) {
      handleSetVideoUrl(
        nextLesson.link,
        nextLesson,
        foundNextModule,
        foundNextLesson
      );
    }
  };

  return (
    <div className="w-full min-h-screen">
      {/* <TopBarNav /> */}
      <div className="flex w-full justify-between">
        <div className="w-full flex flex-col justify-start items-start">
          <div className="h-auto flex flex-col w-full">
            <VideoPlayer
              videoUrl={videoUrl}
              setOpen={setOpen}
              open={open}
              currentLesson={currentLesson}
              nextLesson={nextLesson}
              onPlayNext={handlePlayNext}
            />
          </div>

          <div className="w-full p-3 min-h-screen flex flex-col justify-start items-start gap-2">
            <div className="w-full h-[55px] p-2 flex justify-start items-start gap-6">
              {['Overview', 'FAQs'].map((tab) => (
                <div 
                  key={tab}
                  onClick={() => handleTabChange(tab)} 
                  className="h-[38px] w-auto flex flex-col justify-between items-center cursor-pointer"
                >
                  <p className="text-md font-semibold text-black">{tab}</p>
                  {currentTab === tab && (
                    <div className="w-full h-[3px] rounded-full bg-[#949494]"></div>
                  )}
                </div>
              ))}
            </div>

            <div className="w-full flex flex-col justify-start items-start gap-4 mt-4">
              {currentTab === 'Overview' && courseContent && (
                <div className='w-full md:w-[80%] p-4 flex flex-col gap-8'>
                  <div className="w-full flex flex-col justify-start items-start gap-2">
                    <h1 className="text-2xl font-bold text-grayTwo">{courseContent.title || "No title available"}</h1>
                    <div className="bg-yellow-500 rounded-full w-[95px] h-[3px]"></div>
                  </div>

                  <div className="flex flex-col gap-2">
                    {courseContent.long_desc ? (
                      <div className="mt-2">
                        <p className="text-grayTwo text-md">
                          {!showFullDesc && courseContent.long_desc.length > 965 
                            ? courseContent.long_desc.substr(0, 965) + '....' 
                            : courseContent.long_desc}
                        </p>
                        {courseContent.long_desc.length > 965 && (
                          <p 
                            className="text-main font-bold text-md cursor-pointer mt-2"
                            onClick={() => setShowFullDesc(!showFullDesc)}
                          >
                            {showFullDesc ? "View less" : "View more"}
                          </p>
                        )}
                      </div>
                    ) : (
                      <div className='w-full h-[20vh] flex justify-center items-center'>
                        <PulseLoader color="#f36400" />
                      </div>
                    )}
                  </div>
                </div>
              )}
              
              {currentTab === 'FAQs' && (
                <div className='w-full p-4'>
                  <h1 className="text-xl font-bold text-black">Frequently Asked Questions</h1>
                  <p className="mt-2 text-black">FAQs content will appear here.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <SideNav
          videoData={videoData}
          videoUrl={videoUrl}
          setVideoUrl={handleSetVideoUrl}
          setOpen={setOpen}
          open={open}
        />
      </div>
    </div>
  );
};

export default Watch;