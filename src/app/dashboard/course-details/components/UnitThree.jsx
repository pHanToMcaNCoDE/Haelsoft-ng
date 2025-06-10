import React from 'react'
import { GoGlobe } from "react-icons/go";

const UnitThree = () => {
  return (
    <div className='bg-[#F36400] w-full min-h-screen relative'>
        <div className='flex justify-start items-start max-w-[1260px] mx-auto'>
            <div className='w-[6%] md:w-[4%] flex flex-col items-center relative'>
                <div className='bg-white absolute top-[7%] md:top-[10%] w-6 h-6 rounded-full'></div>
                <div className='bg-white w-[5px] h-[1850px] md:h-[1350px] xl:h-[1115px]'></div>
            </div>
            <div className='w-[94%] md:w-[96%] px-3 md:px-0 min-h-screen xl:h-[1115px] pt-[100px] flex flex-col justify-start items-start gap-[40px]'>
                <div className='flex flex-col justify-start items-start'>
                    <h1 className='text-white font-semibold text-[1.5rem] leading-[43px]'>Unit 3</h1>
                    <p className='text-white font-semibold text-[1.5rem] leading-[43px]'>Data Modeling</p>
                </div>
                <div className='flex flex-col gap-[20px]'>
                    <p className='font-semibold leading-[43px] text-base text-white w-full md:w-[57%]'>
                        Learn to create models that allow complex data to be analyzed, manipulated, extracted, and reported upon accurately as a Data Scientist. You will get details on Unified Modeling Language (UML), normalization, incorporating business rules, handling temporal data, and analytical database design. Learn to build linear and categorical models, understanding how to use them to make predictive analysis.                    
                    </p>
                </div>
                <div className='md:w-[623px] h-[81px] flex flex-col md:flex-row gap-x-3 justify-between items-start my-[4em] md:my-[2em]'>
                    <p className='text-white text-[1.25rem] leading-[43px] font-semibold'>Relevant Skills:</p>
                    <div className='flex flex-col justify-start md:justify-center items-start md:items-center gap-3 md:mx-auto'>
                        <div className='flex flex-wrap flex-row justify-start md:justify-center items-start md:items-center gap-3'>
                            <button className='bg-white text-[#F36400] text-[.75rem] leading-[43px] font-normal py-1 px-[10px] rounded gap-1 h-[51px]'>Statistics</button>
                            <button className='bg-white text-[#F36400] text-[.75rem] leading-[43px] font-normal py-1 px-[10px] rounded gap-1 h-[51px]'>Data Modeling</button>
                            <button className='bg-white text-[#F36400] text-[.75rem] leading-[43px] font-normal py-1 px-[10px] rounded gap-1 h-[51px]'>Predictive Analysis & Extrapolation</button>
                        </div>
                        <div className='flex flex-wrap flex-row justify-start md:justify-center items-start md:items-center gap-3'>
                            <button className='bg-white text-[#F36400] text-[.75rem] leading-[43px] font-normal py-1 px-[10px] rounded gap-1 h-[51px]'>Hypothesis testing</button>
                            <button className='bg-white text-[#F36400] text-[.75rem] leading-[43px] font-normal py-1 px-[10px] rounded gap-1 h-[51px]'>Python Data Visualization</button>
                        </div>
                    </div>
                </div>
                <div className='mt-[2em] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-start gap-10 mx-auto'>
                    <div>
                        <GoGlobe className='text-[2.25rem] text-white' />
                        <h1 className='text-[1.25rem] font-semibold leading-[43px] text-white'>Statistics For Data Science</h1>
                        <p className='text-base font-medium leading-[25px] md:w-[354px] text-white'>
                            Learn the fundamentals of statistics, including probability, distribution, hypotheses, and CLT (Central Limit Theorem), and how to use them in your data analysis.
                        </p>
                    </div>
                    <div>
                        <GoGlobe className='text-[2.25rem] text-white' />
                        <h1 className='text-[1.25rem] font-semibold leading-[43px] text-white'>Hypothesis Testing</h1>
                        <p className='text-base font-medium leading-[25px] md:w-[307px] text-white'>
                            Explore how Data Scientists use hypotheses to support or refute the statements for distribution. Learn about the Sampling Distribution concept to statistical importance to your data.
                        </p>
                    </div>
                    <div>
                        <GoGlobe className='text-[2.25rem] text-white' />
                        <h1 className='text-[1.25rem] font-semibold leading-[43px] text-white'>Data Modeling</h1>
                        <p className='text-base font-medium leading-[25px] md:w-[395px] text-white'>
                            Learn various modeling techniques for quantity and quality data. Master how to use data models on real datasets to understand trends and make predictions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UnitThree