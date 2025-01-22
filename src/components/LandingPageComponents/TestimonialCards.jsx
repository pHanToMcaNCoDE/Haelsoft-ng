'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import img from '../../../public/Adeoye Wilson - Digital Marketing Specialist.png';
import { testimonials } from '@/raw-data/data';
import Link from 'next/link';

const TestimonialCards = () => {

    const [hover, setHover] = useState(false);
    const [testimonialId, setTestimonialId] = useState(null);

    // const addHover = () => {
    //     setHover(true);
    // }

    // const removeHover = () => {
    //     setHover(true);
    // }

    console.log('Mouse Says', hover)

  return (
    <section className='w-full bg-white min-h-screen py-[100px] px-6'>
        <div className='max-w-[1234px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center place-items-center gap-10'>
            {
                testimonials.map((testimonial) => (
                    <Link href={`/testimonials/${testimonial.id}`} key={testimonial.id} className='w-full h-full lg:h-[465px] border border-gray rounded-[5px] flex flex-col justify-center items-start'>
                        <div 
                            // onMouseOver={() => setTestimonialId(testimonial.id) } onMouseLeave={() => setTestimonialId(null)} 
                            className='relative w-full h-[352px]'>
                            <div className='bg-[#e5e5e5] rounded-tl-lg rounded-tr-lg absolute z-[5px] h-full lg:h-[331px] w-full'></div>
                            {/* <div className={testimonial.id == testimonialId ? 'absolute z-10 bottom-[-25px] left-0 bg-gradient-to-b from-main/[80%] to-black/[80%] w-full h-[90%] p-5 overflow-hidden duration-300 flex opacity-100' : 'absolute z-10 bottom-[-25px] opacity-0 left-0 bg-gradient-to-b from-main/[80%] to-black/[80%] w-full h-0 p-5 overflow-hidden duration-300'}>
                                <h1 className='text-white lg:text-[1rem] font-semibold'>
                                    {testimonial.comment}
                                </h1>
                            </div> */}
                            <Image src={img} alt='Review' className='object-cover absolute z-[6px] w-full h-full lg:h-[331px] rounded-tl-[5px] rounded-tr-[5px]'></Image>
                        </div>
                        <div className='rounded-bl-[5px] rounded-br-[5px] py-[50px] px-[10px] w-full'>
                            <h1 className='text-black text-[1.125rem] font-semibold leading-8'>{testimonial.name}</h1>
                            <p className='text-black text-[1rem] font-normal leading-6'>{testimonial.role}</p>
                        </div>
                    </Link>
                ))
            }
        </div>
    </section>
  )
}

export default TestimonialCards