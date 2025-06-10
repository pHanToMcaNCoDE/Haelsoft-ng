'use client'

import React, { useState } from 'react'
import TestimonialDetailsHero from './components/TestimonialDetailsHero'
import Navbar from '@/components/LandingPageComponents/Navbar';
import Testimonial from './components/Testimonial';
import MoreTestimonials from './components/MoreTestimonials';

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
        <TestimonialDetailsHero/>
        <Testimonial/>
        <MoreTestimonials/>
    </main>
  )
}

export default page