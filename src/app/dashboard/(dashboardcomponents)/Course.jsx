import React from "react";
import course from "../../../asset/course.png";
import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";

const Course = ({item}) => {
  return (
    <>
      <div className="bg-white cursor-pointer flex-col flex justify-between gap-3 min-h-[343px] w-full rounded-[15px] p-2">
        {item.cover_image && (
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item.course.cover_image}`}
            alt="Cover"
            width={500}
            height={300}
          />
        )}
        <div className="flex flex-col flex-auto justify-between mt-2 py-4">
          <div>
            <h1 className="text-[#201A18] font-medium text-[1rem]">
              {item?.course?.title}
            </h1>
            <p className="text-[#7F7571] text-base">{item?.course?.short_desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
