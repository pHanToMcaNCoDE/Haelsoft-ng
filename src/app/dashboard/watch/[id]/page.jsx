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
import { BiMenuAltLeft } from "react-icons/bi";
import Link from "next/link";

const Watch = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [open, setOpen] = useState(false);
  const [sideNavClicked, setSideNavClicked] = useState(false);
  const [error, setError] = useState("");
  const [videoData, setVideoData] = useState([]);
  const [courseContent, setCourseContent] = useState({});
  const [currentTab, setCurrentTab] = useState("Overview");
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [nextLesson, setNextLesson] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [instructorData, setInstructorData] = useState({});
  const [currentLessonIndex, setCurrentLessonIndex] = useState({ moduleIndex: 0, lessonIndex: 0 });
  
  // New state for progress tracking
  const [completedLessons, setCompletedLessons] = useState(new Set());
  const [courseProgress, setCourseProgress] = useState(0);

  const { token } = useSelector((state) => state.userDetails);
  const { id } = useParams();
  const dispatch = useDispatch();

  // Calculate total lessons
  const getTotalLessons = () => {
    return videoData.reduce((total, module) => {
      return total + (module.lessons ? module.lessons.length : 0);
    }, 0);
  };

  // Update progress when completed lessons change
  useEffect(() => {
    const totalLessons = getTotalLessons();
    if (totalLessons > 0) {
      const progress = (completedLessons.size / totalLessons) * 100;
      setCourseProgress(Math.round(progress));
    }
  }, [completedLessons, videoData]);

  // Load completed lessons from localStorage on component mount
  useEffect(() => {
    if (id) {
      const savedProgress = localStorage.getItem(`course_progress_${id}`);
      if (savedProgress) {
        const parsed = JSON.parse(savedProgress);
        setCompletedLessons(new Set(parsed.completedLessons || []));
      }
    }
  }, [id]);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    if (id && completedLessons.size > 0) {
      const progressData = {
        completedLessons: Array.from(completedLessons),
        lastUpdated: new Date().toISOString(),
        totalLessons: getTotalLessons()
      };
      localStorage.setItem(`course_progress_${id}`, JSON.stringify(progressData));
    }
  }, [completedLessons, id]);

  // Mark lesson as completed
  const markLessonAsCompleted = (lessonId) => {
    setCompletedLessons(prev => {
      const newSet = new Set(prev);
      newSet.add(lessonId);
      return newSet;
    });
  };

  // Toggle lesson completion status
  const toggleLessonCompletion = (lessonId) => {
    setCompletedLessons(prev => {
      const newSet = new Set(prev);
      if (newSet.has(lessonId)) {
        newSet.delete(lessonId);
      } else {
        newSet.add(lessonId);
      }
      return newSet;
    });
  };

  useEffect(() => {
    const fetchMyCourseDetails = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}learning/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json'
          }
        });
  
        console.log('My courses details', response.data);
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
  
        try {
          const instructorResponse = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}instructors/single/${response.data?.data?.my_course.instructor_uid}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          console.log('Instructors', instructorResponse.data.data)
          const data = instructorResponse.data.data

          setInstructorData(data)
          
        } catch (instructorError) {
          console.log("Instructor fetch error", instructorError);
        }
  
        setIsLoading(false);
        
      } catch (error) {
        console.log('My courses details errors', error);
        setError("Failed to load course details.");
        setIsLoading(false);
      }
    };
  
    if (token) fetchMyCourseDetails();
  }, [token, id]);
  
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
    

    if (currentLesson) {
      markLessonAsCompleted(currentLesson.id);
    }
    
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
      <div className="flex w-full justify-between">
        <div className="w-full flex flex-col justify-start items-start z-20">
          <div className="flex lg:hidden w-full justify-end py-2 px-5">
            <BiMenuAltLeft onClick={() => setSideNavClicked(prev => !prev)} className='text-main text-2xl cursor-pointer'/>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full px-4 py-2 bg-gray-50 border-b">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Course Progress</span>
              <span className="text-sm font-bold text-main">{courseProgress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-orange-400 to-orange-600 h-2 rounded-full transition-all duration-500" 
                style={{ width: `${courseProgress}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>{completedLessons.size} of {getTotalLessons()} lessons completed</span>
              <span>{getTotalLessons() - completedLessons.size} remaining</span>
            </div>
          </div>

          <div className="h-auto flex flex-col w-full">
            <VideoPlayer
              videoUrl={videoUrl}
              setOpen={setOpen}
              open={open}
              currentLesson={currentLesson}
              nextLesson={nextLesson}
              onPlayNext={handlePlayNext}
              onLessonComplete={() => currentLesson && markLessonAsCompleted(currentLesson.id)}
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

                  <div className="w-full flex py-[50px] flex-col justify-start items-start gap-4">
                    <div className="flex justify-start items-start gap-3">
                      <img width={70} height={70} className="object-cover rounded-full w-[50px] h-[50px]" src={`${process.env.NEXT_PUBLIC_STORAGE_URL}${instructorData.image}`} alt={instructorData.name} />
                      <div className="flex flex-col justify-start items-start">
                        <Link href={`/dashboard/about-instructor/${instructorData.uid}`} className="text-xl font-semibold text-black duration-200 hover:underline hover:text-main">{instructorData.name}</Link>
                        <p className="text-md text-grayTwo font-medium">{instructorData.designation}</p>
                      </div>
                    </div>
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
          sideNavClicked={sideNavClicked}
          videoData={videoData}
          videoUrl={videoUrl}
          setVideoUrl={handleSetVideoUrl}
          setOpen={setOpen}
          open={open}
          completedLessons={completedLessons}
          toggleLessonCompletion={toggleLessonCompletion}
          currentLesson={currentLesson}
        />
      </div>
    </div>
  );
};

export default Watch;