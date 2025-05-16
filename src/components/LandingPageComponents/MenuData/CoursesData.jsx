import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaCode, FaSearchDollar } from 'react-icons/fa'
import { MdContactMail, MdOutlineDesignServices } from 'react-icons/md'
import { FaClipboardList } from 'react-icons/fa';
import { TbAtom } from 'react-icons/tb'
import axios from 'axios';
import secureLocalStorage from 'react-secure-storage';
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';

const CoursesData = () => {

    const pathname = usePathname();

   const defaultCategories = [
        {
            uid: "web-development",
            name: "Web Development",
            sub_categories: [
            { uid: "frontend-dev", name: "Frontend Development" },
            { uid: "backend-dev", name: "Backend Development" },
            { uid: "fullstack-dev", name: "FullStack Web Development" }
            // { uid: "web-dev-course", name: "Web Development Course" }
            ]
        },
        {
            uid: "ai",
            name: "Artificial Intelligence",
            sub_categories: [
            { uid: "python", name: "python" }
            ]
        },
        {
            uid: "data-science",
            name: "Data Science",
            sub_categories: [
            { uid: "python-course", name: "Python Course" },
            { uid: "ai-course", name: "Artificial Intelligence Course" },
            { uid: "data-science-course", name: "Data Science Course" },
            { uid: "data-analytics", name: "Data Analytics Course" }
            ]
        },
        {
            uid: "marketing",
            name: "Digital Marketing",
            sub_categories: [
            { uid: "digital-marketing-course", name: "Digital Marketing Course" },
            { uid: "marketing-leadership", name: "Marketing Leadership" }
            ]
        },
        {
            uid: "product",
            name: "Product",
            sub_categories: [
            { uid: "product-management", name: "Product Management" },
            { uid: "product-leadership", name: "Product Leadership Course" }
            ]
        },
        {
            uid: "design",
            name: "Design",
            sub_categories: [
            { uid: "ux-design", name: "UX Design Course" },
            { uid: "ui-design", name: "UI Design Course" },
            { uid: "design-leadership", name: "Design Leadership Course" }
            ]
        },
        {
            uid: "cyber",
            name: "Cyber",
            sub_categories: [
            { uid: "cybersecurity-course", name: "Cybersecurity Course" }
            ]
        },
        {
            uid: "development",
            name: "Development",
            sub_categories: [
                { uid: "web-development-course", name: "Web Development Course" }
            ]
        }
    ];


    
    
    const { token } = useSelector((state) => state.userDetails);

    const [categories, setCategories] = useState([])

    useEffect(() => {
        
        const fetchCategory = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}category`);

                // console.log('Categories', response.data)
                
                if (response.data && response.data.data && response.data.data.length > 0) {
                    setCategories(response.data.data);
                }
            } catch (error) {
                console.log("Category Error", error);
            }
        }

        fetchCategory();
    }, [])
    
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
                                category.sub_categories.length > 0 && (
                                    category.sub_categories.map((sub) => (
                                        pathname.includes('/dashboard') ? (

                                            <Link
                                                key={sub.uid}
                                                href={`/dashboard/category/${category.uid}`}
                                                className='relative text-[.875rem] leading-[18px] font-normal text-grayTwo cursor-pointer 
                                                        before:absolute before:w-0 pb-1 before:h-[2px] before:bg-[#F36400] 
                                                        before:bottom-0 before:left-0 before:duration-200 hover:before:w-[55px]'
                                            >
                                                {sub.name}
                                            </Link>
                                        ) : (
                                            <Link
                                                key={sub.uid}
                                                href={`/category/${category.uid}`}
                                                className='relative text-[.875rem] leading-[18px] font-normal text-grayTwo cursor-pointer 
                                                        before:absolute before:w-0 pb-1 before:h-[2px] before:bg-[#F36400] 
                                                        before:bottom-0 before:left-0 before:duration-200 hover:before:w-[55px]'
                                            >
                                                {sub.name}
                                            </Link>
                                        )
                                    ))
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
                                category.sub_categories.length > 0 && (
                                    category.sub_categories.map((sub) => (
                                        pathname.includes('/dashboard') ? (

                                            <Link
                                                key={sub.uid}
                                                href={`/dashboard/category/${category.uid}`}
                                                className='relative text-[.875rem] leading-[18px] font-normal text-grayTwo cursor-pointer 
                                                        before:absolute before:w-0 pb-1 before:h-[2px] before:bg-[#F36400] 
                                                        before:bottom-0 before:left-0 before:duration-200 hover:before:w-[55px]'
                                            >
                                                {sub.name}
                                            </Link>
                                        ) : (
                                            <Link
                                                key={sub.uid}
                                                href={`/category/${category.uid}`}
                                                className='relative text-[.875rem] leading-[18px] font-normal text-grayTwo cursor-pointer 
                                                        before:absolute before:w-0 pb-1 before:h-[2px] before:bg-[#F36400] 
                                                        before:bottom-0 before:left-0 before:duration-200 hover:before:w-[55px]'
                                            >
                                                {sub.name}
                                            </Link>
                                        )
                                    ))
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