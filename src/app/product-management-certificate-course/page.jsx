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
import pmCer from '../../../public/certificates/pm.svg';
import Industries from '@/components/LandingPageComponents/Industries'
import CertificateFaq from '@/components/LandingPageComponents/CertificateFaq'
import CertificateGallary from '@/components/LandingPageComponents/CertificateGallary'
import CertificateGetStarted from '@/components/LandingPageComponents/CertificateGetStarted'
import pm from '../../../public/assets/cert-course/success/pm.svg'
import { curriculumPM, pmLearn, pmTools, pmFaqs, pmSkills, pmWhy } from '@/raw-data/data'


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
            <span className='font-bold'>Master Product Management and Drive Success!</span> In today&apos;s fast-paced market, effective product management is key to building innovative solutions and leading successful teams. Haelsoft EdTech Platform&apos;s Product Management course is designed to equip you with the skills to manage product lifecycles, define strategies, and deliver customer-driven results. Whether you&apos;re starting a career in product management or looking to refine your skills, this course will provide you with the practical tools to excel in a competitive industry.
        </div>
    )    

    const head = (
        <h1 className='text-black text-[1.5rem] lg:text-[2.65rem] leading-[40px] lg:leading-[61.33px] font-bold'>
            Get Certified as a Product Manager
        </h1>
    )

    const main = ('Product Management Certification Course Overview')

    const [tools, setTools] = useState(pmTools);
    const [skills, setSkills] = useState(pmSkills);
    const [learn, setLearn] = useState(pmLearn);
    const [why, setWhy] = useState(pmWhy)
    const [curriculum, setCurriculum] = useState(curriculumPM)
    const curTitle = 'Product Management Certification Course Curriculum';

    const [cusTitle, setCusTitle] = useState('Earn Your Product Management Certification');
    const [cusImg, setCusImg] = useState(pmCer);
    const cusDesc = "Earn the Haelsoft Product Management Certification to showcase your expertise in product lifecycles, strategy, market research, and agile methodologies. Enhance your professional portfolio and unlock new career opportunities in product management."

    const [faqs, setFaqs] = useState(pmFaqs)
    const heroTitle = 'Product Management Certification'
    const heroDesc = "In today’s competitive market, product management is at the heart of delivering value-driven solutions that customers love. Haelsoft EdTech Platform’s Product Management Courses are designed to equip you with the skills, tools, and strategies to excel in this exciting field."

    const [img, setImg] = useState(pm);

    const whyTitle = "Why Choose Haelsoft's Product Management Certificate Course?"
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
            {/* <CertificateGallary/> */}
            <CertificateFaq faqs={faqs}/>
            <CertificateGetStarted getTitle={getTitle} getDesc={getDesc} />
        </main>
  )
}

export default page