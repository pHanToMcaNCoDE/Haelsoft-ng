import React from 'react';
import data from '/public/assets/part-time-icons/EdTech Platform flow chart.svg';
import pdt from '/public/assets/part-time-icons/EdTech Platform (1).svg';
import dev from '/public/assets/part-time-icons/EdTech Platform business-development.svg';
import des from '/public/assets/part-time-icons/EdTech Platform design 1.svg';
import cyb from '/public/assets/part-time-icons/EdTech Platform Cyber Security.svg';
import mkt from '/public/assets/part-time-icons/EdTech Platform email-marketing (1).svg';
import { IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';

const CourseCrd = () => {
    const courses = [
        {
            image: data,
            name: 'Data + AI',
            details: [
                'Introduction to Data Science',
                'Machine Learning Algorithms',
                'AI and Neural Networks',
                'Big Data Analytics'
            ]
        },
        // {
        //     image: pdt,
        //     name: 'Product',
        //     details: [
        //         'Product Management Essentials',
        //         'Roadmapping and Strategy',
        //         'User Experience Design',
        //         'Product Lifecycle Management'
        //     ]
        // },
        {
            image: dev,
            name: 'Development',
            details: [
                'Full-Stack Development',
                'Backend Programming',
                'Frontend Frameworks',
                'DevOps and CI/CD'
            ]
        },
        {
            image: des,
            name: 'Design',
            details: [
                'Graphic Design Principles',
                'UI/UX Design Techniques',
                'Prototyping and Wireframing',
                'Visual Communication Design'
            ]
        },
        // {
        //     image: cyb,
        //     name: 'Cyber',
        //     details: [
        //         'Cybersecurity Fundamentals',
        //         'Network Security Protocols',
        //         'Ethical Hacking',
        //         'Incident Response and Forensics'
        //     ]
        // },
        {
            image: mkt,
            name: 'Marketing',
            details: [
                'Digital Marketing Strategies',
                'SEO and SEM Techniques',
                'Content Marketing',
                'Social Media Campaigns'
            ]
        }
    ];    

    return (
        <div className='relative z-30 grid grid-cols-1 md:grid-cols-2 gap-10 lg:place-items-end lg:ml-auto mt-[20px] lg:mt-[110px] w-full md:w-auto'>
            {courses.map((course, index) => (
                <div key={index} className='bg-white w-full lg:w-[394px] min-h-[298px] rounded shadow-xl'>
                    <div className='flex justify-start items-center gap-7 pt-[16px] pb-[6px] px-[12px]'>
                        <Image
                            width={62}
                            height={62}
                            className='object-cover'
                            src={course.image}
                            alt={course.name}
                        />
                        <h1 className='text-[#201A18] font-medium leading-[43px] text-[1.5rem] lg:text-[1.75rem]'>
                            {course.name}
                        </h1>
                    </div>
                    <div className='w-full h-[1px] bg-[#F36400] rounded-[1px]'></div>
                    <ul className='pt-[5px] px-[24px] flex flex-col justify-start gap-3 my-3 h-full'>
                        {course.details.map((detail, index) => (
                            <li
                                className='text-[#201A18] text-[1.125rem] font-normal leading-8 flex gap-2 items-center'
                                key={index}
                            >
                                <IoIosArrowForward className='text-base' />
                                {detail}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default CourseCrd;
