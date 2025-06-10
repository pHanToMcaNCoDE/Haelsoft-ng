"use client";
import React, { useEffect, useState } from "react";
// import play from "../../../../../../public/assets/play.svg";
// import playicon from "../../../../../../public/assets/playicon.svg";
import Image from "next/image";
import { GrCheckmark } from "react-icons/gr";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "../../../../../features/cart/cartSlice";
// import CartPopup from "../../(HomeComponents)/CartPopup";
import secureLocalStorage from "react-secure-storage";
import { Bounce, toast } from "react-toastify";
import axios from "axios";
// import ReactPlayer from "react-player";
// import { PulseLoader } from "react-spinners";
import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";
// import { addCourse } from "@/features/courses/courseSlice";
import Loader from "@/components/Loader";

const Hero = ({ courses }) => {
  const pathname = usePathname();
  // const id = decodeURIComponent(pathname.split('id').pop());
  // const searchParams = useSearchParams();
  // const id = searchParams.get("id");
  const [isVideo, setIsVideo] = useState(false);
  const [tabClicked, setTabClicked] = useState("About");
  const [showCartPopup, setShowCartPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch();

  const router = useRouter()

  const { id } = useParams();


  // const handleAddToCart = () => {
  //   if (dispatch(addToCart(courses))) {
  //     setShowCartPopup(true);
  //   } else {
  //     toast.error("Something went wrong!", {
  //       transition: Bounce,
  //     });
  //   }
  // };

  const { token } = useSelector((state) => state.userDetails);

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
      .catch((err) => err)
      .finally(() => {
        setLoading(false);
      });
  };

  // const fetchCartItems = async () => {
  //   try {
  //     const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}cart`, {
  //       headers: {
  //         Accept: 'application/json',
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     return response.data.data;
  //   } catch (error) {
  //     toast.error(error.response.data.message)
  //     return [];
  //   }
  // };


  const handleAddToCartRequest = async () => {
    setIsLoading(true);

    try {
      // const cartItems = await fetchCartItems();
      // const alreadyInCart = cartItems.some(item => item.course.id === courses.course_id);

      // if (alreadyInCart) {
      //   toast.info("Course already in cart");
      //   return;
      // }

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}cart/add-to-cart/${id}`,
        {},
        {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(response.data.message);
      
      // if (typeof window !== "undefined") {
      //   window.location.href = '/dashboard/shopping-cart';
      // }

    } catch (error) {
      toast.error(error.response.data.message)
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <section className="relative z-10">
      {
        isLoading && (
          <Loader/>
        )
      }
      <div className="w-full pt-16 pb-10 px-3 xl:px-0 relative">
        <video autoPlay muted loop playsInline className="hero-video z-10">
          <source src='/assets/teacher(1).mp4' type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className='absolute bg-[#D98E47]/70 top-0 left-0 w-full h-full'></div>
        <div className="max-w-[1300px] mx-auto flex flex-col items-center md:items-start lg:flex-row gap-x-12 relative z-30 pt-[70px]">
          <div className="w-full flex flex-col justify-start items-start gap-4">
            {/* <button onClick={() => router.back()} className="flex justify-center font-medium text-lg text-white items-center gap-2">
              <HiOutlineArrowLongLeft size={35} className="text-white" /> Go back
            </button> */}
            {/* <p className="text-white font-semibold text-[1.2rem] md:text-[1.8rem] lg:text-[3.4rem]">
              Haelsoft
            </p> */}
            <div className="flex flex-col gap-4">
              <p className="text-sm font-medium text-white">
                PROFESSIONAL CERTIFICATE
              </p>
              <h1 className="text-white mt-2 font-bold text-[2rem] lg:text-5xl leading-10">
                {courses?.title}
              </h1>
              <p className="text-[1rem] leading-8 font-medium text-white w-full">
                {courses?.long_desc.substr(0, 1000)}
              </p>

              {/* <p className="text-white">1,000 already enrolled</p> */}
            </div>
            {/* <div className="leading-[46px] mt-4 text-start">
              {courses?.course_overview?.substring(0, 295) ?? ""}
            </div> */}
          </div>
          <div className="w-full">
            <div className="md:w-[559px] md:h-[400px] rounded-[30px] mx-auto bg-white mt-10 lg:mt-[100px] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] flex flex-col justify-between items-start pt-4">
              
              <div className="w-full px-7">
                <div className="mt-4 flex flex-col gap-3">
                  <p className="text-[2rem] lg:text-[2.5rem] font-semibold">
                    ₦ {Number(courses?.price).toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) || "N/A"}
                  </p>
                  <div className='w-full h-[1px] mx-1 bg-neutral-200'></div>
                  {/* <div className="mt-4">
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
                  </div> */}
                  <p className="text-lg mt-8">What You'll Learn:</p>
                </div>
                <ul className="my-5 w-full gap-8 flex flex-col justify-center items-start text-grayTwo">
                  <li className="text-black font-semibold ml-4 list-disc">{courses.what_you_learn}</li>
                </ul>
              </div>
                <button
                  className="py-8 flex justify-center items-center h-[72px] rounded-bl-[30px] rounded-br-[30px] w-full text-white font-semibold bg-main"
                  onClick={handleAddToCartRequest}
                >
                  Add To Cart
                </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-16 px-3 xl:px-0">
        <div className="max-w-[1300px] mx-auto flex flex-col gap-x-12 relative max-h-[600px]">
          {/* <div className="w-full md:h-[59px] gap-y-[10px] gap-x-[10px] md:gap-[30px] flex flex-wrap justify-start items-center md:py-0 py-3 relative">
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
                    : "bg-transparent text-grayTwo font-normal"
                } py-2 px-[10px] rounded-[4px] text-[.875rem] leading-[43px] cursor-pointer h-[59px] flex justify-center items-center`}
              >
                {tab}
              </div>
            ))}
          </div> */}
          {/* <div className="mt-4 w-full md:w-[640px] h-[1.5px] rounded-full bg-[#F36400]"></div> */}

          {/* <div className="py-10 flex flex-col justify-center items-start gap-8"> */}
            {/* <div className="flex flex-col justify-center items-start gap-2">
              <h1 className="text-3xl text-black font-bold">About this course</h1>
            </div> */}
            {/* {
              courses.category?.desc && (() => {
                const sentences = courses?.category?.desc.split(". ");
                const firstParagraph = sentences.slice(0, 4).join(". ") + ".";
                const secondParagraph = sentences.slice(5).join(". ");
                return (
                  <div className="flex flex-col justify-center items-start gap-6">
                    <p className="text-[1rem] text-grayTwo font-normal leading-[30px] tracking-[.5px] w-full lg:w-[654px]">
                      {firstParagraph}
                    </p>
                    {secondParagraph && (
                      <p className="text-[1rem] text-grayTwo font-normal leading-[30px] tracking-[.5px] w-full lg:w-[654px]">
                        {secondParagraph}
                      </p>
                    )}
                  </div>
                );
              })
            } */}


            


            {/* <div className="md:w-[578px] flex flex-col items-start justify-start md:h-[280px] py-6 gap-5 px-2">
              {Array.isArray(courses.benefits) && courses.benefits.length > 0 ? (
                courses.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 mt-4">
                    <GrCheckmark className="text-[#FF8C53]" />
                    <p className="text-grayTwo font-medium text-lg">
                      {benefit.title}
                    </p>
                  </div>
                ))
              ) : (
                <p>No benefits available for this course.</p>
              )}
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  
  );
};

export default Hero;
