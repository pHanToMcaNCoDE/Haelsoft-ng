"use client";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import { MediaPlayer, MediaProvider, Poster, Track } from "@vidstack/react";
import { PlayIcon } from "@vidstack/react/icons";
import draw from "../../../asset/draw.svg";
import playicon from "../../../../public/assets/playicon.svg";
import Image from "next/image";
import { useSelector } from "react-redux";

const VideoPlayer = ({ videoUrl, open, setOpen }) => {
  const { lesson } = useSelector((state) => state.courses);
  console.log("Video Link", lesson);

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

  const [pausePlay, setpausePlay] = useState(false);
  return (
    <div className="col-span-12 md:col-span-9 h-screen gap-y-4 p-4 md:px-5 flex-1 overflow-y-auto w-full">
      <div>
        <Image
          src={draw}
          className="mt-4 mb-4 md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
          alt="Draw"
        />

        {!lesson.pdf_file && (
          <div className="relative w-full cursor-pointer">
            <ReactPlayer
              url={`https://res.cloudinary.com/dmpqdaupc/${videoUrl}`}
              width={"100%"}
              height={"448px"}
              className="bg-black"
              playing={pausePlay}
              onClick={() => setpausePlay((prev) => !prev)}
              controls={pausePlay}
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
                onClick={() => setpausePlay((prev) => !prev)}
                className="flex flex-col gap-8 pt-10 absolute inset-0 m-auto text-white items-center justify-center"
              >
                <Image
                  src={playicon}
                  className="object-contain"
                  alt="Play Icon"
                />
                <p className="text-xl font-semibold"></p>
              </div>
            )}
          </div>
        )}
        {!videoUrl && (
          <div className="flex flex-col justify-center items-center">
            <p>Download the PDF below to access resources for this lesson</p>
            <button
              onClick={handleDownload}
              className="bg-main px-4 py-2 rounded-lg text-white mt-4"
            >
              Download Pdf
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
