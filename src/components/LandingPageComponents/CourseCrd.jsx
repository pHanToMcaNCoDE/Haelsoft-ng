import React, { useEffect, useState } from 'react';
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
import axios from 'axios';

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

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}category`);
                setCategories(response.data.data);
                console.log('Categories:', response.data.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategory();
    }, []);

    return (
        <div className='relative z-30 grid grid-cols-1 md:grid-cols-2 gap-10 lg:place-items-end lg:ml-auto mt-[20px] lg:mt-[50px] w-full md:w-auto'>
            {categories.map((category, index) => (
                <div key={index} className='bg-white w-full lg:w-[335px] min-h-[150px] rounded shadow-xl p-[24px]'>
                    <div className='flex justify-start items-center gap-5'>
                        {/* <Image
                            width={32}
                            height={32}
                            className='object-cover'
                            src={category.image}
                            alt={category.name}
                        /> */}
                        <h1 className='text-[#201A18] leading-10 font-semibold text-[1rem]'>
                            {category.name}
                        </h1>
                    </div>
                    <div className='w-full h-[1px] bg-[#E7E7E7] rounded-[1px] my-5'></div>
                    <ul className='flex flex-col justify-start gap-2'>
                        
                        {
                            category.sub_categories.length > 0 ? (
                                category.sub_categories.map((sub) => (
                                    <Link
                                        href={`/category/${category.uid}`}
                                        className='text-[#201A18] text-[.875rem] font-normal leading-6 flex gap-1 items-center duration-200 hover:underline hover:text-blue-700 cursor-pointer'
                                        key={index}
                                    >
                                        {sub.name}
                                        <IoIosArrowForward className='text-[.875rem]' />
                                    </Link>
                                ))
                            ) : (
                                <Link
                                    href={`/category/${category.uid}`}
                                    
                                    className='relative text-[.875rem] leading-[18px] font-normal text-grayTwo cursor-pointer 
                                                before:absolute before:w-0 pb-1 before:h-[2px] before:bg-[#F36400] 
                                                before:bottom-0 before:left-0 before:duration-200 hover:before:w-[55px]'
                                >
                                    {category.name}
                                </Link>
                            )
                         }
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default CourseCrd;
