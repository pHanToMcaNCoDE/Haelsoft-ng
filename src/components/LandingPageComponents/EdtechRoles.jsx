import React from 'react'
import img from '../../../public/assets/Benjamin Child Unsplash.svg';
import Image from 'next/image';

const WhyChooseHaelsoft = ({why}) => {
  return (
        <section className='relative py-[100px] overflow-hidden max-w-[1200px] mx-auto 2xl:max-w-[1500px] px-5 flex flex-col md:flex-row justify-between items-center gap-8'>
            {/* <div className='flex flex-col justify-center items-start gap-10'>
                <div className='flex flex-col gap-8'>
                    <h1 className='text-[1.875rem] lg:text-[2.625rem] text-[#F36400] font-semibold leading-[54px] w-full md:w-[426px] lg:w-[520px]'>Defining the Future of Technology</h1>
                    <div className='bg-[#F1C118] h-[4px] w-[56px] rounded'></div>
                </div>
                <p className='w-full md:w-[390px] lg:w-[469px] text-[#655D59] text-base leading-6'>
                    At Haelsoft, we’re on a mission to transform lives through education and technology, empowering individuals, businesses, and governments across Africa’s 54 nations. Our work goes beyond providing learning solutions—we are shaping the future of education and unlocking the continent's potential.
                </p>
            </div> */}
            {why}
            <div className='lg:relative lg:right-[-10%]'>
                <Image className='rounded-lg' width={659} height={442} src={img} alt="Office" />
            </div>
        </section>
  );
};

export default WhyChooseHaelsoft;
