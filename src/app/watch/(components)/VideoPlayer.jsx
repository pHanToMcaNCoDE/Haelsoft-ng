"use client";
import React, { useState } from "react";
import ReactPlayer from "react-player";
// // Base styles for media player and provider (~400B).
import "@vidstack/react/player/styles.css";
import { MediaPlayer, MediaProvider, Poster, Track } from "@vidstack/react";
import { PlayIcon } from "@vidstack/react/icons";
import draw from "../../../asset/draw.svg";
import playicon from "../../../../public/assets/playicon.svg";
import Image from "next/image";
import { useSelector } from "react-redux";

const VideoPlayer = ({ videoUrl, open, setopen }) => {
  const { lesson } = useSelector((state) => state.courses);
  console.log("Video Link", lesson);

  const handleDownload = async () => {
    const url = `https://res.cloudinary.com/dmpqdaupc/${lesson.pdf_file}`;
    // Fetch the file from the URL

    try {
      // Fetch the file from the URL
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch file");
      }

      // Convert the response to a blob
      const blob = await response.blob();

      // Create a temporary URL for the blob
      const blobUrl = window.URL.createObjectURL(blob);

      // Create a temporary anchor element
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `${lesson?.title}.pdf`; // Set the default file name

      // Append link to the document body
      document.body.appendChild(link);

      // Programmatically click the link to trigger the download
      link.click();

      // Remove the link from the document
      document.body.removeChild(link);

      // Revoke the blob URL to free up memory
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  const [pausePlay, setpausePlay] = useState(false);
  return (
    <div
      className="col-span-12 md:col-span-9  h-screen gap-y-4 p-4 md:px-10 flex-1 overflow-y-auto w-full
    "
    >
      {/* {videoUrl} */}
      <div>
        <Image
          src={draw}
          className="mt-4 mb-4 md:hidden"
          onClick={() => {
            setopen(!open);
          }}
          alt="Draw"
        />

        {/* {!lesson.pdf_file&& (
          <ReactPlayer
            url={`https://res.cloudinary.com/dmpqdaupc/` +videoUrl}
            width={"100%"}
            height={"448px"}
            controls
            config={{
              file: {
                attributes: {
                  controlsList: "nodownload", // Prevents download option
                  disablePictureInPicture: true, // Disables PiP mode
                },
              },
            }}
          />
        )} */}

        {!lesson.pdf_file && (
          <div  className="relative w-full cursor-pointer">
            <ReactPlayer
              url={`https://res.cloudinary.com/dmpqdaupc/` + videoUrl}
              width={"100%"}
              height={"448px"}
              className="bg-black"
              playing={pausePlay}
              onClick={() => setpausePlay((prev) => !prev)}
              controls={pausePlay}
              config={{
                file: {
                  attributes: {
                    controlsList: "nodownload", // Prevents download option
                    disablePictureInPicture: true, // Disables PiP mode
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
          <div className="flex flex-col justify-center  items-center">
            <p className="">
              Donwload the PDF below to access resources for this lesson
            </p>
            <button
              // href={`https://res.cloudinary.com/dmpqdaupc/${selector.pdflink}`}
              // target="_blank"
              onClick={handleDownload}
              className="bg-main px-4 py-2 rounded-lg text-white mt-4 "
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
