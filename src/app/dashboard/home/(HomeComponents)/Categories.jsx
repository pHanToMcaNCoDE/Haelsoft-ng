import React from 'react'

const Categories = () => {
  return (
    <section className='p-3 max-w-[1300px] 2xl:max-w-[1550px] mx-auto rounded-xl h-[40vh] w-full relative pt-[50px] pb-[100px] gap-2 flex justify-start items-center'>
        <div className='bg-black/30 w-full h-[40vh] absolute top-0 left-0 rounded-2xl'></div>

        <div className='z-20 p-3 gap-7 flex flex-col justify-center items-start'>
            <h1 className='text-[2.5rem] text-white font-semibold leading-5'>You can learn yourself</h1>
            <p className='text-md text-gray-white font-normal leading-8 w-full lg:w-[50%] text-white'>The more you learn, the more you earn, and the more places you&apos;ll go!</p>
            <button className='bg-main text-white text-[.85rem] font-normal leading-5 w-[170px] h-[41px] flex justify-center items-center rounded-full'>Start Learning now</button>
        </div>
    </section>
  )
}

export default Categories