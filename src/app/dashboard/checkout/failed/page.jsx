'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { FaRegCircleXmark } from 'react-icons/fa6'

export default function FailedPage() {
  const router = useRouter()

//   useEffect(() => {
//     toast.error('Payment failed or was cancelled.')

//     const timer = setTimeout(() => {
//       router.push('/checkout')
//     }, 2000)

//     return () => clearTimeout(timer)
//   }, [])

  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <div className='w-full xl:w-[600px] h-[600px] shadow-md p-6 rounded-[4px] bg-white flex flex-col justify-center items-center gap-8'>
        <FaRegCircleXmark className='text-red-600 text-[2rem] lg:text-[4rem]' />
        <h1 className="text-3xl font-bold text-red-600">Payment Unsuccessful </h1>
        <div className='flex flex-col justify-center items-center text-center gap-1'>
            <p className="text-gray-600 text-[1rem]">We have not received your payment</p>
            {/* <p className="text-gray-600 text-[1.125rem]">Click the back button to make paym</p> */}
        </div>
        {/* <Link href={`/dashboard/my-courses`} className='bg-green-500 py-2 px-5 rounded-md text-white font-medium'>proceed</Link> */}
      </div>
    </main>
  )
}
