import Link from 'next/link'
import React from 'react'

const SignupPopup = ({setIsClicked}) => {
  return (
    <div className='w-full fixed z-50 h-screen top-0 left-0 bg-[#F0F0F0]/70 flex justify-center items-center py-[100px] px-[20px]'>
        <div className='bg-white rounded-lg w-full xl:w-[720px] lg:h-[800px] py-[30px] px-[50px] flex flex-col justify-center gap-10 items-start'>
            <h1 className='text-[#201A18] font-semibold text-[1.5rem] leading-9'>Sign up to Continue</h1>
            <form className='w-full flex flex-col gap-8' action="">
                <input placeholder='Full name' className='outline-none placeholder:text-[#655D59] placeholder:text-base placeholder:font-medium font-medium placeholder:leading-6 leading-6 text-base w-full lg:w-[610px] py-[28px] px-[33px] border-2 gap-[10px] border-[#F0F0F0] rounded-lg lg:h-[80px] bg-[#F7F7F7]' type="text" name="" id="" />
                <input placeholder='Email' className='outline-none placeholder:text-[#655D59] placeholder:text-base placeholder:font-medium font-medium placeholder:leading-6 leading-6 text-base w-full lg:w-[610px] py-[28px] px-[33px] border-2 gap-[10px] border-[#F0F0F0] rounded-lg lg:h-[80px] bg-[#F7F7F7]' type="text" name="" id="" />
                <input placeholder='Password' className='outline-none placeholder:text-[#655D59] placeholder:text-base placeholder:font-medium font-medium placeholder:leading-6 leading-6 text-base w-full lg:w-[610px] py-[28px] px-[33px] border-2 gap-[10px] border-[#F0F0F0] rounded-lg lg:h-[80px] bg-[#F7F7F7]' type="text" name="" id="" />
                <div className='w-full lg:w-[510px] flex flex-col lg:flex-row justify-center items-start gap-5'>
                    <input className='cursor-pointer outline-none w-[30px] bg-[#F7F7F7] h-[26px] rounded-[3px] border-none' type="checkbox" name="" id="" />
                    <p>Send me notifications of new courses and discounts, and learning tips..</p>
                </div>
                <button className='bg-[#FF8C53] border-[1px] border-[#FF8C53] mx-auto gap-[10px] w-full md:w-[250px] text-white text-[.875rem] font-medium leading-5 rounded p-[10px] tracking-[.1px]'>Sign Up</button>
            </form>
            <div className='flex flex-col gap-6 mx-auto text-center'>
                <p className='text-[#655D59] font-medium text-base leading-[46px]'>By signing up, you agree to our Terms of use and Privacy Policy </p>
                <p className='text-[#201A18] text-base font-medium leading-[46px]'>Already have an account? <span onClick={() => setIsClicked('Login')} className='px-2 text-main cursor-pointer' href={'#'}>Log in</span></p>
            </div>
        </div>
    </div>
  )
}

export default SignupPopup