"use client";

import React from "react";
import { SlArrowDown } from "react-icons/sl";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/accordion";

const CourseAccordion = ({ courses }) => {
  // Check if courses and units are defined
  if (!courses || !courses.units || courses.units.length === 0) {
    return <div>No units available.</div>;
  }

  return (
    <Accordion
      allowMultiple
      className="flex flex-col justify-center items-center gap-3 w-full"
    >
      {courses.units.map((unit, index) => (
        <AccordionItem
          key={index}
          className="mb-4 px-2 border-b-[4px] border-[#FF8C5380] w-full"
        >
          {({ isExpanded }) => (
            <>
              <div className="flex justify-between items-center h-[139px]">
                <AccordionButton className="flex justify-between items-center text-left">
                  <div className="flex flex-col justify-start items-start">
                    <h1 className="text-[#201A18] text-[1.75rem] font-semibold leading-[43px]">
                      {unit.title}
                    </h1>
                    <p className="text-[#201A18] text-[1.5rem] font-normal leading-[43px]">
                      {unit.sub}
                    </p>
                  </div>
                  <SlArrowDown
                    size={38}
                    className={`${
                      isExpanded ? `rotate-180` : `rotate-0`
                    } duration-200 rounded-md w-[20px] h-[20px] md:w-[18px] md:h-[18px] text-[#f36402] cursor-pointer`}
                  />
                </AccordionButton>
              </div>
              <AccordionPanel className="py-4 h-[160px]">
                {unit.description}
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CourseAccordion;
