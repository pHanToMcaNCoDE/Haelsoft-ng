import React from 'react';
import vector from '../../../../public/assets/Vector.svg';
import CoursesData from './CoursesData';
import CorporateData from './CorporateData';
import BootcampsData from './BootcampsData';
import AboutData from './AboutData';
import Image from 'next/image';

const Menu = ({ clicked, setClicked }) => {
  return (
    <nav
      className={`overflow-hidden fixed min-h-[348px] top-[6%] xl:top-[7%] w-full bg-white hidden xl:flex shadow-xl shadow-zinc-200 z-50 p-10 ${
        clicked ? 'opacity-100 visible' : 'opacity-0 invisible'
      } transition-opacity duration-300 ease-in-out`}
      style={{
        transition: 'visibility 0s linear 0.3s, opacity 0.3s ease-in-out',
      }}
    >
      <Image
        className='absolute z-[999] left-[-50%] 2xl:left-[-35%] w-[1200px] h-[700px] bottom-[-80%]'
        src={vector}
        alt="Decorative Vector"
      />
      {/* Render CoursesData when clicked is 'Courses' */}
      {clicked === 'Courses' && <CoursesData />}
      {clicked === 'Corporate' && <CorporateData />}
      {clicked === 'Bootcamps' && <BootcampsData />}
      {clicked === 'About' && <AboutData />}

    </nav>
  );
};

export default Menu;
