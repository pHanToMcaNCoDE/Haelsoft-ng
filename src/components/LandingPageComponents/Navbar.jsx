'use client';

import React, { useState, useEffect, useRef } from 'react';
import logo from '../../../public/assets/logo.svg';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { GoArrowLeft } from 'react-icons/go';
import Image from 'next/image';
import Link from 'next/link';
import Menu from './MenuData/Menu';
import Aside from './Aside/Aside';
import { usePathname } from 'next/navigation';

const Navbar = ({ clicked, setClicked }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [menu, setMenu] = useState(false);
  const pathname = usePathname()
  const menuRef = useRef()
  // const subMenuRef = useRef()

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '#' },
    { name: 'Courses', link: '#' },
    { name: 'Blog', link: '/blogs' },
    { name: 'Corporate', link: '#' },
    { name: 'Careers', link: '/careers' },
    { name: 'Bootcamps', link: '#' },
  ];


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
  }, []);



  return (
   <>
      <nav className="navbar h-[68px] xl:hidden fixed top-0 left-0 w-full z-[990] bg-white border-b-[2px] border-b-[#EEEEEEEE] flex justify-center items-center">
          <div className="container flex justify-between items-center p-2 max-w-[1200px] mx-auto">
            {
              clicked ? (
                <>
                  <div
                    onClick={() => setClicked('')}
                    className="cursor-pointer flex justify-center items-center text-lg gap-1 underline text-blue-500"
                  >
                    <GoArrowLeft className="font-semibold text-base" />
                    <p>Back</p>
                  </div>
                  
                  <Link href={`/`}>
                    <Image width={100} height={100} src={logo} alt="Logo" />
                  </Link>
                </>
              ) : (
                <Link href={`/`}>
                  <Image width={100} height={100} src={logo} alt="Logo" />
                </Link>
              )
            }
            <div
              onClick={() => {
                setMenu((prev) => !prev);
                setClicked('');
              }}
              className="flex flex-col justify-between items-center w-[8%] lg:w-[5%] h-[16px] cursor-pointer gap-1"
            >
              <div
                className={`h-[2px] w-[35%] rounded-full bg-[#1A1A1A] transition-transform ${
                  menu ? 'rotate-45 translate-y-[7px]' : ''
                }`}
              ></div>
              <div
                className={`h-[2px] w-[35%] rounded-full bg-[#1A1A1A] transition-opacity ${
                  menu ? 'opacity-0' : 'opacity-100'
                }`}
              ></div>
              <div
                className={`h-[2px] w-[35%] rounded-full bg-[#1A1A1A] transition-transform ${
                  menu ? '-rotate-45 -translate-y-[7px]' : ''
                }`}
              ></div>
            </div>
          </div>
        </nav>
    

      {menu && <Aside menu={menu} isScroll={isScroll} setMenu={setMenu} clicked={clicked} setClicked={setClicked} />}

      {/* Desktop Navigation */}
      <nav
        className={`navbar hidden xl:flex fixed top-0 left-0 w-full z-[990] duration-200 ${
          isScroll ? 'bg-white shadow-lg' : 'bg-[#4c4f5f]/50'
        }`}
      >
        <div className="container flex justify-between items-center p-2 max-w-[1200px] mx-auto">
          
          <Link href={`/`}>
            <Image width={100} height={100} src={logo} alt="Logo" />
          </Link>
          <ul
            className={`flex gap-8 text-[1.125rem] ${
              isScroll ? 'text-black' : 'text-white'
            }`}
          >
            {links.map((item, index) => (
              <li key={index} className="group relative">
                {['Courses', 'Corporate', 'Bootcamps', 'About'].includes(item.name) ? (
                  <div
                    className="flex items-center gap-1 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      setClicked((prev) => prev === item.name ? '' : item.name)
                    }}
                  >
                    <span>{item.name}</span>
                    <MdOutlineKeyboardArrowDown
                      className={`transition-transform ${
                        clicked === item.name ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </div>
                ) : (
                  <Link href={item.link}>{item.name}</Link>
                )}
                <span className="absolute left-0 right-0 bottom-[-13px] h-[5px] bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
              </li>
            ))}
          </ul>
          <Link
            href="/signin"
            className={`w-[150px] h-[43px] rounded flex items-center justify-center ${
              isScroll ? 'bg-[#F36400] text-white' : 'bg-[#F36400] text-white'
            }`}
          >
            Sign In
          </Link>
        </div>
      </nav>

      {/* Dropdown Menu */}
      {/* <div className="relative">
        {['Courses', 'Corporate', 'Bootcamps', 'About'].includes(clicked) && (
          <Menu clicked={clicked} setClicked={setClicked} />
        )}
      </div> */}

      {clicked && (
        <div className={`dropdown-content overflow-hidden fixed top-[58px] left-0 min-h-[348px] w-full bg-white hidden xl:flex shadow-xl shadow-zinc-200 z-[999] p-10`}>
          <Menu
            menuRef={menuRef}
            menu={menu}
            setMenu={setMenu}
            clicked={clicked}
            />
        </div>
      )}
   </>
  );
};

export default Navbar;
