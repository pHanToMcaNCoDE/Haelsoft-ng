'use client'

import axios from 'axios';
import React, { useState } from 'react';
import { Bounce, toast } from 'react-toastify';

const GetStarted = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [errors, setErrors] = useState({
        fullName: '',
        email: '',
        phone: ''
    });
    const [loading, setLoading] = useState(false);

    const validateEmail = (email) => {
        const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
        return email.length <= 254 && emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^(?:\+234|0)\d{10}$/;
        return phone.length <= 15 && phoneRegex.test(phone);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let errorMessages = {};

        if (!fullName) {
            errorMessages.fullName = 'Name is required.';
        } else if (fullName.length > 255) {
            errorMessages.fullName = 'Name must be less than 255 characters!';
        }

        if (!validateEmail(email)) {
            errorMessages.email = 'Enter a valid email address (max 254 characters)!';
        }

        if (!validatePhone(phone)) {
            errorMessages.phone = 'Enter a valid phone number (max 15 digits)!';
        }

        if (Object.keys(errorMessages).length > 0) {
            setErrors(errorMessages);
            toast.error('Please correct the errors before submitting!', {
                transition: Bounce
            });
            return;
        }

        setErrors({ fullName: '', email: '', phone: '' });
        setLoading(true);

        axios.post(`https://edtech-backend-q2ud.onrender.com/consult/consult/`, {
            name: fullName,
            email: email,
            phone_number: phone
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            toast.success('Request Successful!', {
                transition: Bounce
            });
            setFullName('');
            setEmail('');
            setPhone('');
        })
        .catch(err => {
            toast.error('Error making request!', {
                transition: Bounce
            });
        })
        .finally(() => {
            setLoading(false);
        });
    };

    return (
        <section className='w-full min-h-screen bg-[#F36400]'>
            <div className='max-w-[1250px] mx-auto px-5 py-[100px] flex flex-col md:flex-row justify-between items-center gap-10 md:gap-4'>
                <div className='w-full md:w-[40%] xl:w-[50%] md:h-[663px] flex flex-col gap-6'>
                    <h1 className='text-[1.75rem] text-white leading-[43px] font-semibold text-center md:text-left'>
                        Ready to Get Started?
                    </h1>
                    <p className='w-full xl:w-[523px] text-white font-normal leading-[43px] text-center md:text-left text-[1.3rem]'>
                        We&apos;re excited to help you take the next step in your learning journey. Our team is here to support you and answer any questions you might have.
                    </p>
                </div>
                <div className='w-full flex justify-center items-center md:w-[60%] xl:w-[50%]'>
                    <form onSubmit={handleSubmit} className='bg-[#FBFBFB] flex flex-col justify-center items-center rounded w-full relative lg:w-[626px] h-[660px] gap-4 p-[20px] md:p-[25px] lg:p-[50px]'>
                        <div className='bg-[#F36400] absolute top-3 left-0 w-full lg:w-[625px] rounded-lg h-[6px]'></div>
                        <h1 className='leading-[43px] text-[#F36400] font-semibold text-[1.75rem] text-center xl:text-left w-full'>
                            Book a Consultation for Free
                        </h1>
                        <p className='text-[#655D59] font-normal text-[1rem] leading-[24px] w-full xl:w-[297px] text-center xl:text-left'>
                            Kindly fill in the form to get started.
                        </p>
                        <div className='bg-[#F0F0F0B2] h-[463px] w-full lg:w-[564px] flex flex-col justify-center items-center gap-[4em] p-6'>
                            <div className='flex flex-col justify-center items-start gap-10 w-full'>
                                <input 
                                    onChange={(e) => setFullName(e.target.value)} 
                                    value={fullName} 
                                    className={`w-full lg:w-[482px] h-[48px] rounded py-[15px] px-[20px] gap-[10px] bg-white placeholder:text-[#655D5980] placeholder:text-[.75rem] font-normal text-base outline-none ${errors.fullName ? 'border-red-700' : 'border-none'}`} 
                                    type="text" 
                                    placeholder='Name'
                                />
                                {errors.fullName && <span className="text-red-500 text-sm">{errors.fullName}</span>}

                                <input 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    value={email} 
                                    className={`w-full lg:w-[482px] h-[48px] rounded py-[15px] px-[20px] gap-[10px] bg-white placeholder:text-[#655D5980] placeholder:text-[.75rem] font-normal text-base outline-none ${errors.email ? 'border-red-700' : 'border-none'}`} 
                                    type="text" 
                                    placeholder='Email Address'
                                />
                                {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}

                                <input 
                                    onChange={(e) => setPhone(e.target.value)} 
                                    value={phone} 
                                    className={`w-full lg:w-[482px] h-[48px] rounded py-[15px] px-[20px] gap-[10px] bg-white placeholder:text-[#655D5980] placeholder:text-[.75rem] font-normal text-base outline-none ${errors.phone ? 'border-red-700' : 'border-none'}`} 
                                    type="text" 
                                    placeholder='Phone Number'
                                />
                                {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
                            </div>
                            <button 
                                className='bg-[#F36400] gap-[10px] p-[10px] w-full md:w-[298px] rounded flex justify-center items-center h-[58px] text-white' 
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? (
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.97 7.97 0 014 12H0c0 2.49.947 4.746 2.493 6.444l1.507-1.153z"></path>
                                    </svg>
                                ) : (
                                    'Request Consultation'
                                )}
                            </button>
                        </div>
                        <div className='bg-[#F36400] absolute bottom-3 left-0 w-full lg:w-[625px] rounded-lg h-[6px]'></div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default GetStarted;