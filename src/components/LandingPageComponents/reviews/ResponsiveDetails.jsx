import React from 'react';
import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';

import haelsoft from '/public/EdTech Platform Figma.svg';
import sspecs from '/public/SystemSpecs.png';

import chris from "/public/Christopher Iwundu - Content Strategist.png";
import areo from '/public/Areo Oluwatosin Diamond - PR & Content Strategist.png';




import edo from '/public/assets/clients/Edo State Government Haelsoft Clients.png';
import esi from '/public/assets/clients/Edo State Investment Promotion Office from Haelsoft.png';
import farm from '/public/assets/clients/Farm Industria Logo.png';
import giz from '/public/assets/clients/Giz Logo II.png';
// import rh from '../../../public/assets/clients/Rhebuch-Logo.png';
// import iso from '../../../public/assets/clients/Untitled-1.png';
// import znz from '../../../public/assets/clients/Zaph and Zoe B.png';
// import lcp from '../../../public/assets/clients/Zaph and Zoe.png'

const ResponsiveDetails = () => {
  const slides = [
    {
      image: chris,
      name: "Christopher Iwundu.",
      role: "Content Strategist",
      comp: haelsoft,
      compName: 'Haelsoft'
    },
    {
      image: areo,
      name: "Areo Oluwatosin Diamond",
      role: "PR & Media Expert",
      comp: sspecs,
      compName: 'SystemSpecs'
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 left-0 h-full w-[20%] bg-gradient-to-r from-[#F36400] to-transparent pointer-events-none z-20"></div>
      <div className="absolute top-0 right-0 h-full w-[20%] bg-gradient-to-r from-transparent to-[#F36400] pointer-events-none z-20"></div>
      <Splide
        extensions={{ AutoScroll }}
        options={{
          type: 'loop',
          gap: '30px',
          perPage: 3,
          perMove: 1,
          height: '650px',
          arrows: true,
          pagination: true,
          autoScroll: { speed: 1 },
          classes: {
            pagination: 'splide__pagination custom-pagination',
            arrow: 'splide__arrow custom-arrow',
          },
        }}
      >
        {slides.map((item, index) => (
          <SplideSlide
            key={index}
            className="flex flex-col justify-center items-center w-auto"
          >
            <div className="relative">
              <Image
                width={325}
                height={327}
                className="rounded-tl-[5px] rounded-tr-[5px] object-cover w-full xl:w-[325px] h-[327px] rounded-tl-medium rounded-tr-medium"
                src={item.image}
                alt={item.name}
              />
            </div>
            {/* <div className="bg-white px-4 py-8 flex flex-col items-center text-center w-[400px] 2xl:w-[500px] h-[280px]"> */}
            <div className="bg-white h-full lg:h-[289px] p-6 flex flex-col justify-between items-start gap-3 w-full xl:w-[325px] rounded-bl-[5px] rounded-br-[5px]">
              <div className='flex flex-col justify-center items-start gap-1'>
                <h1 className="text-[#000000] font-semibold text-[1.125rem]">{item.name}</h1>
                <p className="text-[.9rem] w-full lg:w-[277px] leading-[21px] font-normal text-[#555]">
                  {item.date}
                </p>
              </div>
              <div className='flex flex-col justify-center items-start gap-8'>
                
              <Image width={150} className="object-cover" src={item.comp} alt={item.compName}></Image>
                <button className='duration-200 hover:bg-main border border-main rounded text-main hover:text-white text-[.875rem] font-semibold w-full xl:w-[253px] h-[50px] py-[15px] px-[24px]'>Read More</button>
              </div>
              {/* <p className="text-[.875rem] leading-[21px] text-left font-normal text-[#201A18] mt-[1em]">
                {item.desc}
              </p> */}
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default ResponsiveDetails;
