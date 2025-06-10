import React from "react";

const CourseCategories = ({name}) => {
  return (
    <div>
      <div className=" min-h-[68px] max-w-[360px]  text-start px-[16px] border border-[#F36400] text-[#F36400] w-full flex justify-start items-center text-base rounded-[9px]">
     { name}
      </div>
    </div>
  );
};

export default CourseCategories;
