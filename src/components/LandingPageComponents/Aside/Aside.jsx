import React from 'react';
import { GoArrowRight } from 'react-icons/go';
import secureLocalStorage from 'react-secure-storage';
import Link from 'next/link';
import AsideData from './AsideData';
import './style.css';

const Aside = ({ menu, setMenu, clicked, setClicked }) => {
  const links = [
    { name: 'Home', route: '/' },
    { name: 'About', route: '#' },
    { name: 'Courses', route: '#' },
    { name: 'Blog', route: '/blogs' },
    { name: 'Corporate', route: '#' },
    { name: 'Careers', route: '/careers' },
    { name: 'Bootcamps', route: '#' }
  ];

  const handleClick = (item) => {
    setClicked(item);
    secureLocalStorage.setItem('Title', item);
  };

  return (
    <>
      <aside
        className={`bg-white flex xl:hidden z-40 sticky h-screen top-[8%] right-0 w-full duration-300 ease-in-out ${menu ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className='w-full h-full flex flex-col justify-start p-[24px] items-start text-[#201A18] font-semibold text-base gap-[25px]'>
          {links.map((link, index) => (
            <Link
              onClick={() => {
                handleClick(link.name);
                setMenu(true);
              }}
              href={link.route}
              key={index}
              className='flex justify-between items-center w-full aside-link'
            >
              <p className='mb-4 cursor-pointer hover:text-[#F36400]'>{link.name}</p>
              <GoArrowRight className='text-[#201A18] font-semibold text-base' />
            </Link>
          ))}
        </div>
      </aside>
      <AsideData clicked={clicked} />
    </>
  );
};

export default Aside;
