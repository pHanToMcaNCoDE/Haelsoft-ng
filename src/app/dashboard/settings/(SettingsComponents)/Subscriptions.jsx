import React from 'react'
import { IoAddOutline } from 'react-icons/io5'

const Subscriptions = () => {
  return (
    <div className="bg-white w-full lg:w-[1023px] lg:h-[980px] px-[10px] lg:px-[25px] py-[50px] pb-[100px] flex flex-col justify-start items-start gap-8">
        <div className='flex flex-col justify-start items-start gap-3 px-[15px] lg:px-[30px] pt-[20px]'>
            <h1 className="font-semibold leading-9 text-[1.5rem] text-black">
                Subscriptions
            </h1>
            <button
            className="w-[184px] gap-5 text-[#7F7571] h-[41px] rounded border border-[#FF8C53] text-[.875rem] font-medium leading-[21px] flex justify-center items-center"
            type="submit"
            >
                <IoAddOutline className='text-main text-[1.25rem] font-black' />
                Add card
            </button>
        </div>
        <div className='px-[15px] lg:px-[30px] pt-[20px]'>
            <div className='h-[370px] w-full lg:w-[877px] border-2 p-4 border-dashed border-main text-center flex justify-center items-center'>
                <p className='text-[#655D59] text-[1.125rem] font-semibold leading-[27px]'>You don’t have any  subscription yet.</p>
            </div>
            <button
            className="mt-10 w-[184px] text-[#7F7571] h-[40px] rounded border border-[#FF8C53] text-[.875rem] font-medium leading-[21px] flex justify-center items-center"
            type="submit"
            >
            Save
            </button>
        </div>
    </div>
  )
}

export default Subscriptions