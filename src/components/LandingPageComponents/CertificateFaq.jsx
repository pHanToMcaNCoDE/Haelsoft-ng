'use client'

import React, { useState } from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/accordion";
import { IoAddCircleOutline } from 'react-icons/io5';
import { FiMinusCircle } from "react-icons/fi";
import { usePathname } from 'next/navigation';

const CertificateFaq = ({ faqs }) => {
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleItem = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  const pathname = usePathname();

  return (
    <section className='bg-white min-h-screen py-[120px] gap-[64px] flex flex-col justify-center items-center lg:px-[74px] relative'>
      <div className="bg-main absolute top-[50%] left-0 w-full h-full skew-y-[-6deg] origin-top-left z-[1px]"></div>
      <div className='max-w-[1120px] mx-auto flex py-[120px] gap-[64px] flex-col justify-center items-center lg:px-[74px]'>
        <div className='flex-col justify-start items-center gap-[64px] relative z-10'>
            <div className='w-full flex flex-col justify-center items-start gap-2'>
              <h1 className='text-black text-[1.5rem] lg:text-[3rem] leading-[40px] lg:leading-[55.5px] font-semibold'>
                Frequently Asked Questions
              </h1>
              <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
            </div>

          <div className='w-full flex justify-center items-center gap-[16px]'>
            <Accordion allowMultiple={false} allowToggle={true} className="flex flex-col justify-center items-center w-full">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  isExpanded={expandedItem === faq.id}
                  className="py-[32px] px-[16px] lg:p-[32px] bg-white border-[2px] border-[#e5e5e5] bg-gray w-full min-h-[120px] lg:min-h-[103px]"
                
                >
                  <div className='flex flex-col justify-center items-start gap-[24px]'>
                    <AccordionButton
                      className="flex justify-between items-center gap-4"
                      onClick={() => toggleItem(faq.id)}
                    >
                      <h1 className="text-blue text-left text-[1rem] lg:text-[1.25rem] font-semibold font-instrument leading-[20.8px] lg:leading-[30px]">
                        {faq.name}
                      </h1>
                      <div className={expandedItem === faq.id ? 'duration-200' : ''}>
                        {expandedItem === faq.id ? (
                          <FiMinusCircle
                            size={26}
                            className='text-brightPurple cursor-pointer text-main'
                          />
                        ) : (
                          <IoAddCircleOutline
                            size={26}
                            className='text-brightPurple cursor-pointer text-main'
                          />
                        )}
                      </div>
                    </AccordionButton>
                    <AccordionPanel className="w-full min-h-[158px] flex flex-col justify-start items-start gap-[20px] lg:gap-[24px]">
                      <p className='text-[.875rem] lg:text-[1.125rem] text-blueTwo leading-[19.6px] lg:leading-[28px] font-normal font-instrument'>
                        {faq.desc}
                      </p>
                      <ul className={`${pathname === '/back-end' && faq.id === 5 ? '' : 'list-disc'} pl-5`}>
                        {faq.list && Array.isArray(faq.list) && faq.list.map((f, index) => (
                          <li className='text-[.875rem] lg:text-[1.125rem] text-blueTwo leading-[19.6px] lg:leading-[28px] font-normal font-instrument' key={index}>
                            {f}
                          </li>
                        ))}
                      </ul>
                      <p className='text-[.875rem] lg:text-[1.125rem] text-blueTwo leading-[19.6px] lg:leading-[28px] font-normal font-instrument'>
                        {faq.descTwo}
                      </p>
                    </AccordionPanel>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificateFaq;
