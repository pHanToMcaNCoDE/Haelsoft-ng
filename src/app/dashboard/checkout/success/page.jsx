'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { toast } from 'react-toastify'

import Link from 'next/link'
import { FaRegCircleCheck } from 'react-icons/fa6'

const PaymentSuccess = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const reference = searchParams.get('reference')

  useEffect(() => {
    if (reference) {
      const timeout = setTimeout(() => {
        router.push('/dashboard/my-courses')
      }, 3000)

      return () => clearTimeout(timeout)

      toast.success('Payment successful! 🎉')
    } else {
      toast.error('No payment reference found.')
    }
  }, [reference])

  return (
    <main className="h-screen flex flex-col justify-center items-center bg-gray-50 px-4">
      <div className="w-full max-w-xl h-[600px] shadow-lg p-8 rounded-lg bg-white flex flex-col justify-center items-center gap-8">
        <FaRegCircleCheck className="text-green-600 text-6xl" />
        <h1 className="text-3xl font-bold text-green-600">Payment Successful</h1>
        <div className="text-center space-y-1">
          <p className="text-gray-600 text-base">We have received your payment.</p>
          <p className="text-gray-600 text-lg">You will be redirected shortly.</p>
          <p className="mt-2 text-sm text-gray-500">Ref: {reference}</p>
        </div>
        <Link
          href="/dashboard/my-courses"
          className="bg-green-500 hover:bg-green-600 transition-colors py-2 px-6 rounded-md text-white font-medium"
        >
          Proceed
        </Link>
      </div>
    </main>
  )
}

export default PaymentSuccess
