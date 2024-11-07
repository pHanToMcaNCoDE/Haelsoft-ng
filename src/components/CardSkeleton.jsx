import React from 'react'
import { Skeleton } from '@nextui-org/react';

const CardSkeleton = () => {
  return (
    <div className='max-w-[1200px] 2xl:max-w-[1500px] mx-auto py-[250px] pb-[100px] px-5 flex flex-col gap-[6em] min-h-screen'>
        <div className="justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-3 gap-y-[4em]">
            {[...Array(8)].map((_, index) => {
                return (
                    <div
                        key={index}
                        className="cursor-pointer flex-col flex gap-5 w-full lg:w-[333px] h-[351px] rounded-[15px] p-2"
                    >
                        <Skeleton className="w-full lg:w-[333px] h-[351px] rounded-[15px] bg-gray-300">
                    
                        </Skeleton>
                        <div className='flex flex-col justify-between items-start gap-4'>
                            <Skeleton className="w-full lg:w-[233px] h-[1rem] rounded-[15px] bg-gray-300"></Skeleton>
                            <Skeleton className="w-full lg:w-[133px] h-[1rem] rounded-[15px] bg-gray-300"></Skeleton>
                            <Skeleton className="w-full lg:w-[33px] h-[1rem] rounded-[15px] bg-gray-300"></Skeleton>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
  )
}

export default CardSkeleton