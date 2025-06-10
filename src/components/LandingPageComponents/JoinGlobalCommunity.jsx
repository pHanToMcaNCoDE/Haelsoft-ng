import Image from 'next/image';
import React from 'react';
import one from '../../../public/assets/get-certificate/one.svg';
import two from '../../../public/assets/get-certificate/two.svg';
import three from '../../../public/assets/get-certificate/three.svg';
import four from '../../../public/assets/get-certificate/four.svg';
import five from '../../../public/assets/get-certificate/five.svg';
import six from '../../../public/assets/get-certificate/six.svg';
import seven from '../../../public/assets/get-certificate/seven.svg';
import eight from '../../../public/assets/get-certificate/eight.svg';
import nine from '../../../public/assets/get-certificate/nine.svg';

const JoinGlobalCommunity = () => {
  return (
    <section className="relative w-full h-[722px] overflow-hidden flex justify-center items-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#FF8C534D] z-10"></div>

      {/* Images Grid */}
      <div className="absolute inset-0 grid grid-cols-5 z-5">
        <Image width={288} height={361} className="object-cover" src={one} alt="Corporate Picture" />
        <Image width={288} height={361} className="object-cover" src={two} alt="Corporate Picture" />
        <Image width={288} height={361} className="object-cover" src={three} alt="Corporate Picture" />
        <Image width={288} height={361} className="object-cover" src={four} alt="Corporate Picture" />
        <Image width={288} height={361} className="object-cover" src={five} alt="Corporate Picture" />
        <Image width={288} height={361} className="object-cover" src={six} alt="Corporate Picture" />
        <Image width={288} height={361} className="object-cover" src={seven} alt="Corporate Picture" />
        <Image width={288} height={361} className="object-cover" src={eight} alt="Corporate Picture" />
        <Image width={288} height={361} className="object-cover" src={nine} alt="Corporate Picture" />
        <Image width={288} height={361} className="object-cover" src={seven} alt="Corporate Picture" />
      </div>

      {/* Text Overlay */}
      <div className="relative z-20 flex justify-center items-center text-center w-full lg:w-[457px]">
        <h1 className="font-bold leading-[43px] text-[2.5rem] text-white">
          Join Our Global Growing <span className="text-main">Community</span>
        </h1>
      </div>
    </section>
  );
};

export default JoinGlobalCommunity;
