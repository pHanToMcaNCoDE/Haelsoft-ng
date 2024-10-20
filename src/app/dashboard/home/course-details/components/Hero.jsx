"use client";
import React, { useEffect, useState } from "react";
import play from "../../../../../../public/assets/play.svg";
import playicon from "../../../../../../public/assets/playicon.svg";
import Image from "next/image";
import { GrCheckmark } from "react-icons/gr";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../../../features/cart/cartSlice";
import CartPopup from "../../(HomeComponents)/CartPopup";
import secureLocalStorage from "react-secure-storage";
import { Bounce, toast } from "react-toastify";
import axios from "axios";
import ReactPlayer from "react-player";
import { PulseLoader } from "react-spinners";
import { usePathname, useSearchParams } from "next/navigation";
import { addCourse } from "@/features/courses/courseSlice";

const Hero = ({ courses }) => {
  const pathname = usePathname();
  // const id = decodeURIComponent(pathname.split('id').pop());
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [isVideo, setIsVideo] = useState(false);
  const [tabClicked, setTabClicked] = useState("About");
  const [showCartPopup, setShowCartPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [courseDetails, setcourseDetails] = useState(false);

  const dispatch = useDispatch();

  console.log("courses", id);

  const handleAddToCart = () => {
    if (dispatch(addToCart(courses))) {
      setShowCartPopup(true);
    } else {
      toast.error("Something went wrong!", {
        transition: Bounce,
      });
    }
  };
  const token = secureLocalStorage.getItem("token");
  const handleTransaction = () => {
    setLoading(true);
    axios
      .post(
        `https://edtech-backend-q2ud.onrender.com/enrollment/api/transactions/`,
        {
          amount: courses.price,
          courses: [courses.course_id],
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        const transURL = res.data.data.payment_url;
        if (typeof window !== "undefined") {
          window.location.href = transURL;
        }
      })
      .catch((err) => console.log("Transaction Error", err))
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    axios
      .get(`https://edtech-backend-q2ud.onrender.com/course/api/course/${id}/`)
      .then((res) => {
        console.log("res", res.data.data);
        setLoading(false);
        setcourseDetails(res.data.data);
        dispatch(addCourse(res.data.data))
      })
      .catch((err) => {
        console.log("Categories Error", err);
        setLoading(false);
      });
  }, []);

  const [pausePlay, setpausePlay] = useState(false);

  return (
    <div className="relative z-10">
      <div className="w-full bg-main py-16 px-3 xl:px-0">
        <div className="max-w-[1240px] mx-auto flex flex-col items-center md:items-start md:flex-row gap-x-12 relative xl:max-h-[630px]">
          <div className="w-full flex flex-col xl:flex-row justify-start items-start gap-6 mt-10">
            <Link href={`/dashboard/home`}>
              <HiOutlineArrowLongLeft size={35} className="text-white" />
            </Link>
            {/* <p className="text-white font-semibold text-[1.2rem] md:text-[1.8rem] lg:text-[3.4rem]">
              Haelsoft
            </p> */}
            <div className="flex flex-col gap-3">
              <p className="text-sm font-medium text-white">
                PROFESSIONAL CERTIFICATE
              </p>
              <h1 className="text-white text mt-2 font-bold text-[33px]">
                Python
              </h1>
              <p className="text-[1rem] leading-8 font-medium text-white w-full">
                {courses?.description}
              </p>

              <Link
                href={`/watch?id=${id}`}
                className="border border-white text-white rounded-lg px-8 py-4 font-bold w-full md:w-[180px] mt-6"
              >
                Go To Course
              </Link>
              <p className="text-white">1,000 already enrolled</p>
            </div>
            {/* <div className="leading-[46px] mt-4 text-start">
              {courses?.course_overview?.substring(0, 295) ?? ""}
            </div> */}
          </div>
          <div className="w-full">
            <div className="md:w-[519px] h-[1074px] mx-auto bg-white mt-10 pb-10 shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]">
              <div className="relative w-full cursor-pointer">
                <ReactPlayer
                  url={
                    `https://res.cloudinary.com/dmpqdaupc/` +
                    courseDetails.video_url
                  }
                  width={"100%"}
                  height={"448px"}
                  className="bg-black"
                  playing={pausePlay}
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
                    <p className="text-xl font-semibold">Preview This Course</p>
                  </div>
                )}
              </div>
              <div className="w-full px-4">
                <div className="px-6 mt-8">
                  <p className="text-[32px]">
                    {/* N {courses.price} */}₦{" "}
                    {courseDetails?.price?.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                  <div className="px-8 space-y-4 mt-4">
                    <button
                      className="py-4 rounded-lg w-full text-white bg-main"
                      onClick={handleAddToCart}
                    >
                      Add To Cart
                    </button>
                    {loading ? (
                      <div className=" flex items-center justify-center">
                        {" "}
                        <PulseLoader color="#f36400" />
                      </div>
                    ) : (
                      <button
                        onClick={handleTransaction}
                        className="py-4 rounded-lg w-full border border-main text-main"
                      >
                        Buy Now
                      </button>
                    )}
                  </div>
                  <p className="text-lg mt-8">This courses includes</p>
                </div>
                <div className="mt-8 w-full space-y-10 flex-1 text-[#655D59]">
                  {Array.isArray(courses.includes) &&
                  courses.includes.length > 0 ? (
                    courses.includes.map((include, index) => (
                      <div key={index} className="flex items-center gap-x-4">
                        <Image src={include.img} alt="Include Icon" />
                        <p>{include.text}</p>
                      </div>
                    ))
                  ) : (
                    <p>No includes available for this course.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-16 px-3 xl:px-0">
        <div className="max-w-[1240px] mx-auto flex flex-col gap-x-12 relative max-h-[600px]">
          <div className="w-full md:h-[59px] gap-y-[10px] gap-x-[10px] md:gap-[30px] flex flex-wrap justify-start items-center md:py-0 py-3 relative">
            {[
              "About",
              "Modules",
              "Testimonials",
              "Reviews",
              "Recommendations",
            ].map((tab) => (
              <div
                key={tab}
                onClick={() => setTabClicked(tab)}
                className={`${
                  tabClicked === tab
                    ? "bg-[#F36400] text-white font-semibold"
                    : "bg-transparent text-[#655D59] font-normal"
                } py-2 px-[10px] rounded-[4px] text-[.875rem] leading-[43px] cursor-pointer h-[59px] flex justify-center items-center`}
              >
                {tab}
              </div>
            ))}
          </div>
          <div className="mt-4 w-full md:w-[640px] h-[1.5px] rounded-full bg-[#F36400]"></div>

          <div className="py-10">
            <p className="text-[#FF8C53] font-medium text-base leading-4 tracking-[.5px]">
              What you&apos;ll learn
            </p>
            <div className="md:w-[578px] flex flex-col items-start justify-start md:h-[280px] py-6 gap-5 px-2">
              {Array.isArray(courses.benefits) &&
              courses.benefits.length > 0 ? (
                courses.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 mt-4">
                    <GrCheckmark className="text-[#FF8C53]" />
                    <p className="text-[#655D59] font-medium text-lg">
                      {benefit.title}
                    </p>
                  </div>
                ))
              ) : (
                <p>No benefits available for this course.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* {showCartPopup && <CartPopup onClose={setShowCartPopup}/>} */}
    </div>
  );
};

export default Hero;
