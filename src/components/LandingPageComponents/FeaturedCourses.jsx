import { Rating } from '@smastrom/react-rating'
import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import secureLocalStorage from 'react-secure-storage'

const FeaturedCourses = () => {
  const [currentTab, setCurrentTab] = useState("Featured");
  const [courses, setCourses] = useState([]); // Will hold either featured or latest
  const [isLoading, setIsLoading] = useState(false);
  const [rating, setRating] = useState(0);

  const token = secureLocalStorage.getItem('accessToken');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const endpoint = currentTab === 'Featured' ? 'featured' : 'latest';
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}courses/${endpoint}`);
        setCourses(response.data.data || []);
      } catch (error) {
        console.log('Fetch error:', error);
      }
    };

    fetchCourses();
  }, [currentTab]);

  const handleAddToCartRequest = async (courseId) => {
    if (!token) return window.location.href = '/signin';

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
      window.location.href = '/dashboard/shopping-cart';
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className='h-full px-5 py-[40px] flex flex-col gap-10'>
      {/* Tabs */}
      <div className='w-full border-b border-neutral-200 flex gap-4'>
        {['Featured', 'Latest'].map((tab) => (
          <div
            key={tab}
            onClick={() => setCurrentTab(tab)}
            className={`cursor-pointer text-lg font-medium relative h-[53px] ${
              currentTab === tab ? 'text-black' : 'text-grayTwo'
            }`}
          >
            {tab}
            {currentTab === tab && (
              <div className='w-full h-[3px] bg-yellow-300 absolute bottom-0'></div>
            )}
          </div>
        ))}
      </div>

      {/* Title */}
      <h1 className='text-[1.5rem] lg:text-[2rem] font-semibold text-black'>
        {currentTab} Courses
      </h1>

      {/* Course List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.length === 0 ? (
          <p className="text-gray-500">No courses available.</p>
        ) : (
          Array.isArray(courses) && courses.length > 0 ? 
            courses.map((course) => (
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
                    <Rating style={{ maxWidth: 80 }} value={rating} onChange={setRating} />
                    <p className="text-grayTwo text-sm">(1000)</p>
                  </div>

                  <p className="font-bold text-lg text-gray-800 mt-3">
                    ₦ {Number(course.price).toLocaleString('en-NG', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>

                  <button
                    disabled={isLoading}
                    className="mt-3 py-3 w-full bg-main text-white rounded-bl-[30px] rounded-br-[30px] font-semibold"
                    onClick={() => handleAddToCartRequest(course.course_id)}
                  >
                    {isLoading ? 'Adding...' : 'Add To Cart'}
                  </button>
                </div>
              </div>
            ))
          : (
            <div className='w-full h-full flex justify-center items-center'>
              <p className="text-gray-700 text-xl font-semibold">No courses available.</p>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default FeaturedCourses;