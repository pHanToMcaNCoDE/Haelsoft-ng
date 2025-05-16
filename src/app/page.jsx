'use client';

import Companies from "@/components/LandingPageComponents/Companies";
import Hero from "@/components/LandingPageComponents/Hero";
import Network from "@/components/LandingPageComponents/Network";
import ResponsiveNetwork from "@/components/LandingPageComponents/ResponsiveNetwork";
import PartTimeCertificateCourse from "@/components/LandingPageComponents/PartTimeCertificateCourse";
import Instructors from "@/components/LandingPageComponents/Instructors";
import Navbar from "@/components/LandingPageComponents/Navbar";
import Courses from "@/components/LandingPageComponents/Courses";
import Review from "@/components/LandingPageComponents/reviews/Review";
import BenefitsOnline from "@/components/LandingPageComponents/BenefitsOnline";
import Bootcamps from "@/components/LandingPageComponents/Bootcamps";
import ReadyToGetStarted from "@/components/LandingPageComponents/ReadyToGetStarted";
import { useState, useEffect, useRef } from "react";
import CustomNewsletter from "@/components/LandingPageComponents/CustomNewsletter";
import FeaturedCourses from "@/components/LandingPageComponents/FeaturedCourses";
import LatestCourses from "@/components/LandingPageComponents/LatestCourses";

export default function Home() {
  const [clicked, setClicked] = useState('');
  let courses = useRef(null);

  const scrollToCourses = () => {
    if(courses.current){
      courses.current.scrollIntoView({behavior: 'smooth'})
    }
  }

  return (
    <main className="relative">
      <Navbar
        clicked={clicked}
        setClicked={(value) => {
          setClicked(value);
        }}
      />
      <Hero scrollToCourses={scrollToCourses} />
      <Companies />
      <LatestCourses/>
      <section ref={courses}>
        <Courses />
      </section>
      <Review />
      <FeaturedCourses/>
      <Network />
      <ResponsiveNetwork />
      <PartTimeCertificateCourse />
      <BenefitsOnline />
      <Bootcamps />
      <Instructors />
      {/* <section className="py-[64px] lg:py-[100px] w-full flex justify-center items-center">
        <CustomNewsletter/>
      </section> */}
      <ReadyToGetStarted />
      <footer className="text-center py-4 hidden">
        <a
          href="https://lordicon.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Icons by Lordicon.com
        </a>
      </footer>
    </main>
  );  
}
