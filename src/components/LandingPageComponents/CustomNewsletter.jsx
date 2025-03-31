import { usePathname } from 'next/navigation';
import React from 'react'
import { IoSearchOutline } from "react-icons/io5";


const CustomNewsletter = ({searchText, setSearchText}) => {
    const pathname = usePathname();

  return (
    <>
        {
            pathname.includes('/') ? (
                <div className='bg-main text-white px-[20px] py-[30px] rounded-[4px] w-[90%] lg:w-[1100px] lg:h-[352px] flex flex-col justify-between items-center gap-10 mx-auto'>
                    <div className='w-full flex flex-col gap-4 justify-center items-start'>
                        <h1 className='text-[1.125rem] font-medium leading-[43px]'>Subscribe to Our Newsletter</h1>
                        <p className='w-full h-[50px] text-[.875rem] leading-6 font-normal'>
                            Get the latest on upcoming courses, programs, events, and more — straight to your inbox.
                        </p>
                    </div>
                    <form action="" className='w-full flex flex-col gap-6'>
                        <div className='flex flex-col justify-start gap-5 items-start w-full'>
                            <div className='flex flex-col justify-center items-start gap-3 w-full'>
                                <input className='text-white bg-[#E1884A] w-full h-[43px] outline-none border-none py-[10px] px-[20px] rounded placeholder:text-white' placeholder='examples@gmail.com' type="text" />
                                <p className='text-xs font-normal'>By clicking &quot;Subscribe&quot;, you accept our <span className='underline'>Terms</span></p>
                            </div>
                            <button className='flex justify-center items-center border border-white w-full h-[46px] rounded py-[12px] px-[24px] text-base font-normal'>Subscribe</button>
                        </div>
                    </form>
                </div>
            ) : (
                <div className='flex flex-col justify-between items-start gap-4 w-full'>
                    <form onSubmit={(e) => e.preventDefault()} action="" className='w-full lg:w-[380px] flex flex-col gap-6'>
                        <div className='flex flex-col md:flex-row items-center w-full'>
                            <input className='text-black outline-none w-full h-[58px] bg-white border border-main py-[8px] px-[20px] rounded-tl-[4px] rounded-bl-[4px]' placeholder='Search' type="text" name='Search Blog' onChange={(e) => setSearchText(e.target.value)} />
                            <button className='bg-main flex justify-center items-center w-[71px] h-[58px] rounded-tr-[4px] rounded-br-[4px] py-[12px] px-[24px] text-xl font-normal text-white'>
                                <IoSearchOutline/>
                            </button>
                        </div>
                    </form>
                    <div className='bg-main text-white px-[20px] py-[30px] rounded-[4px] w-full lg:w-[380px] lg:h-[452px] flex flex-col justify-between items-center gap-10 mx-auto'>
                        <div className='w-full flex flex-col gap-4 justify-center items-start'>
                            <h1 className='text-[1.125rem] font-medium leading-[43px]'>Subscribe to Our Newsletter</h1>
                            <p className='w-full h-[50px] text-[.875rem] leading-6 font-normal'>
                                Get the latest on upcoming courses, programs, events, and more — straight to your inbox.
                            </p>
                        </div>
                        <form action="" className='w-full flex flex-col gap-6'>
                            <div className='flex flex-col justify-start gap-5 items-start w-full'>
                                <div className='flex flex-col justify-center items-start gap-3 w-full'>
                                    <input className='text-white bg-[#E1884A] w-full h-[43px] outline-none border-none py-[10px] px-[20px] rounded placeholder:text-white' placeholder='examples@gmail.com' type="text" />
                                    <p className='text-xs font-normal'>By clicking &quot;Subscribe&quot;, you accept our <span className='underline'>Terms</span></p>
                                </div>
                                <button className='flex justify-center items-center border border-white w-full h-[46px] rounded py-[12px] px-[24px] text-base font-normal'>Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            )
        }
    </>
  )
}

export default CustomNewsletter