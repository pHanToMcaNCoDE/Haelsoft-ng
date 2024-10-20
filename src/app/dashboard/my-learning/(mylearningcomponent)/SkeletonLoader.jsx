import { Skeleton } from '@nextui-org/react';
import React from 'react'

const SkeletonLoader = () => {
  return (
    <>
      <div className="max-w-[1250px]  2xl:max-w-[1500px] mx-auto w-full min-h-full py-[30px] flex flex-col justify-center items-start px-3">
      <p className="text-3xl text-start w-full font-semibold" >My Courses</p>
        <div className="flex flex-col justify-center gap-3 mt-10 items-start w-full justify-items-center">
          {[...Array(25)].map((_, index) => {
            return (
              <div
                key={index}
                className="bg-white cursor-pointer flex-col flex w-full rounded-[15px] p-2">
                <Skeleton className=" h-[143px] rounded-[15px] w-full"></Skeleton>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default SkeletonLoader