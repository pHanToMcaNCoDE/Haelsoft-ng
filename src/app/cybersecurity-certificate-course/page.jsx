'use client'

import CertificateBenefits from '@/components/LandingPageComponents/CertificateBenefits'
import CertificateHero from '@/components/LandingPageComponents/CertificateHero'
import CourseOverviewComponent from '@/components/LandingPageComponents/CourseOverviewComponent'
import CustomCertificateWhy from '@/components/LandingPageComponents/CustomCertificateWhy'
import CustomGetCertificate from '@/components/LandingPageComponents/CustomGetCertificate'
import Navbar from '@/components/LandingPageComponents/Navbar'
import React, { useRef, useState } from 'react'
import CertificateCurriculum from '@/components/LandingPageComponents/CertificateCurriculum'
import CustomEarn from '@/components/LandingPageComponents/CustomEarn'
import cybCer from '../../../public/certificates/cyb.svg';
import Industries from '@/components/LandingPageComponents/Industries'
import CertificateFaq from '@/components/LandingPageComponents/CertificateFaq'
import CertificateGallary from '@/components/LandingPageComponents/CertificateGallary'
import CertificateGetStarted from '@/components/LandingPageComponents/CertificateGetStarted'
import cyb from '../../../public/assets/cert-course/success/cyb.svg'
import { pmWhy, cybTools, cybSkills, cybLearn, curriculumCYB, cybFaqs, cybWhy } from '@/raw-data/data'


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
            <span className='font-bold'>Protect the Digital World with Advanced Cybersecurity Skills!</span> In today&apos;s interconnected world, robust cybersecurity is essential to protect data and prevent threats. Haelsoft EdTech Platform&apos;s Cybersecurity course is designed to equip you with the skills to secure networks, identify vulnerabilities, and respond to incidents. Whether you&apos;re starting a career in cybersecurity or seeking to sharpen your expertise, this course will provide you with the practical knowledge to thrive in a fast-growing field.
        </div>
    )    

    const head = (
        <h1 className='text-black text-[1.5rem] lg:text-[2.65rem] leading-[40px] lg:leading-[61.33px] font-bold'>
            Get Certified in Cybersecurity
        </h1>
    )

    const main = ('Cybersecurity Certification Course Overview')

    const [tools, setTools] = useState(cybTools);
    const [skills, setSkills] = useState(cybSkills);
    const [learn, setLearn] = useState(cybLearn);
    const [why, setWhy] = useState(cybWhy)
    const [curriculum, setCurriculum] = useState(curriculumCYB)
    const curTitle = 'Cybersecurity Certification Course Curriculum';

    const [cusTitle, setCusTitle] = useState('Earn Your Cybersecurity Certification');
    const [cusImg, setCusImg] = useState(cybCer);
    const cusDesc = "Earn the Haelsoft Cybersecurity Certification to demonstrate your expertise in network security, ethical hacking, risk management, and incident response. Strengthen your professional portfolio and open doors to exciting career opportunities in cybersecurity."

    const [faqs, setFaqs] = useState(cybFaqs)
    const heroTitle = 'Cybersecurity Certification'
    const heroDesc = "As the digital landscape evolves, the need for skilled cybersecurity professionals has never been greater. Haelsoft EdTech Platform’s Cybersecurity Courses provide the expertise needed to secure networks, systems, and data against threats in an increasingly interconnected world. Whether you’re a beginner stepping into the world of cybersecurity or an experienced IT professional looking to upgrade your skills, our courses offer hands-on learning, industry insights, and certifications to empower you for success."

    const [img, setImg] = useState(cyb);

    const whyTitle = "Why Choose Haelsoft's Cybersecurity Certification Course?"
    const getTitle = 'Master Cybersecurity Today';
    const getDesc = 'Advance your career with our industry-recognized Cybersecurity certification. Master essential security frameworks, work on real-world scenarios, and join a community of cybersecurity professionals dedicated to protecting digital assets.';

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