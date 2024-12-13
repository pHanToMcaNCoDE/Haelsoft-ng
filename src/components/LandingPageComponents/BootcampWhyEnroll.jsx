import Image from 'next/image'
import React from 'react'

const BootcampWhyEnroll = ({item, whyTitle, whyDesc}) => {
  return (
    <section>
        <div className='max-w-[1236px] mx-auto flex flex-col justify-center items-center gap-10 pb-[100px] pt-[250px]'>
            <div className='flex flex-col justify-center items-start gap-6 w-full lg:w-[566px] text-center'>
                <div className='w-full lg:w-[560px] flex flex-col justify-center items-center gap-4'>
                    <h1 className='text-[#201A18] font-bold text-[2.063rem] leading-[55px]'>{whyTitle}</h1>
                    <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
                </div>
                <p className='text-[#655D59] w-full text-[1rem] font-normal leading-[30px]'>
                    {whyDesc}
                </p>
            </div>

            <div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center place-items-center gap-6'>
                {
                    item.map((i) => (
                        <div key={i.id} className='bg-white border border-[#EEEEEE] rounded-[4px] w-[402px] lg:h-[366px] px-[16px] py-[24px] gap-10'>
                            <div className='w-full flex flex-col justify-center items-start gap-7 h-[200px]'>
                                <div className='w-[72px] h-[72px] bg-[#FF8C53] rounded-full flex gap-4 justify-center items-center'>
                                    <Image className='w-[40px] h-[40px] object-cover' src={i.img} alt='Candidate Icon'></Image>
                                </div>
                                <p className='text-main leading-[21.94px] text-[1.125rem] font-medium'>{i.name}</p>
                            </div>
                            <p className='text-[#655D59] leading-[30px] text-[1.125rem] font-medium'>{i.desc}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default BootcampWhyEnroll