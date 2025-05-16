import React, { useEffect, useState } from 'react'
import monitor from "../../../public/assets/DesktopComputerOutline (1).svg";
import socials from "../../../public/assets/socials.svg";
import seo from "../../../public/assets/seo.svg";
import content from "../../../public/assets/content.svg";
import web from "../../../public/assets/web.svg";
import obj from "../../../public/assets/Polygon 1.svg";
import { IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import Link from 'next/link';
import { FaFileCode } from "react-icons/fa";
import secureLocalStorage from 'react-secure-storage';
import axios from 'axios';
import { useSelector } from 'react-redux';

const CourseCards = () => {

  const [categories, setCategories] = useState([])
    const { token } = useSelector((state) => state.userDetails);
    const [id, setId] = useState([])
    
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}category`, {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        setCategories(response.data.data);
        console.log('Home Cats', response.data.data);
      } catch (error) {
        console.error('Home Fetch Error:', error);
      }
    };

    if (token) fetchCategory();
  }, [token]);



  const list = [
        {
          id: 1,
          title: "Artificial Intelligence",
          icon: monitor
        },
        {
          id: 2,
          title: "Data Science",
          icon: socials
        },
        {
          id: 3,
          title: "Web Development",
          icon: (<FaFileCode className='text-black text-[1.5rem]'/>)
        },
        {
          id: 4,
          title: "Digital Marketing",
          icon: content
        },
        {
          id: 5,
          title: "Python",
          icon: web
        }, 
    ];


    useEffect(() => {
        
        const fetchCategory = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}category`, {
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });

                // console.log('Categories', response.data)
                
                if (response.data && response.data.data && response.data.data.length > 0) {
                    setCategories(response.data.data);
                }
            } catch (error) {
                console.log("Category Error", error);
            }
        }

        fetchCategory();
    }, [])



  return (
    <>
      <div
        id="cr"
        className="relative z-20 cards grid grid-cols-1 gap-8 gap-y-5 lg:gap-y-6 w-full sm:max-w-[650px]"
      >
        {list.slice(0, 4).map((item) => {
          const matchedCategory = categories.find(
            (cat) => cat.name.toLowerCase() === item.title.toLowerCase()
          );

          return (
            <div key={item.id} className="card relative shadow-lg overflow-hidden z-10 bg-white h-[155px] w-full md:w-[520px]">
              <Image
                className="-z-10 absolute h-[11em] left-0 top-[-6%]"
                src={obj}
                alt="Object"
              />
              <div className="pt-[1em] pb-[1em] md:pb-[1.5em] xl:pb-[2em] px-[.4em] md:px-[2em] lg:px-[2.6em] flex items-center gap-x-6">
                {item.id === 3
                  ? item.icon
                  : <Image className="w-11 h-11" src={item.icon} alt="Icon" />}
                <div className='flex flex-col justify-center items-start gap-y-2'>
                  <p className="text-[1.3rem] text-grayTwo font-semibold leading-[46px]">
                    {item.title}
                  </p>

                  <Link
                    href={matchedCategory ? `/category/${matchedCategory.uid}` : "#"}
                    className="px-3 py-2 text-[#f36402] border border-[#f36402] font-semibold flex justify-center items-center gap-x-3 w-[155px] h-[53px] rounded duration-300 hover:bg-[#f36402] hover:text-white"
                  >
                    Learn More
                    <IoIosArrowForward className='text-[1.25rem]' />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}


        <div className="learn bg-orange-200 w-[120px] h-[120px] rounded-full text-center scale-0 flex justify-center items-center text-[1.125rem] font-normal fixed z-10">
          Our Courses
          <HiOutlineArrowLongRight />
        </div>
      </div>

        
    </>
  )
}

export default CourseCards