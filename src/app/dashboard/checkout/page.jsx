'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import PaymentChannel from './(components)/PaymentChannel'
import secureLocalStorage from 'react-secure-storage'
import axios from 'axios'
import Loader from '@/components/Loader'
import { ScaleLoader } from 'react-spinners'
import CheckOut from './(components)/CheckOut'
import { toast } from 'react-toastify'
import { Rating } from '@smastrom/react-rating'

const page = () => {
    const [current, setCurrent] = useState("Payment Channel");
    const[channels, setChannels] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const [cartItems, setCartItems] = useState([]);

    const [selectedChannel, setSelectedChannel] = useState(null);

    console.log('Selected channel', selectedChannel)

    const token = secureLocalStorage.getItem("token");

    useEffect(() => {
        setIsLoading(true);
        const fetchPaymentChannel = () => {
            axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}payment/channels`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })

            .then((response) => {
                setChannels(response.data.data)
                console.log('Payment Response', response.data)
            })

            .catch((error) => console.log('Channel Error', error))

            .finally(() => setIsLoading(false))
        }

        if(token) fetchPaymentChannel()

    }, [token])



    useEffect(() => {
        setLoading(true);

        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}cart`, {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
        })
        .then((response) => {
        setLoading(false)
        // toast.success(response.data.message)
        setCartItems(response.data.data);
        })
        .catch((error) => {
        toast.error(error.response?.data?.message || error.response?.message )
        setLoading(false)
        })
    }, [token])


    const handlePayment = async () => {
        try{
        let endpoint = ''
        let paymentUrl = ''

        setIsLoading(true)

        if(selectedChannel === 'PayStack Payment GateWay'){
            endpoint = 'paystack';
        } else if (selectedChannel === 'FlutterWave') {
            endpoint = 'flutterwave';
        } else if(selectedChannel === 'Nomba (Amuch) Payment Gateway'){
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
        


    const renderContent = () => {
        switch (current) {
            case 'Payment Channel':
            return (
                <PaymentChannel
                    channels={channels}
                    setSelectedChannel={setSelectedChannel}
                    selectedChannel={selectedChannel}
                    cartItems={cartItems}
                />
            );
            case 'Bank Transfer':
            return (
                <CheckOut/>
            );
            case 'Card Payment':
            return <div>Card Payment component here</div>;
            default:
            return <p>No view selected</p>;
        }
    };

  return (
    <main className='w-full flex flex-col lg:flex-row justify-center items-center gap-8 min-h-screen'>
        {
            isLoading && <Loader />
        }

        {/* Components */}
        <div className='w-full lg:w-[50%] min-h-screen px-3 py-[50px] flex flex-col justify-center items-start gap-10'>
            <div className='w-full flex flex-col justify-start items-start gap-1'>
                <p className='font-bold text-black text-xl md:text-2xl'>{current}</p>
                <h1 className='font-normal bold text-md text-grayTwo'>Choose a payment channel</h1>
            </div>

            {
                isLoading ? (
                    <div className='w-full flex justify-center items-center'>
                        <ScaleLoader color='#c75c27'/>
                    </div>
                ) : (
                    renderContent()
                )
            }
        </div>


        {/* Amount */}
        
        <div className='w-full lg:w-[50%] min-h-screen bg-[#F2F2F2]flex flex-col justify-center items-center gap-8 border-t lg:border-l border-gray px-5 py-[50px]'>
            <div className='w-full flex flex-col justify-center gap-10 lg:gap-[60px]'>
                <div className='w-ful flex flex-col gap-2'>
                    <h1 className='font-bold text-black text-xl md:text-2xl'>Order Summary</h1>
                    <div className='w-full flex flex-col sm:flex-row justify-between items-center gap-1'>
                        <p className='text-grayTwo font-semibold text-md'>Order details</p>
                        <p className='text-grayTwo font-normal text-md'>Price</p>
                    </div>
                </div>
                {
                    loading ? (
                        <div className='w-full flex justify-center items-center'>
                            <ScaleLoader color='#c75c27'/>
                        </div>
                    ) : (
                        <div className='max-h-[500px] overflow-auto w-full'>
                            <div className="w-full flex flex-col gap-10 justify-start items-start">
                            {cartItems.map((item) => (
                                <div
                                key={item.course_uid || item.uid}
                                className="flex flex-col md:flex-row justify-center items-center gap-3 w-full"
                                >
                                    <div className="flex flex-col md:flex-row justify-between items-center w-full">
                                        <div className="flex flex-col md:flex-row items-start justify-between gap-8 w-full">
                                            <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item.course?.cover_image}`} width={150} height={300} alt={item.course?.title} />
                                        <div className="flex flex-col gap-2 w-full">
                                            <h1 className="text-grayTwo text-[1.125rem] leading-[35px] font-semibold">
                                            {item.course?.title}
                                            </h1>
                                            <div className="flex flex-col justify-center items-start gap-1">
                                            
                                            </div>
                                        </div>
                                        <div className="flex justify-start items-center gap-6">
                                            <p className="text-grayTwo text-[.875rem] leading-[46px] font-semibold">
                                            ₦{(item.course?.price || 0).toLocaleString()}
                                            </p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="w-full h-[.75px] rounded-full bg-neutral-200 mb-3"></div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className='w-full flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center gap-4'>
                <h1 className='font-semibold text-md text-black'>Total <span className='font-normal'>({cartItems.length} Course(s)):</span></h1>
                <div className='text-left md:text-right text-grayTwo flex flex-col gap-3'>
                    <h2 className='text-lg font-semibold'>
                        ₦{cartItems.reduce((total, item) => total + (Number(item.course?.price) || 0), 0).toLocaleString()}
                    </h2>
                </div>
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
        </div>
    </main>
  )
}

export default page