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

    // if (!review) {
    //     return (
    //         <section className="bg-white w-full min-h-screen flex flex-col justify-center items-center">
    //             <h1 className="text-2xl font-bold">Testimonial not found</h1>
    //         </section>
    //     );
    // }

    return (
        <section className="bg-white w-full flex flex-col justify-center items-start gap-10 px-6 py-[100px] overflow-hidden">
            <div className="max-w-[1250px] h-full mx-auto flex flex-col lg:flex-row justify-between items-start gap-10">
                <div className="flex flex-col justify-center items-start gap-10 w-full lg:w-[60%] relative">
                    <Image
                        src={obj}
                        className='absolute top-6 z-[5px]'
                        alt='Double Quotes'
                    />
                    <div className='w-full lg:h-[460px] relative flex justify-center gap-2 items-center'>
                        <div className='w-[8px] h-[150px] bg-main'></div>
                        <div className='rounded-bl-[5px] rounded-br-[5px] py-[50px] px-[10px] w-full flex flex-col justify-center items-start gap-5'>   
                            <p className="text-gray-800 leading-[30px] text-[1.25rem] font-semibold relative z-[8px]">{review.comment}</p>
                            <div>
                                <h1 className='text-main text-[1.5rem] font-black leading-8'>{review.name}</h1>
                                <p className='text-black text-[1rem] font-normal leading-6'>{review.role}</p>
                            </div>
                            <div className='relative'>
                                <div className='bg-[#e5e5e5] absolute z-[5px] h-[50px] w-[100px]'></div>
                                <Image src={img} alt='Review' className='object-cover absolute z-[6px] w-[50px] h-[50px] rounded-full'></Image>
                            </div>
                        </div>
                    </div>
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
