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
import dsCer from '../../../public/certificates/ds.svg';
import Industries from '@/components/LandingPageComponents/Industries'
import CertificateFaq from '@/components/LandingPageComponents/CertificateFaq'
import CertificateGallary from '@/components/LandingPageComponents/CertificateGallary'
import CertificateGetStarted from '@/components/LandingPageComponents/CertificateGetStarted'
import ds from '../../../public/assets/cert-course/success/ds.svg'
import { curriculumDS, dsFaqs, dsLearn, dsSkills, dsTools, dsWhy } from '@/raw-data/data'


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
            Get Certified as a Data Scientist
        </h1>
    )

    const main = ('Data Science Certification Course Overview')

    const [tools, setTools] = useState(dsTools);
    const [skills, setSkills] = useState(dsSkills);
    const [learn, setLearn] = useState(dsLearn);
    const [why, setWhy] = useState(dsWhy)
    const [curriculum, setCurriculum] = useState(curriculumDS)
    const curTitle = 'Data Science Certification Course Curriculum';

    const [cusTitle, setCusTitle] = useState('Earn Your Data Science Certification');
    const [cusImg, setCusImg] = useState(dsCer);
    const cusDesc = "Earn your Haelsoft Data Science Certification upon course completion. This certification demonstrates your expertise in analyzing data, building models, and generating insights that drive decision-making. It’s an excellent addition to your professional portfolio, helping you stand out in the fast-growing field of data science and secure opportunities aligned with your skills."

    const [faqs, setFaqs] = useState(dsFaqs)
    const heroTitle = 'Data Science Certification'
    const heroDesc = "In a world driven by information, data is the most valuable asset for businesses, governments, and individuals. Haelsoft EdTech Platform's Data Science Courses are designed to help you transform raw data into actionable insights, equipping you with the skills to thrive in one of the fastest-growing fields in technology. Whether you&apos;re a beginner eager to explore data science or a professional looking to upskill, our comprehensive courses provide everything you need to excel."

    const [img, setImg] = useState(ds);

    const whyTitle = "Why Choose Haelsoft's Data Science Certificate Course?"
    const getTitle = 'Master Data Science Today';
    const getDesc = 'Elevate your analytical skills with our industry-recognized Data Science certification. Analyze complex data, work on real-world projects, and join a thriving community of data science professionals.';

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