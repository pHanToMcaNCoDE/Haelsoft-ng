'use client'

import CertificateBenefits from '@/components/LandingPageComponents/CertificateBenefits'
import CertificateHero from '@/components/LandingPageComponents/CertificateHero'
import CourseOverviewComponent from '@/components/LandingPageComponents/CourseOverviewComponent'
import CustomCertificateWhy from '@/components/LandingPageComponents/CustomCertificateWhy'
import CustomGetCertificate from '@/components/LandingPageComponents/CustomGetCertificate'
import Navbar from '@/components/LandingPageComponents/Navbar'
import StartHiring from '@/components/LandingPageComponents/StartHiring'
import { curriculumUX, uxFaqs, uxLearn, uxSkills, uxTools, uxWhy } from '@/raw-data/data'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import CertificateCurriculum from '@/components/LandingPageComponents/CertificateCurriculum'
import CustomEarn from '@/components/LandingPageComponents/CustomEarn'
import uxCer from '../../../public/certificates/ux.svg';
import Industries from '@/components/LandingPageComponents/Industries'
import CertificateFaq from '@/components/LandingPageComponents/CertificateFaq'
import CertificateGallary from '@/components/LandingPageComponents/CertificateGallary'
import CertificateGetStarted from '@/components/LandingPageComponents/CertificateGetStarted'
import ux from '../../../public/assets/cert-course/success/ux.svg'

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
            <span className='font-bold'>Craft Seamless Digital Experiences that Delight and Inspire!</span> Haelsoft&apos;s UX Design Certificate Courses empower you to craft intuitive, user-centered designs that elevate digital experiences and drive business success. Start your journey into the dynamic world of UX design today.
        </div>
    )

    const head = (
        <h1 className='text-black text-[1.5rem] lg:text-[2.65rem] leading-[40px] lg:leading-[61.33px] font-bold'>
            Get Certified as a UX Designer
        </h1>
    )

    const main = ('UX Design Certification Course Overview')

    const [tools, setTools] = useState(uxTools);
    const [skills, setSkills] = useState(uxSkills);
    const [learn, setLearn] = useState(uxLearn);
    const [why, setWhy] = useState(uxWhy)
    const [curriculum, setCurriculum] = useState(curriculumUX)
    const curTitle = 'User Experience (UX) Certification Course Curriculum';

    const [cusTitle, setCusTitle] = useState('Earn Your User Experience (UX) Certification');
    const [cusImg, setCusImg] = useState(uxCer);
    const cusDesc = "Earn your Haelsoft UX Design Certification upon course completion. This certification highlights your ability to design user-focused experiences and is perfect for enhancing your professional portfolio. Use it to stand out in the competitive UX field and attract opportunities that match your skills."

    const [faqs, setFaqs] = useState(uxFaqs)
    const heroTitle = 'Data Science Certification'
    const heroDesc = 'In a world driven by information, data is the most valuable asset for businesses, governments, and individuals. Haelsoft EdTech Platform’s Data Science Courses are designed to help you transform raw data into actionable insights, equipping you with the skills to thrive in one of the fastest-growing fields in technology. Whether you’re a beginner eager to explore data science or a professional looking to upskill, our comprehensive courses provide everything you need to excel.'

    const [img, setImg] = useState(ux);

    const whyTitle = "Why Choose Haelsoft's UX Design Certificate Courses?"
    const getTitle = 'Master UX Design Today';
    const getDesc = 'Transform your creative skills with our industry-recognized UX design certification. Craft user-centered designs, work on real-world projects, and become part of a thriving community of design professionals.';

  return (
    <main>
        <Navbar
        clicked={clicked}
        setClicked={setClicked}
        boolclick={boolclick}
        setBoolClick={setBoolClick}
        />
        <CertificateHero heroTitle={heroTitle} heroDesc={heroDesc}/>
        <CourseOverviewComponent/>
        <CustomGetCertificate header={head} desc={desc} img={img}/>
        <CertificateBenefits whyTitle={whyTitle} why={why}/>
        <CustomCertificateWhy main={main} learn={learn} tools={tools} skills={skills}/>
        <CertificateCurriculum curriculum={curriculum} curTitle={curTitle} />
        <CustomEarn cusTitle={cusTitle} cusImg={cusImg} cusDesc={cusDesc} />
        <Industries/>
        <CertificateGallary/>
        <CertificateFaq faqs={faqs}/>
        <CertificateGetStarted getTitle={getTitle} getDesc={getDesc} />
    </main>
  )
}

export default page