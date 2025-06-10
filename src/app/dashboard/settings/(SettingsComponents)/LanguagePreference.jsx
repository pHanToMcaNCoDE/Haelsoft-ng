import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const LanguagePreference = () => {
  return (
    <div className="bg-white w-full xl:w-[1023px] lg:h-[670px] px-[10px] lg:px-[25px] py-[50px] pb-[100px] flex flex-col justify-start items-start gap-[10em]">
        <div className="px-[15px] lg:px-[30px] pt-[20px] flex flex-col justify-start items-start gap-10">
            <h1 className="font-semibold leading-9 text-[1.5rem] text-black">
                Language Preference
            </h1>
            <div className='flex justify-between items-center w-full md:w-[903px] bg-[#F0F0F099] h-[78px] px-4 py-4'>
                <input type="text" className='flex justify-center items-center w-full outline-none bg-transparent px-4 py-4 text-black text-[1.5rem] placeholder:text-black placeholder:text-[1.5rem] placeholder:leading-9 placeholder:font-semibold  leading-9 font-semibold' placeholder='English' />
                <IoIosArrowDown className='text-main text-[1.25rem]' />
            </div>
        </div>
        <div className='px-[15px] lg:px-[30px] pt-[20px] '>
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

export default LanguagePreference