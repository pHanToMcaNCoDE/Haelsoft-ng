'use client'

import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import axios from 'axios';
import Link from 'next/link';
import CardSkeleton from '../CardSkeleton';
import CustomNewsletter from './CustomNewsletter';


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
    <section className='max-w-[1200px] 2xl:max-w-[1500px] mx-auto pt-[300px] pb-[100px] px-5 flex flex-col gap-[6em] min-h-screen'>
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
        <CustomNewsletter/>
    </section>
  )
}

export default BlogList