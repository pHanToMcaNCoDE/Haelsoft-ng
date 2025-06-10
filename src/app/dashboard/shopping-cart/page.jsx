'use client'

import React, { useState, useEffect } from 'react';
import secureLocalStorage from 'react-secure-storage';

import { suggestions } from '@/app/lib/suggestions';
import { Rating } from '@smastrom/react-rating';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import FilledCart from './(cartcomponents)/FilledCart';
import EmptyCart from './(cartcomponents)/EmptyCart';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loader from '@/components/Loader';
// import FilledCart from './(cartcomponents)/FilledCart';
// import EmptyCart from './(cartcomponents)/EmptyCart';


const ShoppingCart = () => {

  const [cartItems, setCartItems] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { token } = useSelector((state) => state.userDetails);

  const fetchCart = () => {
    setIsLoading(true);
    axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}cart`, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      setIsLoading(false);
      setCartItems(response.data.data);
    })
    .catch((error) => {
      toast.error(error.response?.data?.message || error.response?.message )
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchCart();
  }, [token]);

  console.log('cart lenght', cartItems?.length)


  return (
    <>
      <section className='relative max-w-[1250px] mx-auto p-3 flex flex-col justify-center items-start py-[50px] gap-6'>
        {
          isLoading && (
            <Loader/>
          )
        }
        <h1 className='text-main font-bold leading-10 text-[1.5rem] lg:text-[2.5rem]'>Shopping Cart</h1>
        {cartItems?.length > 0 ? <FilledCart cartItems={cartItems} setCartItems={setCartItems}  /> : <EmptyCart />}
        {/* <FilledCart carts={cartItems}  /> 
        <EmptyCart /> */}
      </section>
      {/* <section className='w-full bg-[#FBFBFB] py-[100px]'>
          <div className='max-w-[1250px] mx-auto p-3 flex flex-col justify-center items-start gap-7'>
            <h1 className='text-[#FF8C53] leading-[46px] text-[1.5rem] font-semibold'>You might also like</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 justify-items-center'>
              {suggestions.map((s, index) => (
                <div key={index} className='bg-white rounded-bl-lg rounded-br-lg w-full lg:h-[440px]'>
                  <Image
                    className='rounded-tl-lg rounded-tr-lg object-cover rounded-bl-none rounded-br-none'
                    width={406}
                    height={232}
                    src={s.img}
                    alt={s.name}
                  />
                  <div className='pt-[25px] px-2 flex flex-col justify-start items-start gap-2'>
                    <h1 className='text-grayTwo leading-[46px] text-[1.125rem] font-semibold'>{s.name}</h1>
                    <div className='flex justify-center items-center gap-1'>
                      <p className='text-grayTwo font-medium text-[.75rem] leading-[18px]'>{s.rating}</p>
                      <Rating style={{ maxWidth: 80 }} value={s.rating} readOnly />
                      <p className='text-grayTwo font-medium text-[.75rem] leading-[18px]'>{s.number}</p>
                    </div>
                    <p className='text-grayTwo font-semibold leading-[46px] text-base'>{s.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}
    </>
  );
};

export default ShoppingCart;