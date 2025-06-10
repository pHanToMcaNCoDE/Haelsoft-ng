import React from 'react'
import img from '../../../public/assets/leaders/EdTech Platform (1).svg';
import obj from '../../../public/assets/leaders/Vector 7.svg';
import Image from 'next/image';
import obj4 from '../../../public/assets/Polygon 4.svg';

const Leaders = ({leaderContent}) => {
  return (
    <section className='flex flex-col justify-center items-center bg-main w-full'>
        <div className='max-w-[1200px] 2xl:max-w-[1500px] mx-auto px-5 py-[100px]'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-[4em] md:gap-[8em] h-full'>
                {leaderContent}
                <div className='relative w-full lg:w-[50%]'>
                  <Image width={576} height={325} className='relative w-[576px] h-[325px] z-20' src={img} alt="Work Family" />
                  <Image width={599} height={420} className='absolute z-[3px] left-[-10px] md:left-[-10px] lg:left-[-30px] top-[-30px] md:top-[10px] lg:top-[-40px]' src={obj4} alt="Work Family" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Leaders