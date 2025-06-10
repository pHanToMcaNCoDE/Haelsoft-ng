import React from 'react'
import img from '../../../public/assets/EdTech Platform logos.svg';
import img2 from '../../../public/assets/EdTech Platform (11) 2.svg';
import img3 from '../../../public/assets/EdTech Platform (12).svg';
import Image from 'next/image';

const Comments = () => {
  return (
    <section className='max-w-[1200px] 2xl:max-w-[15500px] mx-auto px-5 flex flex-col justify-center items-center gap-[4em] py-[100px] lg:h-[60vh]'>
        <div className='flex flex-col lg:flex-row justify-start items-center gap-[4em]'>
            <div>
                <Image width={100} height={100} className='object-cover' src={img2} alt="William .J." />
            </div>
            <div className='flex flex-col justify-center items-center gap-6'>
                <Image width={28} height={43} src={img3} alt="Double Quotes" />
                <p className='w-full lg:w-[849px] text-grayTwo text-center lg:text-left text-[1rem] leading-[43px] font-normal'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec 
                </p>
                <Image width={28} height={43} src={img3} alt="Double Quotes" />
            </div>
        </div>
        <div className='flex justify-center items-center gap-6'>
            <Image src={img} alt="William .J." />
            <div className='flex flex-col justify-center items-start gap-6'>
                <h1 className='text-[#201A18] text-[1.125rem] font-semibold leading-[27px]'>Nicolas Eze</h1>
                    <p className='text-[#FF8C53] font-normal leading-[18px] text-[0.75rem]'>Senior Product Manager at Kusnap</p>
            </div>
        </div>
    </section>
  )
}

export default Comments