'use client'

import Loader from "@/components/Loader";
import { Rating } from "@smastrom/react-rating";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { GrCart } from "react-icons/gr";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useSelector } from "react-redux";
import secureLocalStorage from "react-secure-storage";
import { toast } from "react-toastify";

const Page = () => {

  const { id } = useParams();
  const [categoryDetails, setCategoryDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const [rating, setRating] = useState(0)


  const { token } = useSelector((state) => state.userDetails);

  useEffect(() => {
    const fetchCategoryDetails = () => {
      setIsLoading(true);
      axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}courses/category/${id}`, {
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })

      .then((response) => {
        setCategoryDetails(response.data.data.data)

        console.log('Cat details', response.data.data)

      })

      .catch((error) => {
        console.log('Category Error: ', error)
      })

      .finally (() => setIsLoading(false))

    }

    if(token) fetchCategoryDetails()

  }, [token])


  const handleAddToCartRequest = async (courseId) => {
    if (!courseId) {
      toast.error("Course ID is required");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}cart/add-to-cart/${courseId}`,
        {},
        {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(response.data.message);
      
      // Uncomment if you want to redirect after adding to cart
      // if (typeof window !== "undefined") {
      //   window.location.href = '/dashboard/shopping-cart';
      // }

    } catch (error) {
      // Safer error handling to prevent undefined property access
      const errorMessage = error.response?.data?.message || "Failed to add course to cart";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <section className="w-full py-[100px] px-5 lg:px-[25px] flex flex-col justify-center items-center text-center gap-[30px] lg:gap-[5em]">
      {
        isLoading && (<Loader />)
      }
      <div className="w-full flex flex-col justify-center items-center gap-2 text-center">
        <h1 className="text-black text-xl lg:text-[2rem] font-bold">
          {categoryDetails.length > 0 && categoryDetails[0]?.category?.name} Courses
        </h1>
        <p className="text-black text-xl font-semibold">Courses to get you started</p>
      </div>


      <div className="w-full flex flex-col justify-center items-center text-center gap-10">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center place-items-center">
          {categoryDetails.map((course) => {
            return (
              <div
                key={course.uid}
                className="bg-white w-full h-full lg:h-[425px] border border-[#cfcece] rounded-[6px] flex flex-col justify-between gap-2 items-start cursor-pointer"
              >
                {/* <div
                  className="h-[200px] w-full bg-cover bg-center bg-no-repeat rounded-t-[6px]"
                  style={{ backgroundImage: `url(${course?.img_course ? `https://res.cloudinary.com/dmpqdaupc/image/upload/${course.img_course}` : "/fallback-image.jpg"})` }}
                ></div> */}

                <Image
                  width={523}
                  height={300}
                  className="object-cover rounded-tl-[6px] rounded-tr-[6px] w-[523px] h-[300px] overflow-hidden"
                  src={
                    course?.cover_image
                      ? `${process.env.NEXT_PUBLIC_STORAGE_URL}${course.cover_image}`
                      : "/fallback-image.jpg"
                  }
                  alt={course.title}
                />

                <div className="px-3 pb-5 flex flex-col justify-end items-start w-full gap-2">
                  <h1 className="text-black text-lg lg:text-xl font-semibold">{course.title.substr(0, 40) + '...'}</h1>
                  <p className="text-grayTwo text-sm text-[.75rem]">{course.sub_title.substr(0, 30) + '...'}</p>
                  <div className="flex flex-wrap justify-between items-center w-full gap-5">
                    <Rating
                      style={{ maxWidth: 80 }}
                      value={rating || 0}
                      onChange={setRating}
                    />
                    <p className="text-grayTwo text-base text-[.75rem]">(1000)</p>
                  </div>
                  <div className="flex flex-col justify-center items-start gap-2 w-full">
                    <p className="text-grayTwo font-bold text-lg text-[.75rem]">
                      ₦ {Number(course.price).toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) || "N/A"}
                    </p>
                    <div className='w-full flex flex-col md:flex-row justify-between items-center gap-2 mt-2'>
                      <Link
                        // href={{
                        //   pathname: "/dashboard/home/course-details",
                        //   query: {
                        //     // details: course.title,
                        //     id: course.uid,
                        //   },
                        // }}
                        href={`/dashboard/course-details/${course.slug}`}
                        className="text-main  duration-200 hover:bg-main hover:text-white bg-transparent border border-main p-2 rounded text-base flex justify-center items-center gap-2"
                      >
                        View course <IoIosArrowRoundForward />
                      </Link>

                      <button
                        disabled={isLoading}
                        className="p-3 bg-main cursor-pointer text-white duration-200 hover:text-main hover:bg-transparent border border-main rounded-full font-semibold"
                        onClick={() => handleAddToCartRequest(course.uid)}
                      >
                        <GrCart size={22} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Page;
