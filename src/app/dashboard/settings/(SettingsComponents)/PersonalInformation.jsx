import React from "react";

const PersonalInformation = () => {
  return (
    <div className="bg-white w-full lg:w-[1023px] lg:h-[780px] px-[10px] lg:px-[25px] py-[50px] pb-[100px] flex flex-col justify-between items-start gap-8">
      <h1 className="font-semibold leading-9 text-[1.5rem] text-black px-[30px] pt-[20px]">
        Personal Information
      </h1>
      <form
        className="px-[10px] lg:px-[30px] pt-[20px] flex flex-col justify-start w-full items-start gap-10"
        action=""
      >
        <div className="w-full flex flex-col justify-start items-start gap-[4em]">
          <div className="flex flex-col lg:flex-row justify-between w-full items-start gap-[3.5em]">
            <div className="w-full flex flex-col justify-center items-start">
              <label
                className="text-[#655D59] text-[1.125rem] font-medium leading-[46px]"
                htmlFor="Full Name"
              >
                Full Name
              </label>
              <input
                type="text"
                name=""
                id=""
                className="bg-[#F0F0F0] h-[56px] w-full lg:w-[435px]"
              />
            </div>
            <div className="w-full flex flex-col justify-center items-start">
              <label
                className="text-[#655D59] text-[1.125rem] font-medium leading-[46px]"
                htmlFor="Email address"
              >
                Email address
              </label>
              <input
                type="text"
                name=""
                id=""
                className="bg-[#F0F0F0] h-[56px] w-full lg:w-[435px]"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between w-full items-start gap-[3.5em]">
            <div className="w-full flex flex-col justify-center items-start">
              <label
                className="text-[#655D59] text-[1.125rem] font-medium leading-[46px]"
                htmlFor="Full Name"
              >
                Mobiel number
              </label>
              <input
                type="text"
                name=""
                id=""
                className="bg-[#F0F0F0] h-[56px] w-full lg:w-[435px]"
              />
            </div>
            <div className="w-full flex flex-col justify-center items-start">
              <label
                className="text-[#655D59] text-[1.125rem] font-medium leading-[46px]"
                htmlFor="Country"
              >
                Country
              </label>
              <input
                type="text"
                name=""
                id=""
                className="bg-[#F0F0F0] h-[56px] w-full lg:w-[435px]"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between w-full items-start gap-[3.5em]">
            <div className="w-full flex flex-col justify-center items-start">
              <label
                className="text-[#655D59] text-[1.125rem] font-medium leading-[46px]"
                htmlFor="Time zone"
              >
                Time zone
              </label>
              <input
                type="text"
                name=""
                id=""
                className="bg-[#F0F0F0] h-[56px] w-full lg:w-[435px]"
              />
            </div>
          </div>
        </div>
        <button
          className="w-[150px] h-[41px] border border-main text-main text-[.875rem] font-medium leading-[21px] flex justify-center items-center"
          type="submit"
        >
          Save
        </button>
      </form>
      <div className="w-full bg-main h-[1px]"></div>
    </div>
  );
};

export default PersonalInformation;
