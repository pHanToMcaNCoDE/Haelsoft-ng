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

gsap.registerPlugin(ScrollTrigger);

const Review = () => {
  const playerRef = useRef();
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
  }, []);

  return (
    <section className="alum z-[20] relative bg-[#f36402] min-h-screen xl:h-[210vh] 2xl:min-h-screen overflow-hidden">
      <div className="py-[70px] z-[30] relative px-5">
        <ReactPlayer
          url="https://youtu.be/qRLnFt7A7Qc"
          playing={isPlaying}
          controls
          className="h-[630px] max-w-[1200px] mx-auto mt-[2rem] react-player"
          height="630"
          width="80%"
          ref={playerRef}
        />
        {!isPlaying && (
          <div 
            className="absolute inset-0 flex justify-center items-center cursor-pointer" 
            onClick={() => setIsPlaying(true)}
          >
            <div className="bg-black bg-opacity-50 p-2 rounded-full">
              <span className="text-white text-lg">▶️ Play Video</span>
            </div>
          </div>
        )}
        <div className="car mt-20 mb-[1em] duration-300 hidden lg:flex flex-col">
          <h1 className='text-white w-full flex flex-col justify-center items-center text-[2.125rem] font-bold leading-7'>More Alumni Stories</h1>
          <Details />
        </div>
        <div className="car mt-20 mb-[1em] duration-300 flex flex-col lg:hidden">
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
