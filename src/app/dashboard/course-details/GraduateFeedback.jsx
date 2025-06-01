import React from 'react';
import Image from 'next/image';
import img from '../../../../asset/course-details/Ellipse 28.svg';
import one from '../../../../asset/course-details/Ellipse 28.svg';
import two from '../../../../asset/course-details/Ellipse 27.svg';
import three from '../../../../asset/course-details/EdTech Platform Ellipse 27.svg';
import four from '../../../../asset/course-details/Ellipse 27 (1).svg';

const GraduateFeedback = ({ courses }) => {
    return (
        <section className='bg-[#F36400] min-h-screen'>
            <div className='max-w-[1260px] mx-auto px-3 xl:px-0 flex flex-col justify-center items-center py-[100px]'>
                <h1 className='leading-[43px] font-semibold text-[1.63rem] text-white'>
                    What our Graduates Are Saying
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 place-items-center gap-4 lg:gap-2 py-[100px]'>
                    {courses?.courseReviews?.map((review, index) => {
                        const reviewImg = index === 0 ? img :
                                         index === 1 ? one :
                                         index === 2 ? two :
                                         index === 3 ? three :
                                         index === 4 ? four :
                                         img;

                        return (
                            <div key={index} className={`bg-white rounded h-[517px] p-[1em] ${index === 2 || index === 4 ? 'xl:w-[570px]' : 'xl:w-[620px]'}`}>
                                <div className='flex justify-start items-start my-[1em] gap-5'>
                                    <Image width={80} height={80} className='object-cover' src={reviewImg} alt={review.name} />
                                    <div className='flex flex-col justify-start items-start'>
                                        <h1 className='text-[#201A18] text-[1.5rem] font-semibold leading-[43px]'>{review.name}</h1>
                                        <p className='text-grayTwo text-[1.125rem] font-normal leading-[43px]'>Software Developer-Haelsoft</p>
                                    </div>
                                </div>
                                <p className='h-[258px] font-medium text-[1.125rem] text-grayTwo leading-[43px]'>
                                    {review.review}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default GraduateFeedback;
