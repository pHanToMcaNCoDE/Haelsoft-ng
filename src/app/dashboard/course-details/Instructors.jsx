import Image from 'next/image';
import React from 'react';
import img from '../../../asset/course-details/Brunette Woman Curly Hair.svg';

const Instructors = ({ courses }) => {
    const profiles = [
        { name: 'Janet Jackson', title: 'Instructor at Haelsoft', image: img },
        { name: 'John Doe', title: 'Developer at TechCorp', image: img },
        { name: 'Jane Smith', title: 'Designer at Creatives', image: img },
        { name: 'Mike Johnson', title: 'Manager at Solutions', image: img },
        { name: 'Mika Jay', title: 'Manager at Solutions', image: img },
        { name: 'Lala Lala', title: 'Manager at Solutions', image: img },
    ];

    return (
        <section className='w-full py-[100px] bg-white px-4 xl:px-0 flex flex-col justify-center items-center gap-8'>
            <div className='max-w-[1250px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-10'>
                {/* <div className="mt-[10em] scroll w-full overflow-x-auto flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[2.625rem] sm:pl-[3.625rem] md:pl-[5.625rem] box-border gap-[1rem] min-w-full text-white lg:pl-[7rem] lg:box-border"> */}
                    {/* {profiles.map((profile, index) => ( */}
                        <div className='w-full lg:w-[50%] flex flex-col justify-center items-start gap-y-8'>
                            <h1 className='text-[2.25rem] text-[#F36400] font-bold leading-[43px]'>
                                Instructor For This Course
                            </h1>
                            <div className='w-full flex flex-col justify-center items-start gap-3'>
                                <h1 className='text-[#201A18] text-[1.5rem] font-semibold leading-[43px]'>
                                    Janet Jackson
                                </h1>
                                <p className='text-grayTwo text-[1.125rem] font-normal leading-[40px]'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, aliquam expedita nulla labore harum dicta quo ipsa ea, dignissimos dolorum nesciunt corporis inventore tempore ullam perferendis magni molestiae. Qui sequi, iusto velit accusamus ipsam dolore aspernatur repudiandae et recusandae alias itaque est omnis vero non explicabo nihil eligendi, eaque ea! Ipsa incidunt molestiae ut quia necessitatibus, vel suscipit cupiditate earum quos assumenda consequatur modi eveniet a explicabo voluptatum praesentium voluptate. Delectus soluta ducimus inventore, porro perspiciatis ullam a at eum.
                                </p>
                            </div>
                        </div>
                        <Image 
                            className='object-cover w-full rounded lg:w-[50%] h-full' 
                                // width={320} 
                                // height={316} 
                            src={img} 
                                alt={`Profile picture of Jamet Jackson`}
                        />
                    {/* // ))} */}
                </div>
            {/* </div> */}
        </section>
    );
};

export default Instructors;
