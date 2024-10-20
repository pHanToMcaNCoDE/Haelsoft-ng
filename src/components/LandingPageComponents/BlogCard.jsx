import React from 'react'
import blg from '../../../public/assets/EdTech Platform Logo 2.svg';
import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({blog}) => {
    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
    
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        
        return date.toLocaleDateString('en-US', options);
    };
  return (
    <div className='w-full lg:w-[333px] shadow-lg'>
        <Image width={333} height={116} src={`https://res.cloudinary.com/dmpqdaupc/${blog.image}`} className='w-full lg:w-[333px] object-contain' alt={blog.title} />
        <div className='bg-white p-6 h-[359px] flex flex-col gap-4'>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-1'>

                    <Link href={`/blogs/${blog.id}`}>
                        <h1 className='text-black duration-200 hover:underline font-bold text-[1.25rem] leading-7'>{blog.title}</h1>
                    </Link>
                    <div className='bg-[#F1C118] h-[4px] w-[56px] rounded'></div>
                </div>
                <p className='text-[#767676] text-[.75rem] leading-6 uppercase font-normal'>{formatDate(blog.created_at)}</p>
            </div>
            <div>
                <p className='text-[.875rem] leading-7 text-black font-normal w-full lg:w-[251px]'>
                    {blog.content.length > 150 ? `${blog.content.substring(0, 150)}...` : blog.content}               
                </p>
            </div>
        </div>
    </div>
  )
}

export default BlogCard