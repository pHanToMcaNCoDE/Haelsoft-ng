import React from 'react';

const BuildYourPortfolio = ({ courses }) => {
  // Check if courses and its nested properties are defined
  if (!courses || !courses.portfolio || !courses.portfolio.description) {
    return <div>No portfolio information available.</div>;
  }

  return (
    <section className='bg-[#FF8C53] w-full min-h-screen py-[200px] px-3 lg:px-0'>
      <div className='max-w-[1260px] mx-auto px-3 md:px-0 flex justify-between items-center'>
        <div className='w-full md:w-[50%] h-full'>
          <div className='bg-white md:w-[635px] md:h-[754px] flex flex-col justify-start items-start gap-[40px] pt-[5em] px-[2em] md:px-[6em]'>
            <h1 className='text-[#FF8C53] text-[1.75rem] leading-[43px] font-semibold'>
              Build Your Interview-Ready {courses.course_title} Portfolio
            </h1>
            <p className='text-[1.125rem] text-grayTwo leading-10 font-medium'>
              {courses.portfolio.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildYourPortfolio;
