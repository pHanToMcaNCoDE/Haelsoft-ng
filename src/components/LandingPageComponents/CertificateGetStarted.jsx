import Link from 'next/link'
import React from 'react'

const CertificateGetStarted = () => {
  return (
    
    <section className="relative bg-custom-grid bg-repeat bg-[#C75C27] px-6 flex flex-col justify-center items-center h-full">
      <div className="w-[50%] mx-auto flex flex-col justify-center items-center gap-4 py-[100px] bg-[#C75C27] h-full">
        
        <div className='max-w-[1300px] px-12 flex flex-col justify-center items-center text-center gap-8 h-full'>
            <div className='flex flex-col justify-center items-center gap-3'>
                <h2 className="text-4xl font-semibold text-white">Master Web Development Today</h2>
                <div className="w-16 h-1 bg-yellow-500"></div>
            </div>
            <p className="text-lg leading-relaxed text-white">
                Unlock your potential with our industry-recognized web development certification. Build real-world projects, learn cutting-edge technologies, and join a community of passionate developers.
            </p>
            <Link href={`/signup`} className='w-[148px] bg-white h-[46px] rounded-[5px] py-[4px] flex justify-center items-center text-main font-medium text-base'>Get Started!</Link>
        </div>
      </div>
    </section>
  )
}

export default CertificateGetStarted