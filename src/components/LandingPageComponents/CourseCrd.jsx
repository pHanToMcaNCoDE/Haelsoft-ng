import React from 'react';
import data from '/public/assets/part-time-icons/EdTech Platform flow chart.svg';
import pdt from '/public/assets/part-time-icons/EdTech Platform (1).svg';
import dev from '/public/assets/part-time-icons/EdTech Platform business-development.svg';
import des from '/public/assets/part-time-icons/EdTech Platform design 1.svg';
import cyb from '/public/assets/part-time-icons/EdTech Platform Cyber Security.svg';
import mkt from '/public/assets/part-time-icons/EdTech Platform email-marketing (1).svg';
import { IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';
import Link from 'next/link';
import secureLocalStorage from 'react-secure-storage';

const CourseCrd = () => {

    const courses = [
        {
            image: dev,
            name: "Web Development",
            details: [
                "Frontend Development",
                "Backend Development",
                "FullStack Web Development"
            ]
        },
        {
            image: data,
            name: 'Data + AI',
            details: [
                'Data Analytics Course',
                'Data Science Course ',
                'Artificial Intelligence Course',
                'Python Course'  
            ]
        },
        {
            image: mkt,
            name: 'Marketing',
            details: [
                'Digital Marketing Course',
                'Marketing Leadership'
            ]
        },
        {
            image: pdt,
            name: 'Product',
            details: [
                'Product Management ',
                'Product Leadership Course ',
            ]
        },
        {
            image: des,
            name: 'Design',
            details: [
                'UX Design Course',
                'UI Design Course',
                'Design Leadership Course'
            ]
        },
        {
            image: cyb,
            name: 'Cyber',
            details: [
                'Cybersecurity Course '
            ]
        }
    ];    

    const token = secureLocalStorage.getItem("token");

    return (
        <div className='relative z-30 grid grid-cols-1 md:grid-cols-2 gap-10 lg:place-items-end lg:ml-auto mt-[20px] lg:mt-[50px] w-full md:w-auto'>
            {courses.map((course, index) => (
                <div key={index} className='bg-white w-full lg:w-[335px] min-h-[150px] rounded shadow-xl p-[24px]'>
                    <div className='flex justify-start items-center gap-5'>
                        <Image
                            width={32}
                            height={32}
                            className='object-cover'
                            src={course.image}
                            alt={course.name}
                        />
                        <h1 className='text-[#201A18] leading-10 font-semibold text-[1rem]'>
                            {course.name}
                        </h1>
                    </div>
                    <div className='w-full h-[1px] bg-[#E7E7E7] rounded-[1px] my-5'></div>
                    <ul className='flex flex-col justify-start gap-2'>
                        {course.details.map((detail, index) => (
                            <Link
                                href={!token && '/signin'}
                                className='text-[#201A18] text-[.875rem] font-normal leading-6 flex gap-1 items-center duration-200 hover:underline hover:text-blue-700 cursor-pointer'
                                key={index}
                            >
                                {detail}
                                <IoIosArrowForward className='text-[.875rem]' />
                            </Link>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default CourseCrd;
