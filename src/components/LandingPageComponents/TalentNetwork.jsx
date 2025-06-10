import Image from 'next/image'
import React from 'react'
import img from '../../../public/solution.jpg';
import { FaChalkboardTeacher, FaDigitalTachograph, FaHandsHelping } from 'react-icons/fa';
import { FaCode, FaIndustry } from 'react-icons/fa6';

const TalentNetwork = () => {
  return (
    <section className='w-full bg-main flex flex-col lg:flex-row justify-between overflow-hidden xl:h-screen'>
        <div className='w-full lg:w-[50%] ml-auto h-full relative flex flex-col justify-start items-start px-8 py-[64px] lg:py-[100px] gap-10'>
            
            <h1 className="text-white text-[1.75rem] lg:text-[2.063rem] font-bold leading-[43px]">
                Our Corporate Training Solutions Include:
            </h1>
            <div className="flex flex-col gap-4 justify-center items-start w-full">
                <p className="text-[#e5e5e5] text-[1.125rem] lg:text-[1.25rem] leading-[28px] mb-8">
                    Empower your workforce with comprehensive leadership development programs designed to inspire, navigate change effectively, and drive organizational success. We equip your leaders with the tools needed to foster innovation and resilience in a competitive business environment.
                </p>
                <p className="text-[#e5e5e5] text-[1.125rem] lg:text-[1.25rem] leading-[28px] mb-8">
                    Equip your teams with the technical skills needed to stay ahead in today’s rapidly evolving industries. Our training ensures your employees are adept at utilizing cutting-edge tools and technologies to enhance productivity and innovation.
                </p>
                <p className="text-[#e5e5e5] text-[1.125rem] lg:text-[1.25rem] leading-[28px] mb-8">
                    Enhance your organization's communication, teamwork, and problem-solving capabilities through our soft skills enhancement programs. These tailored solutions foster collaboration, adaptability, and effective interpersonal interactions.
                </p>
                <p className="text-[#e5e5e5] text-[1.125rem] lg:text-[1.25rem] leading-[28px]">
                    Finally, embrace digital transformation with training designed to help your workforce adopt and implement new technologies seamlessly. Our industry-specific programs are customized to address the unique challenges and opportunities within your sector.
                </p>
            </div>
        </div>

        <div className='w-full h-[90vh] lg:min-h-screen lg:w-[50%] object-cover' style={{ backgroundImage: `url(${img.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}></div>

    </section>
  )
}

export default TalentNetwork