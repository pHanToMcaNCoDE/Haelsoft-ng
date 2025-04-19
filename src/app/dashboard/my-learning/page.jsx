'use client'

import React, { useEffect, useState } from 'react'
import PaidCourses from './(mylearningcomponent)/PaidCourses'
import SkeletonLoader from './(mylearningcomponent)/SkeletonLoader';
import axios from 'axios';
import secureLocalStorage from 'react-secure-storage';
import Link from 'next/link';
import { IoIosArrowRoundBack } from 'react-icons/io';

const MyLearning = () => {
    const [loading, setLoading] = useState(true);
    const [paidCourses, setPaidCourses] = useState([]);

    useEffect(() => {
        // window.location.reload();
        const token = secureLocalStorage.getItem('token');

    
        // console.log('Token', token)
        axios.get(`https://edtech-backend-q2ud.onrender.com/enrollment/api/enrollments/`,{
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }).then((res) => {
            // console.log('Paid Courses', res.data.data);
            setPaidCourses(res.data.data);
        }).catch (err => err).finally(() => setLoading(false))
    }, [])
    
    if(loading) {
        return <SkeletonLoader/>;
    }

  return (
    <section className='max-w-[1300px] mx-auto p-3 h-auto py-[50px] flex flex-col w-full items-center'>
      <p className="text-3xl text-start w-full font-semibold flex items-center gap-2" >
        <Link href={`/dashboard/home`}>
          <IoIosArrowRoundBack />
        </Link>
        My Courses
      </p>
       {
        paidCourses.map((paidcourse, index) => (
          <div key={index} className='w-full'>
            <PaidCourses paidcourse={paidcourse}/>
          </div>
        ))
       }
       {/* <SkeletonLoader/> */}
    </section>
  )
}

export default MyLearning

