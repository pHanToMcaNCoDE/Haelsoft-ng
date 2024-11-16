'use client';

import React, { useState, useEffect } from 'react';
import logo from '../../../public/assets/logo.svg';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { CSSTransition } from 'react-transition-group';
import Menu from './MenuData/Menu';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = ({boolclick, setBoolClick, clicked, setClicked}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const links = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '' },
    { name: 'Courses', link: '' },
    { name: 'Blog', link: '/blogs' },
    { name: 'Corporate', link: '' },
    { name: 'Careers', link: '/careers' },
    { name: 'Bootcamps', link: '' },
  ];

  const toggleMenu = (e, itemName) => {
    e.stopPropagation(); // Prevent event from bubbling up
    if (clicked === itemName) {
      setClicked('');
      setBoolClick(false);
    } else {
      setClicked(itemName);
      setBoolClick(true);
    }
  };

  // Handle clicks outside of menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (boolclick && !event.target.closest('.navbar')) {
        setBoolClick(false);
        setClicked('');
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [boolclick, setBoolClick, setClicked]);

  return (
    <>
      {/* Mobile Navigation */}
      <nav className="navbar h-[68px] xl:hidden fixed top-0 left-0 w-full z-[990] transition-all duration-300 bg-white border-b-[2px] border-b-[#EEEEEEEE] flex justify-center items-center">
        <div className="container flex justify-between items-center p-2 max-w-[1200px] 2xl:max-w-[1500px] mx-auto gap-4">
          <Image width={100} height={100} src={logo} alt="Logo" className="object-cover" />
          <div
            onClick={() => setMenu((prev) => !prev)}
            className="flex flex-col justify-between items-center w-[5%] h-[13px] cursor-pointer"
          >
            <div className={`h-[2px] rounded-full bg-[#1A1A1A] transition-transform ${menu ? 'rotate-45 translate-y-[2px]' : ''}`}></div>
            <div className={`h-[2px] rounded-full bg-[#1A1A1A] transition-opacity ${menu ? 'opacity-0' : 'opacity-100'}`}></div>
            <div className={`h-[2px] rounded-full bg-[#1A1A1A] transition-transform ${menu ? '-rotate-45 -translate-y-[2px]' : ''}`}></div>
          </div>
        </div>
      </nav>

      {/* Desktop Navigation */}
      <nav
        className={`navbar hidden xl:flex fixed top-0 left-0 w-full z-[990] transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-[#4c4f5f]/50'
        }`}
      >
        <div className="container flex justify-between items-center p-2 max-w-[1200px] 2xl:max-w-[1500px] mx-auto">
          <Image width={100} height={100} src={logo} alt="Logo" className="object-cover" />
          <ul
            className={`flex gap-8 text-[1.125rem] font-normal leading-8 ${
              isScrolled ? 'text-black' : 'text-white'
            }`}
          >
            {links.map((item, index) => (
              <li key={index} className="group relative">
                {['Courses', 'Corporate', 'Bootcamps', 'About'].includes(item.name) ? (
                  <div
                    className="flex items-center gap-1 cursor-pointer"
                    onClick={(e) => toggleMenu(e, item.name)}
                  >
                    <Link href={item.link || '#'} onClick={(e) => e.preventDefault()}>{item.name}</Link>
                    <MdOutlineKeyboardArrowDown
                      className={`${clicked === item.name ? 'rotate-180' : 'rotate-0'} transition-transform`}
                    />
                  </div>
                ) : (
                  <Link href={item.link || '#'}>{item.name}</Link>
                )}
                <span className="absolute left-0 right-0 bottom-[-13px] h-[5px] bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </li>
            ))}
          </ul>
          <Link
            href="/signin"
            className={`w-[150px] h-[43px] rounded flex items-center justify-center transition-colors ${
              isScrolled ? 'bg-[#F36400] text-white' : 'bg-[#F36400] text-white'
            }`}
          >
            Sign In
          </Link>
        </div>
      </nav>

      {/* Dropdown Menu */}
      <CSSTransition
        in={boolclick && ['Courses', 'Corporate', 'Bootcamps', 'About'].includes(clicked)}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <Menu clicked={clicked} setClicked={setClicked} />
      </CSSTransition>
    </>
  );
};

export default Navbar;