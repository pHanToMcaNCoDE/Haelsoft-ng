import React from "react";
import hero from '../../../public/EdTech Platform Hero Image.svg';
import Image from "next/image";

const Hire = ({content, corpImg, corpAlt}) => {
  return (
    <section className='w-full relative cer min-h-screen py-[200px] 2xl:py-[100px] px-6' style={{ backgroundImage: `url(${corpImg.src})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
        <div className='max-w-[1312px] mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start h-full gap-10'>
            {/* <Image src={corpImg} alt={corpAlt} className="absolute top-0 left-0 w-full"></Image> */}


            <div className="corp-content px-5 lg:px-8 w-full lg:w-[60%]">
              {content}
            </div>

            <form
              className="flex flex-col justify-center items-center gap-[4em] w-full lg:w-[40%] relative z-10 bg-[#F7F7F7] min-h-[460px] px-[16px] lg:px-[24px] py-[30px] rounded-[5px]"
              action=""
            >
              <div className="flex flex-col justify-center items-center gap-4 w-full">
                <input
                  className="placeholder:text-[#655D5980] placeholder:text-[12px] placeholder:font-normal placeholder:leading-[18px] text-base text-black font-normal leading-5 bg-white outline-none py-[15px] px-[20px] rounded border border-[#EEEEEE]/[93.3%] w-full xl:w-[482px] h-[48px]"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="placeholder:text-[#655D5980] placeholder:text-[12px] placeholder:font-normal placeholder:leading-[18px] text-base text-black font-normal leading-5 bg-white outline-none py-[15px] px-[20px] rounded border border-[#EEEEEE]/[93.3%] w-full xl:w-[482px] h-[48px]"
                  type="email"
                  placeholder="Email Address"
                />
                <input
                  className="placeholder:text-[#655D5980] placeholder:text-[12px] placeholder:font-normal placeholder:leading-[18px] text-base text-black font-normal leading-5 bg-white outline-none py-[15px] px-[20px] rounded border border-[#EEEEEE]/[93.3%] w-full xl:w-[482px] h-[48px]"
                  type="text"
                  placeholder="Company"
                />
                <input
                  className="placeholder:text-[#655D5980] placeholder:text-[12px] placeholder:font-normal placeholder:leading-[18px] text-base text-black font-normal leading-5 bg-white outline-none py-[15px] px-[20px] rounded border border-[#EEEEEE]/[93.3%] w-full xl:w-[482px] h-[48px]"
                  type="text"
                  placeholder="Location"
                />
                <textarea
                  className="placeholder:text-[#655D5980] placeholder:text-[12px] placeholder:font-normal placeholder:leading-[18px] text-base text-black font-normal leading-5 bg-white outline-none py-[15px] px-[20px] rounded border border-[#EEEEEE]/[93.3%] w-full xl:w-[482px] h-[151px]"
                  placeholder="What does your organization need?"
                ></textarea>
              </div>
                <button className="bg-main text-white w-full md:w-[298px] h-[58px] rounded p-[10px] gap-[10px] text-[1.125rem] leading-10 font-normal">
                  Submit
                </button>
            </form>
        </div>
        <div className='absolute bg-[#D98E47]/50 md:bg-[#D98E47]/[70%] w-full h-full'></div>
    </section>
  );
};

export default Hire;