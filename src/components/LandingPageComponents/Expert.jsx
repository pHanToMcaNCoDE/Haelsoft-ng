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

const Expert = () => {
  const slides = [
    {
      image: user3,
      name: "Adeola Olukayode",
      role: "UI/UX Designer",
    },
    {
      image: user,
      name: "Sola Akinsan",
      role: "Project Manager",
    },
    {
      image: user4,
      name: "Adaora Okoli",
      role: "Full-Stack Developer",
    },
    {
      image: user2,
      name: "Samuel Micheal",
      role: "Data Scientist",
    },
  ];

  return (
    <div className="overflow-hidden relative before:absolute before:top-0 before:bottom-0 before:w-[30%] before:bg-gradient-to-r before:from-white before:to-transparent before:z-[2] before:left-0 after:right-0 after:absolute after:top-0 after:bottom-0 after:w-[30%] after:z-[2] after:bg-gradient-to-r after:from-transparent after:to-white">
      <Splide
        extensions={{ AutoScroll }}
        options={{
          type: "loop",
          gap: "24px",
          height: '550px',
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

export default Expert;
