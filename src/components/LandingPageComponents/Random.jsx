import React from 'react'
import imgCover from '../../../public/assets/EdTech Platform 2.svg';
import cover from '../../../public/assets/EdTech Platform Vector 1.svg';
import CourseCrd from "./CourseCrd";
import Image from 'next/image';
import teach from '../../../public/assets/EdTech Platform 4.svg';

const Random = () => {
  return (
    <section className="bg-main lg:bg-none relative w-full min-h-screen xl:h-[137vh] 2xl:h-[120vh] overflow-hidden">
      <div className="absolute hidden lg:flex top-[180px] 2xl:top-[150px]">
        <Image
          src={imgCover}
          className="lg:max-h-[1000px] 2xl:max-h-[1100px] lg:w-[1500px] 2xl:w-[3000px]"
          alt="A teacher"
        />
      </div>
      <Image 
        width={1000} 
        height={100} 
        className="lg:w-[1440px] xl:w-full 2xl:w-[3000px] h-[900px] lg:h-[756px] xl:h-[750px] 2xl:h-[850px] absolute top-0 left-0 z-10 object-cover hidden lg:flex"
        src={cover} 
        alt="Orange Cover"
      />
      <div className="relative py-[30px] max-w-[1260px] mx-auto px-5 flex flex-col justify-center items-center gap-[16px] z-20">

        {/* Courses */}
        <CourseCrd/>
      </div>
      <Image src={teach} alt='A teacher' className='flex w-full h-full object-cover lg:hidden'></Image>
    </section>
  )
}

export default Random