import { Rating } from '@smastrom/react-rating';
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { MdOutlineBroadcastOnPersonal } from 'react-icons/md';
import secureLocalStorage from 'react-secure-storage';
import Loader from '../Loader';

const FeaturedCourses = () => {
  const [currentTab, setCurrentTab] = useState("Featured");
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const endpoint = currentTab.toLowerCase();
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}courses/${endpoint}`);
        
        setCourses(response.data.data)

        console.log(`${currentTab} Response`, response.data)

      } catch (error) {
        console.error(`Error fetching ${currentTab} courses:`, error);
        setCourses([]);
      }
    };

    fetchCourses();
  }, []);

  const handleAddToCartRequest = async (courseId) => {
    setIsLoading(true);
    const token = secureLocalStorage.getItem("token");

    if (token) {
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

        if (typeof window !== "undefined") {
          window.location.href = '/dashboard/shopping-cart';
        }
      } catch (error) {
        toast.error(error.response?.data?.message || "An error occurred");
      } finally {
        setIsLoading(false);
      }
    } else {
      window.location.href = '/signin';
    }
  };

  return (
    <section className='h-full px-5 py-25 flex flex-col gap-10 py-[40px]'>
      {
        isLoading && (<Loader />)
      }
      {/* <div className='w-full border-b border-neutral-200 flex justify-start items-center gap-4 transition-all'>
        {['Featured'].map((tab) => (
          <div
            key={tab}
            onClick={() => setCurrentTab(tab)}
            className={`cursor-pointer text-lg flex flex-col gap-2 justify-center items-center font-medium text-grayTwo relative h-[53px] ${
              currentTab === tab ? 'border-b-2 border-yellow-300' : ''
            }`}
          >
            {tab}
          </div>
        ))}
      </div> */}

      <div className='w-full flex flex-col gap-10'>
        <h1 className='text-[1.5rem] lg:text-[2rem] font-semibold text-black'>
          {currentTab} Courses
        </h1>
        {Array.isArray(courses) && courses.length > 0 ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {courses.map((course) => (
              <div
                key={course.uid}
                className="bg-white border border-[#cfcece] rounded-[6px] flex flex-col h-full overflow-hidden"
              >
                <Image
                  width={523}
                  height={300}
                  className="object-cover w-full h-[200px]"
                  src={
                    course?.cover_image
                      ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${course.cover_image}`
                      : "/fallback-image.jpg"
                  }
                  alt={course.title}
                />

                <div className="px-4 py-5 flex flex-col gap-2">
                  <h2 className="text-black text-xl font-semibold">
                    {course.title?.slice(0, 40) + '...'}
                  </h2>
                  <p className="text-grayTwo text-sm">
                    {course.sub_title?.slice(0, 30) + '...'}
                  </p>

                  <div className="flex items-center justify-between mt-2">
                    <p className="font-bold text-lg text-gray-800 mt-3">
                      ₦ {Number(course.price).toLocaleString('en-NG', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </p>
                    {/* <Rating style={{ maxWidth: 80 }} value={rating} onChange={setRating} /> */}
                    <p className="text-grayTwo text-sm">(1000)</p>
                  </div>

                  

                  <button
                    disabled={isLoading}
                    className="mt-3 py-3 w-full bg-main text-white rounded-[30px] font-semibold cursor-pointer"
                    onClick={() => handleAddToCartRequest(course.course_id)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
            <div className='w-full h-full flex justify-center items-center'>
              <p className="text-gray-700 text-xl font-semibold">No courses available.</p>
            </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedCourses;
