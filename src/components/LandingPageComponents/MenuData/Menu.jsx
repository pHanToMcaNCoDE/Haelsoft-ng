import React, { useEffect, useRef } from 'react';
import vector from '../../../../public/assets/Vector.svg';
import CoursesData from './CoursesData';
import CorporateData from './CorporateData';
import BootcampsData from './BootcampsData';
import AboutData from './AboutData';
import Image from 'next/image';

const Menu = ({ clicked, setClicked }) => {
  const menuRef = useRef(null);

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setClicked('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setClicked]);

  
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setClicked('');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [setClicked]);

  return (
    <nav
      ref={menuRef}
      className={`overflow-hidden fixed min-h-[348px] top-[5.6%] w-full bg-white hidden xl:flex shadow-xl shadow-zinc-200 z-50 p-10 ${
        clicked ? 'opacity-100 visible' : 'opacity-0 invisible'
      } transition-all duration-300 ease-in-out`}
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
