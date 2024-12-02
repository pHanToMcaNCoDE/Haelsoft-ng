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
import { useState, useEffect } from "react";

export default function Home() {
  const [clicked, setClicked] = useState('');

  return (
    <main className="relative">
      <Navbar
        clicked={clicked}
        setClicked={(value) => {
          setClicked(value);
        }}
      />
      <Hero />
      <Companies />
      <Courses />
      <Review />
      <Network />
      <ResponsiveNetwork />
      <PartTimeCertificateCourse />
      <BenefitsOnline />
      <Bootcamps />
      <Instructors />
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
