'use client'

import Link from 'next/link';
import React, { useState } from 'react'
import { HiOutlineBell, HiOutlineUserCircle } from 'react-icons/hi2';
import { IoIosArrowDown, IoIosMenu } from 'react-icons/io';
import { IoSearch } from 'react-icons/io5';
import { TbShoppingCart } from "react-icons/tb";

const Navbar = () => {
    const [query, setquery] = useState("");
  return (
    <nav className="nav h-[80px] sticky top-0 bg-white mx-auto z-50 w-full px-4 lg:px-0">
      <div className="max-w-[1250px] w-full mx-auto py-4 flex justify-between items-center">
        <div className="flex items-center lg:w-[785px] gap-4">
          {/* Logo */}
          <div>
            <Link
              className="text-[#f36402] font-semibold text-[1.2rem] md:text-[1.8rem]"
              href="/"
            >
              Haelsoft
            </Link>
          </div>

          {/* Button Filter */}
            <button className='gap-2 rounded border border-main text-main text-[.875rem] font-medium leading-10 p-2 h-[33px] w-auto md:w-[98px] flex justify-center items-center'>
                Explore
                <IoIosArrowDown size={20} />
            </button>

          {/* Search */}
          <div
            className={`w-[90%] relative md:w-[70%] lg:w-[522px]  ${
              query
                ? "rounded-t-[6px] border-b-0 ease-in-out duration-300"
                : "rounded-3xl ease-in-out duration-300"
            } border border-[#9c918d] flex justify-between items-center  px-3 h-[43px] `}
          >
            <input
              type="text"
              name="q"
              onChange={(e) => setquery(e.target.value)}
              value={query}
              className="w-full outline-none max-w-[320px] "
              placeholder="What do you want to learn?"
              onClick={() => {
                setIsSearchClicked(true);
              }}
            />
            <div
              className={`bg-[#F36400] text-white flex items-center justify-center rounded-full h-6 w-6 cursor-pointer `}
            >
              <IoSearch />
            </div>

            <div
              onClick={() => {
                setIsSearchClicked(false);
              }}
              className={`absolute  ${
                query
                  ? "ease-in-out duration-300 opacity-[100%]"
                  : "opacity-0 ease-in-out duration-300 hidden"
              } z-[100] -left-[0.2px] -right-[1px] h-[253px] bg-white top-[2.6rem] border max-w-[398px] border-[#9c918d] border-t-0 rounded-b-[6px] shadow-lg px-4 cursor-pointer`}
            >
              <div className="w-full gap-x-2 mt-4  flex text-[#655D59] items-center">
                <IoSearch className="text-[#655D59]" /> Search Engine
                Optimization
              </div>
            </div>
          </div>
        </div>


          {/* Icons */}
          <div className='flex justify-center items-center gap-2 text-[#655D59]'>
            <TbShoppingCart className='cursor-pointer' size={20} />
            <HiOutlineBell className='cursor-pointer' size={20} />
            <div className='flex items-center gap-2'>
                <HiOutlineUserCircle size={22} />
                <IoIosArrowDown className='cursor-pointer' size={20} />
            </div>
          </div>

        {/* Links */}
        {/* <Links open={open} setopen={setopen} /> */}

        {/* Menu Button */}
        <button
          className="cursor-pointer flex lg:hidden"
          onClick={() => setopen(true)}
        >
          <IoIosMenu className="text-2xl" />
        </button>

        {/* Close Button */}
      </div>
    </nav>
  )
}

export default Navbar