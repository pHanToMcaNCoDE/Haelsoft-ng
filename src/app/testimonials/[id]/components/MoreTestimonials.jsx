import { testimonials } from '@/raw-data/data'
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation'
import React from 'react'
import img from '../../../../../public/Adeoye Wilson - Digital Marketing Specialist.png';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";


const MoreTestimonials = () => {
    const { id } = useParams();

    const testimonial = testimonials.find((t) => t.id !== parseInt(id))
  return (
    <section className='w-full py-[100px] bg-white'>
        <div className='max-w-[1200px] mx-auto flex justify-start items-start text-left'>
            <h1 className='text-[1.75rem] lg:text-[2.5rem] text-black font-bold'>More Testimonials</h1>
        </div>
        <Splide
            extensions={{ AutoScroll }}
            options={{
            type: "loop",
            gap: "30px",
            pauseOnFocus: false,
            perPage: 5,
            arrows: false,
            pagination: false,
            autoScroll: { pauseOnHover: true, speed: 1 }, breakpoints: {
                1536: {perPage: 4},
                1024: { perPage: 3 },
                768: { perPage: 2 },
                480: { perPage: 1 },
                },
            }}
            className="before:absolute before:top-0 before:bottom-0 before:w-[30%] before:bg-gradient-to-r before:from-white before:to-transparent before:z-[2] before:left-0 after:right-0 after:absolute after:top-0 after:bottom-0 after:w-[30%] after:z-[2] after:bg-gradient-to-r after:from-transparent after:to-white flex items-center justify-center w-full h-[465px] relative overflow-hidden  mt-[30px] mb-[100px]"
            aria-label="My Favorite Images"
        >
            {testimonials.map((t) => (
                t.id !== id ? (
                    <SplideSlide className="w-full h-full relative z-[1px] lg:h-[465px] border border-gray rounded-[5px] flex flex-col justify-center items-start">
                        <Link
                            href={`/testimonials/${t.id}`}
                            key={t.id} 
                            className='w-full'
                        >
                            <div className="relative w-full h-[352px]">
                                <div className="bg-[#e5e5e5] rounded-tl-lg rounded-tr-lg absolute z-[5px] h-full lg:h-[331px] w-full"></div>
                                <Image
                                    src={img}
                                    alt="Review"
                                    className="object-cover absolute z-[6px] w-full h-full lg:h-[331px] rounded-tl-[5px] rounded-tr-[5px]"
                                />
                            </div>
                            <div className="rounded-bl-[5px] rounded-br-[5px] py-[50px] px-[10px] w-full">
                                <h1 className="text-black text-[1.125rem] font-semibold leading-8">{t.name}</h1>
                                <p className="text-black text-[1rem] font-normal leading-6">{t.role}</p>
                            </div>
                        </Link>
                    </SplideSlide>
                ) : null
            ))}
        </Splide>
    </section>
  )
}

export default MoreTestimonials