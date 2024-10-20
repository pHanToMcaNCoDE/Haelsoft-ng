import React from 'react'

import one from '../../../public/assets/img-list/one.svg';
import two from '../../../public/assets/img-list/two.svg';
import three from '../../../public/assets/img-list/three.svg';
import four from '../../../public/assets/img-list/four.svg';
import five from '../../../public/assets/img-list/five.svg';
import six from '../../../public/assets/img-list/six.svg';
import seven from '../../../public/assets/img-list/seven.svg';
import Image from 'next/image';

const Gall = () => {
  return (
    <div className='flex flex-col gap-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-1 w-full'>
            <Image width={482} height={444} className='object-cover' src={one} alt="Learning" />
            <Image width={482} height={444} className='object-cover' src={two} alt="Learning" />
            <Image width={482} height={444} className='object-cover' src={three} alt="Learning" />
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center gap-1 w-full'>
            <Image src={four} alt="Learning" />
            <Image src={five} alt="Learning" />
            <Image src={six} alt="Learning" />
            <Image src={seven} alt="Learning" />
        </div>
    </div>
  )
}

export default Gall