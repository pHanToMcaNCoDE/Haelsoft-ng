import Image from 'next/image'
import React from 'react'
import img from '../../../public/assets/EdTech Platform Image 1.svg';
import org from '../../../public/EdTech Platform Vector 13.svg';

const TutorialGetStarted = () => {
  return (
    <section className='bg-[#F7F7F7] relative'>
        <div className='flex flex-col justify-between items-center gap-10'>
            <div className='py-[100px] flex flex-col justify-center items-start gap-20 2xl:gap-[150px] max-w-[1250px] mx-auto px-6'>
                <div className='flex flex-col justify-center items-start gap-4'>
                    {/* <Image width={40} height={40} className='object-cover' src={} alt='Box Vector'></Image> */}
                    <h1 className='text-[#201A18] text-[1.75rem] leading-bold leading-[34.13px]'>Get Started</h1>
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
  )
}

export default TutorialGetStarted