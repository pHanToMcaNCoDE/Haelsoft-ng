"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const Course = ({ item }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressData = localStorage.getItem(`course_progress_${item.order_no}`);
    if (progressData) {
      try {
        const parsed = JSON.parse(progressData);
        const completed = parsed?.completedLessons?.length || 0;
        const total = parsed?.totalLessons || 1;
        const percent = (completed / total) * 100;
        setProgress(percent);
      } catch (err) {
        console.error("Error parsing course progress:", err);
      }
    }
  }, [item.order_no]);

  return (
    <div
      key={item.course.uid}
      className="bg-white w-full h-full lg:h-[425px] border border-[#cfcece] rounded-[6px] flex flex-col justify-between gap-2 items-start cursor-pointer"
    >
      <Image
        width={523}
        height={300}
        className="object-cover rounded-tl-[6px] rounded-tr-[6px] w-[523px] h-[300px] overflow-hidden"
        src={`${process.env.NEXT_PUBLIC_STORAGE_URL}${item.course?.cover_image}`}
        alt={item?.course?.title}
      />

      <div className="px-3 pb-5 flex flex-col justify-end items-start w-full gap-2">
        <h1 className="text-black text-lg lg:text-xl font-semibold">
          {item?.course.title?.substr(0, 40) + "..."}
        </h1>
        <p className="text-grayTwo text-sm text-[.75rem]">
          {item?.course.sub_title?.substr(0, 30) + "..."}
        </p>

        <div className="flex flex-col justify-center items-start gap-2 w-full">
          <div className="w-full flex flex-col justify-start items-start gap-0.5">
            <div className="mt-3 h-3 w-full bg-[#f2f2f2] rounded-full bg-gray-200">
              <div
                className="h-3 rounded-full bg-main"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-1 text-sm font-semibold text-gray-600">
              {Math.round(progress)}% completed
            </p>
          </div>

          <Link
            href={`/dashboard/watch/${item?.course?.slug}`}
            className="text-main duration-200 hover:bg-main hover:text-white bg-transparent border border-main p-2 rounded text-base flex justify-center items-center gap-2"
          >
            Get started <IoIosArrowRoundForward />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Course;
