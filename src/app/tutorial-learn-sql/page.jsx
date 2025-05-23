'use client'

import CompaniesThatUse from '@/components/LandingPageComponents/CompaniesThatUse'
import Docs from '@/components/LandingPageComponents/Docs'
import Looking from '@/components/LandingPageComponents/Looking'
import Navbar from '@/components/LandingPageComponents/Navbar'
import StartHiring from '@/components/LandingPageComponents/StartHiring'
import TutorialGetStarted from '@/components/LandingPageComponents/TutorialGetStarted'
import TutorialHero from '@/components/LandingPageComponents/TutorialHero'
import Why from '@/components/LandingPageComponents/Why'
import React, { useState } from 'react'
import img from '../../../public/assets/EdTech Platform Image 1.svg';
import org from '../../../public/EdTech Platform Vector 13.svg';

import obj from '../../../public/assets/EdTech Platform Group 312.svg';

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

import edo from '../../../public/assets/clients/Edo State Government Haelsoft Clients.png';
import esi from '../../../public/assets/clients/Edo State Investment Promotion Office from Haelsoft.png';
import farm from '../../../public/assets/clients/Farm Industria Logo.png';
import giz from '../../../public/assets/clients/Giz Logo II.png';
import gro from '../../../public/assets/clients/Grovane Logo Blue.png';
import fin from '../../../public/assets/clients/Haelsoft Clients Edtech Platform.png';
import goo from '../../../public/assets/clients/Haelsoft Clients Edtech.png';
import srv from '../../../public/assets/clients/Haelsoft Edtech Logo (1).png';
import ser from '../../../public/assets/clients/Haelsoft Edtech Logo.png';
import kle from '../../../public/assets/clients/Kleenol Logo.png';
import kor from '../../../public/assets/clients/Korahq Edtech Clients.jpg';
import kus from '../../../public/assets/clients/Kusnap Logo from Haelsoft Edtech.png'
import lfi from '../../../public/assets/clients/Leatherback Financials Haelsoft Clients.png';
import min from '../../../public/assets/clients/Mintyn Logo.png';
import nex from '../../../public/assets/clients/Nexgate Official Logo.png';
import val from '../../../public/assets/clients/Valdo Furniture Interiors.png';
import zen from '../../../public/assets/clients/Zenith Logo from Haelsoft.png';
import Image from 'next/image';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { GoCheck } from 'react-icons/go';

import imgTwo from '../../../public/assets/EdTech Platform Vector 8 2.svg';

