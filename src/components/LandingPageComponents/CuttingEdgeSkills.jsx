'use client'

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
import { usePathname } from 'next/navigation';

const CuttingEdgeSkills = ({skillsContent}) => {
    const pathname = usePathname();

  return (
    <>
        {
            pathname === '/career-services' ? (<></>) : (
                <section className='pt-[50px] pb-[90px] flex flex-col justify-center items-center gap-[7em]'>
                    <div className='max-w-[1250px] px-5 2xl:max-w-[1500px] mx-auto flex flex-col justify-center items-center gap-[7em]'>
                        <div className='flex flex-col justify-center items-center gap-10 text-center'>
                            {skillsContent}
                        </div>
                        <div className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center place-items-center gap-8 w-full ${pathname === '/our-story' && 'lg:w-[962px]'}`}>
                            {
                                pathname === '/our-story' ? (
                                    <>
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
                                    </>
                                ) : (
                                    <>
                                        <div className='flex flex-col justify-center items-center gap-[15px] w-full text-center'>
                                            <Image className='object-contain' width={50} height={52} src={email} alt="Email Marketing" />
                                            <p className='text-[#655D59] text-base font-normal'>Consult with our IT training specialists with an average of 10 years of consulting experience.</p>
                                        </div>
                                        <div className='flex flex-col justify-center items-center gap-[15px] w-full text-center'>
                                            <Image className='object-contain' width={50} height={52} src={pie} alt="Pie Chart" />
                                            <p className='text-[#655D59] text-base font-normal'>Understand your company and agency’s IT skill gaps and track employee progress.</p>
                                        </div>
                                        <div className='flex flex-col justify-center items-center gap-[15px] w-full text-center'>
                                            <Image className='object-contain' width={50} height={52} src={dev} alt="Development" />
                                            <p className='text-[#655D59] text-base font-normal'>Build your IT team’s technology skills with hands-on instructors.</p>
                                        </div>
                                        <div className='flex flex-col justify-center items-center gap-[15px] w-full text-center'>
                                            <Image className='object-contain' width={50} height={52} src={design} alt="Graphics Design" />
                                            <p className='text-[#655D59] text-base font-normal'>Adopt technologies faster and more efficiently.</p>
                                        </div>
                                    </>
                                )
                            }
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
    </>
  )
}

export default CuttingEdgeSkills