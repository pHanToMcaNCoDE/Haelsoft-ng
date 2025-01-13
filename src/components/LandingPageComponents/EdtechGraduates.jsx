import Image from 'next/image';
import React from 'react';
import img from '../../../public/map.jpg';

const EdtechGraduates = () => {
  return (
    <section className='px-5 w-full mx-auto py-[100px] gap-10 flex flex-col justify-center items-center bg-main'>
      <div className='max-w-[1280px] mx-auto flex flex-col justify-center items-center gap-[6em]'>
        <div className='flex flex-col gap-6 justify-center items-center'>
          <h1 className='text-white font-bold text-[1.5rem] lg:text-[2.5rem] leading-9'>How Corporate Hire Works</h1>
          <p className='w-full xl:w-[889px] text-[1.125rem] text-[#e5e5e5] leading-[27px] font-medium text-center'>
            Simplifying the hiring process with a structured and impactful approach:
          </p>
        </div>
        <div className='max-w-[1280px] mx-auto flex flex-col lg:flex-row justify-center items-center gap-[6em]'>
          <ul className='text-left list-disc'>
            <li className='text-white text-[1.125rem] font-medium leading-[27px] pb-6'>
              <strong>Consultation:</strong> We engage with your team to understand your goals and challenges.
            </li>
            <li className='text-white text-[1.125rem] font-medium leading-[27px] pb-6'>
              <strong>Customization:</strong> We design training programs that align with your needs.
            </li>
            <li className='text-white text-[1.125rem] font-medium leading-[27px] pb-6'>
              <strong>Delivery:</strong> Seamless implementation through our user-friendly platform.
            </li>
            <li className='text-white text-[1.125rem] font-medium leading-[27px] pb-6'>
              <strong>Evaluation:</strong> We assess outcomes and provide insights to enhance future learning initiatives.
            </li>
          </ul>
          <Image width={659} height={442} src={img} className='w-full lg:w-[50%] object-cover rounded-lg'></Image>
        </div>
      </div>
    </section>
  );
};

export default EdtechGraduates;
