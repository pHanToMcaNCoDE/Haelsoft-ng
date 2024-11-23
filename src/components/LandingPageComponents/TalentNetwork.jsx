import Image from 'next/image'
import React from 'react'
import img from '../../../public/EdTech Platform (6).svg';
import { FaChalkboardTeacher, FaDigitalTachograph, FaHandsHelping } from 'react-icons/fa';
import { FaCode, FaIndustry } from 'react-icons/fa6';

const TalentNetwork = () => {
  return (
    <section className='max-w-[1600px] ml-auto min-h-screen relative flex flex-col justify-start items-center lg:flex-row'>
        <div className="flex-1 py-[100px] flex flex-col justify-center items-start gap-20">
            {/* Title */}
            <h1 className="text-main text-[2.063rem] font-bold leading-[43px]">
            Our Corporate Training Solutions Include:
            </h1>

            {/* Training Solutions */}
            <div className="flex flex-col gap-[70px]">
                {/* Leadership Development */}
                <div className="flex flex-col gap-4 justify-center items-start w-full xl:w-[512px]">
                    <FaChalkboardTeacher size={36} className="text-main" />
                    <div className="flex flex-col gap-2">
                    <h2 className="text-[#655D59] text-[1.125rem] font-semibold">
                        Leadership Development
                    </h2>
                    <p className="text-[#655D59] text-[1rem] leading-[24px] font-normal">
                        Empower your leaders with the tools to inspire, manage change, and drive success.
                    </p>
                    </div>
                </div>

                {/* Technical Skills Training */}
                <div className="flex flex-col gap-4 justify-center items-start w-full xl:w-[512px]">
                    <FaCode size={36} className="text-main" />
                    <div className="flex flex-col gap-2">
                    <h2 className="text-[#655D59] text-[1.125rem] font-semibold">
                        Technical Skills Training
                    </h2>
                    <p className="text-[#655D59] text-[1rem] leading-[24px] font-normal">
                        Equip your teams with the latest technical skills relevant to their roles and industries.
                    </p>
                    </div>
                </div>

                {/* Digital Transformation */}
                <div className="flex flex-col gap-4 justify-center items-start w-full xl:w-[512px]">
                    <FaDigitalTachograph size={36} className="text-main" />
                    <div className="flex flex-col gap-2">
                    <h2 className="text-[#655D59] text-[1.125rem] font-semibold">
                        Digital Transformation
                    </h2>
                    <p className="text-[#655D59] text-[1rem] leading-[24px] font-normal">
                        Help your workforce embrace technology to enhance efficiency and competitiveness.
                    </p>
                    </div>
                </div>

                {/* Soft Skills Enhancement */}
                <div className="flex flex-col gap-4 justify-center items-start w-full xl:w-[512px]">
                    <FaHandsHelping size={36} className="text-main" />
                    <div className="flex flex-col gap-2">
                    <h2 className="text-[#655D59] text-[1.125rem] font-semibold">
                        Soft Skills Enhancement
                    </h2>
                    <p className="text-[#655D59] text-[1rem] leading-[24px] font-normal">
                        Improve communication, teamwork, and problem-solving capabilities for a well-rounded workforce.
                    </p>
                    </div>
                </div>

                {/* Industry-Specific Training */}
                <div className="flex flex-col gap-4 justify-center items-start w-full xl:w-[512px]">
                    <FaIndustry size={36} className="text-main" />
                    <div className="flex flex-col gap-2">
                    <h2 className="text-[#655D59] text-[1.125rem] font-semibold">
                        Industry-Specific Training
                    </h2>
                    <p className="text-[#655D59] text-[1rem] leading-[24px] font-normal">
                        Customized programs tailored to the unique challenges of your sector.
                    </p>
                    </div>
                </div>
            </div>
        </div>
        <Image className='absolute right-0 top-0' src={img} alt='Talents'></Image>

    </section>
  )
}

export default TalentNetwork