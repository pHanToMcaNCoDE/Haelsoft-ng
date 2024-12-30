'use client'

import React from "react";
// import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import './expert.css';
import olu from "../../../public/Opeyemi Oluleye - Brand & Communication.jpg";
import mic from "../../../public/Michael Ezeadichie - Data Scientist.jpg";
import chris from "../../../public/Christopher Iwundu - Content Strategist.png";
import lin from "../../../public/Linda Ochugbua - Public Relations (PR) Strategist.jpg";
import chike from '../../../public/Chike Ozulumba - Backend- Engineer.jpg';
import abo from "../../../public/Abbo.jpg";
import steph from '../../../public/Stephanie Nelson - Business Development Specialist.jpg';
import Image from "next/image";


import haelsoft from '../../../public/EdTech Platform Figma.svg';

const Expert = () => {
  const slides = [
    {
      image: abo,
      name: "Abbo D'Léon",
      role: "Digital Marketing Specialist",
      comp: haelsoft,
      compName: 'Haelsoft'
    },
    {
      image: chike,
      name: "Chike Ozulumba",
      role: "Backend Engineer",
      comp: haelsoft,
      compName: 'Haelsoft'
    },
    {
      image: chris,
      name: "Christopher Iwundu.",
      role: "Content Strategist",
      comp: haelsoft,
      compName: 'Haelsoft'
    },
    {
      image: lin,
      name: "Linda Ochugbua",
      role: "Public Relations (PR) Strategist",
      comp: haelsoft,
      compName: 'Haelsoft'
    },
    {
      image: mic,
      name: "Michael Ezeadichie",
      role: "Data Scientist / Digital Marketing Specialist",
      comp: haelsoft,
      compName: 'Haelsoft'
    },
    {
      image: olu,
      name: "Opeyemi Oluleye",
      role: "Brand & Communication",
      comp: haelsoft,
      compName: 'Haelsoft'
    },
    {
      image: steph,
      name: "Stephanie Nelson",
      role: "Business Development Specialist",
      comp: haelsoft,
      compName: 'Beezy Ideas'
    },
  ];

  return (
    <div className="w-[1064px] mx-auto overflow-hidden relative before:absolute before:top-0 before:bottom-0 before:w-[30%] before:bg-gradient-to-r before:from-white before:to-transparent before:z-[2] before:left-0 after:right-0 after:absolute after:top-0 after:bottom-0 after:w-[30%] after:z-[2] after:bg-gradient-to-r after:from-transparent after:to-white">
      <Splide
        extensions={{ AutoScroll }}
        options={{
          type: "loop",
          gap: "80px",
          height: '480px',
          perPage: 4,
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
            className="relative flex flex-col items-center w-full md:w-[268px] h-[460.31px]"
          >
            <div className="relative z-[5px] w-full md:w-[268px] overflow-hidden">
              <Image
                width={268}
                height={268}
                className="object-cover rounded-tl-[4px] rounded-tr-[4px] w-full md:w-[268px] h-[268px]"
                src={item.image}
                alt={item.name}
              />
              <div className="absolute z-10 translate-x-3 translate-y-3 bottom-0 w-full h-3 bg-main"></div>
            </div>
            <div className="flex justify-between items-start">
              <div className="p-[24px] flex flex-col justify-between rounded-bl-[4px] border-[2px] border-t-none border-[#F3F3F3] rounded-br-[4px] items-start bg-white h-[191.31px] gap-4 w-full md:w-[268px]">
                <div className="flex flex-col items-start">
                  <h1 className="text-[#000000] font-medium text-base text-start">
                    {item.name}
                  </h1>
                  <p className="text-[.875rem] leading-[21px] font-normal text-[#7F7571] text-start">
                    {item.role}
                  </p>
                </div>
                <Image width={100} className="object-cover" src={item.comp} alt='Company'></Image>
              </div>
              {/* <div> */}
              {/* </div> */}
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Expert;
