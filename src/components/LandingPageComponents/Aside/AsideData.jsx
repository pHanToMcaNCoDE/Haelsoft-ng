import React, { useEffect } from 'react';
import vector from '../../../../public/assets/Vector.svg';
import CoursesData from '../MenuData/CoursesData';
import CorporateData from '../MenuData/CorporateData';
import BootcampsData from '../MenuData/BootcampsData';
import AboutData from '../MenuData/AboutData';
import Image from 'next/image';

const AsideData = ({ clicked, selectedMenu, setSelectedMenu }) => {


  useEffect(() => {
    if (clicked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [clicked]);

  return (
    <aside
      className={`flex xl:hidden bg-white px-[25px] py-[50px] fixed h-screen top-[5.6%] right-0 w-full z-50 transition-transform duration-300 ${
        clicked ? 'fade-left' : 'fade-right'
      }`}
      style={{ backgroundColor: 'white' }}
    >
      {/* <Image
        className="absolute z-[999] left-[-50%] 2xl:left-[-35%] w-auto h-auto bottom-[-80%]"
        src={vector}
        alt="Decorative Vector"
        layout="fill"
        objectFit="cover"
      /> */}


      {selectedMenu === 'Courses' && <CoursesData />}
      {selectedMenu === 'Corporate' && <CorporateData />}
      {selectedMenu === 'Bootcamps' && <BootcampsData />}
      {selectedMenu === 'About' && <AboutData />}
    </aside>
  );
};

export default AsideData;
