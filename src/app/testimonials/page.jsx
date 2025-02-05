'use client'

import Navbar from '@/components/LandingPageComponents/Navbar';
import TestimonialCards from '@/components/LandingPageComponents/TestimonialCards';
import TestimonialHero from '@/components/LandingPageComponents/TestimonialHero';
import TestimonialIndustries from '@/components/LandingPageComponents/TestimonialIndustries';
import TestimonialMetrices from '@/components/LandingPageComponents/TestimonialMetrices';
import React, { useState } from 'react'

const page = () => {

    const [clicked, setClicked] = useState('');
    const [boolclick, setBoolClick] = useState(false);

  return (
    <main>
      <Navbar
        clicked={clicked} 
        setClicked={setClicked} 
        boolclick={boolclick} 
        setBoolClick={setBoolClick} 
      />
      <TestimonialHero/>
      <TestimonialMetrices/>
      <TestimonialCards/>
      <TestimonialIndustries/>
    </main>
  )
}

export default page