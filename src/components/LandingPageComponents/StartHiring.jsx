import React from 'react';
import Image from 'next/image';
import opportunitiesImg from '../../../public/assets/EdTech Platform transformed.svg';
import icon from '../../../public/assets/cut-icons/Email Marketing 1.svg';

const StartHiring = () => {
  return (
    <section className='py-[100px] max-w-[1200px] 2xl:max-w-[1500px] mx-auto px-5 flex flex-col-reverse lg:flex-row justify-between lg:items-start gap-[5em]'>
          <div className='flex justify-center lg:justify-start items-center'>
            <Image
              width={720}
              height={984}
              className='w-full lg:w-[720px] object-contain'
              src={opportunitiesImg}
              alt="Current Opportunities at Haelsoft"
            />
          </div>
          <div className='h-full flex flex-col gap-[4em] md:mt-5'>
            <div className='flex flex-col gap-2'>
              <h1 className='text-[1.625rem] font-semibold leading-[45px] text-[#F36400]'>Current Opportunities</h1>
              <div className='bg-[#F1C118] h-[4px] w-[56px] rounded'></div>
            </div>
            <div className='flex flex-col gap-[2em]'>
              <p className='text-grayTwo font-normal text-base'>
                We’re always on the lookout for talented individuals to join our team. Explore opportunities in:
              </p>
              <ul className='list-disc mx-8 text-grayTwo font-normal text-base'>
                <li className='font-bold text-black'>Instructional Design & Curriculum Development</li>
                <li className='font-bold text-black'>Technology & Product Development</li>
                <li className='font-bold text-black'>Marketing & Communications</li>
                <li className='font-bold text-black'>Sales & Partnerships</li>
                <li className='font-bold text-black'>Customer Success & Support</li>
              </ul>
            </div>
            <div className='flex flex-col gap-[2em]'>
              <h2 className='text-[#F36400] text-lg font-semibold'>Let’s Build the Future Together</h2>
              <p className='text-grayTwo font-normal text-base'>
                If you’re ready to be part of something extraordinary, we’d love to hear from you. Explore our open roles or send us your resume and a cover letter at <a href="mailto:your-email@example.com" className="text-[#F36400] underline">your-email@example.com</a>.
              </p>
              <p className='text-grayTwo font-normal text-base'>
                At Haelsoft, every idea counts, every voice matters, and every effort contributes to a brighter future for Africa. Let’s create something remarkable together!
              </p>
            </div>
            <div className='flex justify-center items-center'>
              <button className='bg-[#F36400] text-white h-[52px] w-[214px] rounded flex justify-center items-center'>
                Learn More
              </button>
            </div>
          </div>
        </section>
  );
};

export default StartHiring;