const page = () => {
    const [clicked, setClicked] = useState('');
    const [boolclick, setBoolClick] = useState(false);
  

    const [activeTab, setActiveTab] = useState(0);

    const tabContent = [
        {
            title: "Why Choose Haelsoft’s Learn SQL Course?",
            content: {
                heading: "Why Choose Haelsoft’s Learn SQL Course?",
                paragraphs: [
                    "Beginner to Advanced: Progress from SQL basics to mastering advanced concepts.",
                    "Real-World Projects: Work on practical examples to apply your skills.",
                    "Expert Mentorship: Learn from experienced database professionals and data scientists.",
                    "Interactive Learning: Hands-on exercises and quizzes to reinforce your understanding.",
                    "Certification: Earn a certificate of completion to boost your resume and career prospects."
                ]
            }
        },
        {
            title: "Who Should Enroll?",
            content: {
                heading: "Who Should Enroll?",
                paragraphs: [
                    "Aspiring data analysts and database administrators.",
                    "Business professionals looking to understand data better.",
                    "Developers wanting to enhance their back-end skills.",
                    "Entrepreneurs and startups interested in data-driven decision-making."
                ]
            }
        },
        {
            title: "Course Highlights",
            content: {
                heading: "Course Highlights",
                paragraphs: [
                    "Comprehensive Curriculum: Covering everything from SQL syntax to advanced optimization techniques.",
                    "Industry-Relevant Skills: Learn skills highly valued by top employers in the tech and business sectors.",
                    "Collaborative Projects: Engage with peers to solve real-world data challenges.",
                    "Flexible Learning: Access course materials anytime, anywhere at your convenience."
                ]
            }
        },
        {
            title: "Career Opportunities After Completing This Course",
            content: {
                heading: "Career Opportunities After Completing This Course",
                paragraphs: [
                    "Data Analyst: Analyze and interpret complex datasets for businesses.",
                    "Database Administrator: Manage and maintain database systems efficiently.",
                    "Business Intelligence Analyst: Provide insights for strategic decision-making.",
                    "Back-End Developer: Develop robust applications with SQL-integrated solutions."
                ]
            }
        }
    ];
    

    const contentTwo = (
        <div className="flex flex-col justify-center items-start gap-4 w-full lg:w-[50%] xl:mt-[100px]">
        <h1 className="text-[#F36400] leading-[42px] font-bold text-[1.75rem]">Partner with Haelsoft for Excellence</h1>
        <p className="text-grayTwo text-[1.125rem] leading-[43px] font-medium w-full xl:w-[574px]">
          Invest in your people, and you&apos;ll invest in the future of your organization. Let Haelsoft EdTech Platform help you build a workforce that&apos;s ready to tackle today&apos;s challenges and tomorrow&apos;s opportunities. To learn more about our Corporate Training programs or schedule a consultation, contact us at [your email address]. At Haelsoft, we don&apos;t just train teams; we empower them to lead, innovate, and excel.
        </p>
        <span className='text-black font-bold text-[1.125rem] leading-[43px] w-full xl:w-[574px]'>
          At Haelsoft, we don&apos;t just train teams; we empower them to lead, innovate, and excel.
        </span>
      </div>
    )

  return (
    <main>
        <Navbar 
        clicked={clicked} 
        setClicked={setClicked} 
        boolclick={boolclick} 
        setBoolClick={setBoolClick} 
        />

        <section className='bg-main py-[100px] p-6'>
            <div className='flex flex-col lg:flex-row justify-between items-center max-w-[1250px] mx-auto gap-20'>
                <div className='flex flex-col justify-center items-start gap-10'>
                    <div className='flex flex-col justify-center items-start gap-8'>
                        <h1 className='text-white font-bold text-[2.75rem] leading-[55px]'>Learn SQL</h1>
                        <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
                    </div>
                    <p className='text-white w-full xl:w-[578px] text-[1rem] font-normal leading-[30px]'>
                        SQL (Structured Query Language) is the backbone of modern data management and analysis. From powering business decisions to building dynamic applications, SQL is a critical skill for anyone working in technology or business. At Haelsoft EdTech Platform, our Learn SQL course equips you with the knowledge and practical experience to harness the power of data effectively. Whether you're a beginner or a professional looking to enhance your data skills, this course provides the tools you need to excel in database management, analytics, and beyond.
                    </p>
                    <button className='w-[194px] h-[50px] bg-[#FF8C53] border border-[#FF8C53] p-[10px] flex justify-center items-center gap-[10px] rounded text-white text-[.875rem] font-semibold leading-[30px]'>Start Free Tutorial</button>
                </div>
                <div className='w-full xl:w-[597px] h-[472px] bg-white rounded'></div>
            </div>
        </section>


        <section className='bg-[#F7F7F7] relative'>
            <div className='flex flex-col justify-between items-center gap-10'>
                <div className='py-[100px] flex flex-col justify-center items-start gap-20 2xl:gap-[150px] max-w-[1250px] mx-auto px-6'>
                    <div className='flex flex-col justify-center items-start gap-4'>
                        <Image width={40} height={40} className='object-cover' src={obj} alt='Box Vector'></Image>
                        <h1 className='text-[#201A18] text-[1.75rem] font-bold leading-[34.13px]'>Get Started</h1>
                    </div>

                    <div className='relative w-[full xl:w-[763px] min-h-[871px] bg-white shadow-lg z-20 p-[26px]'>
                        <Image width={763} height={364} src={org} alt='Orange Background' className='absolute z-[5px] top-0 right-0 left-0'></Image>
                        <div className='relative z-10 flex flex-col justify-center items-start gap-20'>
                            <div className='flex flex-col justify-center items-start gap-10'>
                                <div className='flex flex-col justify-center items-start gap-4'>
                                    <h1 className='text-white font-semibold text-[1.5rem] leading-[29.26px]'>Master the Language of Databases and Unlock Data Insights</h1>
                                    <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
                                </div>

                                {/* <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[5px] w-full lg:w-[338px]'>
                                    <div className='bg-[#201A18] text-[.875rem] font-semibold leading-[30px] text-white gap-[10px] py-[10px] rounded-[2px] w-[83px] h-[20px] flex justify-center items-center'>
                                        1 Hour
                                    </div>
                                    <div className='bg-[#201A18] text-[.875rem] font-semibold leading-[30px] text-white gap-[10px] py-[10px] rounded-[2px] w-[83px] h-[20px] flex justify-center items-center'>
                                        22 Lessons
                                    </div>
                                    <div className='bg-[#201A18] text-[.75rem] font-semibold leading-[30px] text-white gap-[10px] rounded-[2px] min-w-[123px] h-[20px] flex justify-center items-center'>
                                        Beginner Friendly
                                    </div>
                                </div> */}
                            </div>
                            <p className='text-white text-[1rem] font-normal leading-[30px] w-full lg:w-[424px]'>
                                Join Haelsoft’s Learn SQL course and become proficient in one of the most valuable skills in today’s data-driven world. Empower yourself to manage, analyze, and make data work for you.
                            </p>
                        </div>
                        <div className='pt-[180px] flex flex-col justify-center items-start gap-8'>
                            <div className='flex flex-col justify-center items-start gap-4'>
                                <h1 className='text-[#201A18] font-semibold text-[1.5rem] leading-[29.26px]'>What You'll Learn</h1>
                                <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <div className='flex flex-col justify-center items-start gap-6 w-full lg:w-[274px]'>
                                    <h2 className='text-[#201A18] text-[.875rem] leading-[30px] font-semibold'>
                                        SQL Fundamentals 
                                    </h2>
                                    <p className='text-[#201A18] font-normal text-[1rem] leading-[30px]'>
                                        Understand databases, tables, rows, and columns.
                                    </p>
                                </div>
                                <div className='flex flex-col justify-center items-start gap-6 w-full lg:w-[274px]'>
                                    <h2 className='text-[#201A18] text-[.875rem] leading-[30px] font-semibold'>
                                        Query Writing
                                    </h2>
                                    <p className='text-[#201A18] font-normal text-[1rem] leading-[30px]'>
                                        Learn to retrieve, filter, and manipulate data with SELECT, WHERE, and JOIN statements.
                                    </p>
                                </div>
                                <div className='flex flex-col justify-center items-start gap-6 w-full lg:w-[274px]'>
                                    <h2 className='text-[#201A18] text-[.875rem] leading-[30px] font-semibold'>
                                        Data Management
                                    </h2>
                                    <p className='text-[#201A18] font-normal text-[1rem] leading-[30px]'>
                                        Insert, update, and delete records efficiently.
                                    </p>
                                </div>
                                <div className='flex flex-col justify-center items-start gap-6 w-full lg:w-[274px]'>
                                    <h2 className='text-[#201A18] text-[.875rem] leading-[30px] font-semibold'>
                                        Advanced SQL Techniques
                                    </h2>
                                    <p className='text-[#201A18] font-normal text-[1rem] leading-[30px]'>
                                        Master subqueries, indexes, and stored procedures for complex operations.
                                    </p>
                                </div>
                                <div className='flex flex-col justify-center items-start gap-6 w-full lg:w-[274px]'>
                                    <h2 className='text-[#201A18] text-[.875rem] leading-[30px] font-semibold'>
                                        Data Analysis
                                    </h2>
                                    <p className='text-[#201A18] font-normal text-[1rem] leading-[30px]'>
                                        Use SQL to aggregate and analyze data, generate reports, and extract meaningful insights.
                                    </p>
                                </div>
                                <div className='flex flex-col justify-center items-start gap-6 w-full lg:w-[274px]'>
                                    <h2 className='text-[#201A18] text-[.875rem] leading-[30px] font-semibold'>
                                        Database Design
                                    </h2>
                                    <p className='text-[#201A18] font-normal text-[1rem] leading-[30px]'>
                                        Learn how to create and optimize database structures.
                                    </p>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
                <Image className='absolute top-0 right-0 z-10' src={img} alt=''></Image>
            </div>
        </section>


        <section className='flex flex-col justify-center items-center gap-20 py-[100px]'>
            <h1 className='text-[#201A18] text-[1.75rem] leading-[34.13px] font-bold'>Leading Businesses Need SQL Skills</h1>
            
            <div className='w-full py-6 flex flex-col gap-[3em] bg-[#F2F2F2]'>
                
                <div className="flex justify-center items-center gap-6 clients h-[120px]">
                    <Splide
                        extensions={{ AutoScroll }}
                        options={{
                        type: "loop",
                        gap: "30px",
            
                        pauseOnHover: false,
                        pauseOnFocus: false,
                        perPage: 8,
                        arrows: false,
                        pagination: false,
                        autoScroll: { pauseOnHover: false, speed: 1 },
                        }}
                        className="flex items-center justify-center w-full h-[120px] gap-20"
                        aria-label="My Favorite Images"
                    >
                        
                        <SplideSlide className="w-[97px] h-[120px] flex items-center justify-center">
                            <Image width={150} height={150} src={edo} alt="Edo State Government"></Image>
                        </SplideSlide>
                        <SplideSlide className="w-[97px] h-[120px] flex items-center justify-center">
                            <Image width={150} height={150} src={esi} alt="Edo State Investment Promotion Office"></Image>
                        </SplideSlide>
                        <SplideSlide className="w-[97px] h-[120px] flex items-center justify-center">
                            <Image width={150} height={150} src={farm} alt="Farm Industria"></Image>
                        </SplideSlide>
                        <SplideSlide className="w-[97px] h-[120px] flex items-center justify-center">
                            <Image width={150} height={150} src={giz} alt="Giz"></Image>
                        </SplideSlide>

                        <SplideSlide className="w-[97px] h-[120px] flex items-center justify-center">
                            <Image width={150} height={150} src={gro} alt="Grovane"></Image>
                        </SplideSlide>
                        <SplideSlide className="w-[97px] h-[120px] flex items-center justify-center">
                            <Image width={150} height={150} src={fin} alt="Fincra"></Image>
                        </SplideSlide>
                        <SplideSlide className="w-[97px] h-[120px] flex items-center justify-center">
                            <Image width={150} height={150} src={goo} alt="Google"></Image>
                        </SplideSlide>

                        <SplideSlide className="w-[97px] h-[120px] flex items-center justify-center">
                            <Image width={150} height={150} src={srv} alt="SRV Grid Limited"></Image>
                        </SplideSlide>
                    </Splide>
                </div>
                <div className="flex justify-center items-center gap-6 clients h-[120px]">
                    <Splide
                        extensions={{ AutoScroll }}
                        options={{
                        type: "loop",
                        gap: "30px",
            
                        pauseOnHover: false,
                        pauseOnFocus: false,
                        perPage: 8,
                        arrows: false,
                        pagination: false,
                        autoScroll: { pauseOnHover: false, speed: 1 },
                        }}
                        className="flex items-center justify-center w-full h-[120px] gap-20"
                        aria-label="My Favorite Images"
                    >
                        <SplideSlide className="w-[97px] h-[120px] flex items-center justify-center">
                            <Image width={150} height={150} src={ser} alt="Servo"></Image>
                        </SplideSlide>
                        <SplideSlide className="w-[97px] h-[120px] flex items-center justify-center">
                            <Image width={150} height={150} src={kle} alt="Kleenol"></Image>
                        </SplideSlide>
                        <SplideSlide className="w-[97px] h-[120px] flex items-center justify-center">
                            <Image width={150} height={150} src={kor} alt="Korahq"></Image>
                        </SplideSlide>
                        <SplideSlide className="w-[97px] h-[120px] flex items-center justify-center">
                            <Image width={150} height={150} src={kus} alt="Kusnap"></Image>
                        </SplideSlide>


                        <SplideSlide className="w-[97px] h-[120px] flex items-center justify-center">
                            <Image width={150} height={150} src={lfi} alt="Leatherback Financials"></Image>
                        </SplideSlide>
                        <SplideSlide className="w-[97px] h-[120px] flex items-center justify-center">
                            <Image width={150} height={150} src={min} alt="Mintyn"></Image>
                        </SplideSlide>
                        <SplideSlide className="w-[97px] h-[120px] flex items-center justify-center">
                            <Image width={150} height={150} src={nex} alt="Nexgate Group"></Image>
                        </SplideSlide>
                        <SplideSlide className="w-[97px] h-[120px] flex items-center justify-center">
                            <Image width={150} height={150} src={val} alt="Valdo Furniture"></Image>
                        </SplideSlide>
                        <SplideSlide className="w-[97px] h-[120px] flex items-center justify-center">
                            <Image width={150} height={150} src={zen} alt="Zenith Bank"></Image>
                        </SplideSlide>
                    </Splide>
                </div>
            </div>
        </section>



        <section className='max-w-[1250px] mx-auto px-6 flex flex-col justify-center items-start gap-8'>
            <div className='flex flex-col justify-center items-start gap-4'>
                <h1 className='text-[#201A18] text-[1.75rem] leading-[34.13px] font-bold'>Why Learn SQL?</h1>
                <div className='bg-[#F1C118] rounded w-[56px] h-[5px]'></div>
            </div>
            <div className='w-full xl:w-[578px] flex flex-col justify-center items-start gap-10'>
                <div className='flex justify-between items-start gap-3'>
                    <GoCheck className='text-main text-[1.5rem]' />
                    <p className='text-[#201A18] leading-[30px] text-[1rem] font-normal'>
                        <span className='text-black font-bold'>Essential for Data Management:</span> SQL is the standard language for managing relational databases.
                    </p>
                </div>
                <div className='flex justify-between items-start gap-3'>
                    <GoCheck className='text-main text-[1.5rem]' />
                    <p className='text-[#201A18] leading-[30px] text-[1rem] font-normal'>
                        <span className='text-black font-bold'>High Demand:</span> SQL skills are sought after in IT, business intelligence, data science, and software development.
                    </p>
                </div>
                <div className='flex justify-between items-start gap-3'>
                    <GoCheck className='text-main text-[1.5rem]' />
                    <p className='text-[#201A18] leading-[30px] text-[1rem] font-normal'>
                        <span className='text-black font-bold'>Versatile Application:</span> Use SQL across various platforms, including MySQL, PostgreSQL, Microsoft SQL Server, and more.
                    </p>
                </div>
                <div className='flex justify-between items-start gap-3'>
                    <GoCheck className='text-main text-[1.5rem]' />
                    <p className='text-[#201A18] leading-[30px] text-[1rem] font-normal'>
                        <span className='text-black font-bold'>Unlock Career Opportunities:</span> Enter high-paying roles in data analysis, engineering, and database administration.
                    </p>
                </div>
                
            </div>

            <div className="relative z-20 w-full max-w-[1200px] mx-auto flex flex-col justify-center items-center gap-20 pt-24 px-6">

                <div className="w-full flex flex-col lg:flex-row justify-center items-start">
                    {/* Tab Navigation */}
                    <div className="bg-white w-full lg:w-80 flex flex-col">
                        {tabContent.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`px-6 py-3 text-left border flex justify-between items-center gap-4 hover:bg-blue-50 transition-colors ${
                            activeTab === index ? 'text-blue-600 bg-blue-50 border-blue-500' : 'text-gray-700'
                            }`}
                        >
                            <span className="text-base">{tab.title}</span>
                            <ChevronRight className="w-6 h-6" />
                        </button>
                        ))}
                        <div className="flex border-b border-l border-r">
                        <button className="w-1/2 p-4 border-r hover:bg-blue-50 transition-colors">
                            <ChevronLeft className="w-6 h-6 mx-auto" />
                        </button>
                        <button className="w-1/2 p-4 hover:bg-blue-50 transition-colors">
                            <ChevronRight className="w-6 h-6 mx-auto" />
                        </button>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="w-full bg-white lg:w-[780px] min-h-[456px] border-t-0 border lg:border-l lg:border border-gray-200 p-12">
                        <div className="flex flex-col gap-4 mb-9">
                            <h2 className="text-2xl font-semibold">
                                {tabContent[activeTab].content.heading}
                            </h2>
                            <div className="w-12 h-1 rounded bg-yellow-400"></div>
                        </div>
                        <div className="flex flex-col gap-4">
                        {tabContent[activeTab].content.paragraphs.map((paragraph, index) => (
                            <p key={index} className="text-sm leading-7 text-gray-800">
                            {paragraph}
                            </p>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className='px-6 relative h-screen'>
            <Image width={1484} height={1279} src={imgTwo} alt='Orange Background' className='top-[-30%] h-full object-cover absolute left-0 right-0 z-[5px] w-screen'></Image>

            <div className='relative z-10 flex flex-col py-[200px] lg:flex-row justify-center items-center gap-10 max-w-[1250px] mx-auto'>
                <h1 className='w-full lg:w-[213px] text-white leading-[34.13px] text-[1.75rem] font-bold'>Looking for Another Programming Language?</h1>
                <div className='w-full xl:w-[796px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px] justify-items-center'>
                    <div className='flex flex-col justify-end p-[15px] items-center w-full lg:w-[259px] h-[244px] bg-white'>
                        <button className='bg-[#FF8C53] border border-[#FF8C53] flex justify-center items-center gap-[10px] p-[10px] rounded w-[180px] h-[35px] text-white font-semibold text-[.875rem] leading-[30px] '>Learn</button>
                    </div>
                    <div className='flex flex-col justify-end p-[15px] items-center w-full lg:w-[259px] h-[244px] bg-white'>
                        <button className='bg-[#FF8C53] border border-[#FF8C53] flex justify-center items-center gap-[10px] p-[10px] rounded w-[180px] h-[35px] text-white font-semibold text-[.875rem] leading-[30px] '>Learn</button>
                    </div>
                    <div className='flex flex-col justify-end p-[15px] items-center w-full lg:w-[259px] h-[244px] bg-white'>
                        <button className='bg-[#FF8C53] border border-[#FF8C53] flex justify-center items-center gap-[10px] p-[10px] rounded w-[180px] h-[35px] text-white font-semibold text-[.875rem] leading-[30px] '>Learn</button>
                    </div>
                </div>
            </div>
        </section>
        {/* <TutorialHero/> */}
        {/* <TutorialGetStarted/> */}
        {/* <Docs/> */}
        {/* <CompaniesThatUse/> */}
        {/* <Why/> */}
        {/* <Looking/> */}
        <StartHiring contentTwo={contentTwo}/>

    </main>
  )
}

export default page