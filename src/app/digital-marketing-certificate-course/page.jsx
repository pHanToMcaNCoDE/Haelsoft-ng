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
import { curriculumDM, dmFaqs, dmLearn, dmSkills, dmTools, dmWhy } from '@/raw-data/data'


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

    const main = ('Digital Marketing Certification Course Overview')

    const [tools, setTools] = useState(dmTools);
    const [skills, setSkills] = useState(dmSkills);
    const [learn, setLearn] = useState(dmLearn);
    const [why, setWhy] = useState(dmWhy)
    const [curriculum, setCurriculum] = useState(curriculumDM)
    const curTitle = 'Digital Marketing Certification Course Curriculum';

    const [cusTitle, setCusTitle] = useState('Earn Your Digital Marketing Certification');
    const [cusImg, setCusImg] = useState(dmCer);
    const cusDesc = "Earn your Haelsoft Digital Marketing Certification upon course completion. This certification validates your expertise in crafting impactful campaigns, optimizing online presence, and driving measurable results. It’s a powerful addition to your professional portfolio, showcasing your skills in SEO, social media, content marketing, and analytics, helping you stand out in the competitive digital marketing industry and secure rewarding opportunities."

    const [faqs, setFaqs] = useState(dmFaqs)
    const heroTitle = 'Digital Marketing Certification'
    const heroDesc = "In today’s competitive business landscape, digital marketing is the key to reaching and engaging your target audience. Haelsoft EdTech Platform’s Digital Marketing Courses are designed to provide you with cutting-edge skills, practical strategies, and industry insights to excel in the fast-paced world of online marketing."

    const [img, setImg] = useState(dm);

    const whyTitle = "Why Choose Haelsoft's Digital Marketing Certificate Course?"
    const getTitle = 'Master Digital Marketing Today';
    const getDesc = 'Elevate your marketing expertise with our industry-recognized Digital Marketing certification. Master cutting-edge strategies, work on real-world campaigns, and join a thriving community of marketing professionals.';

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