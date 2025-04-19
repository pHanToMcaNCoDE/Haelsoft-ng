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
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [videoData, setVideoData] = useState([]);
  const [courseContentData, setContentData] = useState([]);

  const token = secureLocalStorage.getItem("token");

  return (
    <div className="w-full">
      <TopBarNav />
      <div className="h-screen flex w-full">
        <SideNav
          videoData={videoData}
          // courseContentData={courseContentData}
          setVideoUrl={setVideoUrl}
          setOpen={setOpen}
          open={open}
        />

        <Suspense fallback={<Loading />}>
          <SearchParamsWrapper
            setLoading={setLoading}
            setVideoData={setVideoData}
            videoData={videoData}
            setContentData={setContentData}
            token={token}
          />
          <div>
            <VideoPlayer
              videoUrl={videoUrl}
              courseContentData={courseContentData}
              setOpen={setOpen}
              open={open}
            />
          </div>
          
        </Suspense>
      </div>
    </div>
  );
};

const SearchParamsWrapper = ({ setLoading, setVideoData, videoData, setContentData, token }) => {
  const SearchParamsSuspense = () => {
    const params = useSearchParams();
    const id = params.get("id");

    useEffect(() => {
      // console.log("Search Params Video ID:", id);
      // console.log("Stored Token:", token);
      
      if (!id) {
        // console.warn("No ID found in URL params.");
        return;
      }
      
      if (!token) {
        // console.error("No authentication token found.");
        return;
      }

      setLoading(true);

      axios
        .get(`https://edtech-backend-q2ud.onrender.com/course_details/api/courses/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          // console.log("Full API Response:", res);
          if (res.data?.data) {
            setVideoData(res.data.data);
            // setContentData(res.data.data);
            // console.log("VideoData:", courseContentData);
          } else {
            console.warn("API returned no video data.");
          }
        })
        .catch((err) => {
          console.error("API Fetch Error:", err);
        })
        .finally(() => {
          setLoading(false);
        });
    }, [id, token, setVideoData, setContentData]);

    useEffect(() => {
    }, [videoData]);

    return null;
  };

  return (
    <Suspense fallback={<Loading />}>
      <SearchParamsSuspense />
    </Suspense>
  );
};

export default Watch;

