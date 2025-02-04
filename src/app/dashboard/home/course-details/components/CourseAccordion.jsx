"use client";

import { courseDetailsFaqs } from "@/raw-data/data";
import { Accordion, AccordionItem } from "@heroui/accordion";
import React from "react";

const CourseAccordion = () => {
  return (
    <section className="w-full bg-white py-[100px] lg:pb-[200px] px-4 xl:px-0">
      <div className='max-w-[1250px] mx-auto flex flex-col justify-center items-start gap-5'>
        <div className='flex flex-col justify-center items-start gap-2'>
          <h1 className='text-black text-[2.5rem] leading-[33px] font-semibold'>Frequently Asked Questions</h1>
          <p className='text-base text-grayTwo font-medium'>Find answers to common questions and get the information you need.</p>
        </div>
        <Accordion className='w-full flex flex-col gap-2'>
          {courseDetailsFaqs.map((faq) => (
            <AccordionItem aria-label="Accordion 1" title={<h1 className="text-[#201A18] text-[1.3rem] font-bold leading-[40px]">{faq.title}</h1>} key={faq.id} className="border-b-[2px] rounded-[3px] border-main p-4">
              <div className="flex flex-col">
                <div className="py-4 text-base text-grayTwo font-normal min-h-[140px]">
                  {faq.description}
                </div>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default CourseAccordion;