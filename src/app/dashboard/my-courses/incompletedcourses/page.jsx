import React from "react";
import UncompleteCourse from "../../(dashboardcomponents)/IncompleteCourse";
import IncompleteCourse from "../../(dashboardcomponents)/IncompleteCourse";

const Incompletetedcourses = () => {
  return (
    <div>
      <div className="pb-10 mt-10">
        {/* <div className="flex text-grayTwo  text-[18px]">Recently Viewed</div> */}
        <div className="  mt-4 gap-4 gap-y-10 justify-items-start ">
          <IncompleteCourse />
        </div>
      </div>
    </div>
  );
};

export default Incompletetedcourses;
