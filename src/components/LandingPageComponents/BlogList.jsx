'use client'

import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import axios from 'axios';
import Link from 'next/link';
import CardSkeleton from '../CardSkeleton';


const BlogList = () => {

    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const blogLimit = 6



    const nextButton = () => {
        if(currentPage < totalPage){
            setCurrentPage(currentPage + 1)
        }
    }

    const previousButton = () => {
        if(currentPage > 1){
            setCurrentPage(currentPage - 1)
        }
    }

    useEffect(() => {
        setLoading(true)
        axios.get(`https://edtech-backend-q2ud.onrender.com/blog/blogposts/`)
        .then(res => {
            setBlogs(res.data.data)
            setTotalPage(Math.ceil(res.data.data.length / blogLimit));
        })
        .catch(err => console.log('Blog Errors', err))
        .finally(() => {
            setLoading(false)
        })
    }, [])

    if (loading == true){
        return <CardSkeleton/>
    }


    const currentBlogs = blogs.slice((currentPage - 1) * blogLimit, currentPage * blogLimit);


  return (
    <section className='max-w-[1200px] 2xl:max-w-[1500px] mx-auto py-[250px] pb-[100px] px-5 flex flex-col gap-[6em] min-h-screen'>
        <div className='justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-3 gap-y-[4em]'>
            {
                currentBlogs.map((blog, index) => (
                    <BlogCard key={index} blog={blog} />
                ))
            }
        </div>
        <div className='flex justify-center items-center gap-4'>
            <IoIosArrowBack className='cursor-pointer' onClick={previousButton} />
            {
                [...Array(totalPage)].map((_, index) => (
                    <div className='flex justify-center items-center gap-2'>
                        <p className={index + 1 === currentPage ? 'font-bold' : ''}>{index + 1}</p>
                    </div>
                ))
            }
            <IoIosArrowForward className='cursor-pointer' onClick={nextButton} />
        </div>
        <div className='bg-[#F36400] text-white px-[32px] py-[48px] rounded-lg w-full lg:w-[1050px] lg:h-[200px] flex flex-col lg:flex-row justify-between items-center gap-10 mx-auto'>
            <div className='w-full lg:w-[380px] flex flex-col gap-6'>
                <h1 className='text-[1.625rem] font-medium leading-8'>Subscribe to Our Newsletter</h1>
                <p className='w-full md:w-[380px] h-[50px] text-[.875rem] leading-6 font-normal'>
                    Get the latest on upcoming courses, programs, events, and more — straight to your inbox.
                </p>
            </div>
            <form action="" className='w-full lg:w-[380px] flex flex-col gap-6'>
                <div className='flex flex-col md:flex-row justify-start gap-8 items-start'>
                    <input className='text-black w-full sm:w-[245px] h-[46px] bg-white outline-none border-none py-[10px] px-[20px] rounded' placeholder='Email Address' type="text" />
                    <button className='flex justify-center items-center border border-white w-full sm:w-[118px] h-[46px] rounded py-[12px] px-[24px] text-base font-normal'>Subscribe</button>
                </div>
                <p className='text-base font-normal'>By clicking &quot;Subscribe&quot;, you accept our <span className='underline'>Terms</span></p>
            </form>
        </div>
    </section>
  )
}

export default BlogList