import axios from 'axios'
import React, { useEffect } from 'react'
import secureLocalStorage from 'react-secure-storage'

const FeaturedCourses = () => {
    
  return (
    <section className='h-full px-5 py-25'>
      <h1>Featured Courses</h1>

      <div className='w-full border-b border-neutral-200 flex justify-center items-center gap-3'>
        <div>Featured</div>
        <div>Latest</div>
      </div>
    </section>
  )
}

export default FeaturedCourses