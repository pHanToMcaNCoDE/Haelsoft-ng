import React from 'react';
import { FaGlobeAfrica, FaMoneyBillWave, FaLightbulb } from 'react-icons/fa';
import img from '../../../public/hire(1).jpg';
import Image from 'next/image';

const WhyChooseHaelsoft = () => {
  return (
    <section className="w-full h-full bg-white overflow-hidden">
      <div className='max-w-[1500px] mx-auto px-5 pt-[64px] pb-[100px] lg:py-[100px] flex flex-col lg:flex-row gap-[80px] justify-center items-center'>
        <div className='w-full lg:w-[50%] h-full flex flex-col justify-center items-start gap-8'>
          <div className='flex flex-col gap-8'>
                <h1 className='text-[1.875rem] lg:text-[2.625rem] text-[#F36400] font-semibold leading-[54px] w-full md:w-[426px] lg:w-[520px]'>Why Choose Haelsoft?</h1>
                <div className='bg-[#F1C118] h-[4px] w-[56px] rounded'></div>
            </div>
          <div className='flex flex-col justify-center items-start gap-6 w-full'>
            <p className='w-full md:w-[390px] lg:w-[469px] text-[#655D59] text-[1.125rem] font-medium leading-[27px]'>
              Haelsoft is uniquely attuned to the dynamics of African markets, offering solutions tailored to your operational realities. Our training programs are designed to provide high-quality results at competitive prices, ensuring you receive exceptional value for your investment.
            </p>
            <p className='w-full md:w-[390px] lg:w-[469px] text-[#655D59] text-[1.125rem] font-medium leading-[27px]'>
              With extensive experience in digital transformation and skill development, Haelsoft delivers proven expertise to empower individuals and organizations. Our commitment to innovation and excellence ensures that we remain a trusted partner in achieving your goals.
            </p>
          </div>
        </div>
        <Image width={659} height={442} src={img} className='w-full lg:w-[50%] object-cover rounded-lg'></Image>
      </div>
    </section>
  );
};

export default WhyChooseHaelsoft;
