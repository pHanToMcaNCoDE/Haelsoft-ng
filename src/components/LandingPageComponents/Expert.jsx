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
import phil from '../../../public/Philip Obiorah - Data Scientist .jpg';
import beez from '../../../public/Beezy Ideas.png';
import Image from "next/image";


import haelsoft from '../../../public/EdTech Platform Figma.svg';
import Link from "next/link";

const Expert = ({instructors}) => {
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
      comp: beez,
      compName: 'Beezy Ideas'
    },
    {
      image: phil,
      name: "Philip Obiorah",
      role: "Data Scientist",
      comp: haelsoft,
      compName: 'Haelsoft'
    },
  ];

  return (
    <div className="w-[1064px] mx-auto overflow-hidden relative before:absolute before:top-0 before:bottom-0 before:w-[20%] before:bg-gradient-to-r before:from-white before:to-transparent before:z-[2] before:left-0 after:right-0 after:absolute after:top-0 after:bottom-0 after:w-[20%] after:z-[2] after:bg-gradient-to-r after:from-transparent after:to-white">
      <Splide
        extensions={{ AutoScroll }}
        options={{
          type: "loop",
          gap: "80px",
          height: '520px',
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
        {instructors.map((instructor, index) => (
          <SplideSlide
            key={index}
            className="relative flex flex-col items-center w-full md:w-[268px] h-[460.31px]"
          >
            <div
              
              className="relative flex flex-col items-center w-full md:w-[268px] h-[460.31px]"
            >
              <div className="relative z-[5px] w-full md:w-[268px] overflow-hidden">
                <Image
                  width={268}
                  height={268}
                  className="object-cover rounded-tl-[4px] rounded-tr-[4px] w-full md:w-[268px] h-[268px]"
                  src={`${process.env.NEXT_PUBLIC_STORAGE_URL}${instructor.image}`}
                  alt={instructor.name}
                />
                <div className="absolute z-10 translate-x-3 translate-y-3 bottom-0 w-full h-3 bg-main"></div>
              </div>
              <div className="flex justify-between items-start">
                <div className="p-[20px] flex flex-col justify-between items-start bg-white h-[191.31px] gap-4 w-full md:w-[268px]">
                  <div className="flex flex-col items-start">
                    <h1 className="text-[#000000] font-semibold text-xl text-start">
                      {instructor.name}
                    </h1>
                    <p className="text-[.875rem] leading-[21px] font-medium text-[#7F7571] text-start">

                      {instructor?.designation
                            ? instructor.description.substr(0, 30) + "..."
                            : "No description available."}
                    </p>

                  </div>
                  <Link href={`/about-instructor/${instructor.slug}`} className='w-[150px] h-[44px] flex justify-center items-center z-20 p-3 border border-main text-main text-lg font-medium duration-200 hover:bg-main hover:text-white'>View more</Link>
                  {/* <Image width={100} className="object-cover" src={item.comp} alt='Company'></Image> */}
                </div>
                {/* <div> */}
                {/* </div> */}
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Expert;
