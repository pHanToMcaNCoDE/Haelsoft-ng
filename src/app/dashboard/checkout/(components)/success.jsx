'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { toast } from 'react-toastify'

export default function SuccessPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const reference = searchParams.get('reference')

  useEffect(() => {
    toast.success('Payment successful!')
    
    console.log('Payment reference:', reference)

    // Redirect after a delay
    const timer = setTimeout(() => {
      router.push('/my-learning')
    }, 2000)

    return () => clearTimeout(timer)
  }, [reference])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-xl font-semibold">Payment successful. Redirecting to your dashboard...</p>
    </div>
  )
}
