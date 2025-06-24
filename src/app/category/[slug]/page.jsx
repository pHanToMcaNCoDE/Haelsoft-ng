'use client'

import Navbar from "@/components/LandingPageComponents/Navbar";
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

const Page = () => {
  // const { isAuthenticated, token } = useSelector((state) => state.userDetails);


  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //     if (!isAuthenticated && !token) {
  //       router.replace('/signin');
  //     }
  //   }, 100);

  //   return () => clearTimeout(timer);
  // }, [isAuthenticated, token, router]);

  // if (isLoading) {
  //   return null;
  // }

  const { slug } = useParams();
  const [categoryDetails, setCategoryDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const [rating, setRating] = useState(0)

   const [clicked, setClicked] = useState('');


  const { token } = useSelector((state) => state.userDetails);

  useEffect(() => {
    const fetchCategoryDetails = () => {
      setIsLoading(true);
      axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}courses/category/${slug}`)

      .then((response) => {
        setCategoryDetails(response.data.data.data)

        console.log('Cat details', response.data.data)

      })

      .catch((error) => {
        console.log('Category Error: ', error)
      })

      .finally (() => setIsLoading(false))

    }

    fetchCategoryDetails()

  }, [])

  const handleAddToCartRequest = async (id) => {
    setIsLoading(true);

    
      // const cartItems = await fetchCartItems();
      // const alreadyInCart = cartItems.some(item => item.course.id === courses.course_id);

      // if (alreadyInCart) {
      //   toast.info("Course already in cart");
      //   return;
      // }

      if(token){
          try {
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
            
            if (typeof window !== "undefined") {
              window.location.href = '/dashboard/shopping-cart';
            }

          } catch (error) {
            toast.error(error.response.data.message)
          } finally {
            setIsLoading(false);
          }
      }else{
        window.location.href = '/signin'
      }
  };
                

  if (isLoading) return <Loader />;
  

  return (
    <main className="flex flex-col gap-10">
      <Navbar
        clicked={clicked}
        setClicked={(value) => {
          setClicked(value);
        }}
      />
      
      <section className="min-h-screen w-full px-5 lg:px-[25px] flex flex-col justify-start items-start gap-[30px] lg:gap-[3em] py-[100px]">

          <div className="w-full flex flex-col justify-center items-center gap-2">
            <h1 className="text-black text-xl lg:text-[2rem] font-bold">
              {categoryDetails.length > 0 && categoryDetails[0]?.category?.name} Courses
            </h1>
            <h1 className="text-grayTwo text-xl font-normal">Courses to get you started</h1>
          </div>


        <div className="w-full flex flex-col justify-start items-start gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {categoryDetails.map((course) => {
              return (
                <div
                  key={course.uid}
                  className="bg-white w-full h-full lg:h-[445px] border border-[#cfcece] rounded-[6px] flex flex-col justify-between gap-2 items-start cursor-pointer"
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
                            href={`/course-details/${course.slug}`}
                            className="text-main bg-transparent border border-main p-2 rounded text-base flex justify-center items-center gap-2 duration-200 hover:text-white hover:bg-main"
                        >
                            View course <IoIosArrowRoundForward />
                        </Link>
                        <button
                            disabled={isLoading}
                            className="p-3 bg-main cursor-pointer text-white duration-200 hover:text-main hover:bg-transparent border border-main rounded-full font-semibold"
                            onClick={() => handleAddToCartRequest(course.uid)}
                        >
                            <GrCart size={22}/>
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
    </main>
  );
};

export default Page;
