import React from "react";
import course from "../../../asset/course.png";
import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const Course = ({item}) => {
  return (
    <>
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
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item.course?.cover_image}`}
          alt={item?.course?.title}
        />
        <div className="px-3 pb-5 flex flex-col justify-end items-start w-full gap-2">
          <h1 className="text-black text-lg lg:text-xl font-semibold">{item?.course.title.substr(0, 40) + '...'}</h1>
          <p className="text-grayTwo text-sm text-[.75rem]">{item?.course.sub_title.substr(0, 30) + '...'}</p>
          {/* <div className="flex flex-wrap justify-between items-center w-full gap-5">
            <Rating
              style={{ maxWidth: 80 }}
              value={rating || 0}
              onChange={setRating}
            />
            <p className="text-grayTwo text-base text-[.75rem]">(1000)</p>
          </div> */}
          <div className="flex flex-col justify-center items-start gap-2 w-full">
            {/* <p className="text-grayTwo font-bold text-lg text-[.75rem]">
              ₦ {Number(item?.course.price).toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) || "N/A"}
            </p> */}

            <div className="w-full flex flex-col justify-start items-start gap-0.5">

              <div className="w-full bg-[#f2f2f2] h-[8px] rounded-full"></div>
              <p className="text-black text-lg font-semibold">0%</p>
            </div>
            <Link
              href={`/watch`}
              className="text-main duration-200 hover:bg-main hover:text-white bg-transparent border border-main p-2 rounded text-base flex justify-center items-center gap-2"
            >
              Get started <IoIosArrowRoundForward />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
