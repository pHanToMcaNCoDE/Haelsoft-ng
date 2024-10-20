import React from 'react'

const OnlineClassroom = () => {
  return (
    <section className='bg-[#FF8C53] w-full min-h-screen md:h-[112.8vh] flex flex-col justify-end'>
        <div className='max-w-[1260px] mx-auto px-3 lg:px-0 flex flex-col justify-end items-center h-screen py-[200px] gap-[100px]'>
            <h1 className='text-white text-[1.5rem] font-semibold leading-[43px]'>Learn In Our Next-Gen Online Classroom</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6'>
                <div>
                    {/* <h1 className='text-white text-[1.5rem] leading-10 font-semibold'>Lorem Ispum</h1> */}
                    <p className='text-[1.125rem] font-medium leading-10 text-white'>
                        Build and showcase your portfolio through many projects you will undertake while learning at Haelsoft. You will be closely guided with steps to develop your final project. At the end of
                    </p>
                </div>
                <div>
                    {/* <h1 className='text-white text-[1.5rem] leading-10 font-semibold'>Robust Portfolio</h1> */}
                    <p className='text-[1.125rem] font-medium leading-10 text-white'>
                    Engage in immersive learning experiences with Haelsoft&#39;s cutting-edge online platform. Build and showcase your portfolio through many projects you will undertake while learning at Haelsoft. </p>
                </div>
                <div>
                    {/* <h1 className='text-white text-[1.5rem] leading-10 font-semibold'>Lorem Ispum</h1> */}
                    <p className='text-[1.125rem] font-medium leading-10 text-white'>
                        Build and showcase your portfolio through many projects you will undertake while learning at Haelsoft. You will be closely guided with steps to develop your final project. At the end of
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OnlineClassroom