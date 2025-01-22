import Image from "next/image";
import React from "react";
import img from '../../../public/Black Man Presentation.jpg';
import Link from "next/link";

const TrainingPathways = () => {
  return (
    <section className="flex flex-col items-center bg-main py-[100px] gap-[60px]">
        <div className='flex flex-col gap-2 w-full justify-center items-center text-center'>
            <h1 className="text-[1.5rem] lg:text-4xl font-bold text-center text-white w-[60%]">Training Pathways for Companies and Government Agencies</h1>          
            <div className='bg-[#F1C118] h-[4px] w-[56px] rounded'></div>
        </div>
        <div className="w-full max-w-[1200px] flex flex-col lg:flex-row-reverse justify-between items-center gap-10 p-6">
            <div className="w-full lg:w-[55%] h-[50%] overflow-hidden relative rounded-[4px] flex justify-center items-center">
                <Image
                    src={img}
                    alt="Training Pathways"
                    className="rounded-[4px] w-full lg:w-[90%] h-[50%]"
                ></Image>
            </div>
            <div className="flex flex-col justify-center items-start gap-5 w-full lg:w-[45%]">
                <ol className="space-y-4 text-gray-700 w-full text-white">
                    <li className='flex flex-col justify-center items-start gap-3'>
                        <h2 className="text-xl font-semibold">Step 1: Gather the Client&apos;s Goals</h2>
                        <ul className="list-disc list-inside ml-4">
                        <li>Digital Transformation</li>
                        <li>Virtualization</li>
                        <li>Cloud</li>
                        </ul>
                    </li>
                    <li className='flex flex-col justify-center items-start gap-3'>
                        <h2 className="text-xl font-semibold">Step 2: Meet With SMEs and Government Departments</h2>
                        <ul className="list-disc list-inside ml-4">
                        <li>Meet with subject matter experts in the company or agency</li>
                        <li>Understand the IT skill gaps</li>
                        <li>Design an effective learning path</li>
                        <li>Align students with classes</li>
                        </ul>
                    </li>
                    <li className='flex flex-col justify-center items-start gap-3'>
                        <h2 className="text-xl font-semibold">Step 3: Build A Custom Training Plan</h2>
                        <ul className="list-disc list-inside ml-4">
                        <li>Customized course content as needed</li>
                        <li>Job role based</li>
                        </ul>
                    </li>
                    <li className='flex flex-col justify-center items-start gap-3'>
                        <h2 className="text-xl font-semibold">Step 4: Deliver Training</h2>
                        <ul className="list-disc list-inside ml-4">
                        <li>In-person or virtual live classes</li>
                        <li>Dedicated support team to resolve student technical difficulties</li>
                        </ul>
                    </li>
                    <li className='flex flex-col justify-center items-start gap-3'>
                        <h2 className="text-xl font-semibold">Step 5: Plan For The Future</h2>
                        <ul className="list-disc list-inside ml-4">
                        <li>Continuous improvement</li>
                        <li>Feedback and assessments</li>
                        <li>Additional training needs</li>
                        </ul>
                    </li>
                    </ol>
                    <Link href={`/contact`} className="mt-6 px-6 py-3 bg-white text-main rounded-md">
                        Contact Us Today
                    </Link>
            </div>
        </div>
    </section>
  );
};

export default TrainingPathways;
