'use client'

import BlogDetailsBody from '@/components/LandingPageComponents/BlogDetailsBody'
import BlogDetailsHero from '@/components/LandingPageComponents/BlogDetailsHero'
import Navbar from '@/components/LandingPageComponents/Navbar'
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {
  const [blogs, setBlogs] = useState([])

  const { blogId } = useParams()

  useEffect(() => {
      axios.get(`https://edtech-backend-q2ud.onrender.com/blog/blogposts/${blogId}`)
      .then(res => setBlogs(res.data.data))
      .catch(err => err)
  }, [blogId])

  const formatDate = (isoDate) => {
      const date = new Date(isoDate);
  
      const options = { day: 'numeric', month: 'long', year: 'numeric' };
      
      return date.toLocaleDateString('en-US', options);
  };

  const [clicked, setClicked] = useState('');


  return (
    <section className='relative'>
      <Navbar setClicked={setClicked} clicked={clicked}/>
      <div className="bg-white shadow-xl absolute top-[25%] left-[50px] xl:left-[200px] py-[40px] px-[48px] w-[90%] xl:w-[1040px] h-[292px] rounded gap-4 z-40">
        {/* <div className='max-w-[1200px] 2xl:max-w-[1530px] mx-auto'> */}
          <div className='flex flex-col justify-center items-center gap-10'>
              {/* <div className='flex flex-col justify-center gap-[3em]'> */}
                <div className='flex flex-col justify-center items-center gap-1'>
                  <p className='text-[#1358DB] underline text-[.75rem] leading-8 text-center'>Haelsoft News / Daily</p>
                  <h1 className='text-[1.875rem] lg:text-[2.625rem] text-black font-bold leading-[55px] w-full xl:w-[944px] text-center'>{blogs.title}</h1>
                  <div className='bg-[#F1C118] h-[4px] w-[56px] rounded'></div>
                </div>
                <p className='text-[.75rem] uppercase leading-7 text-[#767676] font-semibold text-center'>{formatDate(blogs.created_at)}</p>
              {/* </div> */}
          {/* </div> */}
        </div>
      </div>

      <BlogDetailsHero blogs={blogs} />
      <BlogDetailsBody blogs={blogs} />
    </section>
  )
}

export default page