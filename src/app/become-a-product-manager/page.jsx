'use client'

import Navbar from '@/components/LandingPageComponents/Navbar';
import React, { useRef, useState } from 'react'
import img from '../../../public/EdTech Platform Vector 13.svg';
import Image from 'next/image';
import GetStarted from '@/components/LandingPageComponents/GetStarted';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import Link from 'next/link';

const page = () => {
    const [clicked, setClicked] = useState('');
    const [boolclick, setBoolClick] = useState(false);

    let consultRef = useRef(null);

    const scrollToConsult = () => {
        if(consultRef.current){
          consultRef.current.scrollIntoView({behavior: 'smooth'})
        }
      }
  

  return (
    <main className='relative w-full'>
        <Navbar 
            clicked={clicked} 
            setClicked={setClicked} 
            boolclick={boolclick} 
            setBoolClick={setBoolClick} 
        />
        <section ref={consultRef} className='w-full overflow-hidden min-h-screen'>
            <Image width={1440} height={830} className='object-cover w-full absolute z-[5px] h-screen xl:h-auto' src={img} alt='Background Image'></Image>
            <div className='pt-[200px] px-6 xl:px-0 flex flex-col lg:flex-row justify-end items-start gap-10 max-w-[1250px] mx-auto'>
                <div className='flex flex-col justify-center items-start gap-2 relative z-10 w-full xl:w-[50%]'>
                    <h1 className='w-full xl:w-[605px] font-bold leading-[55px] text-[2.75rem] text-white'>
                        Become a Product Manager with Haelsoft EdTech
                    </h1>
                    <p className='w-full xl:w-[605px] text-[#FFFFFF] leading-[30px] font-normal text-base'>
                        Master the skills to lead product innovation and drive business success!
                    </p>
                </div>
                <GetStarted/>
            </div>
        </section>

        <section className='py-[100px] max-w-[1200px] mx-auto px-6 xl:px-0 flex flex-col justify-center items-center gap-10'>
           <div className='w-full xl:w-[838px] flex flex-col justify-center items-start gap-10'>
                <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                    Product Management sits at the intersection of business, technology, and customer experience, making it a dynamic and highly rewarding career:
                </p>
                <ul className='list-disc ml-6 text-[#655D59] text-base font-normal leading-[30px]'>
                    <li>High Demand: Businesses need skilled product managers to launch successful products.</li>
                    <li>Leadership Opportunities: Own the vision, strategy, and execution of impactful products.</li>
                    <li>Competitive Salaries: Enjoy attractive compensation with room for growth.</li>
                    <li>Diverse Career Paths: Work across industries like tech, healthcare, finance, and more.</li>
                </ul>
                <div className='flex flex-col justify-center items-start gap-2'>
                    <h2 className='text-[#201A18] text-base leading-[30px] font-normal'>Why Learn Product Management with Haelsoft EdTech?</h2>
                    <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                        Haelsoft EdTech equips you with the expertise and real-world knowledge to excel as a product manager.
                    </p>
                </div>
           </div>

           <div className='flex flex-col justify-center items-start gap-10 w-full xl:w-[838px]'>
                <div className='flex flex-col justify-center items-start gap-2'>
                    <h2 className='text-[#201A18] text-base leading-[30px] font-normal uppercase'>Why Learn Product Management with Haelsoft EdTech?</h2>
                    <div className='flex flex-col justify-center items-start gap-2'>
                        <h1 className='text-[#201A18] leading-[34.13px] text-[1.75rem] font-bold'>Comprehensive Curriculum</h1>
                        <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
                    </div>
                    <div className='flex flex-col justify-center items-start gap-2'>
                        <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                            Gain mastery in product development, strategy, and stakeholder management.
                        </p>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-start gap-2'>
                    <h2 className='text-[#201A18] text-base leading-[30px] font-normal uppercase'>Step 1</h2>
                    <div className='flex flex-col justify-center items-start gap-2'>
                        <h1 className='text-[#201A18] leading-[34.13px] text-[1.75rem] font-bold'>Project-Based Learning</h1>
                        <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
                    </div>
                    <div className='flex flex-col justify-center items-start gap-2'>
                        <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                            Build a portfolio of case studies and projects that showcase your decision-making and strategic thinking.
                        </p>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-start gap-2'>
                    <h2 className='text-[#201A18] text-base leading-[30px] font-normal uppercase'>Step 2</h2>
                    <div className='flex flex-col justify-center items-start gap-2'>
                        <h1 className='text-[#201A18] leading-[34.13px] text-[1.75rem] font-bold'>Experienced Instructors</h1>
                        <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
                    </div>
                    <div className='flex flex-col justify-center items-start gap-2'>
                        <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                            Learn from seasoned product managers with years of hands-on industry experience.
                        </p>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-start gap-2'>
                    <h2 className='text-[#201A18] text-base leading-[30px] font-normal uppercase'>Step 3</h2>
                    <div className='flex flex-col justify-center items-start gap-2'>
                        <h1 className='text-[#201A18] leading-[34.13px] text-[1.75rem] font-bold'>Flexible and Accessible Learning</h1>
                        <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
                    </div>
                    <div className='flex flex-col justify-center items-start gap-7'>
                        <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                            Study at your own pace with 24/7 access to our online platform and optional live sessions.
                        </p>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-start gap-2'>
                    <h2 className='text-[#201A18] text-base leading-[30px] font-normal uppercase'>Step 4</h2>
                    <div className='flex flex-col justify-center items-start gap-2'>
                        <h1 className='text-[#201A18] leading-[34.13px] text-[1.75rem] font-bold'>Career Growth Support</h1>
                        <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
                    </div>
                    <div className='flex flex-col justify-center items-start gap-7'>
                        <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                            Receive resume reviews, mentorship, and interview coaching to land your dream role.
                        </p>
                    </div>
                </div>
            </div>

            <div className='w-full xl:w-[977px] flex flex-col justify-center items-start gap-10 pt-[200px]'>
                    <div className='flex flex-col justify-center items-start gap-3'>
                        <h1 className='text-[#201A18] leading-[34.13px] text-[1.75rem] font-bold'>What You&apos;ll Learn</h1>
                        <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
                    </div>
                    
                    <div className='flex flex-col justify-center items-start gap-2 w-full xl:w-[977px] mx-auto'>
                        <p className='text-[#655D59] text-base font-normal leading-[30px]'>
                            Our program is designed to provide practical, job-ready skills:
                        </p>
                        <ul className='list-disc ml-6 text-[#655D59] text-base font-normal leading-[30px]'>
                            <li>Product Roadmaps: Learn to define and communicate product visions and goals.</li>
                            <li>Market Research: Identify opportunities and understand user needs.</li>
                            <li>Agile Methodologies: Master frameworks like Scrum and Kanban for efficient product development.</li>
                            <li>Stakeholder Management: Collaborate with cross-functional teams and align interests.</li>
                            <li>User-Centered Design: Use UX principles to deliver products that users love.</li>
                            <li>Metrics & Analytics: Measure product success with KPIs and data-driven insights.</li>
                            <li>Go-to-Market Strategies: Develop launch plans to ensure product success.</li>
                        </ul>
                    </div>
            </div>

            <div className='w-full xl:w-[977px] flex flex-col justify-center items-start gap-10 pt-[100px]'>
                <div className='flex flex-col justify-center items-start gap-3'>
                    <h1 className='text-[#201A18] leading-[34.13px] text-[1.75rem] font-bold'>Who Should Enroll?</h1>
                    <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
                </div>
                <ul className='list-disc ml-6 text-[#655D59] text-base font-normal leading-[30px]'>
                    <li>Aspiring product managers looking to break into the field.</li>
                    <li>Professionals in tech, marketing, or design aiming to transition to product management.</li>
                    <li>Entrepreneurs building and managing their own products.</li>
                    <li>Current product managers seeking to refine their skills.</li>
                </ul>
            </div>

            {/* <div className='pt-[100px] w-full xl:w-[838px] flex flex-col justify-center items-start gap-7'>
                <h2 className='text-[#201A18] text-base font-normal leading-[30px]'>
                    Program Details:
                </h2>
                <div className='flex flex-col justify-center items-start gap-4'>
                    <ul className='list-disc ml-6 text-[#655D59] text-base font-normal leading-[30px]'>
                        <li>Duration: 3-6 months (self-paced)</li>
                        <li>Format: 100% Online with live mentoring sessions available</li>
                        <li>Investment: Flexible payment options to fit your budget</li>
                    </ul>
                </div>
            </div> */}

        </section>


        <div className='flex flex-col justify-between items-center gap-10 max-w-[1250px] mx-auto pb-[80px] px-6 xl:px-0'>
            <div className='bg-[#FF8C53] w-full xl:w-[1242px] mx-auto border-[2px] border-[#FF8C53] h-[1px] rounded'></div>
            <div className='w-full flex flex-col md:flex-row justify-between items-center pt-[10px]'>
                <div className='flex flex-col justify-center items-start gap-2'>
                    <Link href={`/become-a-data-scientist`} className='text-[#201A18] leading-[30px] font-normal text-[.75rem] flex justify-center items-center gap-2'>
                        <FaArrowLeft />
                        Previous
                    </Link>
                    <p className='text-[#F36400] leading-[30px] font-semibold text-[.875rem]'>Become a Data Scientist</p>
                </div>
                <div className='flex flex-col justify-center items-start gap-2'>
                    <Link href={`/become-a-digital-marketer`} className='text-[#201A18] leading-[30px] font-normal text-[.75rem] flex justify-center items-center gap-2'>
                        Next
                        <FaArrowRight />
                    </Link>
                    <p className='text-[#F36400] leading-[30px] font-semibold text-[.875rem]'>Become a Digital Marketer</p>
                </div>
            </div>
        </div>

        <section className='w-full bg-[#E1884A] py-[100px] px-6 xl:px-0 xl:h-[624px]'>
            <div className='max-w-[1250px] mx-auto flex flex-col justify-center items-center gap-20'>
                <div className='w-full xl:w-[514px] flex flex-col justify-center items-center gap-20'>
                    <div className='text-center w-full xl:w-[514px] flex flex-col justify-center items-center gap-3'>
                        <h2 className='text-white text-[1rem] leading-[30px] font-normal uppercase'>get started</h2>
                        <div className='flex flex-col justify-center items-center gap-4'>
                            <h1 className='text-white leading-[34.13px] lg:leading-[55.5px] text-[1.75rem] lg:text-[2.5rem] font-bold'>Kickstart your Software Engineer Career</h1>
                            <div className='bg-[#F1C118] rounded w-[56px] h-[4px]'></div>
                        </div>
                        <p className='text-white text-[1rem] lg:text-[1.125rem] leading-[30px] font-normal'>
                            Product management is your pathway to leadership and innovation. Start your journey with Haelsoft EdTech and unlock opportunities to shape the future of products and technology.              
                        </p>
                    </div>

                    <button onClick={scrollToConsult} className='bg-[#F36400] w-[221px] h-[50px] text-white leading-[30px] text-[.875rem] font-semibold gap-[10px] p-[10px] rounded border border-[#FF8C53]'>Request a Consultation</button>
                </div>
            </div>
        </section>
    </main>
  )
}

export default page;
