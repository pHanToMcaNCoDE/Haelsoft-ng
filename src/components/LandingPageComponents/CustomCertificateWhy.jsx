import React from 'react'
import org from '../../../public/assets/org.svg';
import Image from 'next/image';
import { GoDotFill } from 'react-icons/go';


const CustomCertificateWhy = ({main, learn, tools, skills, why}) => {
  return (
    <section className='relative min-h-screen w-full bg-[#f5f5f5] pt-[100px] 2xl:pt-0'>
        <div className='relative 2xl:absolute inset-x-0 top-[-10%] 2xl:top-[-22%] w-full xl:max-w-[953.75px] mx-auto min-h-[871px] bg-white shadow-lg z-20 p-[36px]'>
            <Image width={953.75} height={276} src={org} alt='Orange Background' className='absolute z-[5px] top-0 right-0 left-0'></Image>
            <div className='relative z-10 flex flex-col justify-center items-start gap-20'>
                <div className='flex flex-col justify-center items-start gap-10'>
                    <div className='w-full flex flex-col justify-center items-start gap-4'>
                        <h1 className='text-[#F7F7F7] text-[1.5rem] lg:text-[3rem] leading-[40px] lg:leading-[55.5px] font-semibold'>
                            {main}
                        </h1>
                        <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
                    </div>
                </div>
            </div>
            <div className='pt-[200px] flex flex-col justify-center items-start gap-8'>
                <div className='flex flex-col justify-center items-start gap-4'>
                    <h1 className='text-[#201A18] font-semibold text-[1.5rem] leading-[29.26px]'>What You'll Learn</h1>
                    <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
                </div>
                {/* {gain} */}
                <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-start place-items-start gap-[40px]'>
                    {
                        learn.map((l) => (
                            <div key={l.id} className='flex justify-start items-start gap-2'>
                                <GoDotFill className='text-main text-[1.75rem]' />
                                <p>{l.list}</p>
                            </div>
                        ))
                    }
                </div>

                <div className='flex flex-col justify-center items-start gap-4'>
                    <h1 className='text-[#201A18] font-semibold text-[1.5rem] leading-[29.26px]'>Skills</h1>
                    <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-items-start place-items-start gap-x-[10px] gap-y-[15px]'>
                    {
                        skills.map((skill) => (
                            <div key={skill.id} className='text-[.875rem] leading-[18px] font-normal text-black flex justify-center items-center w-[143px] h-[36.5px] rounded-[4px] py-[4px] bg-[#e7eefb]'>
                                <p>{skill.list}</p>
                            </div>
                        ))
                    }
                </div>

                <div className='flex flex-col justify-center items-start gap-4'>
                    <h1 className='text-[#201A18] font-semibold text-[1.5rem] leading-[29.26px]'>Industry Tools</h1>
                    <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-items-start place-items-start gap-x-[10px] gap-y-[15px]'>
                    {
                        tools.map((tool) => (
                            <div key={tool.id} className='flex justify-center items-center w-[104px] h-[56px] rounded-[4px] py-[4px] border'>
                                {tool.list}
                            </div>
                        ))
                    }
                </div>

            </div> 
        </div>
    </section>
  )
}

export default CustomCertificateWhy