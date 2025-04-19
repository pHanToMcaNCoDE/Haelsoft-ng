import React, { useState } from 'react';
import { GoArrowRight } from 'react-icons/go';
import secureLocalStorage from 'react-secure-storage';
import Link from 'next/link';
import AsideData from './AsideData';
import './style.css';

const Aside = ({ menu, setMenu, clicked, setClicked, isScroll }) => {
  const [selectedMenu, setSelectedMenu] = useState('');

  const links = [
    { name: 'Home', route: '/' },
    { name: 'About', route: '#' },
    { name: 'Courses', route: '#' },
    { name: 'Blog', route: '/blogs' },
    { name: 'Corporate', route: '#' },
    { name: 'Careers', route: '/careers' },
    { name: 'Bootcamps', route: '#' },
  ];

  const handleClick = (item) => {
    setClicked(item);
    setSelectedMenu(item);
    secureLocalStorage.setItem('Title', item);
  };

  return (
    <>
      {/* Aside Menu */}
      <aside
        className={`bg-white flex xl:hidden z-40 fixed h-screen top-[6%] right-0 w-full ${
          menu ? 'fade-left' : 'fade-right'
        }`}
      >
        <div className="w-full h-full flex flex-col justify-start px-[24px] items-start text-[#201A18] font-semibold text-base gap-[25px] py-6">
          {links.map((link, index) => (
            <li key={index} className="w-full list-none">
              {['Courses', 'Corporate', 'Bootcamps', 'About'].includes(link.name) ? (
                <div
                  className="flex justify-between items-center w-full cursor-pointer"
                  onClick={() => handleClick(link.name)}
                >
                  <Link href={link.route || '#'} onClick={(e) => e.preventDefault()}>
                    {link.name}
                  </Link>
                  <GoArrowRight className="text-[#201A18] font-semibold text-base" />
                </div>
              ) : (
                <Link href={link.route || '#'}>{link.name}</Link>
              )}
              <span className="absolute left-0 right-0 bottom-[-13px] h-[5px] bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </li>
          ))}
                    <Link
                      href="/signin"
                      className={`w-[150px] h-[43px] rounded flex items-center justify-center ${
                        isScroll ? 'bg-[#F36400] text-white' : 'bg-[#F36400] text-white'
                      }`}
                    >
                      Sign In
                    </Link>
        </div>
      </aside>

      {/* Aside Data */}
      {clicked && (
        <AsideData
          clicked={clicked}
          selectedMenu={selectedMenu}
          setSelectedMenu={setSelectedMenu}
        />
      )}
    </>
  );
};

export default Aside;
