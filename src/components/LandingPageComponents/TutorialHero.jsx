import React from 'react'

const TutorialHero = () => {
  return (
    <section className='bg-main py-[100px] p-6'>
        <div className='flex flex-col lg:flex-row justify-between items-center max-w-[1250px] mx-auto'>
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
  )
}

export default TutorialHero