"use client";

import React, { useEffect, useState, Suspense } from "react";
import TopBarNav from "../(components)/TopBarNav";
import SideNav from "../(components)/SideNav";
import "next-cloudinary/dist/cld-video-player.css";
import VideoPlayer from "../(components)/VideoPlayer";
import axios from "axios";
import { useParams, useSearchParams } from "next/navigation";
import secureLocalStorage from "react-secure-storage";
import { useSelector } from "react-redux";
import Loading from "../../(dashboardcomponents)/loading";

const Watch = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [videoData, setVideoData] = useState([]);
  const [courseContentData, setContentData] = useState([]);
  const [currentTab, setCurrentTab] = useState("Overview");

  const { token } = useSelector((state) => state.userDetails);

  const { id } = useParams();


  useEffect(() => {
    const fetchMyCourseDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}learning/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json'
          }
        });

        console.log('My courses details', response.data);
        const modules = response.data?.data?.my_course.modules;
        setVideoData(modules);
        
        // Automatically set the first video to play
        if (modules && modules.length > 0 && modules[0].lessons && modules[0].lessons.length > 0) {
          setVideoUrl(modules[0].lessons[0].link);
        }
      } catch (error) {
        console.log('My courses details errors', error);
        setError("Failed to load course details.");
      } finally {
        setLoading(false);
      }
    };

    if (token) fetchMyCourseDetails();
  }, [token, id]);

  console.log('Video URL', videoUrl)

  return (
    <div className="w-full">
      <TopBarNav />
      <div className="h-screen flex w-full justify-between">
{/* 
        <Suspense fallback={<Loading />}> */}
          
        <div className="w-full min-h-full flex flex-col justify-start items-start">
          <div className="h-auto flex flex-col w-full">
            <VideoPlayer
              videoUrl={videoUrl}
              courseContentData={courseContentData}
              setOpen={setOpen}
              open={open}
            />
          </div>

          <div className="w-full p-3 min-h-screen">
            <div className="w-full border-b-2 h-full p-2 flex justify-start items-start gap-6">
              {
                ['Overview', 'FAQs'].map((tab) => (
                  <div onClick={() => currentTab(tab)} className="h-full w-auto flex flex-col justify-between items-center border-b border-zinc-400">
                    <p className="text-md font-semibold text-black">{tab}</p>
                    {
                      currentTab === tab && (<div className="w-[80px] h-[2px] rounded-full bg-neutral-400"></div>)
                    }
                  </div>
                ))
              }
            </div>

            <div className="w-full flex flex-col justify-start items-start gap-4">
              {
                currentTab === 'Overview' && (
                  <div className='w-full'>
                    
                  </div>
                )
              }
            </div>
          </div>
        </div>
          


        <SideNav
          videoData={videoData}
          videoUrl={videoUrl}
          setVideoUrl={setVideoUrl}
          setOpen={setOpen}
          open={open}
        />
      </div>
    </div>
  );
};

// const SearchParamsWrapper = ({ setLoading, setVideoData, videoData, setContentData, token }) => {
//   const SearchParamsSuspense = () => {
//     const params = useSearchParams();
//     const id = params.get("id");

//     useEffect(() => {
//       // console.log("Search Params Video ID:", id);
//       // console.log("Stored Token:", token);
      
//       if (!id) {
//         // console.warn("No ID found in URL params.");
//         return;
//       }
      
//       if (!token) {
//         // console.error("No authentication token found.");
//         return;
//       }

//       setLoading(true);

//       axios
//         .get(`https://edtech-backend-q2ud.onrender.com/course_details/api/courses/${id}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         })
//         .then((res) => {
//           // console.log("Full API Response:", res);
//           if (res.data?.data) {
//             setVideoData(res.data.data);
//             // setContentData(res.data.data);
//             // console.log("VideoData:", courseContentData);
//           } else {
//             console.warn("API returned no video data.");
//           }
//         })
//         .catch((err) => {
//           console.error("API Fetch Error:", err);
//         })
//         .finally(() => {
//           setLoading(false);
//         });
//     }, [id, token, setVideoData, setContentData]);

//     useEffect(() => {
//     }, [videoData]);

//     return null;
//   };

//   return (
//     <Suspense fallback={<Loading />}>
//       <SearchParamsSuspense />
//     </Suspense>
//   );
// };

export default Watch;