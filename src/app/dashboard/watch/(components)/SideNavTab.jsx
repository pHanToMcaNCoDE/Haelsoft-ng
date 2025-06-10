import React from 'react'
import { HiMiniXMark } from 'react-icons/hi2'

const SideNavTab = () => {
  return (
    <nav className='w-full h-[56px] flex flex-col justify-between items-start gap-3 pt-4'>
        <div className='flex flex-col gap-2 h-[55px] p-1'>
            <p className='text-sm font-medium text-black'>Course content</p>
            <div className='h-[4px] w-full bg-black rounded-full'></div>
        </div>

        <HiMiniXMark size={24} />
    </nav>
  )
}

export default SideNavTab