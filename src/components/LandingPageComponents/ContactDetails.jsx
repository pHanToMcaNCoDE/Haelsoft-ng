import Link from 'next/link';
import React from 'react'
import { BsTwitterX } from 'react-icons/bs';
import { FaLinkedin, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiInstagram } from 'react-icons/fi';


const ContactDetails = () => {
  return (
    <section className='py-[100px] w-full px-6 bg-white'>
        <div className='max-w-[1250px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-[55px] lg:gap-[100px]'>
            <div className='w-full lg:w-[65%] flex flex-col justify-center items-start gap-7'>
                <div>
                    <h1 className='w-full lg:w-[560.46px] text-[1.25rem] lg:text-[1.75rem] leading-[30px] lg:leading-10 font-semibold text-black'>Send Us A Message</h1>
                    <p className='w-full lg:w-[560.46px] text-base lg:text-[1.25rem] lg:leading-[30px] font-normal text-black'>Have questions about Haelsoft? Connect with us.</p>
                </div>
                <form action="" className='w-full flex flex-col justify-center items-start gap-6'>
                    <input className='w-full bg-white border-b border-b-[#e5e5e5] rounded-[2px] h-[56px] px-[16px] py-[10px] outline-none' type="text" name="" id="" placeholder="Full Name" />
                    <input className='w-full bg-white border-b border-b-[#e5e5e5]  rounded-[2px] h-[56px] px-[16px] py-[10px] outline-none' type="text" name="" id="" placeholder="Email" />
                    <textarea className='w-full bg-white border border-[#e5e5e5] rounded-[2px] px-[16px] py-[10px] outline-none h-[200px]' placeholder='Message' name="" id="" cols="50" rows="10"></textarea>
                    <button type="submit" className='w-[190px] bg-main/100 text-white text-base rounded-[2px] h-[56px] px-[16px] py-[10px] outline-none flex justify-center items-center'>Submit</button>
                </form>
            </div>
            <div className='w-full lg:w-[35%] flex flex-col justify-center items-start gap-10 lg:gap-[60px]'>
                <div className='w-full lg:w-[356px] flex flex-col justify-center items-start gap-9'>
                    <h1 className='w-full text-[1.25rem] lg:text-[1.75rem] leading-[30px] lg:leading-10 font-semibold text-black'>Our Address</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, dolores?</p>
                </div>
                <div className='w-full lg:w-[356px] flex flex-col justify-center items-start gap-9'>
                    <h1 className='w-full text-[1.25rem] lg:text-[1.75rem] leading-[30px] lg:leading-10 font-semibold text-black'>Our Social</h1>
                    <div className="flex flex-wrap items-center gap-3">
                        <Link href="https://www.linkedin.com/company/haelsoft" target='_blank'>
                            <FaLinkedinIn size={25} />
                        </Link>
                        <Link href="https://www.linkedin.com/company/haelsoft/mycompany/" target='_blank'>
                            <BsTwitterX size={25} />
                        </Link>
                        <Link href="https://www.instagram.com/haelsoft" target='_blank'>
                            <FiInstagram size={25} />
                        </Link>
                        <Link href="https://wa.link/ul0ttk" target='_blank'>
                            <FaWhatsapp size={25} />
                        </Link>
                    </div>
                </div>
                <div className='w-full lg:w-[356px] flex flex-col justify-center items-start gap-9'>
                    <h1 className='text-[1.25rem] lg:text-[1.75rem] leading-[30px] lg:leading-10 font-semibold text-black'>Email Us</h1>
                    <div className='w-full flex flex-col justify-center items-start gap-4'>
                        <p className='w-full text-base font-normal text-black'>For Product Questions/Concerns, Corporate training & hire inquires:</p>
                        <a href="mailto:hello@haelsoft.com" className='text-black font-bold underline' target='_blank'>hello@haelsoft.com</a>
                    </div>
                    <div className='w-full flex flex-col justify-center items-start gap-4'>
                        <p className='w-full text-base font-normal text-black'>Visit our Official website at:</p>
                        <span className='text-black font-bold underline'>hello@haelsoft.com</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactDetails