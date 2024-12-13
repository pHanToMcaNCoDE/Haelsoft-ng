import React from 'react'

const BootcampWho = ({who}) => {
  return (
    <section className='px-6 lg:h-[475px] max-w-[1200px] mx-auto py-[100px] lg:py-[50px] flex flex-col justify-center items-start gap-8'>
        <div className='flex flex-col justify-center items-start gap-3'>
            <h2 className="text-[#201A18] text-[1.5rem] leading-[29.26px] font-semibold">Who Should Enroll?</h2>
            <div className='bg-[#F1C118] w-[56px] h-[4px] rounded-[4px]'></div>
        </div>
        <div className='max-w-[815px] flex flex-col justify-center items-start gap-6'>
            <p className='text-[#655D59] text-[1.125rem] lg:text-[1.5rem] leading-[20px] lg:leading-[29.26px] font-semibold'>This bootcamp is ideal for:</p>
            <ul className='flex flex-col justify-center items-start gap-4 list-disc pl-8'>
                {
                    who.map((w) => (
                        <li className='text-[#655D59] text-[1rem] lg:text-[1.125rem] leading-[20px] lg:leading-[29.26px] font-semibold' key={w.id}>{w.list}</li>
                    ))
                }
            </ul>
        </div>
    </section>
  )
}

export default BootcampWho