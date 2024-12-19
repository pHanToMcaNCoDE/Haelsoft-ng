import Image from 'next/image'
import React from 'react'
import box from '../../../public/assets/certificate-page/box.svg';
import { FiGlobe } from "react-icons/fi";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";

const CertificateCurriculum = ({curriculum, curTitle}) => {
  return (
    <section className='flex justify-center items-start min-h-screen w-full relative'>
      <div className='bg-yellow-600 min-h-screen w-[5px] absolute left-8 top-[100px]'></div>
      <div className='flex flex-col justify-center items-start min-h-screen w-full'>
        {
          curriculum.map((cur) => (
            <div style={{ backgroundColor: `${cur.bg}`}} key={cur.id} className="relative min-h-screen z-10 w-full px-6">
              {
                cur.id === 1 && (<div style={{ backgroundColor: `${cur.bg}`}} className="absolute top-0 left-0 w-full h-full skew-y-[-6deg] origin-top-left z-[1px]"></div>)
              }
              <div className={`relative z-10 gap-[64px] flex flex-col justify-center items-center max-w-[1312px] mx-auto px-6 ${cur.id === 1 ? 'mt-[500px]' : 'pt-[100px]'} pb-[100px]`}>
                {
                  cur.id === 1 && (<h1 className='text-center text-white text-[2rem] lg:text-[3rem] leading-10 lg:leading-[55.5px] font-bold w-full md:w-[794.67px] xl:w-[994.67px]'>{curTitle}</h1>)
                }

                <div className='flex flex-col justify-center items-start gap-[60px]'>
                  <div className='flex flex-col md:flex-row justify-between items-center gap-10'>
                    <div className='w-full md:w-[50%] xl:w-[55%] flex flex-col justify-center items-start gap-[24px]'>
                      <div className='flex flex-col justify-center items-start gap-2'>
                        <p className={`uppercase font-semibold text-[.875rem] leading-[19px] ${cur.id % 2 === 0 ? 'text-[#201A18]' : 'text-white'}`}>{cur.unit}</p>
                        <h1 className={`text-[1.5rem] lg:text-[2rem] font-semibold leading-[38.5px] ${cur.id % 2 === 0 ? 'text-[#201A18]' : 'text-white'}`}>{cur.heading}</h1>
                      </div>
                      <p className={`text-[.875rem] lg:text-[1.125rem] font-normal leading-[38.5px] ${cur.id % 2 === 0 ? 'text-[#201A18]' : 'text-white'}`}>
                        {cur.desc}
                      </p>
                      <div className='flex flex-col lg:flex-row justify-start items-start lg:items-center gap-3 pt-6 w-full'>
                        <p className={`text-[1rem] lg:text-[1.125rem] font-semibold leading-[38.5px] ${cur.id % 2 === 0 ? 'text-[#201A18]' : 'text-white'}`}>Skills:</p>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-start lg:justify-items-center place-items-start lg:place-items-center gap-3 w-full'>
                          {
                            cur?.skills?.map((skill) => (
                              <div key={skill.id} className='bg-[#fafafa] text-black text-[.75rem] w-[128px] rounded-[2px] h-[40px] flex justify-center items-center py-[4px] font-bold'>{skill}</div>
                            ))
                          }
                        </div>
                      </div>
                    </div>
                    <Image src={box} alt='Box' className='w-full md:w-[50%] xl:w-[45%] h-[361.02px] object-cover'></Image>
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center place-items-center gap-8 w-full'>
                    {
                      cur?.more?.map((m) => (
                        <div className='flex flex-col justify-center items-start gap-4'>
                          <p className={`${cur.id % 2 === 0 ? 'text-[#201A18]' : 'text-white'}`}>
                            {m.icon}
                          </p>
                          <h2 className={`text-[1.75rem] font-semibold leading-[38.5px] ${cur.id % 2 === 0 ? 'text-[#201A18]' : 'text-white'}`}>{m.head}</h2>
                          <p className={`text-[.875rem] lg:text-[1.125rem] font-normal leading-[31.5px] ${cur.id % 2 === 0 ? 'text-[#201A18]' : 'text-white'}`}>{m.desc}</p>
                        </div>
                      ))
                    }
                  </div>

                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default CertificateCurriculum