import React from 'react'
import { GoGlobe } from "react-icons/go";

const UnitTwo = () => {
  return (
    <div className='bg-white w-full min-h-screen relative'>
        <div className='flex justify-start items-start max-w-[1260px] mx-auto'>
            <div className='w-[6%] md:w-[4%] flex flex-col items-center relative'>
                <div className='bg-[#F36400] absolute top-[7%] md:top-[10%] w-6 h-6 rounded-full'></div>
                <div className='bg-[#F36400] w-[5px] h-[1750px] md:h-[1300px] xl:h-[1115px]'></div>
            </div>
            <div className='w-[94%] md:w-[96%] px-3 md:px-0 min-h-screen xl:h-[1115px] pt-[100px] flex flex-col justify-start items-start gap-[40px]'>
                <div className='flex flex-col justify-start items-start'>
                    <h1 className='text-[#F36400] font-semibold text-[1.5rem] leading-[43px]'>Unit 2</h1>
                    <p className='text-[#F36400] font-semibold text-[1.5rem] leading-[43px]'>Introduction To Data Science</p>
                </div>
                <div className='flex flex-col gap-[20px]'>
                    <p className='font-semibold leading-[43px] text-base text-[#655D59] w-full md:w-[57%]'>
                        Real-world data are commonly messy, distributed, and heterogeneous. This course introduces core concepts of data cleaning, standardization, and data integration, which are aimed at using Python to convert and map raw data into other formats that allow more efficient and convenient use and analysis of data. The courses also discuss data quality, management, and storage issues relevant to data analytics.
                    </p>
                </div>
                <div className='md:w-[576px] h-[51px] flex gap-x-3 items-center my-[2em] flex-wrap'>
                    <p className='text-[#655D59] text-[1.25rem] leading-[43px] font-semibold'>Relevant Skills:</p>
                    <button className='text-white bg-[#F36400] text-[.75rem] leading-[43px] font-normal py-1 px-[10px] rounded gap-1 h-[51px]'>Data Wrangling</button>
                    <button className='text-white bg-[#F36400] text-[.75rem] leading-[43px] font-normal py-1 px-[10px] rounded gap-1 h-[51px]'>Data Analysis</button>
                    <button className='text-white bg-[#F36400] text-[.75rem] leading-[43px] font-normal py-1 px-[10px] rounded gap-1 h-[51px]'>Data Visualization</button>
                </div>
                <div className='mt-[2em] grid grid-cols-1 xl:grid-cols-2 place-items-start gap-10 '>
                    <div className='flex flex-col justify-start items-start gap-4'>
                        <GoGlobe className='text-[2.25rem] text-[#F36400]' />
                        <h1 className='text-[1.25rem] font-semibold leading-[43px] text-black'>Prepare Data</h1>
                        <p className='text-base font-medium leading-[43px] md:w-[542px] text-[#655D59]'>
                            Understand the fundamentals of data wrangling and cleaning to prepare your data sets for statistical analysis, modeling, and essential insights.
                        </p>
                    </div>
                    <div className='flex flex-col justify-start items-start gap-4'>
                        <GoGlobe className='text-[2.25rem] text-[#F36400]' />
                        <h1 className='text-[1.25rem] font-semibold leading-[43px] text-black'>Beautiful Data Visualization</h1>
                        <p className='text-base font-medium leading-[43px] md:w-[542px] text-[#655D59]'>
                            Learn to use Python packages to create different types of data visualization. You can also master using other data visualizations for various use cases in the real world.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UnitTwo