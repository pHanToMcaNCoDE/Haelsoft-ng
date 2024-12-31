import React from 'react'
import email from '../../../public/assets/cut-icons/Email Marketing 1.svg'
import pie from '../../../public/assets/cut-icons/EdTech Platform Pie Chart.svg';
import design from '../../../public/assets/cut-icons/EdTech Platform Graphic Design.svg';
import dev from '../../../public/assets/cut-icons/EdTech Platform (12).svg';

import one from '../../../public/assets/img-list/one.svg';
import two from '../../../public/assets/img-list/two.svg';
import three from '../../../public/assets/img-list/three.svg';
import four from '../../../public/assets/img-list/four.svg';
import five from '../../../public/assets/img-list/five.svg';
import six from '../../../public/assets/img-list/six.svg';
import seven from '../../../public/assets/img-list/seven.svg';
import Image from 'next/image';

const CuttingEdgeSkills = () => {
  return (
    <section className='py-[90px] flex flex-col justify-center items-center gap-[7em]'>
        <div className='max-w-[1200px] px-5 2xl:max-w-[1500px] mx-auto flex flex-col justify-center items-center gap-[7em]'>
            <div className='flex flex-col justify-center items-center gap-10 text-center'>
                <div className='flex flex-col justify-center items-center gap-1'>
                    <h1 className='text-[1.625rem] text-[#201A18] font-semibold leading-[36px]'>Cutting-Edge Digital Skills</h1>
                    <div className='bg-[#F1C118] h-[4px] w-[56px] rounded'></div>
                </div>
                <p className='text-[.875rem] text-[#655D59] font-normal leading-[24px] w-full lg:w-[779px]'>
                    Digital transformation is at the heart of modern organizational growth, enabling businesses to adapt, innovate, and thrive in a rapidly evolving digital landscape. At Haelsoft, we specialize in guiding organizations through this transformation, leveraging cutting-edge technologies to optimize processes, enhance customer experiences, and drive measurable results. With a focus on strategy, innovation, and seamless execution, Haelsoft empowers businesses to unlock their full potential in the digital age. 
                </p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-items-center gap-8 w-full lg:w-[962px]'>
                <div className='flex justify-center items-center gap-[15px] w-full md:w-[145px]'>
                    <Image className='object-contain' width={50} height={52} src={design} alt="Graphics Design" />
                    <p className='text-[#655D59] text-base font-normal'>Design</p>
                </div>
                <div className='flex justify-center items-center gap-[15px] w-full md:w-[145px]'>
                    <Image className='object-contain' width={50} height={52} src={email} alt="Email Marketing" />
                    <p className='text-[#655D59] text-base font-normal'>Marketing</p>
                </div>
                <div className='flex justify-center items-center gap-[15px] w-full md:w-[145px]'>
                    <Image className='object-contain' width={50} height={52} src={dev} alt="Development" />
                    <p className='text-[#655D59] text-base font-normal'>Development</p>
                </div>
                <div className='flex justify-center items-center gap-[15px] w-full md:w-[145px]'>
                    <Image className='object-contain' width={50} height={52} src={pie} alt="Pie Chart" />
                    <p className='text-[#655D59] text-base font-normal'>Data</p>
                </div>
            </div>
        </div>
        {/* <div className='flex flex-col gap-4'>
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
        </div> */}
    </section>
  )
}

export default CuttingEdgeSkills