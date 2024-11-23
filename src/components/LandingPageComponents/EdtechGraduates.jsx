import React from 'react';
import { FaHandsHelping, FaCogs, FaRocket, FaChartLine } from 'react-icons/fa';

const EdtechGraduates = () => {
  return (
    <section className='px-5 max-w-[1250px] mx-auto py-[100px] flex flex-col gap-[6em]'>
      <div className='flex flex-col gap-6 justify-center items-center'>
        <h1 className='text-[#F36400] font-semibold text-[1.5rem] leading-9'>How Corporate Hire Works</h1>
        <p className='w-full xl:w-[889px] text-[1.125rem] text-[#655D59] leading-[27px] font-medium text-center'>
          Simplifying the hiring process with a structured and impactful approach:
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center place-items-center gap-10'>
        {/* Consultation */}
        <div className='w-full px-[20px] flex flex-col justify-center items-start xl:w-[402px] h-[366px] rounded border-[2px] border-[#EEEEEEEE]/[93.3%]'>
          <div className='flex flex-col gap-6'>
            <div className='bg-[#FF8C53] w-[52px] h-[52px] rounded-full flex justify-center items-center'>
              <FaHandsHelping className='text-white text-[1.5rem]' />
            </div>
            <div className='flex flex-col gap-5'>
              <h2 className='text-[#F36400] text-[1.125rem] font-semibold leading-[27px]'>Consultation</h2>
              <p className='text-[#655D59] text-[1.125rem] font-medium leading-[27px]'>
                We engage with your team to understand your goals and challenges.
              </p>
            </div>
          </div>
        </div>

        {/* Customization */}
        <div className='w-full px-[20px] flex flex-col justify-center items-start xl:w-[402px] h-[366px] rounded border-[2px] border-[#EEEEEEEE]/[93.3%]'>
          <div className='flex flex-col gap-6'>
            <div className='bg-[#FF8C53] w-[52px] h-[52px] rounded-full flex justify-center items-center'>
              <FaCogs className='text-white text-[1.5rem]' />
            </div>
            <div className='flex flex-col gap-5'>
              <h2 className='text-[#F36400] text-[1.125rem] font-semibold leading-[27px]'>Customization</h2>
              <p className='text-[#655D59] text-[1.125rem] font-medium leading-[27px]'>
                We design training programs that align with your needs.
              </p>
            </div>
          </div>
        </div>

        {/* Delivery */}
        <div className='w-full px-[20px] flex flex-col justify-center items-start xl:w-[402px] h-[366px] rounded border-[2px] border-[#EEEEEEEE]/[93.3%]'>
          <div className='flex flex-col gap-6'>
            <div className='bg-[#FF8C53] w-[52px] h-[52px] rounded-full flex justify-center items-center'>
              <FaRocket className='text-white text-[1.5rem]' />
            </div>
            <div className='flex flex-col gap-5'>
              <h2 className='text-[#F36400] text-[1.125rem] font-semibold leading-[27px]'>Delivery</h2>
              <p className='text-[#655D59] text-[1.125rem] font-medium leading-[27px]'>
                Seamless implementation through our user-friendly platform.
              </p>
            </div>
          </div>
        </div>

        {/* Evaluation */}
        <div className='w-full px-[20px] flex flex-col justify-center items-start xl:w-[402px] h-[366px] rounded border-[2px] border-[#EEEEEEEE]/[93.3%]'>
          <div className='flex flex-col gap-6'>
            <div className='bg-[#FF8C53] w-[52px] h-[52px] rounded-full flex justify-center items-center'>
              <FaChartLine className='text-white text-[1.5rem]' />
            </div>
            <div className='flex flex-col gap-5'>
              <h2 className='text-[#F36400] text-[1.125rem] font-semibold leading-[27px]'>Evaluation</h2>
              <p className='text-[#655D59] text-[1.125rem] font-medium leading-[27px]'>
                We assess outcomes and provide insights to enhance future learning initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EdtechGraduates;
