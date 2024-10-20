import React from 'react'
import { BsHourglassTop } from 'react-icons/bs'
import { FaBarsProgress } from 'react-icons/fa6'
import { GrCertificate, GrDirections } from 'react-icons/gr'

const BenefitCards = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 justify-items-start gap-10 xl:gap-x-[5em] 2xl:gap-8'>
        <div className='bg-white shadow-xl flex flex-col justify-start items-start border-t-4 border-t-[#F36400] w-full xl:w-[350px] 2xl:w-[430px] h-[350px] p-5 2xl:p-10 gap-10'>
            <FaBarsProgress className='text-[2.5rem] text-[#F36400]' />
            <div className='flex flex-col gap-4'>
                <h1 className='text-[1.25rem] text-black font-bold leading-5'>Progress Tracking</h1>
                <p className='text-base text-[#655D59] font-normal'>
                    Interactive platforms often include tracking features that allow you to monitor your progress over time. You can see how well you’re doing, identify areas that need improvement, and set goals to achieve better results.
                </p>
            </div>
        </div>
        <div className='bg-white shadow-xl flex flex-col justify-start items-start border-t-4 border-t-[#F36400] w-full xl:w-[350px] 2xl:w-[430px] h-[350px] p-7 2xl:p-10 gap-10'>
            <GrDirections className='text-[2.5rem] text-[#F36400]' />
            <div className='flex flex-col gap-4'>
                <h1 className='text-[1.25rem] text-black font-bold leading-5'>Increased Flexibility</h1>
                <p className='text-base text-[#655D59] font-normal'>
                    Online interactive learning allows you to study at your own pace and on your own schedule. This flexibility makes it easier to fit learning into your daily routine, balancing it with other responsibilities.
                </p>
            </div>
        </div>
        <div className='bg-white shadow-xl flex flex-col justify-start items-start border-t-4 border-t-[#F36400] w-full xl:w-[350px] 2xl:w-[430px] h-[350px] p-10 lg:p-7 2xl:p-10 gap-10'>
            <BsHourglassTop className='text-[2.5rem] text-[#F36400]' />
            <div className='flex flex-col gap-4'>
                <h1 className='text-[1.25rem] text-black font-bold leading-5'>Self-Paced Learning</h1>
                <p className='text-base text-[#655D59] font-normal'>Interactive platforms let you revisit lessons, pause when needed, and learn at your own pace. This control over your learning pace helps with better absorption of content.</p>
            </div>
        </div>
        <div className='bg-white shadow-xl flex flex-col justify-start items-start border-t-4  border-t-[#F36400] w-full xl:w-[350px] 2xl:w-[430px] h-[350px] p-10 lg:p-7 2xl:p-10 gap-10'>
            <GrCertificate className='text-[2.5rem] text-[#F36400]' />
            <div className='flex flex-col gap-4'>
                <h1 className='text-[1.25rem] text-black font-bold leading-5'>Certification Benefits</h1>
                {/* <p className='text-base text-[#655D59] font-normal'>
                    Certificates offer key benefits:
                </p> */}
                <ul className='px-5 flex flex-col'>
                    <li className='list-disc text-[#655D59] text-base font-normal'>Career Advancement</li>
                    <li className='list-disc text-[#655D59] text-base font-normal'>Recognition of Achievement</li>
                    <li className='list-disc text-[#655D59] text-base font-normal'>Motivation and Focus</li>
                    <li className='list-disc text-[#655D59] text-base font-normal'>Professional Development</li>
                    <li className='list-disc text-[#655D59] text-base font-normal'>Networking Opportunities</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default BenefitCards