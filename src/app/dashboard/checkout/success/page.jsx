'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

const SuccessPage = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const ref = searchParams.get('reference')

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/dashboard/my-courses')
    }, 3000)

    return () => clearTimeout(timeout)
  }, [router])

  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-green-600">Payment Successful 🎉</h1>
      <p className="mt-2 text-gray-600">Redirecting you to your courses...</p>
      {ref && <p className="text-sm text-gray-500 mt-1">Ref: {ref}</p>}
    </main>
  )
}

export default SuccessPage
