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
import dmCer from '../../../public/certificates/dm.svg';
import Industries from '@/components/LandingPageComponents/Industries'
import CertificateFaq from '@/components/LandingPageComponents/CertificateFaq'
import CertificateGallary from '@/components/LandingPageComponents/CertificateGallary'
import CertificateGetStarted from '@/components/LandingPageComponents/CertificateGetStarted'
import dm from '../../../public/assets/cert-course/success/dm.svg'
import { curriculumPM, dmLearn, dmSkills, dmTools, pmFaqs, pmWhy } from '@/raw-data/data'


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
            <span className='font-bold'>Craft Seamless Digital Experiences that Delight and Inspire!</span> In today&apos;s data-driven world, mastering data science is essential for making informed decisions and solving complex problems. Haelsoft EdTech Platform&apos;s Data Science course is designed to equip you with the skills to analyze data, build predictive models, and unlock valuable insights. Whether you&apos;re looking to transition into data science or enhance your existing skills, this course will provide the practical knowledge needed to excel in a fast-paced, data-centric environment." Let me know if you'd like any further adjustments!
        </div>
    )

    const head = (
        <h1 className='text-black text-[1.5rem] lg:text-[2.65rem] leading-[40px] lg:leading-[61.33px] font-bold'>
            Get Certified as a Digital Marketer
        </h1>
    )

    const main = ('Product Management Certification Course Overview')

    const [tools, setTools] = useState(dmTools);
    const [skills, setSkills] = useState(dmSkills);
    const [learn, setLearn] = useState(dmLearn);
    const [why, setWhy] = useState(pmWhy)
    const [curriculum, setCurriculum] = useState(curriculumPM)
    const curTitle = 'Product Management Certification Course Curriculum';

    const [cusTitle, setCusTitle] = useState('Earn Your Product Management Certification');
    const [cusImg, setCusImg] = useState(dmCer);
    const cusDesc = "Earn your Haelsoft Product Management Certification upon course completion. This certification demonstrates your expertise in managing product lifecycles, defining strategies, and delivering customer-centric solutions. It’s a valuable addition to your professional portfolio, showcasing your skills in market research, roadmap development, stakeholder management, and agile methodologies, empowering you to excel in the competitive product management field and unlock exciting career opportunities."

    const [faqs, setFaqs] = useState(pmFaqs)
    const heroTitle = 'Product Management Certification'
    const heroDesc = "In today’s competitive market, product management is at the heart of delivering value-driven solutions that customers love. Haelsoft EdTech Platform’s Product Management Courses are designed to equip you with the skills, tools, and strategies to excel in this exciting field."

    const [img, setImg] = useState(dm);

    const whyTitle = "Why Choose Haelsoft's Product Management Certificate Courses?"
    const getTitle = 'Master Product Management Today';
    const getDesc = 'Advance your career with our industry-recognized Product Management certification. Gain mastery of innovative frameworks, work on real-world projects, and become part of a dynamic community of product leaders.';

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