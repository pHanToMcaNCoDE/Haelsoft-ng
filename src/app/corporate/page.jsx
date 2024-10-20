import Hire from '@/components/LandingPageComponents/hire/Hire'
import React from 'react'
import Navbar from "@/components/LandingPageComponents//Navbar/Navbar";
import ConnectTalent from '@/components/LandingPageComponents/ConnectTalent/ConnectTalent';
import EdtechGraduates from '@/components/LandingPageComponents/EdtechGraduates/EdtechGraduates';
import WorkAt from '@/components/LandingPageComponents/WorkAt/WorkAt';
import EdtechRoles from '@/components/LandingPageComponents/EdtechRoles/EdtechRoles';
import Plan from '@/components/LandingPageComponents/Plan/Plan';
import CorporateGallary from '@/components/LandingPageComponents/CorporateGallary/CorporateGallary';
import StartHiring from '@/components/LandingPageComponents/StartHiring/StartHiring';
import ResponsiveWorkAt from '@/components/LandingPageComponents/WorkAt/ResponsiveWorkAt';

const Corporate = () => {
  return (
    <>
        <Navbar/>
        <Hire/>
        <ConnectTalent/>
        <EdtechGraduates/>
        <WorkAt/>
        <ResponsiveWorkAt/>
        <CorporateGallary/>
        <EdtechRoles/>
        <Plan/>
        <StartHiring/>
    </>
  )
}

export default Corporate