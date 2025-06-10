import Image from 'next/image';
import React from 'react';
import { CgWebsite } from 'react-icons/cg';
import { FaChartLine, FaForward } from 'react-icons/fa6';
import { MdDesignServices } from 'react-icons/md';
import obj from "/public/assets/EdTech Platform (3).svg";
import bg from '../../../../asset/dashboard/Black Boy Assignment (1).jpg';
import { BsFillSkipForwardFill } from "react-icons/bs";


const TopSection = ({ categories }) => {
    return (
        <section className='top-section p-3 w-full h-[40vh] relative gap-2 flex justify-center items-center'>
            <div className='bg-main/30 w-full h-[40vh] absolute top-0 left-0'></div>

            <div className='z-20 gap-3 flex flex-col justify-center items-center px-3 py-6 text-center'>
                <h1 className='text-[2rem] lg:text-[3rem] text-white font-black leading-10'>You Can Learn Yourself</h1>
                <p className='text-lg text-gray-white font-medium leading-8 w-full lg:w-[60%] text-white'>The more you learn, the more you earn, and the more places you&apos;ll go!</p>
                {/* <button className='bg-main text-white text-[.85rem] font-medium leading-5 w-[170px] h-[41px] flex justify-center items-center rounded-full'>Start Learning now</button> */}
            </div>
        </section>
    );
}

export default TopSection;
