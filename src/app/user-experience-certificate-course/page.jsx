'use client'

import CertificateBenefits from '@/components/LandingPageComponents/CertificateBenefits'
import CertificateHero from '@/components/LandingPageComponents/CertificateHero'
import CourseOverviewComponent from '@/components/LandingPageComponents/CourseOverviewComponent'
import CustomCertificateWhy from '@/components/LandingPageComponents/CustomCertificateWhy'
import CustomGetCertificate from '@/components/LandingPageComponents/CustomGetCertificate'
import Navbar from '@/components/LandingPageComponents/Navbar'
import { curriculumUX, uxFaqs, uxLearn, uxSkills, uxTools, uxWhy } from '@/raw-data/data'
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
        <div className='text-[.875rem] lg:text-[1.125rem] leading-6 lg:leading-8 font-semibold text-grayTwo'>
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
    const heroTitle = 'User Experience (UX) Design Certification'
    const heroDesc = 'In today’s digital-first world, User Experience (UX) Design is a critical skill for creating products that are not only functional but also enjoyable and intuitive to use. Haelsoft EdTech Platform’s UX Design Courses equip you with the tools, methodologies, and strategies to design impactful user experiences that stand out in competitive markets.'

    const [img, setImg] = useState(ux);

    const whyTitle = "Why Choose Haelsoft's UX Design Certificate Course?"
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
        {/* <CertificateGallary/> */}
        <CertificateFaq faqs={faqs}/>
        <CertificateGetStarted getTitle={getTitle} getDesc={getDesc} />
    </main>
  )
}

export default page