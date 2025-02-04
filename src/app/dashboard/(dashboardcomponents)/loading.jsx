import React from "react";
import { Card, Skeleton } from "@nextui-org/react";

const Loading = () => {
  return (
    <>
      <Skeleton className="w-full h-[70vh] lg:h-[50vh] mb-8"/>
      <div className="max-w-[1250px] 2xl:max-w-[1500px] mx-auto w-full min-h-screen py-[10px] px-3">
        {/* <div className="flex text-grayTwo mt-10 text-[18px]">
          Recently Viewed
        </div> */}
        <div className='w-full flex justify-end items-end p-0 mb-[5em]'>
          <Skeleton className="w-full md:w-[269px] h-[68px]"></Skeleton>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4 gap-x-[11px] gap-y-[5em] justify-items-center max-w-[1250px] 2xl:max-w-[1500px] mx-auto">
          {[...Array(40)].map((_, index) => {
            return (
              <div
                key={index}
                className="bg-white cursor-pointer 
            flex-col flex min-h-[430px] w-full max-w-[304px] rounded-[15px] p-2"
              >
                <Skeleton className=" h-[12rem] rounded-[15px] ">
              
                </Skeleton>
                <div className=" flex flex-col items-start flex-auto justify-center gap-3 py-4">
                  <Skeleton className="w-[90%] h-[1rem] rounded-[15px]"></Skeleton>
                  <Skeleton className="w-[75%] h-[1rem] rounded-[15px]"></Skeleton>
                  <Skeleton className="w-[75%] h-[1rem] rounded-[15px]"></Skeleton>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex text-grayTwo mt-10 text-[18px]">
          Most Popular Certificate
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 mt-4 gap-4 gap-y-10 justify-items-start">
          {[1, 2, 3].map((_, index) => {
            return (
              <div
                key={index}
                className="bg-white cursor-pointer 
            flex-col flex min-h-[343px] w-full max-w-[364px]  rounded-[15px] p-2"
              >
                <Skeleton className=" h-[12rem] rounded-[15px] ">
                </Skeleton>
                <div className=" flex flex-col items-start flex-auto justify-between mt-2 py-2">
                  <Skeleton className="w-[90%] h-[2rem] rounded-[15px]"></Skeleton>
                  <Skeleton className="w-[80%] h-[2rem] rounded-[15px]"></Skeleton>
                  <Skeleton className="w-[70%] h-[2rem] rounded-[15px]"></Skeleton>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
    
  );
};

export default Loading;
