import Image from 'next/image'
import React from 'react'
import img from '../../../public/assets/EdTech Platform (13).svg';

const BlogDetailsBody = ({blogs}) => {
  return (
    <section className='flex flex-col justify-center items-start max-w-[1040px] mx-auto px-3 xl:px-0 gap-[4em] min-h-screen pt-[250px] pb-[100px]'>
        <div className='w-full bg-gray-300 rounded-full h-[2px]'></div>
        <div className='w-full md:w-[672px] lg:w-[1040px] px-[48px] flex flex-col justify-center items-start gap-10'>
            <p className='text-[1.125rem] font-medium text-black leading-8 flex flex-col justify-center items-start gap-8'>
                {blogs.content && (
                    blogs.content.split('.').slice(0, 3).map((paragraph, index) => (
                    <p key={index}>
                        {paragraph.trim()}.
                    </p>
                    ))
                )}
            </p>
        </div>
        <div className='flex justify-center items-center w-full'>
            <Image width={784} height={523} src={`https://res.cloudinary.com/dmpqdaupc/${blogs.image}`} className='object-contain' alt={blogs.title}></Image>
        </div>
    </section>
  )
}

export default BlogDetailsBody