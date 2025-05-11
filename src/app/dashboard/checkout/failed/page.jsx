'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

export default function FailedPage() {
  const router = useRouter()

  useEffect(() => {
    toast.error('Payment failed or was cancelled.')

    const timer = setTimeout(() => {
      router.push('/checkout')
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-xl font-semibold text-red-600">Payment failed. Redirecting...</p>
    </div>
  )
}
