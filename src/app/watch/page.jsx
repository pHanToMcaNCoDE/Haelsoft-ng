"use client";
import React, { useEffect, useState } from "react";
import TopBarNav from "./(components)/TopBarNav";
import SideNav from "./(components)/SideNav";
import "next-cloudinary/dist/cld-video-player.css";
import { Video } from "./video/Video";
import VideoPlayer from "./(components)/VideoPlayer";
import Loading from "../dashboard/(dashboardcomponents)/loading";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import secureLocalStorage from "react-secure-storage";
const Watch = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [open, setopen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [videoData, setVideoData] = useState([]);
  const [courseContentData, setContentData] = useState([]);

  const params = useSearchParams();
  const token = secureLocalStorage.getItem("token");
  console.log("tk", token);

  const id = params.get("id");

  useEffect(() => {
    axios
      .get(
        `https://edtech-backend-q2ud.onrender.com/course_details/api/courses/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log("Video", res.data.data);
        setVideoData(res.data.data);
        setContentData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="w-full">
        <TopBarNav />
        <div className="h-screen flex w-full ">
          <SideNav
            videoData={videoData}
            courseContentData={courseContentData}
            setVideoUrl={setVideoUrl}
            setopen={setopen}
            open={open}
          />
          <VideoPlayer
            videoUrl={videoUrl}
            courseContentData={courseContentData}
            setopen={setopen}
            open={open}
          />
        </div>
      </div>
    </div>
  );
};

export default Watch;
