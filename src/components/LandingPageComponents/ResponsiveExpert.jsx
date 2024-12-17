'use client'

import React from "react";
// import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import './expert.css';
import user from "../../../public/Opeyemi Oluleye - Brand & Communication.jpg";
import user2 from "../../../public/Michael Ezeadichie - Data Scientist.jpg";
import user3 from "../../../public/Christopher I. Content Strategistr.jpg";
import user4 from "../../../public/assets/users/user4.svg";
import Image from "next/image";


import edo from '../../../public/assets/clients/Edo State Government Haelsoft Clients.png';
import esi from '../../../public/assets/clients/Edo State Investment Promotion Office from Haelsoft.png';
import farm from '../../../public/assets/clients/Farm Industria Logo.png';
import giz from '../../../public/assets/clients/Giz Logo II.png';
import haelsoft from '../../../public/EdTech Platform Figma.svg';

const ResponsiveExpert = () => {
  
  const slides = [
    {
      image: user3,
      name: "Christopher I.",
      role: "Content Strategist",
      comp: haelsoft,
      compName: 'Haelsoft'
    },
    {
      image: user,
      name: "Instructor Opeyemi Oluleye",
      role: "Brand & Communication",
      comp: haelsoft,
      compName: 'Haelsoft'
    },
    {
      image: user4,
      name: "Adaora Okoli",
      role: "Full-Stack Developer",
      comp: farm,
      compName: 'Farm Industria'
    },
    {
      image: user2,
      name: "Michael Ezeadichie",
      role: "Data Scientist / Digital Marketing Specialist",
      comp: haelsoft,
      compName: 'Haelsoft'
    },
  ];

  return (
    <div className="flex lg:hidden overflow-hidden relative before:absolute before:top-0 before:bottom-0 before:w-[30%] before:bg-gradient-to-r before:from-white before:to-transparent before:z-[2] before:left-0 after:right-0 after:absolute after:top-0 after:bottom-0 after:w-[30%] after:z-[2] after:bg-gradient-to-r after:from-transparent after:to-white">
      <Splide
        extensions={{ AutoScroll }}
        options={{
          type: "loop",
          gap: "24px",
          height: '550px',
          perPage: 2,
          perMove: 1,
          arrows: false,
          pagination: true,
          autoScroll: { pauseOnHover: false, speed: 1 },
          classes: {
            pagination: 'splide__pagination custom-pagi',
            prev: 'splide__arrow splide__arrow--prev custom-ar custom-ar--prev',
            next: 'splide__arrow splide__arrow--next custom-ar custom-ar--next',
          },
        }}
      >
        {slides.map((item, index) => (
          <SplideSlide
            key={index}
            className="relative flex flex-col items-center min-w-[200px] md:min-w-[338px] min-h-[500px]"
          >
            <div className="relative w-full h-[300px]">
              <Image
                className="object-cover"
                src={item.image}
                alt={item.name}
              />
            </div>
            <div className="w-full h-4 bg-main mt-2"></div>
            <div className="px-4 py-8 flex flex-col items-start bg-white h-[140px] w-full shadow-lg">
              <h1 className="text-[#000000] font-medium text-[1.125rem] text-center">
                {item.name}
              </h1>
              <p className="text-[.9rem] leading-[21px] font-normal text-[#7F7571] text-center">
                {item.role}
              </p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default ResponsiveExpert;
