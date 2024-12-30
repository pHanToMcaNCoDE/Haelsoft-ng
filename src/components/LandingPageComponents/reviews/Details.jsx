import React from 'react';
import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';

import haelsoft from '/public/EdTech Platform Figma.svg';
import sspecs from '/public/SystemSpecs.png';

import chris from '/public/Christopher Iwundu - Content Strategist.png';
import areo from '/public/Areo Oluwatosin Diamond - PR & Content Strategist.png';
import baba from '/public/Babajide Ogunnoiki - Digital Product Manager.png';
import ade from '/public/Adeoye Wilson - Digital Marketing Specialist.png';

const Details = () => {
  const slides = [
    {
      image: ade,
      name: "Adeoye-Wilson Kupolati",
      role: "Digital Marketing Specialist",
      comp: haelsoft,
      compName: 'Haelsoft',
    },
    {
      image: areo,
      name: "Areo Oluwatosin Diamond",
      role: "PR & Media Expert",
      comp: sspecs,
      compName: 'SystemSpecs',
    },
    {
      image: baba,
      name: "Babajide Ogunnoiki",
      role: "Digital Product Manager",
      comp: haelsoft,
      compName: 'Haelsoft',
    },
    {
      image: chris,
      name: "Christopher Iwundu",
      role: "Content Strategist",
      comp: haelsoft,
      compName: 'Haelsoft',
    },
  ];

  return (
    <div className="relative overflow-hidden py-10">
      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 h-full w-[10%] bg-gradient-to-r from-[#F36400] to-transparent z-20 pointer-events-none"></div>
      <div className="absolute top-0 right-0 h-full w-[10%] bg-gradient-to-l from-[#F36400] to-transparent z-20 pointer-events-none"></div>

      <Splide
        extensions={{ AutoScroll }}
        options={{
          type: 'loop',
          gap: '20px',
          perPage: 3,
          perMove: 1,
          height: 'auto',
          arrows: true,
          pagination: false,
          autoScroll: { speed: 1 },
          breakpoints: {
            1024: { perPage: 2, gap: '15px' },
            768: { perPage: 1, gap: '10px', pagination: false },
          },
          classes: {
            // pagination: 'splide__pagination custom-pagination',
            arrow: 'splide__arrow custom-arrow',
          },
        }}
      >
        {slides.map((item, index) => (
          <SplideSlide
            key={index}
            className="flex flex-col items-center justify-center"
          >
            {/* Image */}
            {/* <div className="relative w-[95%]"> */}
              <Image
                width={500}
                height={400}
                className="rounded-tl-lg rounded-tr-lg object-cover w-[90%]"
                src={item.image}
                alt={item.name}
              />
            {/* </div> */}

            {/* Content */}
            <div className="bg-white p-5 flex flex-col items-start gap-4 w-[90%] rounded-bl-lg rounded-br-lg h-[186px]">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">{item.name}</h2>
                <p className="text-sm text-gray-600">{item.role}</p>
              </div>
              <Image
                width={100}
                height={40}
                className="object-contain"
                src={item.comp}
                alt={item.compName}
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Details;
