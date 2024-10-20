import React from 'react'
import img from '../../../public/assets/EdTech Platform (13).svg';
import Image from 'next/image';
import resImg from '../../../public/assets/EdTech Platform 3.svg';

const BlogHero = () => {
  return (
    <section className='w-full hero h-[40vh]'>
      <Image width={1440} height={365} className='hidden lg:flex absolute object-cover' src={img} alt="We are Family" />
      <Image width={1440} height={365} className='flex lg:hidden h-[90%] absolute object-cover' src={img} alt="We are Family" />
    </section>
  )
}

export default BlogHero