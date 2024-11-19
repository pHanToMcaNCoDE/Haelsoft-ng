'use client'

import CareerHero from '@/components/LandingPageComponents/CareerHero'
import CultureBenefits from '@/components/LandingPageComponents/CultureBenefits'
import DedicatedLearners from '@/components/LandingPageComponents/DedicatedLearners'
import DefineFuture from '@/components/LandingPageComponents/DefineFuture'
import Gall from '@/components/LandingPageComponents/Gall'
import Navbar from '@/components/LandingPageComponents/Navbar'
import TeachingHaelsoft from '@/components/LandingPageComponents/TeachingHaelsoft'
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
      <CareerHero/>
      <DefineFuture/>
      <DedicatedLearners/>
      <CultureBenefits/>
      <Gall/>
      <TeachingHaelsoft/>
    </main>
  )
}

export default page