import React from 'react';
import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';

import user from '/public/assets/landing-page/EdTech Platform (9).svg';
import user2 from '/public/assets/image 109.png';
import user3 from '/public/assets/landing-page/EdTech Platform (10).svg';
// import user4 from '/public/Student Profile Tarzine Jackson.jpg';
// import user5 from '/public/Justin Shaifer Black People.jpg';
// import user6 from '/public/Black People Photo by Divinetechygirl.jpg';

const ResponsiveDetails = () => {
    const slides = [
      {
        image: user,
        name: 'Adeola Olukayode',
        date: 'July 8, 2023',
        desc: "Haelsoft's digital marketing platform is a game-changer. Their industry-based courses provide practical skills crucial for success. With hands-on projects and excellent support, it's the perfect choice for anyone looking to excel in digital marketing.",
      },
      {
        image: user2,
        name: 'Chidera Nwosu',
        date: 'June 15, 2023',
        desc: "I am thoroughly impressed with Haelsoft's approach to teaching. The UI/UX Design course has provided me with the skills I need to excel in the field. Their resources and support are top-notch.",
      },
      {
        image: user3,
        name: 'Tumi Williams',
        date: 'May 10, 2023',
        desc: "Haelsoft's courses are comprehensive and practical. The Full-Stack Development course helped me land a job within months of completing it. Highly recommended for anyone looking to break into tech.",
      },
      // {
      //   image: user4,
      //   name: 'Justina Thompson',
      //   date: 'April 22, 2023',
      //   desc: "The Product Management course at Haelsoft is amazing. The real-world case studies and projects made learning both challenging and enjoyable. I'm now confidently applying these skills in my current job.",
      // },
      // {
      //   image: user5,
      //   name: 'Ayomide Adebayo',
      //   date: 'March 30, 2023',
      //   desc: "Joining Haelsoft's Data Science program was one of the best decisions I've made. The curriculum is well-structured and the instructors are very knowledgeable. I highly recommend it.",
      // },
      // {
      //   image: user6,
      //   name: 'Amaka Uche',
      //   date: 'February 18, 2023',
      //   desc: "I took the Cyber Security course at Haelsoft and it was incredible. The content was in-depth, and the hands-on labs really helped me understand complex concepts. I feel prepared to tackle the challenges in the cybersecurity field.",
      // },
      // {
      //   image: user3,
      //   name: 'Tunde Johnson',
      //   date: 'January 12, 2023',
      //   desc: "Haelsoft's Marketing courses have truly opened my eyes to the world of digital marketing. The strategies and techniques I learned are already making a difference in my business. I highly recommend their programs.",
      // },
    ];

  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 left-0 h-full w-[25%] bg-gradient-to-r from-main to-transparent pointer-events-none z-20"></div>
      <div className="absolute top-0 right-0 h-full w-[25%] bg-gradient-to-r from-transparent to-main pointer-events-none z-20"></div>
      <Splide
        extensions={{ AutoScroll }}
        options={{
          type: 'loop',
          gap: '30px',
          perPage: 1,
          perMove: 1,
          height: '880px',
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
                className="object-cover w-[325px] h-[327px] rounded-tl-medium rounded-tr-medium"
                src={item.image}
                alt={item.name}
              />
            </div>
            {/* <div className="bg-white px-4 py-8 flex flex-col items-center text-center w-[400px] 2xl:w-[500px] h-[280px]"> */}
            <div className="bg-white h-full lg:h-[269px] p-6 flex flex-col justify-center items-start gap-3 w-full lg:w-[325px] rounded-bl-small rounded-br-small">
              <div className='flex flex-col justify-center items-start gap-1'>
                <h1 className="text-[#000000] font-semibold text-[1.125rem]">{item.name}</h1>
                <p className="text-[.9rem] w-full lg:w-[277px] leading-[21px] font-normal text-[#555]">
                  {item.date}
                </p>
              </div>
              <p className="text-[.875rem] leading-[21px] text-left font-normal text-[#201A18] mt-[1em]">
                {item.desc}
              </p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default ResponsiveDetails;
