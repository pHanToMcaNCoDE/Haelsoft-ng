import React from 'react';
import Image from 'next/image';
import obj from '../../../../asset/EdTechPlatformVector 1.svg';
import img from '../../../../asset/course-details/EdTechPlatformVector 5.svg';
import tStroke from '../../../../asset/course-details/EdTechPlatform.svg';
import laptop from '../../../../asset/course-details/EdTechPlatformnotebook.svg';
import people from '../../../../asset/course-details/EdTechPlatformteam-building.svg';
import run from '../../../../asset/course-details/EdTechPlatformtrack1.svg';
import cer from '../../../../asset/course-details/EdTechPlatformcertificate.svg';

const CourseTutor = ({ courses }) => {
    return (
        <section className='bg-[#FF8C53] w-full min-h-screen py-[200px] px-3 xl:px-0'>
            <div className='max-w-[1260px] mx-auto p-3 flex flex-col justify-between items-center min-h-screen'>
                <div className='bg-white w-full lg:w-[1026px] md:h-[436px] flex justify-between items-center relative px-[2em] py-[1em] md:py-0'>
                    <Image className='absolute top-[8%] left-3' src={tStroke} alt='Top Stroke' />
                    <Image className='absolute bottom-[35%] md:bottom-[40%] lg:bottom-[35%] right-[18%] md:left-[45%]' src={tStroke} alt='Bottom Stroke' />
                    <div>
                        <p className='text-[#655D59] font-semibold text-[1.125rem] leading-[43px] lg:w-[517px] lg:h-[215px]'>
                            This course has been an eye-opener for me! The explanations are clear, and the practical examples really helped solidify my understanding. Highly recommended for anyone looking to deepen their knowledge.
                        </p>
                        <div className='my-4'>
                            <h1 className='text-[#201A18] text-[1.5rem] leading-[43px] font-bold'>Janet Jackson</h1>
                            <p className='text-base text-[#655D59] font-medium leading-[43px]'>Administrator at Carlcare</p>
                        </div>
                    </div>
                    <Image className='absolute right-[310px] lg:flex hidden' width={256} height={436} src={obj} alt='Decoration Object' />
                    <Image className='absolute right-0 lg:flex hidden lg:w-[535px]' width={535} height={440} src={img} alt='Course Illustration' />
                </div>
                <div className='flex flex-col justify-center items-center text-center py-[200px]'>
                    <h1 className='text-[1.125rem] text-white leading-[46px] font-semibold mb-2'>{courses?.online}</h1>
                    <div className='gap-8 flex flex-col justify-start md:items-center lg:min-h-[80px] xl:w-[1120px]'>
                        <p className='text-base font-normal leading-[46px] text-white'>
                            {courses?.intro}
                        </p>
                        <p className='text-base font-normal leading-[46px] text-white'>
                            {courses?.course_overview}
                        </p>
                    </div>
                </div>
                <div className='xl:w-[1239px]'>
                    <div className='grid grid-cols-1 xl:grid-cols-2 gap-10 place-items-center'>
                        {courses?.benefits?.length > 0 && (courses.benefits.map((benefit, index) => (
                            <div key={index} className='bg-white flex gap-4 justify-start items-start px-6 py-4 md:w-[650px] lg:w-[580px] md:h-[152px]'>
                                <Image className='object-cover' width={45} height={45} src={benefit.img} alt={benefit.title} />
                                <div className='flex flex-col justify-start items-start'>
                                    <h1 className='text-[#201A18] text-[1.125rem] font-semibold leading-[46px]'>{benefit.title}</h1>
                                    <p className='text-[#655D59] md:w-[473px] text-[1.125rem] leading-[30px] font-semibold h-[46px]'>{benefit.desc}</p>
                                </div>
                            </div>
                        )))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseTutor;
