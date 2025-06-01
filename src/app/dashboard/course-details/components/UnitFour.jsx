import React from 'react'
import { GoGlobe } from "react-icons/go";

const UnitFour = () => {
  return (
    <div className='bg-white w-full min-h-screen relative'>
        <div className='flex justify-start items-start max-w-[1260px] mx-auto'>
            <div className='w-[6%] md:w-[4%] flex flex-col items-center relative'>
                <div className='bg-[#F36400] absolute top-[10%] w-6 h-6 rounded-full'></div>
                <div className='bg-[#F36400] w-[5px] h-[1850px] md:h-[1500px] lg:h-[1115px]'></div>
            </div>
            <div className='w-[94%] md:w-[96%] px-3 md:px-0 min-h-screen lg:h-[1115px] pt-[100px] flex flex-col justify-start items-start gap-[40px]'>
                <div className='flex flex-col justify-start items-start'>
                    <h1 className='text-[#F36400] font-semibold text-[1.5rem] leading-[43px]'>Unit 4</h1>
                    <p className='text-[#F36400] font-semibold text-[1.5rem] leading-[43px]'>Introduction To Machine Learning</p>
                </div>
                <div className='flex flex-col gap-[20px]'>
                    <p className='font-semibold leading-[43px] text-base text-grayTwo w-full md:w-[57%]'>
                        Machine learning is the core technology under the recent developments of artificial intelligence (AI), and it is applied widely in several domains. This course unit will provide you with the necessary theoretical background to understand the fundamental machine learning concepts and to use the basic methods of supervised and unsupervised learning in a proper manner to solve real-life problems. The course will prepare you for further studies in machine learning and introduce you to the methods and tools used to solve the problems in practice.                    
                    </p>
                </div>
                <div className='h-[120px] flex flex-col md:flex-row gap-x-3 justify-between items-start my-[4em] md:my-[2em]'>
                    <p className='text-grayTwo text-[1.25rem] leading-[43px] font-semibold'>Relevant Skills:</p>
                    <div className='flex flex-col justify-start md:justify-center items-start md:items-center gap-3 md:mx-auto'>
                        <div className='flex flex-row justify-start md:justify-center items-start md:items-center gap-3 flex-wrap'>
                            <button className='text-white bg-[#F36400] text-[.75rem] leading-[43px] font-normal py-1 px-[10px] rounded gap-1 h-[51px]'>Fundamentals of Machine 
                            Learning
                            </button>
                            <button className='text-white bg-[#F36400] text-[.75rem] leading-[43px] font-normal py-1 px-[10px] rounded gap-1 h-[51px]'>Decision Trees</button>
                            <button className='text-white bg-[#F36400] text-[.75rem] leading-[43px] font-normal py-1 px-[10px] rounded gap-1 h-[51px]'>Data Classification
                            Models</button>
                        </div>
                        <div className='flex flex-wrap flex-row justify-start md:justify-center items-start md:items-center gap-3'>
                            <button className='text-white bg-[#F36400] text-[.75rem] leading-[43px] font-normal py-1 px-[10px] rounded gap-1 h-[51px]'>Categorical Prediction</button>
                            <button className='text-white bg-[#F36400] text-[.75rem] leading-[43px] font-normal py-1 px-[10px] rounded gap-1 h-[51px]'>Model Evaluation</button>
                        </div>
                    </div>
                </div>
                <div className='mt-[2em] grid grid-cols-1 lg:grid-cols-2 place-items-start gap-10'>
                    <div>
                        <GoGlobe className='text-[2.25rem] text-[#F36400]' />
                        <h1 className='text-[1.25rem] font-semibold leading-[43px] text-black'>Machine Learning Basics</h1>
                        <p className='text-base font-medium leading-[25px] md:w-[465px] text-grayTwo'>
                            Learn the introduction to the fundamentals of machine learning, as well as the applications and challenges of machine learning.                         
                        </p>
                    </div>
                    <div>                       
                        <GoGlobe className='text-[2.25rem] text-[#F36400]' />
                        <h1 className='text-[1.25rem] font-semibold leading-[43px] text-black'>Machine Learning Models</h1>
                        <p className='text-base font-medium leading-[25px] md:w-[464px] h-[175px] text-grayTwo'>
                            Explore how to apply machine learning and artificial intelligence techniques to fundamental scientific problems. This will help you build vital skills, enhancing your employability in a rapidly expanding field. Learn models such as Naive Bayes classification, decision trees, cross-validation, regression models, etc.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UnitFour