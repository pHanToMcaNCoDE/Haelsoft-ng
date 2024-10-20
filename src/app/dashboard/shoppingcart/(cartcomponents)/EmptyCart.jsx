import React from 'react'
import cart from '../../../../asset/shopping-cart/Delete Cart Icon.svg';
import Image from 'next/image';
import Link from 'next/link';

const EmptyCart = () => {
  return (
    <div className='max-w-[1200px] mx-auto flex flex-col justify-start items-start gap-4'>
        <p className='text-[.875rem] leading-[21px] font-medium'>0 Courses</p>
        <div className='border-4 border-[#F0F0F0] w-[300px] sm:w-[350px] md:w-[500px] lg:w-[1070px] h-[628px] flex flex-col gap-6 justify-center items-center'>
            <Image width={196} height={196} src={cart} alt="Shopping Cart" />
            <p className='text-[.875rem] font-medium leading-[21px] text-black'>Your cart is empty.</p>
            <Link href={'/dashboard/home'} className='w-[191px] md:w-[291px] lg:w-[391px] h-[64px] text-white bg-main py-[2px] px-[15px] gap-5 rounded-lg flex justify-center items-center text-[1rem] leading-[46px] font-semibold'>
              Keep Shopping
            </Link>
        </div>
    </div>
  )
}

export default EmptyCart