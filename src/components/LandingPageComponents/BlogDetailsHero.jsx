import img from '../../../public/assets/EdTech Platform (13).svg';
import Image from 'next/image';
import resImg from '../../../public/assets/EdTech Platform 3.svg';
import React from 'react'

const BlogDetailsHero = ({blogs}) => {
  return (
    <section className='w-full hero h-[466px]'>
      <Image width={1440} height={365} className='hidden lg:flex absolute object-cover' src={`https://res.cloudinary.com/dmpqdaupc/${blogs.image}`} alt={blogs.title} />
      <Image width={1440} height={365} className='flex lg:hidden h-[90%] absolute object-cover' src={`https://res.cloudinary.com/dmpqdaupc/${blogs.image}`} alt={blogs.title} />
    </section>
  )
}

export default BlogDetailsHero