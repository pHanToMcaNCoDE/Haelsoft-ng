'use client'

import React, { useState } from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { GoCheck } from 'react-icons/go';

const Why = () => {
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
        // {
        //     title: "What Is a Digital Marketing Certification?Will a Digital Marketing Certification Get Me a Job?",
        //     content: {
        //     heading: "What Is a Digital Marketing Certification?Will a Digital Marketing Certification Get Me a Job?",
        //     paragraphs: [
        //         "When trying to determine your tech career path, the first step is to understand where your interests and passions truly lie. Do you have a good sense of computer science fundamentals? Are you excited about the idea of building a website? Take a look at full-stack web development and the kinds of careers you can have after taking a web development bootcamp. Are you good with numbers and like identifying trends (that would have remained hidden)? A career in data science might be for you. Asking yourself questions like these will help guide your job search and the kind of training you need.",
        //         "From there, take stock of the skills and experience you currently have – whether or not they are in computer science. Is there any overlap with skills that are most in demand? Does your education and professional experience lend itself to an emerging field like data science, software, development, or digital marketing?",
        //     ]
        //     }
        // },
        // {
        //     title: "How Long Are Our Coding Bootcamps?",
        //     content: {
        //     heading: "How Long Are Our Coding Bootcamps?",
        //     paragraphs: [
        //         "Haelsoft's coding bootcamps generally take three months to complete on a full-time basis — 12 weeks.",
        //         "In that time, you will develop a comprehensive understanding of web development, data science, user experience design, or digital marketing fundamentals, and learn how to apply these new skills and knowledge. Haelsoft bootcamps are immersive and project-based, allowing you to build a portfolio of completed projects by the end of the bootcamp..",
        //         "For students seeking more flexibility, Haelsoft also offers part-time bootcamps, which are completed over eight months.",
        //     ]
        //     }
        // }
    ];
  return (
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

        <div className="relative z-20 bg-white w-full max-w-[1200px] mx-auto flex flex-col justify-center items-center gap-20 pt-24 px-6">

            <div className="w-full flex flex-col lg:flex-row justify-center items-start">
            {/* Tab Navigation */}
            <div className="w-full lg:w-80 flex flex-col">
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
            <div className="w-full lg:w-[780px] min-h-[456px] border-t-0 border lg:border-l lg:border border-gray-200 p-12">
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
  )
}

export default Why