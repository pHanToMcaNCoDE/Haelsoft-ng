"use client";

import React, { useEffect, useState, Suspense } from "react";
import TopBarNav from "./(components)/TopBarNav";
import SideNav from "./(components)/SideNav";
import "next-cloudinary/dist/cld-video-player.css";
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

  const token = secureLocalStorage.getItem("token");

  // Wrap the part where you use useSearchParams in Suspense
  return (
    <div className="w-full">
      <TopBarNav />
      <div className="h-screen flex w-full">
        <SideNav
          videoData={videoData}
          courseContentData={courseContentData}
          setVideoUrl={setVideoUrl}
          setopen={setopen}
          open={open}
        />

        <Suspense fallback={<Loading />}>
          <SearchParamsWrapper
            setLoading={setLoading}
            setVideoData={setVideoData}
            setContentData={setContentData}
            token={token}
          />
          <VideoPlayer
            videoUrl={videoUrl}
            courseContentData={courseContentData}
            setopen={setopen}
            open={open}
          />
        </Suspense>
      </div>
    </div>
  );
};

const SearchParamsWrapper = ({ setLoading, setVideoData, setContentData, token }) => {
  const params = useSearchParams();
  const id = params.get("id");

  useEffect(() => {
    if (id) {
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
          setVideoData(res.data.data);
          setContentData(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id, token]);

  return null;
};

export default Watch;
