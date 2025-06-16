'use client'

import Navbar from '@/components/LandingPageComponents/Navbar';
import axios from 'axios';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import AboutMeSection from '../components/AboutMeSection';

import Loader from "@/components/Loader";
import { useSelector } from 'react-redux';
import { Rating } from '@smastrom/react-rating';
import Link from 'next/link';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { GrCart } from 'react-icons/gr';

const page = () => {
    const [clicked, setClicked] = useState('');
    const [boolclick, setBoolClick] = useState(false);
    const [details, setDetails] = useState({});
    const [loading, setLoading] = useState(false);

    const { id } = useParams();

    const [categoryDetails, setCategoryDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    const [rating, setRating] = useState(0);


    const { token } = useSelector((state) => state.userDetails);

    useEffect(() => {
      const fetchCategoryDetails = () => {
        setIsLoading(true);
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}courses/category/${id}`)

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
        if (token) {
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
            toast.error(error.response?.data?.message || 'Something went wrong');
          } finally {
            setIsLoading(false);
          }
        } else {
          window.location.href = '/signin';
        }
    };
                   
    

    const fetchInstructirDetails = async () => {
        setLoading(true);
        try{
            setLoading(false);
            const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}instructors/single/${id}`, {
              headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json',
              }
            })
            setDetails(response.data.data)
            // console.log('Instructor Details', response.data);
        } catch (error) {
            setLoading(false);
            console.log('Details error', error)
        }

    }

    useEffect(() => {
        fetchInstructirDetails()
    }, [id])
    
  return (
    <main className='w-full flex flex-col'>
        {loading ? (<Loader/>) : (
            <section className='bg-[#D98E47]/30 w-full flex flex-col justify-start items-start gap-3'>
              <div className='max-w-[1240px] mx-auto flex flex-col justify-between items-center gap-6 pt-[150px] pb-[100px] px-5 lg:px-10 relative'>
                  <div className='w-[80%] h-[150px] flex flex-col justify-center items-center text-center gap-5 py-10'>
                      <p className='uppercase text-md font-medium'>instructors</p>
                      <h1 className='text-4xl font-bold text-grayTwo'>{details.name}</h1>
                      <p className='text-md font-semibold text-grayTwo'>{details.designation}</p>
                  </div>
                  <div className='w-[140px] h-[140px] rounded-full border-[10px] border-[#f4f4f4] absolute bottom-[-25%]'>
                      <Image className='w-full h-full absolute rounded-full object-cover top-0' width={100} height={100} src={`${process.env.NEXT_PUBLIC_STORAGE_URL}${details.image}`} alt={details.name} />
                  </div>
              </div>

              <div className='w-full bg-white min-h-screen flex flex-col justify-start items-start gap-12 px-5 xl:px-[100px] py-[100px] xl:pt-[150px] xl:pb-[100px]'>
                  <AboutMeSection description={details.description} />

                  <div className='w-full flex flex-col justify-start items-start gap-4 mt-5'>
                      <h1 className='text-2xl font-bold mb-2'>My Courses ({details?.courses?.length})</h1>
                      
                      
                      <div className="w-full flex flex-col justify-start items-start gap-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                          {details?.courses?.length > 0 && details.courses.map((course) => {
                            return (
                              <div
                                key={course.uid}
                                className="bg-white w-full h-full lg:h-[445px] border border-[#cfcece] rounded-[6px] flex flex-col justify-between gap-2 items-start cursor-pointer"
                              >
              
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
                                          onClick={() => handleAddToCartRequest(course.course_id)}
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
                  </div>
              </div>
            </section>
        )}
    </main>
  )
}

export default page