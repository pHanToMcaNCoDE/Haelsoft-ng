import React from 'react'
import { GoGlobe } from "react-icons/go";

const UnitOne = () => {
  return (
    
    <div className='bg-[#F36400] w-full min-h-screen pt-[100px] relative'>
        <div className='flex justify-start items-start max-w-[1260px] mx-auto'>
            <div className='w-[6%] md:w-[4%] flex flex-col items-center'>
                <div className='bg-white w-6 h-6 rounded-full'></div>
                <div className='bg-white w-[5px] h-[2300px] md:h-[1550px] xl:h-[1115px]'></div>
            </div>
            <div className='w-[94%] px-3 md:px-0 md:w-[96%] min-h-screen xl:h-[1115px] flex flex-col justify-start items-start gap-[40px]'>
                <div className='flex flex-col justify-start items-start'>
                    <h1 className='text-white font-semibold text-[1.5rem] leading-[43px]'>Unit 1</h1>
                    <p className='text-white font-semibold text-[1.5rem] leading-[43px]'>Introduction To Data Science</p>
                </div>
                <div className='flex flex-col gap-[20px]'>
                    <p className='font-semibold leading-[43px] text-base text-white w-full md:w-[57%]'>
                    This introductory unit provides practical experience using the programming language Python, for solving real-world data science problems, from acquiring data from public sources to understanding the data through analysis and modeling to visualizing and presenting the results.
                    </p>
                    <p className='font-semibold leading-[43px] text-base text-white w-full md:w-[57%]'>
                    You will learn how to implement the stages in the data science lifecycle, from data acquisition and cleaning to analysis, modeling, and visualization. The unit also utilizes appropriate encoding and visualization methods for data types, including categorical, numerical, and time-series data.
                    </p>
                </div>
                <div className='md:w-[576px] h-[51px] flex flex-col md:flex-row gap-x-3 items-start md:items-center my-[4em] md:my-[2em]'>
                    <p className='text-white text-[1.25rem] leading-[43px] font-semibold'>Relevant Skills:</p>
                    <div className='flex flex-wrap gap-3 items-center'>
                        <button className='bg-white text-[#F36400] text-[.75rem] leading-[43px] font-normal py-1 px-[10px] rounded gap-1 h-[51px]'>Python Coding</button>
                        <button className='bg-white text-[#F36400] text-[.75rem] leading-[43px] font-normal py-1 px-[10px] rounded gap-1 h-[51px]'>Data Organization</button>
                        <button className='bg-white text-[#F36400] text-[.75rem] leading-[43px] font-normal py-1 px-[10px] rounded gap-1 h-[51px]'>Data Manipulation</button>
                    </div>
                </div>
                <div className='mt-[2em] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-start gap-10 xl:mx-auto'>
                    <div>
                        <GoGlobe className='text-[2.25rem] text-white' />
                        <h1 className='text-[1.25rem] font-semibold leading-[43px] text-white'>Python For Data Science</h1>
                        <p className='text-base font-medium leading-[25px] md:w-[344px] text-white'>
                            Python is a programming language widely used by Data Scientists. Learn Python for data science and gain the career-building skills you need to succeed as a data scientist, from data manipulation to machine learning. You will learn how this versatile language allows you to import, clean, manipulate, and visualize data – all integral skills for any aspiring data professional or researcher.
                        </p>
                    </div>
                    <div>
                        <GoGlobe className='text-[2.25rem] text-white' />
                        <h1 className='text-[1.25rem] font-semibold leading-[43px] text-white'>Python Libraries For Data Science</h1>
                        <p className='text-base font-medium leading-[25px] md:w-[344px] text-white'>
                            Python has libraries with large collections of mathematical functions and analytical tools, making it easier to calculate mathematical problems and analyze data. You will learn libraries like Pandas and Numpy to perform real-world analysis to achieve business intelligence.
                        </p>
                    </div>
                    <div>
                        <GoGlobe className='text-[2.25rem] text-white' />
                        <h1 className='text-[1.25rem] font-semibold leading-[43px] text-white'>Data Analysis Techniques</h1>
                        <p className='text-base font-medium leading-[25px] md:w-[318px] text-white'>
                            Master how to use techniques in analyzing numerical data with the understanding and practical capabilities needed to convert data into information via appropriate analysis, how to represent these results in ways that can be readily communicated to others in the organization, and how to use the information to make evidence-based business decisions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UnitOne