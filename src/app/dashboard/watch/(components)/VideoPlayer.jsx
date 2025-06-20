"use client";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import draw from "../../../../asset/draw.svg";
import playicon from "../../../../../public/assets/playicon.svg";
import Image from "next/image";
import { useSelector } from "react-redux";

const VideoPlayer = ({ videoUrl, open, setOpen, currentLesson, nextLesson }) => {
  const { lesson } = useSelector((state) => state.courses);
  const [pausePlay, setPausePlay] = useState(false);
  const [ended, setEnded] = useState(false);

  // Auto-play first video when component mounts
  useEffect(() => {
    setEnded(false);
    
    if (videoUrl) {
      setPausePlay(true);
    }
  }, [videoUrl]);

  const handleDownload = async () => {
    const url = `https://res.cloudinary.com/dmpqdaupc/${lesson.pdf_file}`;
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch file");
      }

      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `${lesson?.title}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  const handleVideoEnd = () => {
    setEnded(true);
    setPausePlay(false);
  };

  return (
    <div className="col-span-12 md:col-span-9 h-[500px] gap-y-4 p-4 md:px-5 lg:p-0 flex-1 overflow-y-auto w-full">
      <>
        {/* <Image
          src={draw}
          className="mt-4 mb-4 md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
          alt="Draw"
        /> */}

        {!lesson.pdf_file && videoUrl && (
          <div className="relative w-full cursor-pointer">
            <ReactPlayer
              url={videoUrl}
              width={"100%"}
              height={"500px"}
              className="bg-black"
              playing={pausePlay}
              onClick={() => setPausePlay((prev) => !prev)}
              controls={pausePlay}
              onEnded={handleVideoEnd}
              config={{
                file: {
                  attributes: {
                    controlsList: "nodownload",
                    disablePictureInPicture: true,
                  },
                },
              }}
            />
            {!pausePlay && (
              <div
                onClick={() => setPausePlay((prev) => !prev)}
                className="flex flex-col gap-8 pt-10 absolute inset-0 m-auto text-white items-center justify-center"
              >
                {ended && nextLesson ? (
                  <>
                    <div className="flex flex-col items-center">
                      <Image
                        src={playicon}
                        className="object-contain"
                        alt="Play Icon"
                      />
                      <p className="text-xl font-semibold mt-2">Play Next Lesson</p>
                    </div>
                  </>
                ) : (
                  <Image
                    src={playicon}
                    className="object-contain"
                    alt="Play Icon"
                  />
                )}
                <p className="text-xl font-semibold">{currentLesson?.title || ""}</p>
              </div>
            )}
          </div>
        )}
        {!videoUrl && lesson.pdf_file && (
          <div className="flex flex-col justify-center items-center h-full">
            <p>Download the PDF below to access resources for this lesson</p>
            <button
              onClick={handleDownload}
              className="bg-main px-4 py-2 rounded-lg text-white mt-4"
            >
              Download PDF
            </button>
          </div>
        )}
        {!videoUrl && !lesson.pdf_file && (
          <div className="flex flex-col justify-center items-center h-[500px] w-full bg-black text-white">
            <p>No content available for this lesson</p>
          </div>
        )}
      </>
    </div>
  );
};

export default VideoPlayer;