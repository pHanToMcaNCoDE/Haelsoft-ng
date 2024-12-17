'use client'

import CertificateBenefits from '@/components/LandingPageComponents/CertificateBenefits'
import CertificateHero from '@/components/LandingPageComponents/CertificateHero'
import CourseOverviewComponent from '@/components/LandingPageComponents/CourseOverviewComponent'
import CustomCertificateWhy from '@/components/LandingPageComponents/CustomCertificateWhy'
import CustomGetCertificate from '@/components/LandingPageComponents/CustomGetCertificate'
import GetCertificate from '@/components/LandingPageComponents/GetCertificate'
import Navbar from '@/components/LandingPageComponents/Navbar'
import StartHiring from '@/components/LandingPageComponents/StartHiring'
import { webLearn, webSkills, webTools, webWhy } from '@/raw-data/data'
import Image from 'next/image'
import React, { useRef, useState } from 'react'

const page = () => {
    const [clicked, setClicked] = useState('');
    const [boolclick, setBoolClick] = useState(false);

    let consultRef = useRef(null);

    const scrollToConsult = () => {
        if(consultRef.current){
          consultRef.current.scrollIntoView({behavior: 'smooth'})
        }
    }

    const desc = (
        <div className='text-[.875rem] lg:text-[1.125rem] leading-6 lg:leading-8 font-semibold text-[#655D59]'>
            <span className='font-bold'>Build the Web, Build Your Future</span> Haelsoft&apos;s Web Development Certificate Courses empower you to create innovative, high-performing websites that meet the needs of users and businesses alike. Start your journey into the exciting world of web development today.
        </div>
    )

    const head = (
        <h1 className='text-black text-[1.5rem] lg:text-[2.65rem] leading-[40px] lg:leading-[61.33px] font-bold'>
            Get Certified as a Web Developer
        </h1>
    )

    const main = ('Web Development Certification Course Overview')

    const [tools, setTools] = useState(webTools);
    const [skills, setSkills] = useState(webSkills);
    const [learn, setLearn] = useState(webLearn);
    const [why, setWhy] = useState(webWhy)

  return (
    <main>
        <Navbar
        clicked={clicked}
        setClicked={setClicked}
        boolclick={boolclick}
        setBoolClick={setBoolClick}
        />
        <CertificateHero/>
        <CourseOverviewComponent/>
        <CustomGetCertificate header={head} desc={desc}/>
        <CustomCertificateWhy main={main} learn={learn} tools={tools} skills={skills}/>
        <CertificateBenefits why={why}/>
    </main>
  )
}

export default page