'use client'

import React, { useState, useEffect } from 'react';
import logo from '../../../public/assets/logo.svg';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { CSSTransition } from 'react-transition-group';

import Menu from './MenuData/Menu';
import Aside from './Aside/Aside';
import secureLocalStorage from 'react-secure-storage';
import { FaArrowLeftLong } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = ({ clicked, setClicked = () => {} }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [click, setClick] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCoursesClick = (name) => {
    setClicked(name);
  };

  const links = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '#' },
    { name: 'Courses', link: '#' },
    { name: 'Blog', link: '/blogs' },
    { name: 'Corporate', link: '#' },
    { name: 'Careers', link: '/careers' },
    { name: 'Bootcamps', link: '#' }
  ];

  const title = secureLocalStorage.getItem('Title');

  return (
    <>
      {/* Mobile Navigation */}
      <nav className='navbar h-[68px] xl:hidden fixed top-0 left-0 w-full z-[990] transition-all duration-300 bg-white border-b-[2px] border-b-[#EEEEEEEE] flex justify-center items-center'>
        <div className="container flex justify-between items-center p-2 max-w-[1200px] 2xl:max-w-[1500px] mx-auto gap-4">
          {clicked ? (
            <div className='transition duration-300 ease-in-out opacity-100 transform scale-100 flex justify-between items-center gap-10 w-[50%]'>
              <div onClick={() => setClicked('')} className='text-blue-500 underline cursor-pointer flex justify-center items-center gap-2'>
                <FaArrowLeftLong />
                <p>Back</p>
              </div>
              <p>{title}</p>
            </div>
          ) : (
            <Image
              width={100}
              height={100}
              className="transition duration-300 ease-in-out opacity-100 transform scale-100 object-cover"
              src={logo}
              alt="Logo"
            />
          )}
          <div
            onClick={() => setMenu(prev => !prev)}
            className={
              menu
                ? `duration-300 flex flex-col justify-center items-center w-[5%] h-[13px] cursor-pointer xl:hidden`
                : `duration-300 flex flex-col justify-between items-center w-[5%] h-[13px] cursor-pointer xl:hidden`
            }
          >
            <div
              className={
                menu
                  ? `duration-300 h-[2px] rotate-45 w-[60%] rounded-full bg-[#1A1A1A] translate-x-1 translate-y-0`
                  : `duration-300 h-[2px] rotate-0 w-[60%] rounded-full bg-[#1A1A1A]`
              }
            ></div>
            <div
              className={
                menu
                  ? `duration-300 h-[2px] w-[45%] -translate-x-8 opacity-0 rounded-full bg-[#1A1A1A]`
                  : `duration-300 h-[2px] w-[60%] translate-x-0 opacity-100 rounded-full bg-[#1A1A1A]`
              }
            ></div>
            <div
              className={
                menu
                  ? `duration-300 h-[2px] -rotate-45 w-[60%] rounded-full bg-[#1A1A1A] translate-x-1 -translate-y-1`
                  : `duration-300 h-[2px] rotate-0 w-[60%] rounded-full bg-[#1A1A1A]`
              }
            ></div>
          </div>
        </div>
      </nav>

      {/* Desktop Navigation */}
      <nav className={`hidden xl:flex navbar fixed top-0 left-0 w-full z-[990] transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-[#4c4f5f]/50'}`}>
        <div className="container flex justify-between items-center p-2 max-w-[1200px] 2xl:max-w-[1500px] mx-auto">
          <Image width={100} height={100} className="object-cover" src={logo} alt="Logo" />
          
          <ul className={`hidden xl:flex justify-between items-center gap-8 text-[1.125rem] font-normal leading-8 ${isScrolled ? 'text-black' : 'text-white'}`}>
            {links.map((item, index) => (
              <li key={index} className="group relative">
                <span onClick={item.link ? () => setClicked(item.name) : undefined} className="cursor-pointer">
                  {['Courses', 'Corporate', 'Bootcamps', 'About'].includes(item.name) ? (
                    <div className="flex items-center gap-1">
                      <Link href={item.link} onClick={() => handleCoursesClick(item.name)}>
                        {item.name}
                      </Link>
                      <MdOutlineKeyboardArrowDown className={clicked === item.name ? 'rotate-180 duration-200' : 'rotate-0 duration-200'} />
                    </div>
                  ) : (
                    <Link href={item.link} onClick={() => handleCoursesClick(item.name)}>{item.name}</Link>
                  )}
                </span>
                <span className="absolute left-0 right-0 bottom-[-13px] h-[5px] bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
              </li>
            ))}
          </ul>

          <Link href={'/signin'} className={`hidden xl:flex justify-center items-center w-[150px] h-[43px] rounded transition-colors duration-300 ${isScrolled ? 'bg-[#F36400] border border-[#F36400] text-white' : 'bg-[#F36400] border border-[#F36400] text-white'}`}>
            Sign In
          </Link>
        </div>

      </nav>

      <CSSTransition
          in={clicked === 'Courses' || clicked === 'Corporate' || clicked === 'Bootcamps' || clicked === 'About'}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <Menu clicked={clicked} setClicked={setClicked} />
      </CSSTransition>

      {menu && <Aside menu={menu} setMenu={setMenu} clicked={clicked} setClicked={setClicked} />}
    </>
  );
};

export default Navbar;
