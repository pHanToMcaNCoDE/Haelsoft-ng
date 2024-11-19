'use client'

import Comments from '@/components/LandingPageComponents/Comments'
import Hire from '@/components/LandingPageComponents/Hire'
import Navbar from '@/components/LandingPageComponents/Navbar'
import Network from '@/components/LandingPageComponents/Network'
import Plan from '@/components/LandingPageComponents/Plan'
import Random from '@/components/LandingPageComponents/Random'
import ResponsiveNetwork from '@/components/LandingPageComponents/ResponsiveNetwork'
import StartHiring from '@/components/LandingPageComponents/StartHiring'
import TrainingBenefits from '@/components/LandingPageComponents/TrainingBenefits'
import React, { useState } from 'react'

const page = () => {

  const [clicked, setClicked] = useState('');
  const [boolclick, setBoolClick] = useState(false);

  const handlePageClick = () => {
    setBoolClick(false);
    setClicked('');
  };

  return (
    <main onClick={handlePageClick}>
      <Navbar 
        clicked={clicked} 
        setClicked={setClicked} 
        boolclick={boolclick} 
        setBoolClick={setBoolClick} 
      />
      <Hire/>
      <TrainingBenefits/>
      <Network />
      <ResponsiveNetwork />
      <Random/>
      <Comments/>
      {/* <Plan/> */}
      <StartHiring/>
    </main>
  )
}

export default page