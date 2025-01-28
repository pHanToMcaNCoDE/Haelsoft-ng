'use client'

import ContactDetails from '@/components/LandingPageComponents/ContactDetails';
import ContactUsHero from '@/components/LandingPageComponents/ContactUsHero'
import Navbar from '@/components/LandingPageComponents/Navbar';
import React, { useState } from 'react'

const page = () => {

  const [clicked, setClicked] = useState('');
        
  return (
    <main className='w-full min-h-screen'>
      <Navbar
        clicked={clicked}
        setClicked={(value) => {
          setClicked(value);
        }}
      />
      <ContactUsHero/>
      <ContactDetails/>
    </main>
  )
}

export default page