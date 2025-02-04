import React from 'react'
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

const CourseCards = () => {
    const list = [
        {
          id: 1,
          title: "Artificial Intelligence",
          icon: monitor,
          route: '/artificial-intelligence-certificate-course'
        },
        {
          id: 2,
          title: "Data Science",
          icon: socials,
          route: '/data-science-certificate-course'
        },
        {
          id: 3,
          title: "Web Development",
          icon: (<FaFileCode className='text-black text-[1.5rem]'/>),
          route: '/web-certificate-course'
        },
        {
          id: 4,
          title: "Digital Marketing",
          icon: content,
          route: '/digital-marketing-certificate-course'
        },
        {
          id: 5,
          title: "Python",
          icon: web,
          route: '/python-certificate-course'
        },
    ];
  return (
    <div
      id="cr"
      className="relative z-20 cards grid grid-cols-1 gap-8 gap-y-5 lg:gap-y-6 w-full sm:max-w-[650px]"
    >
        {list.map((item) => (
            <div key={item.id} className="card relative shadow-lg overflow-hidden z-10 bg-white h-[155px] w-full md:w-[520px]">
                <Image
                    className="-z-10 absolute h-[11em] left-0 top-[-6%]"
                    src={obj}
                    alt="Object"
                />
                <div className="pt-[1em] pb-[1em] md:pb-[1.5em] xl:pb-[2em] px-[.4em] md:px-[2em] lg:px-[2.6em] flex items-center gap-x-6">
                    {
                      item.id === 3 ? (<>{item.icon}</>) : (<Image className="w-11 h-11" src={item.icon} alt="Icon" />)
                    }
                    <div className='flex flex-col justify-center items-start gap-y-2'>
                      <p className="text-[1.3rem] text-grayTwo font-semibold leading-[46px]">
                        {item.title}
                      </p>
                      <Link href={item.route} className="px-3 py-2 text-[#f36402] border border-[#f36402] font-semibold flex justify-center items-center gap-x-3 w-[155px] h-[53px] rounded duration-300 hover:bg-[#f36402] hover:text-white">
                        Learn More
                        <IoIosArrowForward className='text-[1.25rem]' />
                      </Link>
                    </div>
                </div>
            </div>
        ))}
      {/* Object */}
      <div className="learn bg-orange-200 w-[120px] h-[120px] rounded-full text-center scale-0 flex justify-center items-center text-[1.125rem] font-normal fixed z-10">
        Our Courses
        <HiOutlineArrowLongRight />
      </div>
    </div>
  )
}

export default CourseCards