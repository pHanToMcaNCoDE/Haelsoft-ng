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
import pyCer from '../../../public/certificates/py.svg';
import Industries from '@/components/LandingPageComponents/Industries'
import CertificateFaq from '@/components/LandingPageComponents/CertificateFaq'
import CertificateGallary from '@/components/LandingPageComponents/CertificateGallary'
import CertificateGetStarted from '@/components/LandingPageComponents/CertificateGetStarted'
import py from '../../../public/assets/cert-course/success/py.svg'
import { curriculumPM, pmLearn, pmTools, pmFaqs, pmSkills, pmWhy, pyFaqs, curriculumPY, pyTools, pyLearn, pySkills, pyWhy } from '@/raw-data/data'


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
            <span className='font-bold'>Unlock Your Potential with Python – The World&apos;s Most Versatile Programming Language!</span> In today&apos;s fast-evolving tech landscape, mastering Python is essential for building versatile and scalable solutions. Haelsoft EdTech Platform&apos;s Python course is designed to equip you with the skills to code efficiently, solve complex problems, and develop cutting-edge applications. Whether you&apos;re starting your coding journey or aiming to refine your Python expertise, this course will provide you with the practical knowledge needed to thrive in the programming world.
        </div>
    )    

    const head = (
        <h1 className='text-black text-[1.5rem] lg:text-[2.65rem] leading-[40px] lg:leading-[61.33px] font-bold'>
            Get Certified in Python
        </h1>
    )

    const main = ('Python Certification Course Overview')

    const [tools, setTools] = useState(pyTools);
    const [skills, setSkills] = useState(pySkills);
    const [learn, setLearn] = useState(pyLearn);
    const [why, setWhy] = useState(pyWhy)
    const [curriculum, setCurriculum] = useState(curriculumPY)
    const curTitle = 'Python Certification Course Curriculum';

    const [cusTitle, setCusTitle] = useState('Earn Your Python Certification');
    const [cusImg, setCusImg] = useState(pyCer);
    const cusDesc = "Earn the Haelsoft Python Certification to showcase your expertise in programming, data analysis, automation, and machine learning. Strengthen your professional portfolio and unlock exciting career opportunities in software development."

    const [faqs, setFaqs] = useState(pyFaqs)
    const heroTitle = 'Python Certification'
    const heroDesc = "Python is a gateway to a world of endless possibilities in technology. Haelsoft EdTech Platform’s Python Certificate Courses provide you with a robust foundation in Python programming, enabling you to excel in web development, data science, machine learning, automation, and more. Whether you’re a beginner eager to start coding or a professional advancing your tech career, our Python courses offer a practical, hands-on approach to mastering this in-demand language."

    const [img, setImg] = useState(py);

    const whyTitle = "Why Choose Haelsoft's Python Certificate Course?"
    const getTitle = 'Master Python Today';
    const getDesc = 'Advance your career with our industry-recognized Python certification. Master core programming skills, work on real-world projects, and join a community of developers transforming industries with Python.';

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