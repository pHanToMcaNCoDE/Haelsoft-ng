'use client'

import React from 'react'
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

const Notification = () => {
  return (
    <div className='bg-white w-full lg:w-[1023px] lg:h-[980px] px-[10px] lg:px-[25px] py-[50px] pb-[100px] flex flex-col justify-start items-start gap-[3em]'>
        <h1 className="px-[30px] pt-[20px] font-semibold leading-9 text-[1.5rem] text-black">
            Notification
        </h1>
        <div className='px-[15px] lg:px-[30px] flex flex-col justify-start items-start gap-[6em] w-full'>
            <div className='w-full flex flex-col justify-start items-start gap-10'>
                <div className='flex flex-col md:flex-row w-full justify-between items-center gap-3'>
                    <Label htmlFor="airplane-mode" className='text-[#655D59] text-[1.25rem] font-medium leading-[46px]'>Promotional Emails</Label>
                    <Switch className='data-[state=checked]:bg-main' id="airplane-mode" />
                </div>
                <div className='flex flex-col md:flex-row w-full justify-between items-center gap-3'>
                    <Label htmlFor="airplane-mode" className='text-[#655D59] text-[1.25rem] font-medium leading-[46px]'>Announcements</Label>
                    <Switch className='data-[state=checked]:bg-main' id="airplane-mode" />
                </div>
                <div className='flex flex-col md:flex-row w-full justify-between items-center gap-3'>
                    <Label htmlFor="airplane-mode" className='text-[#655D59] text-[1.25rem] font-medium leading-[46px]'>Payment reminders</Label>
                    <Switch className='data-[state=checked]:bg-main' id="airplane-mode" />
                </div>
                <div className='flex flex-col md:flex-row w-full justify-between items-center gap-3'>
                    <Label htmlFor="airplane-mode" className='text-[#655D59] text-[1.25rem] font-medium leading-[46px]'>Learning progress</Label>
                    <Switch className='data-[state=checked]:bg-main' id="airplane-mode" />
                </div>
            </div>
            <button
            className="w-[184px] text-[#7F7571] h-[41px] rounded border border-[#FF8C53] text-[.875rem] font-medium leading-[21px] flex justify-center items-center"
            type="submit"
            >
            Save
            </button>
        </div>
    </div>
  )
}

export default Notification