import React from 'react'
import bg from '../../../public/assets/EdTech Platform Vector 8.svg';
import img from '../../../public/assets/EdTech Platform (2) 2.svg';
import Image from 'next/image';

const EdtechGraduates = ({partner}) => {
  return (
        <section className='relative overflow-hidden min-h-screen lg:h-auto py-[100px] lg:py-0'>
            <Image height={1132} className='w-screen min-h-screen 2xl:w-screen xl:h-[1132] 2xl:h-full relative top-0 right-0 left-0' src={bg} alt="Bg" />
            <div className='absolute inset-0 px-5 max-w-[1200px] 2xl:max-w-[1500px] mx-auto flex flex-col md:flex-row md:justify-between items-center gap-6'>
                {partner}
                <div className='mt-8'>
                    <Image className='object-cover h-full rounded-lg lg:h-[80vh]' src={img} alt="Group of people at work" />
                </div>
            </div>
    
        </section>
  );
};

export default EdtechGraduates;
