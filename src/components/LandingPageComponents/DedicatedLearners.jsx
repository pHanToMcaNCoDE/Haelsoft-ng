import React from 'react'
import bg from '../../../public/assets/EdTech Platform Vector 8.svg';
import img from '../../../public/assets/EdTech Platform (2) 2.svg';
import Image from 'next/image';

const DedicatedLearners = () => {
  return (
    <section className='relative overflow-hidden min-h-screen lg:h-auto py-[100px] lg:py-0'>
        <Image height={1132} className='w-screen min-h-screen 2xl:w-screen xl:h-[1132] 2xl:h-full relative top-0 right-0 left-0' src={bg} alt="Bg" />
        <div className='absolute inset-0 px-5 max-w-[1200px] 2xl:max-w-[1500px] mx-auto flex flex-col md:flex-row md:justify-between items-center gap-6'>
            <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-white text-[1.875rem] lg:text-[2.625rem] w-full lg:w-[520px] font-semibold'>A Global Team of Passionate, Dedicated Learners </h1>
                    <div className='bg-[#F1C118] h-[4px] w-[56px] rounded'></div>
                </div>
                <div className='flex flex-col gap-5'>
                    <p className='w-full md:w-[383px] lg:w-[469px] text-white text-sm lg:text-base font-normal'>
                        We are looking for passionate, creative, and driven individuals who share our vision of making quality education accessible to all. Whether you're an educator, tech innovator, designer, strategist, or advocate for change, there’s a place for you on our team.
                    </p>
                    <p className='w-full md:w-[383px] lg:w-[469px] text-white text-sm lg:text-base font-normal'>
                        Joining our team means collaborating with like-minded individuals who value innovation, teamwork, and a commitment to excellence. Together, we aim to build impactful solutions that empower learners globally and help shape the future of education.
                    </p>
                </div>
            </div>
            <div className='mt-8'>
                <Image className='object-cover' src={img} alt="Group of people at work" />
            </div>
        </div>

    </section>
  )
}

export default DedicatedLearners