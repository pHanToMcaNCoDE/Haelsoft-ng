'use client'

// import Clients from "@/components/LandingPageComponents/clients/Clients";
// import Courses from "@/components/LandingPageComponents/courses/Courses";
// import FAQS from "@/components/LandingPageComponents//faqs/FAQS";
// import Footer from "@/components/LandingPageComponents//footer/Footer";
// import Hero from "@/components/LandingPageComponents//hero/Hero";
// import Navbar from "@/components/LandingPageComponents//Navbar/Navbar";
// import Review from "@/components/LandingPageComponents//reviews/Review";
// import Slider from "@/components/LandingPageComponents//slider/Slider";
// import Experts from "@/components/LandingPageComponents/experts/Experts";
// // import Community from "./coursedetail/Community";
// import CareerInvestment from "@/components/LandingPageComponents/career-investment/CareerInvestment";
// import PartTimeCertificateCourse from "@/components/LandingPageComponents/parttime-certificate-course/PartTimeCertificateCourse";
// import Community from "./dashboard/home/course-details/Community";
// import OurCourses from "@/components/LandingPageComponents/ourcourses/OurCourses";
// import Distinctness from "@/components/LandingPageComponents/distinctness/Distinctness";
// import Learn from "@/components/LandingPageComponents/learn/Learn";
// import Grow from "@/components/LandingPageComponents/grow/Grow";
// import WhereToBegin from "@/components/LandingPageComponents/wheretobegin/WhereToBegin";
// import GetStarted from "@/components/LandingPageComponents/getstarted/GetStarted";
// import Ready from "@/components/LandingPageComponents/ready/Ready";
// import Tab from "@/components/LandingPageComponents/Tab/Tab";

import Companies from "@/components/LandingPageComponents/Companies";
import Hero from "@/components/LandingPageComponents/Hero";
import Benefits from "@/components/LandingPageComponents/Benefits";
import Network from "@/components/LandingPageComponents/Network";
import ResponsiveNetwork from "@/components/LandingPageComponents/ResponsiveNetwork";
import PartTimeCertificateCourse from "@/components/LandingPageComponents/PartTimeCertificateCourse";
import Instructors from "@/components/LandingPageComponents/Instructors";
import GetStarted from "@/components/LandingPageComponents/GetStarted";
import Navbar from "@/components/LandingPageComponents/Navbar";
import { useState } from "react";
import Courses from "@/components/LandingPageComponents/Courses";
import Review from "@/components/LandingPageComponents/reviews/Review";
import LearnOnline from "@/components/LandingPageComponents/BenefitsOnline";
import Bootcamps from "@/components/LandingPageComponents/Bootcamps";
import ReadyToGetStarted from "@/components/LandingPageComponents/ReadyToGetStarted";
import BenefitsOnline from "@/components/LandingPageComponents/BenefitsOnline";


export default function Home() {
  const [clicked, setClicked] = useState('');

  const handleClickOutside = () => {
    if (clicked) {
      setClicked('');
    }
  };

  return (
    <main className="relative">
      <Navbar clicked={clicked} setClicked={setClicked}/>
      <Hero />
      <Companies />
      <Courses/>
      {/* <Benefits /> */}
      <Review/>
      <Network />
      <ResponsiveNetwork />
      <PartTimeCertificateCourse />
      <BenefitsOnline/>
      <Bootcamps/>
      <Instructors />
      {/* <GetStarted /> */}
      <ReadyToGetStarted/>
      {/* <Footer /> */}


      <footer className="text-center py-4">
        <a href="https://lordicon.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
          Icons by Lordicon.com
        </a>
      </footer>
    </main>
  );
}
