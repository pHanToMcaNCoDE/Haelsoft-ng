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
import daCer from '../../../public/certificates/da.svg';
import Industries from '@/components/LandingPageComponents/Industries'
import CertificateFaq from '@/components/LandingPageComponents/CertificateFaq'
import CertificateGallary from '@/components/LandingPageComponents/CertificateGallary'
import CertificateGetStarted from '@/components/LandingPageComponents/CertificateGetStarted'
import da from '../../../public/assets/cert-course/success/da.svg'
import { daTools, daSkills, daLearn, daWhy, curriculumDA, daFaqs } from '@/raw-data/data'


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
            <span className='font-bold'>Master Data Analytics and Unlock the Power of Data-Driven Decisions!</span> In today&apos;s data-driven world, the ability to analyze and interpret data is crucial for making informed decisions. Haelsoft EdTech Platform&apos;s Data Analytics course is designed to equip you with the skills to extract insights, build predictive models, and optimize performance. Whether you're starting a career in data analytics or looking to enhance your skills, this course will provide you with the practical knowledge to excel in a rapidly evolving field.
        </div>
    )    

    const head = (
        <h1 className='text-black text-[1.5rem] lg:text-[2.65rem] leading-[40px] lg:leading-[61.33px] font-bold'>
            Get Certified in Data Analytics
        </h1>
    )

    const main = ('Data Analytics Certification Course Overview')

    const [tools, setTools] = useState(daTools);
    const [skills, setSkills] = useState(daSkills);
    const [learn, setLearn] = useState(daLearn);
    const [why, setWhy] = useState(daWhy)
    const [curriculum, setCurriculum] = useState(curriculumDA)
    const curTitle = 'Data Analytics Certification Course Curriculum';

    const [cusTitle, setCusTitle] = useState('Earn Your Data Analytics Certification');
    const [cusImg, setCusImg] = useState(daCer);
    const cusDesc = "Earn the Haelsoft Data Analytics Certification to showcase your expertise in data analysis, predictive modeling, and data-driven decision-making. Strengthen your professional portfolio and unlock new career opportunities in the growing field of data analytics."

    const [faqs, setFaqs] = useState(daFaqs)
    const heroTitle = 'Data Analytics Certification'
    const heroDesc = "In today’s data-driven world, businesses rely on data analytics to uncover insights, drive strategy, and create value. Haelsoft EdTech Platform’s Data Analytics Certificate Courses are designed to equip you with in-demand skills to analyze, interpret, and visualize data effectively. Whether you're starting your data analytics journey or looking to enhance your current skills, our courses provide a comprehensive learning experience with practical applications and expert mentorship."

    const [img, setImg] = useState(da);

    const whyTitle = "Why Choose Haelsoft's Data Analytics Certification Course?"
    const getTitle = 'Master Data Analytics Today';
    const getDesc = 'Advance your career with our industry-recognized Data Analytics certification. Master essential data analysis techniques, work on real-world projects, and join a community of data professionals committed to unlocking valuable insights and driving informed decisions.';

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