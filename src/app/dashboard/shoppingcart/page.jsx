'use client'

import React, { useState, useEffect } from 'react';
import secureLocalStorage from 'react-secure-storage';

import { suggestions } from '@/app/lib/suggestions';
import { Rating } from '@smastrom/react-rating';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import FilledCart from './(cartcomponents)/FilledCart';
import EmptyCart from './(cartcomponents)/EmptyCart';
// import FilledCart from './(cartcomponents)/FilledCart';
// import EmptyCart from './(cartcomponents)/EmptyCart';


const ShoppingCart = () => {
 const {cartItems}= useSelector((state) => state.cart);

  return (
    <>
      <section className='relative max-w-[1250px] mx-auto p-3 flex flex-col justify-center items-start pt-[100px] gap-6'>
        <h1 className='text-main font-semibold leading-9 text-[1.5rem]'>Shopping Cart</h1>
        {cartItems.length > 0 ? <FilledCart carts={cartItems}  /> : <EmptyCart />}
        {/* <FilledCart carts={cartItems}  /> 
        <EmptyCart /> */}
      </section>
      <section className='w-full bg-[#FBFBFB] py-[100px]'>
          <div className='max-w-[1250px] mx-auto p-3 flex flex-col justify-center items-start gap-7'>
            <h1 className='text-[#FF8C53] leading-[46px] text-[1.5rem] font-semibold'>You might also like</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
              {suggestions.map((s, index) => (
                <div key={index} className='bg-white rounded-bl-lg rounded-br-lg w-full lg:w-[406px] lg:h-[440px]'>
                  <Image
                    className='rounded-tl-lg rounded-tr-lg object-cover rounded-bl-none rounded-br-none'
                    width={406}
                    height={232}
                    src={s.img}
                    alt={s.name}
                  />
                  <div className='pt-[25px] px-2 flex flex-col justify-start items-start gap-2'>
                    <h1 className='text-[#655D59] leading-[46px] text-[1.125rem] font-semibold'>{s.name}</h1>
                    <div className='flex justify-center items-center gap-1'>
                      <p className='text-[#655D59] font-medium text-[.75rem] leading-[18px]'>{s.rating}</p>
                      <Rating style={{ maxWidth: 80 }} value={s.rating} readOnly />
                      <p className='text-[#655D59] font-medium text-[.75rem] leading-[18px]'>{s.number}</p>
                    </div>
                    <p className='text-[#655D59] font-semibold leading-[46px] text-base'>{s.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    </>
  );
};

export default ShoppingCart;