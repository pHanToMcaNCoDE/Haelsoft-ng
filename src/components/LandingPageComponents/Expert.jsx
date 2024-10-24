'use client'

import React from "react";
// import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import './expert.css';
import user from "../../../public/assets/users/user.png";
import user2 from "../../../public/assets/users/user2.svg";
import user3 from "../../../public/assets/users/user3.svg";
import user4 from "../../../public/assets/users/user4.svg";
import Image from "next/image";


import afro from '../../../public/assets/clients/Afro a.png';
import photiz from '../../../public/assets/clients/Afro c.png';
import swun from '../../../public/assets/clients/Colur Code.jpg';
import kusnap from '../../../public/assets/clients/KUSNAP.png';

const Expert = () => {
  const slides = [
    {
      image: user3,
      name: "Adeola Olukayode",
      role: "UI/UX Designer",
      comp: afro
    },
    {
      image: user,
      name: "Sola Akinsan",
      role: "Project Manager",
      comp: photiz
    },
    {
      image: user4,
      name: "Adaora Okoli",
      role: "Full-Stack Developer",
      comp: swun
    },
    {
      image: user2,
      name: "Samuel Micheal",
      role: "Data Scientist",
      comp: kusnap
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
                  <h1 className="text-[#000000] font-medium text-base text-center">
                    {item.name}
                  </h1>
                  <p className="text-[.875rem] leading-[21px] font-normal text-[#7F7571] text-center">
                    {item.role}
                  </p>
                </div>
                <Image width={105} height={44} className="grayscale h-[44px] object-cover" src={item.comp} alt="Afro"></Image>
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
