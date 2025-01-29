'use client'

import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import axios from 'axios';
import Link from 'next/link';
import CardSkeleton from '../CardSkeleton';
import CustomNewsletter from './CustomNewsletter';

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const blogLimit = 5;
    const [searchText, setSearchText] = useState("");

    const nextButton = () => {
        if (currentPage < totalPage) {
            setCurrentPage(currentPage + 1);
        }
    };

    const previousButton = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    useEffect(() => {
        setLoading(true);
        axios
            .get(`https://edtech-backend-q2ud.onrender.com/blog/blogposts/`)
            .then((res) => {
                setBlogs(res.data.data);
                setTotalPage(Math.ceil(res.data.data.length / blogLimit));
            })
            .catch((err) => console.log('Blog Errors', err))
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const currentBlogs = blogs.slice(
        (currentPage - 1) * blogLimit,
        currentPage * blogLimit
    );

    return (
        <section className="max-w-[1250px] mx-auto mt-[250px] 2xl:mt-[150px] 2xl:pt-[200px] pb-[100px] px-5 xl:px-0 flex flex-col gap-[6em] min-h-screen relative z-10">
            {loading ? (
                <CardSkeleton />
            ) : (
                <>
                    <div className="justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-[4em]">
                        {
                            currentBlogs.filter((blog) => searchText ? blog.title.toLowerCase().includes(searchText.toLowerCase()) : currentBlogs).slice(0, 2).map((blog, index) => (
                                <BlogCard key={index} blog={blog} />
                            ))
                        }


                        <CustomNewsletter
                            searchText={searchText}
                            setSearchText={setSearchText}
                        />


                        {currentBlogs.filter((blog) => searchText ? blog.title.toLowerCase().includes(searchText.toLowerCase()) : currentBlogs).slice(2).map((blog, index) => (
                            <BlogCard key={index} blog={blog} />
                        ))}
                    </div>

                    <div className="flex justify-center items-center gap-4">
                        <IoIosArrowBack className="cursor-pointer" onClick={previousButton} />
                        {[...Array(totalPage)].map((_, index) => (
                            <div
                                key={index}
                                className="flex justify-center items-center gap-2"
                            >
                                <p className={index + 1 === currentPage ? 'font-bold' : ''}>
                                    {index + 1}
                                </p>
                            </div>
                        ))}
                        <IoIosArrowForward className="cursor-pointer" onClick={nextButton} />
                    </div>
                </>
            )}
        </section>
    );
};

export default BlogList;


