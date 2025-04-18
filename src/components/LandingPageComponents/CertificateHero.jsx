import React from 'react'
import badge from '../../../public/assets/get-certificate/EdTech Platform Group 326.svg';
import Image from 'next/image';
import CustomForm from '../CustomForm';

  
const CertificateHero = ({heroTitle, heroDesc}) => {
  return (
    <section className='w-full relative cer min-h-screen py-[200px] 2xl:py-[100px] px-6'>
        <div className='max-w-[1312px] mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start h-full gap-10'>
            <video autoPlay muted loop playsInline className="cerVideo">
                <source src='/assets/Student note over wooden desk.mp4' type="video/mp4" />
                Your browser does not support the video tag.
            </video>


            <div className="hero-content px-5 lg:px-8 w-full lg:w-[50%] xl:w-[60%] gap-[2em]">
               <div className='flex flex-col lg:flex-row justify-center items-start gap-[21px]'>
                    <Image className='w-[107px] h-[123px] object-cover' src={badge} alt='Haelsoft Badge'></Image>
                    <div className='flex flex-col justify-center items-start text-left'>
                        <p className='text-[#FFCF00] uppercase text-base font-normal'>Professional Certificate</p>
                        <h1 className='text-[1.5rem] xl:text-[3rem] font-bold leading-[55px] xl:leading-[67.43px] text-white'>{heroTitle}</h1>
                    </div>
               </div>
               <p className='text-white text-[.875rem] leading-[25.5px] font-normal text-left'>
                    {heroDesc}
               </p>
            </div>

            <CustomForm/>

            {/* <form className="flex flex-col justify-center items-center gap-10 w-[80%] lg:w-[50%] xl:w-[40%] h-full bg-[#F7F7F7] py-[40px] relative z-10 p-6" action="">
                <div className="flex flex-col justify-center items-center gap-4 w-full">
                <input className="placeholder:text-[#655D5980] placeholder:text-[12px] placeholder:font-normal placeholder:leading-[18px] text-base text-black font-normal leading-5 bg-white outline-none py-[15px] px-[20px] rounded border border-[#F5F5F5] w-full xl:w-[482px] h-[48px]" type="text" placeholder="Name" />
                <input className="placeholder:text-[#655D5980] placeholder:text-[12px] placeholder:font-normal placeholder:leading-[18px] text-base text-black font-normal leading-5 bg-white outline-none py-[15px] px-[20px] rounded border border-[#F5F5F5] w-full xl:w-[482px] h-[48px]" type="email" placeholder="Email Address" />
                <input className="placeholder:text-[#655D5980] placeholder:text-[12px] placeholder:font-normal placeholder:leading-[18px] text-base text-black font-normal leading-5 bg-white outline-none py-[15px] px-[20px] rounded border border-[#F5F5F5] w-full xl:w-[482px] h-[48px]" type="text" placeholder="Company" />
                <input className="placeholder:text-[#655D5980] placeholder:text-[12px] placeholder:font-normal placeholder:leading-[18px] text-base text-black font-normal leading-5 bg-white outline-none py-[15px] px-[20px] rounded border border-[#F5F5F5] w-full xl:w-[482px] h-[48px]" type="text" placeholder="Location" />
                <textarea className="placeholder:text-[#655D5980] placeholder:text-[12px] placeholder:font-normal placeholder:leading-[18px] text-base text-black font-normal leading-5 bg-white outline-none py-[15px] px-[20px] rounded border border-[#F5F5F5] w-full xl:w-[482px] h-[151px]" placeholder="What does your organization need?"></textarea>
                </div>
                <div className="flex flex-col justify-center items-center gap-10">
                
                <button className="bg-[#F36400] text-white w-full md:w-[298px] h-[58px] rounded p-[10px] gap-[10px] text-[1.125rem] leading-10 font-normal">Submit</button>
                </div>
            </form> */}
        </div>
        <div className='absolute bg-[#D98E47]/50 md:bg-[#D98E47]/[70%] w-full h-full'></div>
    </section>
  )
}

export default CertificateHero