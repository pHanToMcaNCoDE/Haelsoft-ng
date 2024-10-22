import React from 'react'

const Bootcamps = () => {
  return (
    <section className='min-h-screen w-full max-w-[1200px] 2xl:max-w-[1500px] mx-auto flex flex-col justify-center items-center gap-[80px]'>
        <div className='flex flex-col justify-center items-center gap-10'>
            <h1 className='text-[2.125rem] font-semibold leading-10'>Tech & Coding Bootcamps 101</h1>
            <div className='w-[48px] h-[4px] rounded bg-[#FFCF00]'></div>
        </div>
        <div className='w-full lg:w-[1200px] flex justify-center items-start'>
            <div className='w-full lg:w-[259px] h-[455px] border border-[#E7E7E7] rounded-[2px]'>
                <div className='px-[24px] py-[12px] border-b border-[#E7E7E7] h-[97px]'></div>
                <div className='px-[24px] py-[12px] border-b border-[#E7E7E7] h-[97px]'></div>
                <div className='px-[24px] py-[12px] border-b border-[#E7E7E7] h-[97px]'></div>
                <div className='px-[24px] py-[12px] border-b border-[#E7E7E7] h-[97px]'></div>
                <div className='flex justify-center w-full'>
                    <div className='px-[1px] py-[6px] border-l border-l-[#E7E7E7] w-[130px] h-[66px]'></div>
                    <div className='px-[1px] py-[6px] border-l border-l-[#E7E7E7] w-[130px] h-[66px]'></div>
                </div>
            </div>
            <div className='w-full lg:w-[780px] h-full lg:h-[643px] border border-[#E7E7E7] rounded-[2px] px-[48px] pb-[24px] pt-[48px] flex flex-col justify-center items-start gap-7'>
                <div className='flex flex-col justify-center items-start gap-4'>
                    <h1 className='text-[1.75rem] font-semibold leading-10'>Tech & Coding Bootcamps 101</h1>
                    <div className='w-[48px] h-[4px] rounded bg-[#FFCF00]'></div>
                </div>
                <div className='flex flex-col justify-center items-start gap-4'>
                    <p className='w-full lg:w-[682px] text-[.875rem] font-normal font-6 text-black'>
                        Coding bootcamps are short, intensive training coding programs and tech courses that give students the skills they need for new careers in technology. Programming bootcamps and code schools like BrainStation have become an increasingly popular alternative to a four-year computer science degree, allowing students to gain real-world experience under the instruction of top industry professionals.
                    </p>

                    <p className='w-full lg:w-[682px] text-[.875rem] font-normal font-6 text-black'>
                        While "coding bootcamps" as a term has come to be used for digital skills training across disciplines, including courses and programs relating to web development, software development, data science, UX design, and digital marketing, the term originally was meant to describe short-term, intensive training programs in full-stack web development, software development, or software engineering.
                    </p>

                    <p className='w-full lg:w-[682px] text-[.875rem] font-normal font-6 text-black'>
                        As one of the best coding bootcamps, BrainStation provides hands-on, project-based learning, allowing students with no prior experience to learn how to use programming languages like HTML, CSS, JavaScript, Python, SQL, and more.
                    </p>

                    <p className='w-full lg:w-[682px] text-[.875rem] font-normal font-6 text-black'>
                        The goal of our coding bootcamps is to prepare you for a new career in web development, software development and engineering, data science, design, security, digital marketing, or related tech fields. To that end, bootcamp graduates also benefit from ongoing, personalized career services meant to provide guidance and support during the job search.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Bootcamps