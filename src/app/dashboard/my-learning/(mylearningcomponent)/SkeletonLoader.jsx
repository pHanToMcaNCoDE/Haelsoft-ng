import { Skeleton } from '@nextui-org/react';
import React from 'react'

const SkeletonLoader = () => {
  return (
    <>
      <div className="max-w-[1250px]  2xl:max-w-[1500px] mx-auto w-full min-h-full py-[30px] flex flex-col justify-center items-start px-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3 place-items-center w-full justify-items-center">
          {[...Array(25)].map((_, index) => {
            return (
              <div
                key={index}
                className="cursor-pointer flex-col flex w-full rounded-[15px] p-2">
                <Skeleton className=" h-[343px] rounded-[15px] w-full"></Skeleton>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default SkeletonLoader