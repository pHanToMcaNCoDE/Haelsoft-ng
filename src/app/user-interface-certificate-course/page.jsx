'use client'

import CertificateBenefits from '@/components/LandingPageComponents/CertificateBenefits'
import CertificateHero from '@/components/LandingPageComponents/CertificateHero'
import CourseOverviewComponent from '@/components/LandingPageComponents/CourseOverviewComponent'
import CustomCertificateWhy from '@/components/LandingPageComponents/CustomCertificateWhy'
import CustomGetCertificate from '@/components/LandingPageComponents/CustomGetCertificate'
import Navbar from '@/components/LandingPageComponents/Navbar'
import { curriculumUI, uiFaqs, uiLearn, uiSkills, uiTools, uiWhy } from '@/raw-data/data'
import React, { useRef, useState } from 'react'
import CertificateCurriculum from '@/components/LandingPageComponents/CertificateCurriculum'
import CustomEarn from '@/components/LandingPageComponents/CustomEarn'
import uiCer from '../../../public/certificates/ui.svg';
import Industries from '@/components/LandingPageComponents/Industries'
import CertificateFaq from '@/components/LandingPageComponents/CertificateFaq'
import CertificateGallary from '@/components/LandingPageComponents/CertificateGallary'
import CertificateGetStarted from '@/components/LandingPageComponents/CertificateGetStarted'
import ui from '../../../public/assets/cert-course/success/ui.svg'

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
            <span className='font-bold'>Create Stunning, User-Friendly Interfaces That Engage and Delight!</span> Haelsoft's UI Design Certificate Courses equip you with the skills to create visually stunning and user-friendly interfaces that captivate users and drive business growth. Begin your journey into the creative world of UI design today.
        </div>
    )

    const head = (
        <h1 className='text-black text-[1.5rem] lg:text-[2.65rem] leading-[40px] lg:leading-[61.33px] font-bold'>
            Get Certified as a UI Designer
        </h1>
    )

    const main = ('UI Design Certification Course Overview')

    const [tools, setTools] = useState(uiTools);
    const [skills, setSkills] = useState(uiSkills);
    const [learn, setLearn] = useState(uiLearn);
    const [why, setWhy] = useState(uiWhy)
    const [curriculum, setCurriculum] = useState(curriculumUI)
    const curTitle = 'User Interface (UI) Certification Course Curriculum';

    const [cusTitle, setCusTitle] = useState('Earn Your User Interface (UI) Certification');
    const [cusImg, setCusImg] = useState(uiCer);
    const cusDesc = "Earn your Haelsoft UI Design Certification upon course completion. This certification showcases your ability to craft visually compelling and user-friendly interfaces, making it a valuable addition to your professional portfolio. Use it to stand out in the competitive UI design field and secure opportunities aligned with your expertise."

    const [faqs, setFaqs] = useState(uiFaqs)
    const heroTitle = 'User Interface (UI) Design Certification'
    const heroDesc = "In today’s digital landscape, the success of websites and applications hinges on exceptional User Interface (UI) design. Haelsoft EdTech Platform’s User Interface Design Certificate Courses empower you to master the art and science of creating intuitive, visually appealing designs that improve user experiences. Whether you're starting your design journey or aiming to advance your expertise, our courses provide the tools, techniques, and practical knowledge to excel in UI design."

    const [img, setImg] = useState(ui);

    const whyTitle = "Why Choose Haelsoft's UI Design Certificate Course?"
    const getTitle = 'Master UI Design Today';
    const getDesc = 'Elevate your design expertise with our industry-recognized UI design certification. Create visually stunning interfaces, work on real-world projects, and join a dynamic community of creative professionals.';


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