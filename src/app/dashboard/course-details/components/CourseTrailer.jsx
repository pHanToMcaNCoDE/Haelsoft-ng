"use client"

import React, { useRef, useState, useEffect } from "react";                                                                                                                                   
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power3 } from "gsap";
import ReactPlayer from "react-player";
import { IoMdPlay } from "react-icons/io";


gsap.registerPlugin(ScrollTrigger);

const CourseTrailer = ({courses}) => {
  const playerRef = useRef();
  const overlayRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    gsap.to(".alum", {
      opacity: 1,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: '.alum',
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

    
    gsap.to(playerRef.current, {
      width: "100%",
      duration: 1.5,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: '.alum',
        start: "top center",
        toggleActions: "play none none none",
        scrub: true,
      },
    });

    gsap.to(playerRef.current.wrapper, {
      width: "100%",
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".alum",
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
        trigger: ".alum",
        start: "top 70%", 
        end: "top 20%",
        scrub: true,
      },
    });
  }, []);


  return (
    <section className="relative alum z-[20]">
      <div className="pb-[10px] z-[30] relative flex flex-col gap-[60px]">
        <div className="container flex justify-center items-center mx-auto min-w-full relative">
          <ReactPlayer
            ref={playerRef}
            url={courses.overview_link}
            playing={!isPlaying}
            muted
            loop
            className="video-preview relative z-[5px]"
            width="80%"
            height='630px'
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
              <h1 className="text-[1.5rem] lg:text-[4.25rem] font-medium text-white">Course Trailer</h1>
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
              <div onClick={() => setIsPlaying(false)} className='w-full h-screen bg-black/70 flex justify-center items-center fixed top-0 left-0 z-30'>
                <div className='h-full w-[90%] flex justify-center items-center p-[24px]'>
                  <ReactPlayer
                    // ref={playerRef}
                    url={courses.overview_link}
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
              </div>
          )}
          <div ref={overlayRef} className="h-full w-[80%] bg-[#000]/30 absolute top-0 z-[8px]"></div>
        </div>
      </div>
    </section>
  );
};

export default CourseTrailer;
