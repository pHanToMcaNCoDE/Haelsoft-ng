'use client'

import React, { useState, useEffect } from 'react'
import img from '../../../public/EdTech Platform Vector 4.svg';
import tck from '../../../public/EdTech Platform (1).svg';
import slf from '../../../public/EdTech Platform Mask Group.svg';
import cer from '../../../public/EdTech Platform 2.svg';
import Image from 'next/image';
import BenefitControls from './BenefitControls';
import icon from '../../../public/Online class icon.png';
import { BsHourglassTop } from 'react-icons/bs'
import { FaBarsProgress } from 'react-icons/fa6'
import { GrCertificate, GrDirections } from 'react-icons/gr'
import fx from '../../../public/Solid System Trend Up.webp';
import cb from '../../../public/Confetti Regular.webp';
import pg from '../../../public/System Regular Analytics.webp';
import sp from '../../../public/System Regular Calendar Hover.webp';
import ResponsiveBenefitControls from './ResponsiveBenefitControls';

const BenefitsOnline = () => {
  const [currentBenefit, setCurrentBenefit] = useState('Progress Tracking');
  const [previousBenefit, setPreviousBenefit] = useState(null);
  const [fade, setFade] = useState(true);


  useEffect(() => {
    if (previousBenefit !== currentBenefit) {
      setFade(false);
      setTimeout(() => {
        setFade(true);
        setPreviousBenefit(currentBenefit);
      }, 200);
    }
  }, [currentBenefit, previousBenefit]);

  return (
    <section className='overflow-hidden px-4 xl:px-0 min-h-screen xl:h-[1536px] w-full pb-[100px] relative pt-[300px] bg-main'>
      <div className={`${fade ? 'fade-in' : 'fade-out'} absolute top-[5%] z-[5px] right-[-1%] bottom-0 duration-200`}>
        {previousBenefit === 'Progress Tracking' && (
          <Image width={888} height={1156.22} className='object-cover h-full xl:h-[1156.22px]' src={tck} alt='Image' />
        )}
        {previousBenefit === 'Increased Flexibility' && (
          <Image width={888} height={1156.22} className='object-cover h-full xl:h-[1156.22px]' src={img} alt='Image' />
        )}
        {previousBenefit === 'Self-Paced Learning' && (
          <Image width={888} height={1156.22} className='object-cover h-full xl:h-[1156.22px]' src={slf} alt='Image' />
        )}
        {previousBenefit === 'Certification Benefits' && (
          <Image width={888} height={1156.22} className='object-cover h-full xl:h-[1156.22px]' src={cer} alt='Image' />
        )}
      </div>
      <div className='max-w-[1200px] 2xl:max-w-[1530px] mx-auto min-h-screen pt-[100px] xl:pt-[111px] flex flex-col justify-between items-start gap-y-[150px]'>
        <div className='bg-white pt-[12px] px-[36px] w-[90%] md:w-[400px] lg:w-[520px] rounded-[5px] h-[600px] relative z-10 flex flex-col justify-center items-center lg:items-start gap-10'>
          <div className='flex flex-col justify-center items-start gap-6'>
            <div className={`${fade ? 'fade-in' : 'fade-out'} duration-200`}>
              {previousBenefit === 'Progress Tracking' && (
                <Image width={150} height={150} src={pg.src} alt='Progress Animated Icon'></Image>
              )}
              {previousBenefit === 'Increased Flexibility' && (
                <Image width={150} height={150} src={fx.src} alt='Flexible Animated Icon'></Image>
              )}
              {previousBenefit === 'Self-Paced Learning' && (
                <Image width={150} height={150} src={sp.src} alt='Calendar Animated Icon'></Image>
              )}
              {previousBenefit === 'Certification Benefits' && (
                <Image width={150} height={150} src={cb.src} alt='Confetti Animated Icon'></Image>
              )}
            </div>
            <div className='flex flex-col justify-center items-start gap-7'>
              <h1 className="text-black text-[1.375rem] lg:text-[1.75rem] font-semibold leading-[36px]">
                Digital Learning Benefits.
              </h1>
              <div className='w-[48px] h-[4px] rounded bg-[#FFCF00]'></div>
            </div>
          </div>
          <div className={`${fade ? 'fade-in' : 'fade-out'} duration-200`}>
            {previousBenefit === 'Progress Tracking' && (
              <p className='text-base text-[#655D59] text-left font-normal'>
                Interactive platforms often include tracking features that allow you to monitor your progress over time. You can see how well you’re doing, identify areas that need improvement, and set goals to achieve better results.
              </p>
            )}
            {previousBenefit === 'Increased Flexibility' && (
              <p className='text-base text-[#655D59] text-center lg:text-left font-normal'>
                Online interactive learning allows you to study at your own pace and on your own schedule. This flexibility makes it easier to fit learning into your daily routine, balancing it with other responsibilities.
              </p>
            )}
            {previousBenefit === 'Self-Paced Learning' && (
              <p className='text-base text-[#655D59] text-center lg:text-left font-normal'>
                Interactive platforms let you revisit lessons, pause when needed, and learn at your own pace. This control over your learning pace helps with better absorption of content.
              </p>
            )}
            {previousBenefit === 'Certification Benefits' && (
              <ul className='px-5 flex flex-col'>
                <li className='list-disc text-[#655D59] text-base font-normal'>Career Advancement</li>
                <li className='list-disc text-[#655D59] text-base font-normal'>Recognition of Achievement</li>
                <li className='list-disc text-[#655D59] text-base font-normal'>Motivation and Focus</li>
                <li className='list-disc text-[#655D59] text-base font-normal'>Professional Development</li>
                <li className='list-disc text-[#655D59] text-base font-normal'>Networking Opportunities</li>
              </ul>
            )}
          </div>
        </div>
        <BenefitControls click={fade} setClick={setFade} currentBenefit={currentBenefit} setCurrentBenefit={setCurrentBenefit} />
        <ResponsiveBenefitControls click={fade} setClick={setFade} currentBenefit={currentBenefit} setCurrentBenefit={setCurrentBenefit} />
      </div>
    </section>
  );
};

export default BenefitsOnline;
