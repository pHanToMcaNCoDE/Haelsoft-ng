'use client';

import Navbar from '@/components/LandingPageComponents/Navbar';
import React, { useRef, useState } from 'react';
import img from '../../../public/EdTech Platform Vector 13.svg';
import Image from 'next/image';
import GetStarted from '@/components/LandingPageComponents/GetStarted';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

const page = () => {
  const [clicked, setClicked] = useState('');
    const [boolclick, setBoolClick] = useState(false);

    let consultRef = useRef(null);

    const scrollToConsult = () => {
        if(consultRef.current){
          consultRef.current.scrollIntoView({behavior: 'smooth'})
        }
      }


  return (
    <main className="relative w-full">
      <Navbar
        clicked={clicked}
        setClicked={setClicked}
        boolclick={boolclick}
        setBoolClick={setBoolClick}
      />
      <section ref={consultRef} className="w-full overflow-hidden min-h-screen">
        <Image
          width={1440}
          height={830}
          className="object-cover w-full absolute z-[5px] h-screen xl:h-auto"
          src={img}
          alt="Background Image"
        />
        <div className="pt-[200px] px-6 xl:px-0 flex flex-col lg:flex-row justify-end items-start gap-10 max-w-[1250px] mx-auto">
          <div className="flex flex-col justify-center items-start gap-2 relative z-10 w-full xl:w-[50%]">
            <h1 className="w-full xl:w-[605px] font-bold leading-[55px] text-[2.75rem] text-white">
              How to Become a Data Analyst
            </h1>
            <p className="w-full xl:w-[605px] text-[#FFFFFF] leading-[30px] font-normal text-base">
              A data analyst interprets and analyzes data to provide actionable insights. Learn the steps to master the skills 
              required to become a data analyst and launch a successful career.
            </p>
          </div>
          <GetStarted />
        </div>
      </section>

      <section className="py-[100px] max-w-[1200px] mx-auto px-6 xl:px-0 flex flex-col justify-center items-center gap-10">
        <div className="w-full xl:w-[977px] flex flex-col justify-center items-start gap-10">
          <p className="text-grayTwo text-base font-normal leading-[30px]">
            Data analysts play a crucial role in today's data-driven world. They collect, process, and analyze data to help organizations make informed decisions.
            If you're interested in this career, here's a guide to getting started.
          </p>
          <div className="flex flex-col justify-center items-start gap-4">
            <div className='flex flex-col justify-center items-start gap-3'>
              <h1 className='text-grayTwo leading-[34.13px] lg:leading-[55.5px] text-[1.75rem] lg:text-[2.5rem] font-bold'>Key Highlights:</h1>
              <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
            </div>
            <p className="text-grayTwo text-base font-normal leading-[30px]">
              Learn key programming languages like Python and R, master data visualization tools, and develop an understanding of statistical methods to unlock the potential of data.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start gap-10 w-full xl:w-[838px]">
          {/* Step 1 */}
          <div className="flex flex-col justify-center items-start gap-2">
            <div className='flex flex-col justify-center items-start gap-3'>
              <h2 className='text-grayTwo leading-[34.13px] text-[1.75rem] font-bold'>Step 1: Understand the Role of a Data Analyst</h2>
              <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
            </div>
            <p className="text-grayTwo text-base font-normal leading-[30px]">
              The first step to becoming a data analyst is understanding what the role entails. Data analysts transform raw data into meaningful insights that help businesses make informed decisions.
              You'll need to develop strong analytical and problem-solving skills, along with a passion for working with numbers and data.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col justify-center items-start gap-2">
            <div className='flex flex-col justify-center items-start gap-3'>
              <h2 className='text-grayTwo leading-[34.13px] text-[1.75rem] font-bold'>Step 2: Learn Key Data Analysis Tools</h2>
              <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
            </div>
            <p className="text-grayTwo text-base font-normal leading-[30px]">
              To succeed as a data analyst, you'll need to master various data analysis tools. These include:
              <ul className="list-disc pl-5">
                <li>Spreadsheet tools like Microsoft Excel and Google Sheets</li>
                <li>Data analysis programming languages such as Python or R</li>
                <li>Data visualization tools like Tableau, Power BI, or Matplotlib</li>
                <li>SQL for managing databases</li>
              </ul>
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col justify-center items-start gap-2">
            <div className='flex flex-col justify-center items-start gap-3'>
              <h2 className='text-grayTwo leading-[34.13px] text-[1.75rem] font-bold'>Step 3: Build a Strong Foundation in Statistics</h2>
              <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
            </div>
            <p className="text-grayTwo text-base font-normal leading-[30px]">
              Understanding statistics is crucial for data analysis. A solid foundation in descriptive statistics, probability, hypothesis testing, and regression analysis will enable you to interpret data accurately.
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col justify-center items-start gap-2">
            <div className='flex flex-col justify-center items-start gap-3'>
              <h2 className='text-grayTwo leading-[34.13px] text-[1.75rem] font-bold'>Step 4: Gain Practical Experience</h2>
              <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
            </div>
            <p className="text-grayTwo text-base font-normal leading-[30px]">
              Experience is key in becoming a successful data analyst. Work on real-world projects, contribute to open-source data analysis projects, or take part in internships to build your skills.
            </p>
          </div>

          {/* Step 5 */}
          <div className="flex flex-col justify-center items-start gap-2">
            <div className='flex flex-col justify-center items-start gap-3'>
              <h2 className='text-grayTwo leading-[34.13px] text-[1.75rem] font-bold'>Step 5: Stay Updated with Industry Trends</h2>
              <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
            </div>
            <p className="text-grayTwo text-base font-normal leading-[30px]">
              The world of data analysis is constantly evolving. Stay updated with the latest trends, tools, and best practices in the industry by reading blogs, joining forums, and participating in data analysis communities.
            </p>
          </div>

          {/* Step 6 */}
          <div className="flex flex-col justify-center items-start gap-2">
            <div className='flex flex-col justify-center items-start gap-3'>
              <h2 className='text-grayTwo leading-[34.13px] text-[1.75rem] font-bold'>Step 6: Build a Strong Portfolio</h2>
              <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
            </div>
            <p className="text-grayTwo text-base font-normal leading-[30px]">
              Having a portfolio of your work will help demonstrate your skills to potential employers. Include examples of data analysis projects you've worked on, showcasing your ability to solve real problems with data.
            </p>
          </div>
        </div>
      </section>


      <div className='flex flex-col justify-between items-center gap-10 max-w-[1250px] mx-auto pb-[80px] px-6 xl:px-0'>
            <div className='bg-[#FF8C53] w-full xl:w-[1242px] mx-auto border-[2px] border-[#FF8C53] h-[1px] rounded'></div>
            <div className='w-full flex flex-col md:flex-row justify-between items-center pt-[10px]'>
                <div className='flex flex-col justify-center items-start gap-2'>
                    <Link href={`/become-a-digital-marketer`} className='text-[#201A18] leading-[30px] font-normal text-[.75rem] flex justify-center items-center gap-2'>
                        <FaArrowLeft />
                        Previous
                    </Link>
                    <p className='text-[#F36400] leading-[30px] font-semibold text-[.875rem]'>Become a Digital Marketer</p>
                </div>
                <div className='flex flex-col justify-center items-start gap-2'>
                    <button className='text-gray-300 leading-[30px] font-normal text-[.75rem] flex justify-center items-center gap-2'>
                        Next
                        <FaArrowRight />
                    </button>
                    {/* <p className='text-[#F36400] leading-[30px] font-semibold text-[.875rem]'></p> */}
                </div>
            </div>
        </div>

        <section className='w-full bg-[#E1884A] py-[100px] px-6 xl:px-0 xl:h-[624px]'>
            <div className='max-w-[1250px] mx-auto flex flex-col justify-center items-center gap-20'>
                <div className='w-full xl:w-[514px] flex flex-col justify-center items-center gap-20'>
                    <div className='text-center w-full xl:w-[514px] flex flex-col justify-center items-center gap-3'>
                        <h2 className='text-white text-[1rem] leading-[30px] font-normal uppercase'>get started</h2>
                        <div className='flex flex-col justify-center items-center gap-4'>
                            <h1 className='text-white leading-[34.13px] lg:leading-[55.5px] text-[1.75rem] lg:text-[2.5rem] font-bold'>Kickstart your Software Engineer Career</h1>
                            <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
                        </div>
                        <p className='text-white text-[1rem] lg:text-[1.125rem] leading-[30px] font-normal'>
                          Data analysis is the backbone of decision-making in every industry. With Haelsoft EdTech, you&apos;ll gain the skills, tools, and expertise to thrive in this fast-growing field.                      
                        </p>
                    </div>

                    <button onClick={scrollToConsult} className='bg-[#F36400] w-[221px] h-[50px] text-white leading-[30px] text-[.875rem] font-semibold gap-[10px] p-[10px] rounded border border-[#FF8C53]'>Request a Consultation</button>
                </div>
            </div>
        </section>
    </main>
  );
};

export default page;
