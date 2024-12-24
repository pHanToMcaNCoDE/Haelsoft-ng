"use client";
import React, { useState } from "react";
import { IoLockClosedOutline } from "react-icons/io5";
import { GoFile } from "react-icons/go";
import { useDispatch } from "react-redux";
import { addLesson } from "@/features/courses/courseSlice";
import { FaCirclePlay } from "react-icons/fa6";
const Lessons = ({
  lesson,
  isSelected,
  isHovered,
  onClick,
  onMouseEnter,
  onMouseLeave,
  isClickable,
  setOpen,
  open,
}) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (!isClickable) {
      setShowModal(true);
    } else {
      dispatch(addLesson(lesson));
      onClick();
      setOpen(!open);
    }
  };
  const secondsToMinutes = (seconds) => {
    const minutes = seconds / 60;
    return minutes.toFixed(2); // Format to 2 decimal places
  };

  return (
    <div>
      {" "}
      <div
        onClick={handleClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={`w-full flex cursor-pointer ${
          (isClickable && isSelected) || isHovered
            ? "bg-[#D9D9D966]/[40%]"
            : "bg-white"
        }  gap-x-2 text-[13px] mt-6 min-h-[3rem] `}
      >
        <div
          className={`w-[3%] ${
            (isClickable && isSelected) || isHovered ? " bg-main" : "bg-white"
          }`}
        ></div>
        <div className="flex-1 text-[#655D59] py-3 ">
          <p className="flex gap-x-2 i">
            {isClickable ? (
              lesson.pdf_file ? (
                <GoFile className="text-xl text-[#201A18]" />
              ) : (
                <FaCirclePlay className="text-xl text-[#201A18]" />
              )
            ) : (
              <IoLockClosedOutline className="text-xl text-[#201A18]" />
            )}{" "}
            <span className="text-sm">
              <span className="text-neutralcustom ">{lesson.pdf_file ?"Pdf file :":"Video:"}</span> {lesson.title}
            </span>
          </p>
          <p className="pl-5 mt-1">
            {lesson.video_url && secondsToMinutes(lesson.duration)+""+"min"}
          </p>
        </div>
      </div>
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          className="fixed top-0 left-0 w-full z-50 h-full flex items-center justify-center bg-gray-800 bg-opacity-50"
        >
          <div className="bg-white p-8 rounded-lg">
            <p className="text-lg font-semibold mb-4">Unlock Full Access</p>
            <p className="mb-4">
              To access this lesson, please purchase the course.
            </p>
            <button
              className="bg-main hover:bg-main/75 text-white py-2 px-4 rounded-lg"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lessons;
