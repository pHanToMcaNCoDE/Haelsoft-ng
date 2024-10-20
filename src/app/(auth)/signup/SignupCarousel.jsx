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
import './signup.css';
import bgOne from '../../../asset/Black People Learning Divinetechygirl.jpg';

const SignupCarousel = () => {
    const items = [
        <section key="1" className="relative signupOne item w-full min-h-screen flex gap-4">
            {/* <img src="../../../asset/Black\ People\ Learning.jpg" alt="" /> */}
            <div className='bg-[#000]/40 w-full h-screen absolute top-0 left-0 z-[5px]'></div>
            <div className="py-3 px-8 flex flex-col justify-center text-left items-start gap-2 z-10">
                <h1 className="text-[1.5rem] md:text-[3rem] 2xl:text-[3.5rem] font-semibold leading-[40px] text-white">Join Our Learning <br className="hidden lg:flex"></br>Community</h1>
                <p className="text-gray-100 text-left text-[1.125rem] font-medium leading-7">Sign up today to access <br className="hidden lg:flex"></br> personalized learning plans <br className="hidden lg:flex"></br> and expert guidance.</p>
            </div>
        </section>,
        <section key="2" className="relative signupTwo item w-full h-screen flex gap-4">
            <div className='bg-[#000]/40 w-full h-screen absolute top-0 left-0 z-[5px]'></div>
            <div className="py-3 px-8 flex flex-col justify-center text-left items-start gap-2 z-10">
                <h1 className="text-[1.5rem] md:text-[3rem] 2xl:text-[3.5rem] font-semibold leading-[40px] text-white">Start Building Your <br className="hidden lg:flex"></br>Future</h1>
                <p className="text-gray-100 text-left text-[1.125rem] font-medium leading-7">Create an account to explore <br className="hidden lg:flex"></br> courses that align with <br className="hidden lg:flex"></br> your career goals.</p>
            </div>
        </section>,
        <section key="3" className="relative signupThree item w-full h-screen flex gap-4">
            <div className='bg-[#000]/40 w-full h-screen absolute top-0 left-0 z-[5px]'></div>
            <div className="py-3 px-8 flex flex-col justify-center text-left items-start gap-2 z-10">
                <h1 className="text-[1.5rem] md:text-[3rem] 2xl:text-[3.5rem] font-semibold leading-[40px] text-white">Access Exclusive <br className="hidden lg:flex"></br>Content</h1>
                <p className="text-gray-100 text-left text-[1.125rem] font-medium leading-7">Sign up to unlock resources <br className="hidden lg:flex"></br> tailored to help you excel <br className="hidden lg:flex"></br> in your chosen field.</p>
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

export default SignupCarousel;
