import React from 'react';
import vector from '../../../../public/assets/vector.svg';
import CoursesData from '../MenuData/CoursesData';
import CorporateData from '../MenuData/CorporateData';
import BootcampsData from '../MenuData/BootcampsData';
import AboutData from '../MenuData/AboutData';
import Image from 'next/image';

const AsideData = ({ clicked }) => {
  return (
    <aside
      className={`flex xl:hidden bg-white p-[25px] sticky h-screen top-[7%] xl:top-[6%] right-0 w-full z-50 transition-transform duration-300 translate-x-0`}
      style={{ backgroundColor: 'white', position: 'fixed', width: '100%', height: '100%' }}
    >
      <Image
        className='absolute z-[999] left-[-50%] 2xl:left-[-35%] w-[1200px] h-[700px] bottom-[-80%]'
        src={vector}
        alt="Decorative Vector"
      />
      
      
      {clicked === 'Courses' && <CoursesData />}
      {clicked === 'Corporate' && <CorporateData />}
      {clicked === 'Bootcamps' && <BootcampsData />}
      {clicked === 'About' && <AboutData />}
    </aside>
  );
};

export default AsideData;
