'use client'

import Navbar from '@/components/LandingPageComponents/Navbar';
import React, { useState } from 'react'
import img from '../../../public/EdTech Platform Vector 13.svg';
import Image from 'next/image';
import GetStarted from '@/components/LandingPageComponents/GetStarted';

const page = () => {
    const [clicked, setClicked] = useState('');
    const [boolclick, setBoolClick] = useState(false);
  
    const handlePageClick = () => {
      setBoolClick(false);
      setClicked('');
    };
  
  return (
    <main className='relative w-full' onClick={handlePageClick}>
        <Navbar 
            clicked={clicked} 
            setClicked={setClicked} 
            boolclick={boolclick} 
            setBoolClick={setBoolClick} 
        />
        <section className='w-full overflow-hidden min-h-screen'>
            <Image width={1440} height={830} className='object-cover w-full absolute z-[5px] h-screen xl:h-auto' src={img} alt='Background Image'></Image>
            <div className='pt-[200px] px-6 xl:px-0 flex flex-col lg:flex-row justify-end items-start gap-10 max-w-[1250px] mx-auto'>
                <div className='flex flex-col justify-center items-start gap-2 relative z-10 w-full xl:w-[50%]'>
                    <h1 className='w-full xl:w-[605px] font-bold leading-[55px] text-[2.75rem] text-white'>
                        How to Become a Data Scientist
                    </h1>
                    <p className='w-full xl:w-[605px] text-[#FFFFFF] leading-[30px] font-normal text-base'>
                        Data science is one of the fastest-growing fields, and it offers exciting career opportunities. Learn the key steps to become a successful data scientist.
                    </p>
                </div>
                <GetStarted/>
            </div>
        </section>

        <section className='py-[100px] max-w-[1200px] mx-auto px-6 xl:px-0 flex flex-col justify-center items-center gap-10'>
           <div className='w-full xl:w-[838px] flex flex-col justify-center items-start gap-10'>
                <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                    Data Science is a multidisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data. To become a successful data scientist, you need to follow a structured path.
                </p>
                <div className='flex flex-col justify-center items-start gap-2'>
                    <h2 className='text-[#201A18] text-base leading-[30px] font-normal'>Steps to Become a Data Scientist:</h2>
                    <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                        Follow these key steps to embark on your data science career journey.
                    </p>
                </div>
           </div>

           <div className='flex flex-col justify-center items-start gap-10 w-full xl:w-[838px]'>
                <div className='flex flex-col justify-center items-start gap-2'>
                    <h2 className='text-[#201A18] text-base leading-[30px] font-normal uppercase'>step1</h2>
                    <div className='flex flex-col justify-center items-start gap-2'>
                        <h1 className='text-[#201A18] leading-[34.13px] text-[1.75rem] font-bold'>Learn Programming Languages (Python, R, SQL)</h1>
                        <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
                    </div>
                    <div className='flex flex-col justify-center items-start gap-2'>
                        <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                            Master the essential programming languages like Python, R, and SQL to manipulate data, perform statistical analysis, and work with databases.
                        </p>
                        <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                            Learn how to write clean, efficient, and reusable code to analyze and visualize data effectively.
                        </p>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-start gap-2'>
                    <h2 className='text-[#201A18] text-base leading-[30px] font-normal uppercase'>step2</h2>
                    <div className='flex flex-col justify-center items-start gap-2'>
                        <h1 className='text-[#201A18] leading-[34.13px] text-[1.75rem] font-bold'>Understand Data Analytics and Statistics</h1>
                        <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
                    </div>
                    <div className='flex flex-col justify-center items-start gap-2'>
                        <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                            Build a strong foundation in data analytics and statistics, focusing on key concepts like hypothesis testing, regression analysis, and probability theory.
                        </p>
                        <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                            Knowing how to analyze data and draw meaningful insights will allow you to make data-driven decisions and solve real-world problems.
                        </p>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-start gap-2'>
                    <h2 className='text-[#201A18] text-base leading-[30px] font-normal uppercase'>step3</h2>
                    <div className='flex flex-col justify-center items-start gap-2'>
                        <h1 className='text-[#201A18] leading-[34.13px] text-[1.75rem] font-bold'>Learn Machine Learning Algorithms</h1>
                        <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
                    </div>
                    <div className='flex flex-col justify-center items-start gap-7'>
                        <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                            Gain proficiency in various machine learning algorithms such as supervised learning (e.g., regression, classification) and unsupervised learning (e.g., clustering, dimensionality reduction).
                        </p>
                        <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                            Learn how to implement these algorithms and apply them to solve problems in different industries.
                        </p>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-start gap-2'>
                    <h2 className='text-[#201A18] text-base leading-[30px] font-normal uppercase'>step4</h2>
                    <div className='flex flex-col justify-center items-start gap-2'>
                        <h1 className='text-[#201A18] leading-[34.13px] text-[1.75rem] font-bold'>Master Data Visualization Tools</h1>
                        <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
                    </div>
                    <div className='flex flex-col justify-center items-start gap-7'>
                        <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                            Data visualization is crucial for communicating complex findings. Learn to use tools like Tableau, Power BI, and libraries like Matplotlib and Seaborn in Python to create compelling visualizations.
                        </p>
                        <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                            Develop the skill to present your findings in a way that is easy for both technical and non-technical audiences to understand.
                        </p>
                    </div>
                </div>
            </div>

            <div className='w-full xl:w-[977px] flex flex-col justify-center items-start gap-20 pt-[200px]'>
                    <div className='flex flex-col justify-center items-start gap-4'>
                        <h1 className='text-[#201A18] leading-[34.13px] text-[1.75rem] font-bold'>Learn Data Science Tools and Technologies</h1>
                        <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
                    </div>
                    
                    <div className='flex flex-col justify-center items-start gap-2 w-full xl:w-[838px] mx-auto'>
                        <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                            Gain familiarity with popular data science tools like Jupyter Notebooks, Anaconda, and Git for version control. Understanding these tools is key to working efficiently as a data scientist.  
                        </p>
                        <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                            These tools will help you streamline your workflow, collaborate with teams, and manage your projects effectively.
                        </p>
                    </div>
            </div>

            <div className='w-full xl:w-[977px] flex flex-col justify-center items-start gap-4 pt-[60px]'>
                <div className='flex flex-col justify-center items-start gap-4'>
                    <h1 className='text-[#201A18] leading-[34.13px] text-[1.75rem] font-bold'>
                        Work on Real-World Projects
                    </h1>
                    <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
                </div>
                <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                    Apply your skills by working on real-world projects, participating in data science competitions, or contributing to open-source projects. This will help you build a portfolio that demonstrates your expertise and increases your employability.
                </p>
            </div>
        </section>
    </main>
  )
}

export default page;
