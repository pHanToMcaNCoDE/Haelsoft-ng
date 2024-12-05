import React from 'react'
import bg from '../../../public/assets/cert-course/EdTech Platform Hero Image.svg';
import Image from 'next/image';
import StartHiring from './StartHiring';

const LeadershipHero = ({content}) => {
    
  return (
    <section className='relative xl:h-[948px] w-full pb-[100px]'>
        <Image height={948} src={bg} alt='Background Image' className='absolute w-screen xl:h-[948px] z-[3px] top-0 left-0 object-cover'></Image>
        <StartHiring contentTwo={content} />
    </section>
  )
}

export default LeadershipHero