import Loader from '@/components/Loader';
import axios from 'axios';
import React, { useState } from 'react'
import secureLocalStorage from 'react-secure-storage'
import { toast } from 'react-toastify'

const PaymentChannel = ({channels, setSelectedChannel, selectedChannel, cartItems}) => {

  const token = secureLocalStorage.getItem("token");
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = async () => {
    try{
      let endpoint = ''
      let paymentUrl = ''

      setIsLoading(true)

      if(selectedChannel === 'PayStack Payment GateWay'){
        endpoint = 'paystack';
      } else if (selectedItem === 'FlutterWave') {
        endpoint = 'flutterwave';
      } else if(selectedItem === 'Nomba (Amuch) Payment Gateway'){
        endpoint = 'nomba';
      }else {
        toast.error('Invalid payment method selected');
        return;
      }

      const courseUids = cartItems.map(item => item.uid);

      const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}payment/${endpoint}/initialize`,
        {
          courseUids,
          paymentMethod: endpoint,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log('Payment Response', response.data)

      paymentUrl = response.data?.data?.url;


      if (paymentUrl) {
        window.location.href = paymentUrl;
      } else {
        toast.error('No payment URL returned from the server');
      }
    } catch (error) {
      console.error('Payment Error:', error);
      toast.error(error.response?.data?.message || 'Payment initialization failed');
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className='w-full flex flex-col justify-start items-start gap-4'>
      {
        isLoading && <Loader />
      }
        <div className='w-full flex flex-col justify-center items-center gap-5'>
          {
            channels.map((channel) => (
              <div onClick={() => setSelectedChannel(channel.name)} key={channel.id} className={`${selectedChannel === channel.name ? 'border border-main' : 'border border-gray'} rounded-[5px] w-full px-3 transition-all py-5 flex justify-between items-center cursor-pointer`}>
                <p className='text-md font-bold text-black'>{channel.description}</p>
                <img width={130} height={130} className='object-contain' src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${channel.logo}`} alt={channel.name} />
              </div>
            ))
          }
        </div>

        <div className='w-full flex justify-end items-end'>  
          <button
            disabled={!selectedChannel}
            onClick={handlePayment}
            className="bg-main text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition"
          >
            Proceed to Pay with {selectedChannel || "..." }
          </button>
        </div>
    </section>
  )
}

export default PaymentChannel