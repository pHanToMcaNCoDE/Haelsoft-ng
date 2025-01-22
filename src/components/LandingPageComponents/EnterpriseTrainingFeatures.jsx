import Image from "next/image";
import React from "react";
import skill from '../../../public/upskill.webp';
import corporate from '../../../public/corporate.jpg';
import support from '../../../public/support.jpg';
import teamwork from '../../../public/teamwork.jpg';
import Link from "next/link";
import obj4 from '../../../public/assets/Polygon 4.svg';

const EnterpriseTrainingFeatures = () => {
  return (
    <section className="flex flex-col justify-center items-start py-[100px] lg:pb-[200px] bg-gray-100 p-8 gap-20">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-1/2 p-4 flex flex-col justify-center items-start gap-8">
            <div className='flex flex-col gap-2'>
                <h1 className="text-2xl font-bold">Upskilling and Reskilling</h1>
                <div className='bg-[#F1C118] h-[4px] w-[56px] rounded'></div>
            </div>
            <p className="text-gray-700 mb-4">
                IT teams will continuously need to reskill to learn new skills so they can do a different job, and upskilling involves learning more skills. Your IT teams need to learn technologies in the most effective ways to perform at the highest level.
            </p>
        </div>
        <div className="lg:w-1/2 relative">
            <Image width={599} height={420} className='absolute z-[3px] left-[-10px] md:left-[-10px] lg:left-[-30px] top-[-30px] md:top-[10px] lg:top-[-40px]' src={obj4} alt="Work Family" />
            <Image
            src={skill}
            alt="Upskills"
            className="w-full relative z-10 rounded-md"
            ></Image>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        <div className="lg:w-1/2 relative">
            <Image width={599} height={420} className='absolute z-[3px] left-[-10px] md:left-[-10px] lg:left-[-30px] top-[-30px] md:top-[10px] lg:top-[-40px]' src={obj4} alt="Work Family" />
            <Image
            src={corporate}
            alt="Professionalism"
            className="w-full relative z-10 rounded-md"
            ></Image>
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center items-start gap-8">
            <div className='flex flex-col gap-2'>
                <h1 className="text-2xl font-bold">Client Enrolment Portal</h1>
                <div className='bg-[#F1C118] h-[4px] w-[56px] rounded'></div>
            </div>
            <p className="text-gray-700 mb-4">
                Our Client Enrolment Portal keeps track of employee training, budget, and more to streamline management.
            </p>
        </div>
      </div>


      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-1/2 p-4 flex flex-col justify-center items-start gap-8">
            <div className='flex flex-col gap-2'>
                <h1 className="text-2xl font-bold">Support</h1>
                <div className='bg-[#F1C118] h-[4px] w-[56px] rounded'></div>
            </div>
            <p className="text-gray-700 mb-4">
                Technology is essential to the effectiveness of any institution, enabling you to do more in less time. We will work with you to automate your application, infrastructure, data analytics, and IT teams to improve productivity.
            </p>
        </div>
        <div className="lg:w-1/2 relative">
            <Image width={599} height={420} className='absolute z-[3px] left-[-10px] md:left-[-10px] lg:left-[-30px] top-[-30px] md:top-[10px] lg:top-[-40px]' src={obj4} alt="Work Family" />
            <Image
            src={support}
            alt="We Are Here To Help"
            className="w-full relative z-10 rounded-md"
            ></Image>
        </div>
      </div>


      <div className="max-w-[1200px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        <div className="lg:w-1/2 relative">
            <Image width={599} height={420} className='absolute z-[3px] left-[-10px] md:left-[-10px] lg:left-[-30px] top-[-30px] md:top-[10px] lg:top-[-40px]' src={obj4} alt="Work Family" />
            <Image
            src={teamwork}
            alt="Team work"
            className="w-full relative z-10 rounded-md"
            ></Image>
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center items-start gap-8">
            <div className='flex flex-col gap-2'>
                <h1 className="text-2xl font-bold">Your IT Road map</h1>
                <div className='bg-[#F1C118] h-[4px] w-[56px] rounded'></div>
            </div>
            <p className="text-gray-700 mb-4">
                Get all you need along your IT training journey, including tailored learning paths, program delivery of training solutions, IT tutors with a passion for teaching, student registration and communication, etc.
            </p>

            <Link href={`/contact`} className="bg-main flex justify-center items-center p-3 w-[250px] h-[64px] rounded text-white font-base">Hire Us For Your IT Training</Link>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseTrainingFeatures;
