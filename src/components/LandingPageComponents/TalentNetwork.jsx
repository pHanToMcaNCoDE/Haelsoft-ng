import Image from 'next/image'
import React from 'react'
import img from '../../../public/solution.jpg';
import { FaChalkboardTeacher, FaDigitalTachograph, FaHandsHelping } from 'react-icons/fa';
import { FaCode, FaIndustry } from 'react-icons/fa6';

const TalentNetwork = () => {
  return (
    <section className='w-full bg-main flex flex-col lg:flex-row justify-between overflow-hidden xl:h-screen'>
        <div className='w-full lg:w-[50%] ml-auto h-full relative flex flex-col justify-start items-start px-8 py-[64px] lg:py-[100px] gap-10'>
            {/* <div className="flex-1 pb-[20px] pt-[100px] flex flex-col justify-center items-start gap-20 w-full md:w-[50%] px-8"> */}
                {/* Title */}
                <h1 className="text-white text-[1.75rem] lg:text-[2.063rem] font-bold leading-[43px]">
                    Our Corporate Training Solutions Include:
                </h1>

                {/* Training Solutions */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-[70px] w-full">
                    {/* Leadership Development */}
                    <div className="flex flex-col gap-4 justify-center items-start w-full">
                        <FaChalkboardTeacher size={36} className="text-white" />
                        <div className="flex flex-col gap-2">
                        <h2 className="text-[#e5e5e5] text-[1.125rem] font-semibold">
                            Leadership Development
                        </h2>
                        <p className="text-[#e5e5e5] text-[1rem] leading-[24px] font-normal">
                            Empower your leaders with the tools to inspire, manage change, and drive success.
                        </p>
                        </div>
                    </div>

                    {/* Technical Skills Training */}
                    <div className="flex flex-col gap-4 justify-center items-start w-full">
                        <FaCode size={36} className="text-white" />
                        <div className="flex flex-col gap-2">
                        <h2 className="text-[#e5e5e5] text-[1.125rem] font-semibold">
                            Technical Skills Training
                        </h2>
                        <p className="text-[#e5e5e5] text-[1rem] leading-[24px] font-normal">
                            Equip your teams with the latest technical skills relevant to their roles and industries.
                        </p>
                        </div>
                    </div>

                    {/* Digital Transformation */}
                    <div className="flex flex-col gap-4 justify-center items-start w-full">
                        <FaDigitalTachograph size={36} className="text-white" />
                        <div className="flex flex-col gap-2">
                        <h2 className="text-[#e5e5e5] text-[1.125rem] font-semibold">
                            Digital Transformation
                        </h2>
                        <p className="text-[#e5e5e5] text-[1rem] leading-[24px] font-normal">
                            Help your workforce embrace technology to enhance efficiency and competitiveness.
                        </p>
                        </div>
                    </div>

                    {/* Soft Skills Enhancement */}
                    <div className="flex flex-col gap-4 justify-center items-start w-full">
                        <FaHandsHelping size={36} className="text-white" />
                        <div className="flex flex-col gap-2">
                        <h2 className="text-[#e5e5e5] text-[1.125rem] font-semibold">
                            Soft Skills Enhancement
                        </h2>
                        <p className="text-[#e5e5e5] text-[1rem] leading-[24px] font-normal">
                            Improve communication, teamwork, and problem-solving capabilities for a well-rounded workforce.
                        </p>
                        </div>
                    </div>

                    {/* Industry-Specific Training */}
                    <div className="flex flex-col gap-4 justify-center items-start w-full">
                        <FaIndustry size={36} className="text-white" />
                        <div className="flex flex-col gap-2">
                        <h2 className="text-[#e5e5e5] text-[1.125rem] font-semibold">
                            Industry-Specific Training
                        </h2>
                        <p className="text-[#e5e5e5] text-[1rem] leading-[24px] font-normal">
                            Customized programs tailored to the unique challenges of your sector.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Image className='' src={img} alt='A Female Teacher'></Image> */}

            <div className='w-full h-[90vh] lg:min-h-screen lg:w-[50%] object-cover' style={{ backgroundImage: `url(${img.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}></div>

        {/* </div> */}
    </section>
  )
}

export default TalentNetwork