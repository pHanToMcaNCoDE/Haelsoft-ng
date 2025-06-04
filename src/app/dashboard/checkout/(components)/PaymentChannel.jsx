import Loader from '@/components/Loader';
import axios from 'axios';
import React, { useState } from 'react'
import secureLocalStorage from 'react-secure-storage'
import { toast } from 'react-toastify'

const PaymentChannel = ({channels, setSelectedChannel, selectedChannel, cartItems}) => {


  return (
    <section className='w-full flex flex-col justify-start items-start gap-4'>
        <div className='w-full flex flex-col justify-center items-center gap-5'>
          {
            channels.map((channel) => (
              <div onClick={() => setSelectedChannel(channel.name)} key={channel.id} className={`${selectedChannel === channel.name ? 'border border-main' : 'border border-gray'} rounded-[5px] w-full px-3 transition-all py-5 flex justify-between items-center cursor-pointer`}>
                <p className='text-md font-bold text-black'>{channel.description}</p>
                <img width={130} height={130} className='object-contain' src={`${process.env.NEXT_PUBLIC_STORAGE_URL}${channel.logo}`} alt={channel.name} />
              </div>
            ))
          }
        </div>

    </section>
  )
}

export default PaymentChannel