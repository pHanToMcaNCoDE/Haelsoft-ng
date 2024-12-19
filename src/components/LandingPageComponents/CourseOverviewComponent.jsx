'use client'

import React, { useEffect, useRef, useState } from 'react'
import { 
    ClockIcon, 
    AcademicCapIcon, 
    ComputerDesktopIcon,
    WrenchIcon, 
    UserIcon 
  } from "@heroicons/react/24/outline";
  import ReactPlayer from "react-player";

  import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power3 } from "gsap";
import { IoMdPlay } from 'react-icons/io';
import VideoComponent from './VideoComponent';

  gsap.registerPlugin(ScrollTrigger);


const CourseOverviewComponent = () => {
    // e1884a
    // 6f492e
    // 644530



    useEffect(() => {
        gsap.to(".c", {
          opacity: 1,
          ease: Power3.easeOut,
          scrollTrigger: {
            trigger: '.c',
            start: "top",
            toggleActions: "play none none none",
          },
        });
    
        gsap.to(".car", {
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: '.car',
            start: "top center",
            toggleActions: "play none none none",
          },
          ease: Power3.easeOut,
        });
    
        // Animation for ReactPlayer on scroll
        gsap.to(playerRef.current, {
          width: "100%", // Full width
          duration: 1.5, // Animation duration
          ease: Power3.easeOut,
          scrollTrigger: {
            trigger: '.c', // Trigger based on the section scroll
            start: "top center", // Start the animation when top of the section hits the center of the viewport
            toggleActions: "play none none none",
            scrub: true, // Smooth scrolling animation
          },
        });
    
        gsap.to(playerRef.current.wrapper, {
          width: "100%",
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".c",
            start: "top 70%", 
            end: "top 20%",
            scrub: true,
          },
        });
    
        gsap.to(overlayRef.current, {
          width: "100%",
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".c",
            start: "top 70%", 
            end: "top 20%",
            scrub: true,
          },
        });
      }, []);

    const playerRef = useRef();
    const overlayRef = useRef();
    const [isPlaying, setIsPlaying] = useState(false);
  return (
    <section className='c bg-[#644530] w-full relative min-h-screen xl:h-auto'>

        {/* <div className="bg-white rounded-lg max-w-[90%] md:max-w-[1040px] mx-auto py-6 px-4 absolute inset-x-0 top-[-5%] md:top-[-8%] z-20 shadow-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 text-center bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2740%27 height=%2740%27 viewBox=%270 0 40 40%27%3E%3Crect width=%2740%27 height=%2740%27 fill=%27none%27 stroke=%23e5e7eb%27 stroke-width=%271%27/%3E%3C/svg%3E')] bg-no-repeat bg-cover mx-6">
          <div className="flex flex-col items-center">
            <ClockIcon className="w-8 h-8 text-orange-500 mb-2" />
            <h3 className="text-orange-500 font-bold text-sm">Duration</h3>
            <p className="text-gray-600 text-sm">12-16 weeks</p>
          </div>
          <div className="flex flex-col items-center">
            <AcademicCapIcon className="w-8 h-8 text-orange-500 mb-2" />
            <h3 className="text-orange-500 font-bold text-sm">Certification</h3>
            <p className="text-gray-600 text-sm">Industry-recognized</p>
          </div>
          <div className="flex flex-col items-center">
            <ComputerDesktopIcon className="w-8 h-8 text-orange-500 mb-2" />
            <h3 className="text-orange-500 font-bold text-sm">Mode</h3>
            <p className="text-gray-600 text-sm">Online</p>
          </div>
          <div className="flex flex-col items-center">
            <WrenchIcon className="w-8 h-8 text-orange-500 mb-2" />
            <h3 className="text-orange-500 font-bold text-sm">Tools</h3>
            <p className="text-gray-600 text-sm">Kali, Splunk, & more</p>
          </div>
          <div className="flex flex-col items-center">
            <UserIcon className="w-8 h-8 text-orange-500 mb-2" />
            <h3 className="text-orange-500 font-bold text-sm">Mentorship</h3>
            <p className="text-gray-600 text-sm">1-on-1 guidance</p>
          </div>
        </div> */}

        <div className="pt-[200px] z-[30] relative flex flex-col gap-[60px]">
        <div className="container flex justify-center items-center mx-auto min-w-full relative">
          <ReactPlayer
            ref={playerRef}
            url="https://www.youtube.com/watch?v=VkxVCMeY53M"
            playing={!isPlaying}
            muted
            loop
            className="video-preview relative z-[5px]"
            width="70%"
            height='830px'
            config={{
              youtube: {
                playerVars: {
                  controls: 0,
                  modestbranding: 1,
                  disablekb: 1,
                  rel: 0
                }
              }
            }}
          />
          {!isPlaying && (
            <div className="absolute translate-x-[0%] translate-y-[-40%] z-10 play-button flex flex-col justify-center items-center gap-y-[70px]">
              <h1 className="text-[1.5rem] lg:text-[4.25rem] font-medium text-white">Alumni Stories</h1>
              <button 
                className="flex justify-center items-center gap-x-3 py-[16px] w-[131px] h-[52px] rounded-full bg-white" 
                onClick={() => setIsPlaying(true)}
              >
                <IoMdPlay className="text-black text-[1.3rem]" />
                <p className="text-black text-[1.125rem] font-semibold">watch</p>
              </button>
            </div>
          )}

          {
            isPlaying && (
                <section onClick={() => setIsPlaying(false)} className='w-full h-screen bg-black/70 flex justify-center items-center fixed top-0 left-0 z-30'>
                    <div className='h-full w-[90%] flex justify-center items-center p-[24px]'>
                        <ReactPlayer
                            // ref={playerRef}
                            url="https://www.youtube.com/watch?v=VkxVCMeY53M"
                            className="rounded-[24px] video-preview relative z-[5px]"
                            width="90%"
                            height='700px'
                            playing={true}
                            controls
                            // config={{
                            //   youtube: {
                            //     playerVars: {
                            //       controls: 0,
                            //       modestbranding: 1,
                            //       disablekb: 1,
                            //       rel: 0
                            //     }
                            //   }
                            // }}
                        />
                    </div>
                </section>
            )
          }

          <div ref={overlayRef} className="h-full w-[80%] bg-[#000]/30 absolute top-0 z-[8px]"></div>
        </div>
      </div>
    </section>
  )
}

export default CourseOverviewComponent