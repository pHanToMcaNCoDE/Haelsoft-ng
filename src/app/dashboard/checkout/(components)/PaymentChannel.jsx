import React from 'react'

const PaymentChannel = ({channels, setSelectedChannel, selectedChannel}) => {
  return (
    <section className='w-full flex flex-col justify-start items-start gap-4'>

        <div className='w-full flex flex-col justify-center items-center gap-5'>
          {
            channels.map((channel) => (
              <div onClick={() => setSelectedChannel(channel.name)} key={channel.id} className={`${selectedChannel === channel.link ? 'border border-main' : 'border border-gray'} rounded-[5px] w-full px-3 transition-all py-5 flex justify-between items-center cursor-pointer`}>
                <p className='text-md font-bold text-black'>{channel.description}</p>
                <img width={130} height={130} className='object-contain' src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${channel.logo}`} alt={channel.name} />
              </div>
            ))
          }
        </div>

        <div className='w-full flex justify-end items-end'>  
          <button
            className={`w-[150px] h-[51px] border border-main text-white bg-main text-base font-semibold leading-[21px] flex justify-center items-center rounded-[4px]"
            type="submit`}
            disabled={!selectedChannel}
          >
            Next
          </button>
        </div>
    </section>
  )
}

export default PaymentChannel