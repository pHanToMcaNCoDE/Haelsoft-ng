'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { FaRegCircleCheck } from 'react-icons/fa6'

const SuccessPage = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const ref = searchParams.get('reference')

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       router.push('/dashboard/my-courses')
//     }, 3000)

//     return () => clearTimeout(timeout)
//   }, [router])

  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <div className='w-full xl:w-[600px] h-[600px] shadow-md p-6 rounded-[4px] bg-white flex flex-col justify-center items-center gap-8'>
        <FaRegCircleCheck className='text-green-600 text-[2rem] lg:text-[4rem]' />
        <h1 className="text-3xl font-bold text-green-600">Payment Successful </h1>
        <div className='flex flex-col justify-center items-center text-center gap-1'>
            <p className="text-gray-600 text-[1rem]">We have received your payment</p>
            <p className="text-gray-600 text-[1.125rem]">Click the proceed button</p>
        </div>
        <Link href={`/dashboard/my-courses`} className='bg-green-500 py-2 px-5 rounded-md text-white font-medium'>proceed</Link>
      </div>
    </main>
  )
}

export default SuccessPage
