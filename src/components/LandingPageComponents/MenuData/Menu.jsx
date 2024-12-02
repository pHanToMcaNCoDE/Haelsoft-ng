import React, { useEffect, useRef } from 'react';
import vector from '../../../../public/assets/Vector.svg';
import CoursesData from './CoursesData';
import CorporateData from './CorporateData';
import BootcampsData from './BootcampsData';
import AboutData from './AboutData';
import Image from 'next/image';

const Menu = ({ clicked, setClicked }) => {

  return (
    <nav
      className={`overflow-hidden sticky top-[58px] min-h-[348px] w-full bg-white hidden xl:flex shadow-xl shadow-zinc-200 z-[999] p-10 ${
        clicked ? 'fade-in' : 'fade-out'
      }`}
    >
      <Image
        className="absolute z-[999] left-[-50%] 2xl:left-[-35%] w-[1200px] h-[700px] bottom-[-80%]"
        src={vector}
        alt="Decorative Vector"
      />
      {clicked === 'Courses' && <CoursesData />}
      {clicked === 'Corporate' && <CorporateData />}
      {clicked === 'Bootcamps' && <BootcampsData />}
      {clicked === 'About' && <AboutData />}
    </nav>
  );
};

export default Menu;
