"use client"

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power3 } from "gsap";
import ReactPlayer from "react-player";
import obj from "../../../../public/assets/EdTech Platform (3).svg";
import img from "../../../asset/img.svg";
import Details from "./Details";
import ResponsiveDetails from "./ResponsiveDetails";
import './review.css';
import { IoMdPlay } from "react-icons/io";
import VideoComponent from "../VideoComponent";
import afro from '../../../../public/assets/clients/Afro a.png';
import photiz from '../../../../public/assets/clients/Afro c.png';
import gd from '../../../../public/assets/clients/Logo 2.png';
import pc from '../../../../public/assets/clients/Logo 4.png';
import peppa from '../../../../public/assets/clients/png peppa 1.png';
import rh from '../../../../public/assets/clients/Rhebuch-Logo.png';
import iso from '../../../../public/assets/clients/Untitled-1.png';
import znz from '../../../../public/assets/clients/Zaph and Zoe B.png';
import lcp from '../../../../public/assets/clients/Zaph and Zoe.png'

gsap.registerPlugin(ScrollTrigger);

const Review = () => {
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

    // Animation for ReactPlayer on scroll
    gsap.to(playerRef.current, {
      width: "100%", // Full width
      duration: 1.5, // Animation duration
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: '.alum', // Trigger based on the section scroll
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
    <section className="relative alum z-[20] bg-[#f36402] min-h-screen 2xl:min-h-screen">
      <div className='absolute z-[30] top-[-5%] w-[90%] left-[25%] lg:w-[960px] h-[162px] flex justify-center gap-[60px] items-center bg-white shadow-md rounded py-[48px] px-[12px]'>
        <Image width={150} height={100} className="object-ccover" src={afro} alt="Afro"></Image>
        <Image width={150} height={100} className="object-ccover" src={photiz} alt="Photiz"></Image>
        <Image width={150} height={100} className="object-ccover" src={gd} alt="Swun"></Image>
      </div>
      <div className="pt-[200px] pb-[70px] z-[30] relative flex flex-col gap-[60px]">
        <div className="container flex justify-center items-center mx-auto min-w-full relative">
          <ReactPlayer
            ref={playerRef}
            url="https://youtu.be/qRLnFt7A7Qc"
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
              <h1 className="text-[4.25rem] font-medium text-white">Alumni Stories</h1>
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
              <VideoComponent setIsPlaying={setIsPlaying} />
            )
          }

          <div ref={overlayRef} className="h-full w-[80%] bg-[#000]/30 absolute top-0 z-[8px]"></div>
        </div>
        <div className="car mt-[100px] mb-[1em] duration-300 hidden lg:flex flex-col gap-[55px]">
          <h1 className='text-white w-full flex flex-col justify-center items-center text-[2.125rem] font-bold leading-7'>More Alumni Stories</h1>
          <Details />
        </div>
        
        <div className="car mt-20 mb-[1em] duration-300 flex flex-col lg:hidden gap-[55px]">
          <h1 className='text-white w-full flex flex-col justify-center items-center text-[2.125rem] font-bold leading-7'>More Alumni Stories</h1>
          <ResponsiveDetails />
        </div>
      </div>
      <Image
        src={obj}
        className="z-[10] absolute top-0 w-screen h-full object-cover"
        alt="Object"
      />
    </section>
  );
};

export default Review;
