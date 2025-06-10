'use client'

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Image from 'next/image';
import React from 'react';
import user from '../../../../public/assets/image 109.png';
import user2 from '../../../../public/assets/image 112.png';
import user3 from '../../../../public/assets/image 110.png';
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import './signin.css';
// import bgOne from '../../../asset/Black People Learning Divinetechygirl.jpg';

const SigninCarousel = () => {
    const items = [
        <section key="1" className="relative signinOne item w-full h-screen flex gap-4 text-white">
            <div className='bg-[#000]/40 w-full h-screen absolute top-0 left-0 z-[5px]'></div>
            <div className="py-3 px-8 flex flex-col justify-center text-left items-start gap-2 z-10">
                <h1 className="text-[1.5rem] md:text-[3rem] 2xl:text-[3.5rem] font-semibold leading-[40px]">Welcome to Your Next Adventure</h1>
                <p className="text-gray-100 text-left text-[1.125rem] font-medium leading-7">Join a community of learners <br className="hidden lg:flex"></br> dedicated to growing their skills <br className="hidden lg:flex"></br> and advancing their careers.</p>
            </div>
        </section>,
        <section key="2" className="relative signinTwo item w-full h-screen flex gap-4 text-white">
            <div className='bg-[#000]/40 w-full h-screen absolute top-0 left-0 z-[5px]'></div>
            <div className="py-3 px-8 flex flex-col justify-center text-left items-start gap-2 z-10">
                <h1 className="text-[1.5rem] md:text-[3rem] 2xl:text-[3.5rem] font-semibold leading-[40px]">Unlock Your<br className="hidden lg:flex"></br> Potential</h1>
                <p className="text-gray-100 text-left text-[1.125rem] font-medium leading-7">Access resources and tools <br className="hidden lg:flex"></br> designed to help you succeed <br className="hidden lg:flex"></br> in your career journey.</p>
            </div>
        </section>,
        <section key="3" className="relative signinThree item w-full h-screen flex gap-4 text-white">
            <div className='bg-[#000]/40 w-full h-screen absolute top-0 left-0 z-[5px]'></div>
            <div className="py-3 px-8 flex flex-col justify-center text-left items-start gap-2 z-10">
                <h1 className="text-[1.5rem] md:text-[3rem] 2xl:text-[3.5rem] font-semibold leading-[40px]">Elevate Your<br className="hidden lg:flex"></br> Career</h1>
                <p className="text-gray-100 text-left text-[1.125rem] font-medium leading-7">Take the next step <br className="hidden lg:flex"></br>towards a brighter future <br className="hidden lg:flex"></br> with our expert guidance.</p>
            </div>
        </section>,
      ];
    
    return (
        <>
            <AliceCarousel
                autoPlay
                autoPlayInterval={5000}
                animationDuration={1500}
                animationType={`fadeout`}
                infinite
                disableDotsControls
                disableButtonsControls
                items={items}
            />
        </>
    );
};

export default SigninCarousel;
