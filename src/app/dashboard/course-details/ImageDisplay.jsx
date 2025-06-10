import Image from 'next/image'
import React from 'react'
import one from '../../../asset/course-details/Mask group.svg'
import two from '../../../asset/course-details/Remoteworkervideocall.svg'
import three from '../../../asset/course-details/SEOModishEcommerce.svg'
import four from '../../../asset/course-details/Mask group (2).svg'
import five from '../../../asset/course-details/Mask group (4).svg'
import six from '../../../asset/course-details/EdTech Platform Mask Group.svg'
import seven from '../../../asset/course-details/Mask group (6).svg'

const ImageDisplay = () => {
  return (
    <section className='bg-white py-[200px]'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center w-full gap-4 overflow-auto whitespace-nowrap mb-10'>
            <Image width={482} height={444} src={one} className='object-cover' alt='Display 1'></Image>
            <Image width={482} height={444} src={two} className='object-cover' alt='Display 2'></Image>
            <Image width={482} height={444} src={three} className='object-cover' alt='Display 3'></Image>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-4 place-items-center mt-[2em]'>
            <Image width={357} height={399} className='object-cover' src={four} alt='Display 4'></Image>
            <Image width={357} height={399} className='object-cover' src={five} alt='Display 5'></Image>
            <Image width={357} height={399} className='object-cover' src={six} alt='Display 6'></Image>
            <Image width={357} height={399} className='object-cover' src={seven} alt='Display 7'></Image>
        </div>
    </section>
  )
}

export default ImageDisplay