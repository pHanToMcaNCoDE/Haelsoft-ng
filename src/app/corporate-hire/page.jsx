'use client'

import ConnectTalent from '@/components/LandingPageComponents/ConnectTalent'
import CorporateGallary from '@/components/LandingPageComponents/CorporateGallary'
import EdtechGraduates from '@/components/LandingPageComponents/EdtechGraduates'
import EdtechRoles from '@/components/LandingPageComponents/EdtechRoles'
import Hire from '@/components/LandingPageComponents/Hire'
import Navbar from '@/components/LandingPageComponents/Navbar'
import Network from '@/components/LandingPageComponents/Network'
import Plan from '@/components/LandingPageComponents/Plan'
import ResponsiveNetwork from '@/components/LandingPageComponents/ResponsiveNetwork'
import ResponsiveWorkAt from '@/components/LandingPageComponents/ResponsiveWorkAt'
import StartHiring from '@/components/LandingPageComponents/StartHiring'
import WorkAt from '@/components/LandingPageComponents/WorkAt'
import React, { useState } from 'react'

const page = () => {

  const [clicked, setClicked] = useState('');

  const handleClickOutside = () => {
    if (clicked) {
      setClicked('');
    }
  };
  return (
    <main onClick={handleClickOutside}>
      <Navbar clicked={clicked} setClicked={setClicked}/>
      <Hire/>
      <ConnectTalent/>
      <EdtechGraduates/>
      {/* <WorkAt/> */}
      <Network/>
      <ResponsiveNetwork/>
      <ResponsiveWorkAt/>
      <CorporateGallary/>
      <EdtechRoles/>
      <Plan/>
      <StartHiring/>
    </main>
  )
}

export default page