import React from 'react'
import one from '../../../public/assets/EdTech Platform Mask Group.png';
import two from '../../../public/assets/EdTech Platform (2) 3.svg';
import three from '../../../public/assets/EdTech Platform (5) 2.svg';
import four from '../../../public/assets/EdTech Platform (6).svg';
import five from '../../../public/assets/EdTech Platform (7).svg';
import six from '../../../public/assets/EdTech Platform (9) 2.svg';
import seven from '../../../public/assets/EdTech Platform (8).svg';
import Image from 'next/image';

const CorporateGallary = () => {
  return (
    <section className='flex flex-col gap-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center'>
            <Image width={482} height={444} className='object-cover' src={one} alt='Group Image'></Image>
            <Image width={482} height={444} className='object-cover' src={two} alt='Group Image'></Image>
            <Image width={482} height={444} className='object-cover' src={three} alt='Group Image'></Image>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center'>
            <Image width={357} height={399} className='object-cover' src={four} alt='Group Image'></Image>
            <Image width={357} height={399} className='object-cover' src={five} alt='Group Image'></Image>
            <Image width={357} height={399} className='object-cover' src={six} alt='Group Image'></Image>
            <Image width={357} height={399} className='object-cover' src={seven} alt='Group Image'></Image>
        </div>
    </section>
  )
}

export default CorporateGallary