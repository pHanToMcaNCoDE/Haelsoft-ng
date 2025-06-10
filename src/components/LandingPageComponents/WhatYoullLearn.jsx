import Image from 'next/image'
import React from 'react'
import colab from '../../../public/assets/get-certificate/EdTech Platform 3.svg';

const WhatYoullLearn = ({learn}) => {
  return (
    <section className="bg-[#F36400] py-[100px] px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Left Column */}
            <div className='flex flex-col justify-center items-start gap-10'>
                <div className='flex flex-col justify-center items-start gap-[5px]'>
                    <h2 className="text-white text-[1.5rem] leading-[29.26px] font-semibold">
                        What You'll Learn?
                    </h2>
                    <div className='bg-[#F1C118] w-[56px] h-[4px] rounded-[4px]'></div>
                </div>
                {learn}
            </div>

            {/* Right Column */}
            <div className="w-full">
            <Image
                width={606}
                height={513}
                src={colab}
                alt="Team collaboration"
                className="object-cover"
            />
            </div>
        </div>
    </section>
  )
}

export default WhatYoullLearn