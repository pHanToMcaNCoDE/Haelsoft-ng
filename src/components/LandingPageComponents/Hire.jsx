import React from "react";
import hero from '../../../public/EdTech Platform Hero Image.svg';
import Image from "next/image";
import CustomForm from "../CustomForm";

const Hire = ({content, corpImg, corpAlt}) => {
  return (
    <section className='w-full relative cer min-h-screen py-[200px] 2xl:py-[100px] px-6' style={{ backgroundImage: `url(${corpImg.src})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
        <div className='max-w-[1312px] mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start h-full gap-10'>
            {/* <Image src={corpImg} alt={corpAlt} className="absolute top-0 left-0 w-full"></Image> */}


            <div className="corp-content px-5 lg:px-8 w-full lg:w-[60%]">
              {content}
            </div>

            <CustomForm/>
        </div>
        <div className='absolute bg-[#D98E47]/50 md:bg-[#D98E47]/[70%] w-full h-full'></div>
    </section>
  );
};

export default Hire;