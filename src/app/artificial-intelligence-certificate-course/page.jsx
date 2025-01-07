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
import aiCer from '../../../public/certificates/ai.svg';
import Industries from '@/components/LandingPageComponents/Industries'
import CertificateFaq from '@/components/LandingPageComponents/CertificateFaq'
import CertificateGallary from '@/components/LandingPageComponents/CertificateGallary'
import CertificateGetStarted from '@/components/LandingPageComponents/CertificateGetStarted'
import ai from '../../../public/assets/cert-course/success/ai.svg'
import { aiFaqs, aiLearn, aiSkills, aiTools, aiWhy, curriculumAI } from '@/raw-data/data'

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
            <span className='font-bold'>Master the Future of Technology with Artificial Intelligence!</span> Haelsoft's AI Certificate Courses provide you with the knowledge and skills to harness the power of artificial intelligence, from machine learning to natural language processing. Start your journey into the transformative world of AI today.
        </div>
    )

    const head = (
        <h1 className='text-black text-[1.5rem] lg:text-[2.65rem] leading-[40px] lg:leading-[61.33px] font-bold'>
            Get Certified in Artificial Intelligence
        </h1>
    )

    const main = ('Artificial Intelligence Certification Course Overview')

    const [tools, setTools] = useState(aiTools);
    const [skills, setSkills] = useState(aiSkills);
    const [learn, setLearn] = useState(aiLearn);
    const [why, setWhy] = useState(aiWhy)
    const [curriculum, setCurriculum] = useState(curriculumAI)
    const curTitle = 'Artificial Intelligence Certification Course Curriculum';

    const [cusTitle, setCusTitle] = useState('Earn Your Artificial Intelligence Certification');
    const [cusImg, setCusImg] = useState(aiCer);
    const cusDesc = "Earn your Haelsoft AI Certification upon course completion. This certification highlights your expertise in artificial intelligence, showcasing your ability to develop innovative solutions and apply AI technologies effectively. Use it to stand out in the competitive AI industry and unlock opportunities aligned with your skills."

    const [faqs, setFaqs] = useState(aiFaqs)
    const heroTitle = 'Artificial Intelligence Certification'
    const heroDesc = "Artificial Intelligence (AI) is transforming industries, driving innovation, and shaping the future. Haelsoft EdTech Platform’s Artificial Intelligence Certificate Courses will equip you with the knowledge and skills to harness the power of AI. Whether you’re starting from scratch or looking to deepen your expertise, our comprehensive courses provide hands-on experience in machine learning, deep learning, natural language processing, and more. Join us to become part of the AI revolution and enhance your career with cutting-edge skills."

    const [img, setImg] = useState(ai);

    const whyTitle = "Why Choose Haelsoft's Artificial Intelligence Certificate Course?"
    const getTitle = 'Master Artificial Intelligence Today';
    const getDesc = 'Elevate your expertise in artificial intelligence with our industry-recognized AI certification. Master cutting-edge technologies, work on real-world projects, and join a dynamic community of AI professionals shaping the future.';


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