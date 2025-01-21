'use client'

import Image from 'next/image';
import React from 'react';
import { testimonials } from '@/raw-data/data';
import img from '../../../../../public/Adeoye Wilson - Digital Marketing Specialist.png';
import { useParams } from 'next/navigation';
import obj from '../../../../../public/quotes.svg';

const Testimonial = () => {
    const { id } = useParams();

    const review = testimonials.find((testimonial) => testimonial.id === parseInt(id));

    if (!review) {
        return (
            <section className="bg-white w-full min-h-screen flex flex-col justify-center items-center">
                <h1 className="text-2xl font-bold">Testimonial not found</h1>
            </section>
        );
    }

    return (
        <section className="bg-white w-full min-h-screen flex flex-col justify-center items-start gap-10 px-6 py-[100px] overflow-hidden">
            <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-between items-start gap-10">
                <div className="flex flex-col justify-center items-start gap-10 w-full lg:w-[60%] relative">
                    <Image
                    />
                    <Image
                        src={obj}
                        className='absolute top-6 z-[5px]'
                        alt='Double Quotes'
                    />
                    <p className="text-gray-800 leading-[55px] text-[1.75rem] font-semibold relative z-[8px]">{review.comment}</p>
                    <div className='flex flex-col justify-center items-start gap-1'>
                        <h1 className="text-[1.25rem] font-bold leading-8">{review.name}</h1>
                        <p className="text-gray-600 text-[1rem] leading-6 font-normal">{review.role}</p>
                    </div>
                    {/* <Image
                        src={obj}
                        className='absolute bottom-[10px] rotate-[360deg] right-10 z-[5px]'
                        alt='Double Quotes'
                    /> */}
                </div>

                <Image
                    src={img}
                    alt="Placeholder"
                    className="w-full lg:w-[40%] rounded-lg h-full"
                />
            </div>
        </section>
    );
};

export default Testimonial;
