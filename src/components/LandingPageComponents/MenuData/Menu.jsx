import React, { useEffect, useRef } from 'react';
import vector from '../../../../public/assets/Vector.svg';
import CoursesData from './CoursesData';
import CorporateData from './CorporateData';
import BootcampsData from './BootcampsData';
import AboutData from './AboutData';
import Image from 'next/image';

const Menu = ({ clicked, menuRef }) => {

  return (
    <nav
      ref={menuRef}
      className=' overflow-hidden'
    >
      {/* <div className="absolute z-[999] left-[-50%] 2xl:left-[-35%] w-fit h-[700px] bottom-[-80%]">
        <Image
          
          src={vector}
          alt="Decorative Vector"
        />
      </div> */}
      
      <div className={`w-full ${
          clicked ? 'fade-in' : 'fade-out'
        }`}
      >
        {clicked === 'Courses' && <CoursesData />}
        {clicked === 'Corporate' && <CorporateData />}
        {clicked === 'Bootcamps' && <BootcampsData />}
        {clicked === 'About' && <AboutData />}
      </div>
    </nav>

  );
};

export default Menu;
