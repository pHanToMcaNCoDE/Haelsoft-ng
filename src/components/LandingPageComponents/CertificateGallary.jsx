import Image from 'next/image'
import React from 'react'
import one from '../../../public/assets/cert-course/gallary/one.svg';
import two from '../../../public/assets/cert-course/gallary/two.svg';
import three from '../../../public/assets/cert-course/gallary/three.svg';
import four from '../../../public/assets/cert-course/gallary/four.svg';
import five from '../../../public/assets/cert-course/gallary/five.svg';
import six from '../../../public/assets/cert-course/gallary/six.svg';
import seven from '../../../public/assets/cert-course/gallary/seven.svg';

const CertificateGallary = () => {
  return (
    <section className='w-full h-full flex flex-col justify-center items-center overflow-hidden gap-2'>
        <div className='grid grid-cols-3 justify-items-center place-items-center gap-3'>
            <Image className='w-full xl:w-screen object-cover h-[444px]' src={one} alt='Black Woman Greeting'></Image>
            <Image className='w-full xl:w-screen object-cover h-[444px]' src={two} alt='Black Man attending An Online Class'></Image>
            <Image className='w-full xl:w-screen object-cover h-[444px]' src={three} alt='SEO'></Image>
        </div>
        <div className='grid grid-cols-4 justify-items-center place-items-center gap-3'>
            <Image className='w-full xl:w-screen object-cover lg:h-[444px]' src={four} alt='Customer Service'></Image>
            <Image className='w-full xl:w-screen object-cover lg:h-[444px]' src={five} alt='Attending Class'></Image>
            <Image className='w-full xl:w-screen object-cover lg:h-[444px]' src={six} alt='Black Man attending An Online Class'></Image>
            <Image className='w-full xl:w-screen object-cover lg:h-[444px]' src={seven} alt='Black WOman Heading To Class'></Image>
        </div>
    </section>
  )
}

export default CertificateGallary