import React from "react";

const Password = () => {
  return (
    <div className="bg-white w-full lg:w-[1023px] lg:h-[1288px] px-[10px] lg:px-[25px] py-[50px] pb-[100px] flex flex-col justify-between items-start gap-8">
      <h1 className="px-[15px] lg:px-[30px] pt-[20px] font-semibold leading-9 text-[1.5rem] text-black">
        Password
      </h1>
      <form
        className="w-full px-[15px] lg:px-[30px] flex flex-col justify-start items-start gap-10"
        action=""
      >
        <div className="flex flex-col lg:flex-row justify-between w-full items-start gap-10">
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
              className="bg-[#F0F0F0] h-[56px] w-full lg:w-[276px]"
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
              className="bg-[#F0F0F0] h-[56px] w-full lg:w-[276px]"
            />
          </div>
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
              className="bg-[#F0F0F0] h-[56px] w-full lg:w-[276px]"
            />
          </div>
        </div>
        <button
          className="w-[150px] h-[41px] bg-[#FF8C53] rounded text-white border border-[#FF8C53] text-[.875rem] font-medium leading-[21px] flex justify-center items-center"
          type="submit"
        >
          Save
        </button>
      </form>
      <form
        className="px-[15px] lg:px-[30px] flex flex-col justify-between w-full items-start gap-[4em]"
        action=""
      >
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
              className="bg-[#F0F0F0] h-[56px] w-full lg:w-[275px]"
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
              className="bg-[#F0F0F0] h-[56px] w-full lg:w-[275px]"
            />
          </div>
        </div>
        <button
          className="w-[150px] h-[41px] bg-[#FF8C53] rounded text-white border border-[#FF8C53] text-[.875rem] font-medium leading-[21px] flex justify-center items-center"
          type="submit"
        >
          Change Email
        </button>
      </form>
      <div className="w-full bg-main h-[1px]"></div>
      <div className="w-full px-[15px] lg:px-[30px] pt-[20px] flex flex-col justify-start items-start gap-[4em]">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h1 className="font-semibold leading-9 text-[1.5rem] text-black">
            Connected devices
          </h1>
          <p className="font-normal leading-6 text-[1rem] text-black w-full lg:w-[673px]">
            This requires users to have two different means of confirming their
            identity before granting user access. Thereby, protecting data and
            accounts from hackers and identity thieves.
          </p>
          <button
          className="w-[184px] text-[#7F7571] h-[41px] rounded border border-[#FF8C53] text-[.875rem] font-medium leading-[21px] flex justify-center items-center"
          type="submit"
          >
            Log out from devices
          </button>
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-4">
            <h1 className="font-semibold leading-9 text-[1.5rem] text-black">
                Two Factor Authentication
            </h1>
            <p className="font-normal leading-6 text-[1rem] text-black w-full lg:w-[673px]">
                This requires users to have two different means of confirming their
                identity before granting user access. Thereby, protecting data and
                accounts from hackers and identity thieves.
            </p>
            <button
            className="w-[150px] text-[#7F7571] h-[41px] rounded border border-[#FF8C53] text-[.875rem] font-medium leading-[21px] flex justify-center items-center"
            type="submit"
            >
            Enable
            </button>
        </div>
      </div>
    </div>
  );
};

export default Password;
