import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaCode, FaSearchDollar } from 'react-icons/fa'
import { MdContactMail, MdOutlineDesignServices } from 'react-icons/md'
import { FaClipboardList } from 'react-icons/fa';
import { TbAtom } from 'react-icons/tb'
import axios from 'axios';
import secureLocalStorage from 'react-secure-storage';

const CoursesData = () => {
    
    const token = secureLocalStorage.getItem("token");
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const fetchCategory = () => {
            axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}category`, {
                headers: {
                    'Accept': 'application/json',
                    // 'Authorization': `Bearer ${token}`
                }
            })

            .then((response) => {
                setCategories(response.data.data)
            })

            .catch(error => console.log("Category Error", error))
        }

        if(token) fetchCategory()
    }, [token])
  return (
    <div className='flex justify-start xl:justify-center items-start gap-[4em] h-full w-full xl:max-w-[1500px] mx-auto'>
        <div className='h-full hidden lg:flex flex-col justify-start items-start gap-5'>
            <h1 className='text-[1.625rem] leading-9 font-semibold text-black'>Certificate Courses</h1>
            <p className='text-[.875rem] leading-[18px] font-normal text-grayTwo w-full md:w-[398px]'>
                Master a new digital skill with our flexible, part-time certificate programs, available online. Designed to fit your schedule, these courses range from 5 to 10 weeks, offering hands-on learning to help you advance your career.
            </p>
        </div>
        <div className='hidden xl:grid grid-cols-1 xl:grid-cols-4 justify-items-start gap-4 xl:h-full'>
            {
                categories?.map((category) => (
                    <div key={category.uid} className='w-full flex flex-col justify-start items-start gap-3'>
                        <h1 className='text-base font-semibold text-black'>{category.name}</h1>
                        <ul className='flex flex-col justify-start items-start gap-3'>
                            {
                                category.sub_categories.length > 0 ? (
                                    category.sub_categories.map((sub) => (
                                    <Link
                                        key={sub.uid}
                                        href={`/dashboard/category/${category.uid}`}
                                        className='relative text-[.875rem] leading-[18px] font-normal text-grayTwo cursor-pointer 
                                                before:absolute before:w-0 pb-1 before:h-[2px] before:bg-[#F36400] 
                                                before:bottom-0 before:left-0 before:duration-200 hover:before:w-[55px]'
                                    >
                                        {sub.name}
                                    </Link>
                                    ))
                                ) : (
                                    <Link
                                    href={`/dashboard/category/${category.uid}`}
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
                ))
            }
        </div>


        <div className='xl:hidden grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-start gap-10 xl:h-full w-full'>
            {
                categories?.map((category) => (
                    <div key={category.uid} className='w-full flex flex-col justify-start items-start gap-3'>
                        <h1 className='text-base font-semibold text-black'>{category.name}</h1>
                        <ul className='flex flex-col justify-start items-start gap-3'>
                            {
                                category.sub_categories.length > 0 ? (
                                    category.sub_categories.map((sub) => (
                                    <Link
                                        key={sub.uid}
                                        href={`/dashboard/category/${category.uid}`}
                                        className='relative text-[.875rem] leading-[18px] font-normal text-grayTwo cursor-pointer 
                                                before:absolute before:w-0 pb-1 before:h-[2px] before:bg-[#F36400] 
                                                before:bottom-0 before:left-0 before:duration-200 hover:before:w-[55px]'
                                    >
                                        {sub.name}
                                    </Link>
                                    ))
                                ) : (
                                    <Link
                                    href={`/dashboard/category/${category.uid}`}
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
                ))
            }
        </div>
    </div>
  )
}

export default CoursesData