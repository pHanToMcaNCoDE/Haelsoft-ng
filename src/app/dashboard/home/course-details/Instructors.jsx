import Image from 'next/image';
import React from 'react';
import img from '../../../../asset/course-details/Brunette Woman Curly Hair.svg';

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
        <section className='w-full py-[100px] bg-white md:px-0'>
            <div className='text-center max-w-[1260px] mx-auto px-3 md:px-0'>
                <h1 className='text-[1.5rem] text-[#F36400] font-semibold leading-[43px]'>
                    {courses.course_title} Instructors
                </h1>
                <p className='text-base font-semibold text-[#655D59] leading-[43px]'>
                    {courses.instructors?.description}
                </p>
            </div>
            <div className='overflow-hidden'>
                <div className="mt-[10em] scroll w-full overflow-x-auto flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[2.625rem] sm:pl-[3.625rem] md:pl-[5.625rem] box-border gap-[1rem] min-w-full text-white lg:pl-[7rem] lg:box-border">
                    {profiles.map((profile, index) => (
                        <div key={index} className='border-[3px] border-[#F0F0F0] w-[324px] h-[352px] bg-white flex-shrink-0'>
                            <Image 
                                className='object-cover' 
                                width={320} 
                                height={316} 
                                src={profile.image} 
                                alt={`Profile picture of ${profile.name}`}
                            />
                            <div className='px-3 py-4'>
                                <h1 className='text-[#201A18] text-[1.5rem] font-semibold leading-[43px]'>
                                    {profile.name}
                                </h1>
                                <p className='text-[#201A18] text-[1.125rem] font-normal leading-[43px]'>
                                    {profile.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Instructors;
