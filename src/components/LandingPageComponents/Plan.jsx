// import React from 'react';
// import { IoCheckmark } from 'react-icons/io5';

// const Plan = () => {
//   return (
//     <section className="bg-[#F7F7F7] py-[100px] px-5">
//       <div className="max-w-[1250px] mx-auto flex flex-col gap-[4em] justify-center items-center">
//         <h1 className="text-[#F36400] text-[1.5rem] leading-9 font-semibold text-center">
//           Choose A Plan That Suits Your Corporate Needs
//         </h1>
//         <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
//           {/* Corporate Hire Plan */}
//           <div className="px-8 relative z-20 gap-[6em] w-[95%] xl:w-[592px] h-[788px] bg-white shadow-lg rounded flex flex-col justify-center items-center">
//             <div className="flex flex-col justify-center items-center">
//               <h1 className="text-[#FF8C53] text-[1.5rem] leading-[36px] font-semibold">
//                 Corporate Hire
//               </h1>
//               <p>Up to 100 employees</p>
//               <p className="text-[#FF8C53] text-[1.5rem] leading-[36px] font-semibold">
//                 N200,000/month
//               </p>
//             </div>
//             <ul className="flex flex-col gap-6 justify-center items-start">
//               <li className="text-[#655D59] flex justify-center items-center gap-5 font-medium text-[1rem] leading-[43px]">
//                 <IoCheckmark className="text-[1.5rem] text-[#F36400]" />
//                 Access to top-tier candidates across various industries.
//               </li>
//               <li className="text-[#655D59] flex justify-center items-center gap-5 font-medium text-[1rem] leading-[43px]">
//                 <IoCheckmark className="text-[1.5rem] text-[#F36400]" />
//                 Dedicated recruitment and onboarding support.
//               </li>
//               <li className="text-[#655D59] flex justify-center items-center gap-5 font-medium text-[1rem] leading-[43px]">
//                 <IoCheckmark className="text-[1.5rem] text-[#F36400]" />
//                 Customizable hiring solutions tailored to your needs.
//               </li>
//               <li className="text-[#655D59] flex justify-center items-center gap-5 font-medium text-[1rem] leading-[43px]">
//                 <IoCheckmark className="text-[1.5rem] text-[#F36400]" />
//                 Ongoing performance tracking and feedback.
//               </li>
//             </ul>
//             <button className="bg-[#F36400] text-white w-full sm:w-[290px] h-[52px] rounded p-[10px] gap-[10px] font-normal text-[1.125rem] leading-10 flex justify-center items-center">
//               Get Started
//             </button>
//           </div>

//           {/* Corporate Training Plan */}
//           <div className="px-8 relative z-20 gap-[6em] w-[95%] xl:w-[592px] h-[788px] p-[20px] bg-white shadow-lg rounded flex flex-col justify-center items-center">
//             <div className="flex flex-col justify-center items-center">
//               <h1 className="text-[#FF8C53] text-[1.5rem] leading-[36px] font-semibold">
//                 Corporate Training
//               </h1>
//               <p>Up to 200 employees</p>
//               <p className="text-[#FF8C53] text-[1.5rem] leading-[36px] font-semibold">
//                 N500,000/month
//               </p>
//             </div>
//             <ul className="flex flex-col gap-6 justify-center items-start">
//               <li className="text-[#655D59] flex justify-center items-center gap-5 font-medium text-[1rem] leading-[43px]">
//                 <IoCheckmark className="text-[1.5rem] text-[#F36400]" />
//                 Comprehensive leadership development programs.
//               </li>
//               <li className="text-[#655D59] flex justify-center items-center gap-5 font-medium text-[1rem] leading-[43px]">
//                 <IoCheckmark className="text-[1.5rem] text-[#F36400]" />
//                 Technical and soft skills training for all departments.
//               </li>
//               <li className="text-[#655D59] flex justify-center items-center gap-5 font-medium text-[1rem] leading-[43px]">
//                 <IoCheckmark className="text-[1.5rem] text-[#F36400]" />
//                 Tailored programs for industry-specific requirements.
//               </li>
//               <li className="text-[#655D59] flex justify-center items-center gap-5 font-medium text-[1rem] leading-[43px]">
//                 <IoCheckmark className="text-[1.5rem] text-[#F36400]" />
//                 On-demand webinars and access to expert trainers.
//               </li>
//             </ul>
//             <button className="bg-[#F36400] text-white w-full sm:w-[290px] h-[52px] rounded p-[10px] gap-[10px] font-normal text-[1.125rem] leading-10 flex justify-center items-center">
//               Get Started
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Plan;


import React from 'react'
import img from '../../../public/assets/EdTech Platform (5) 2.svg';
import Image from 'next/image';

const Plan = () => {
  return (
    <section className=' bg-[#F36400] relative w-full px-5 my-[8em]'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8 max-w-[1200px] 2xl:max-w-[1500px] mx-auto py-[100px]'>
                <div className='flex flex-col gap-10'>
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-[1.875rem] lg:text-[2.625rem] text-white font-semibold leading-[54px] w-full lg:w-[520px]'>How Corporate Hire Works</h1>
                        <div className='bg-[#F1C118] h-[4px] w-[56px] rounded'></div>
                    </div>
                    <p className='text-lg font-normal text-white'>Simplifying the hiring process with a structured and impactful approach:</p>
                    <div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-[2em] lg:gap-[4em] xl:gap-[2em]'>
                        <div className='w-full lg:w-[246px] xl:w-[296px] flex flex-col justify-center items-start gap-3'>
                            <h1 className='font-semibold text-lg text-white'>Consultation:</h1>
                            <p className='text-base font-normal text-white'>
                                We engage with your team to understand your goals and challenges.
                            </p>
                        </div>
                        <div className='w-full lg:w-[246px] xl:w-[296px] flex flex-col justify-center items-start gap-3'>
                            <h1 className='font-semibold text-lg text-white'>Customization:</h1>
                            <p className='text-base font-normal text-white'>
                                We design training programs that align with your needs.
                            </p>
                        </div>
                        <div className='w-full lg:w-[246px] xl:w-[296px] flex flex-col justify-center items-start gap-3'>
                            <h1 className='font-semibold text-lg text-white'>Delivery:</h1>
                            <p className='text-base font-normal text-white'>
                                Seamless implementation through our user-friendly platform.
                            </p>
                        </div>
                        <div className='w-full lg:w-[246px] xl:w-[296px] flex flex-col justify-center items-start gap-3'>
                            <h1 className='font-semibold text-lg text-white'>Evaluation:</h1>
                            <p className='text-base font-normal text-white'>
                                We assess outcomes and provide insights to enhance future learning initiatives.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-end items-center mt-[9%]'>
                    <Image width={606} height={446} className='w-full lg:w-[606px] object-contain' src={img} alt="Group Working" />
                </div>
            </div>
        </section>
  )
}

export default Plan