import Image from "next/image";
import React from "react";
import fbk from "../../../../asset/settings/Social Facebook.svg";
import gle from "../../../../asset/settings/Google flat color icons.svg";
import apl from "../../../../asset/settings/EdTech Platform.svg";

const LinkedAccounts = () => {
  return (
    <div className="bg-white w-full lg:w-[1023px] lg:h-[1212px] px-[10px] lg:px-[25px] py-[50px] pb-[100px] flex flex-col justify-start items-start gap-8">
      <h1 className="font-semibold leading-9 text-[1.5rem] px-[15px] lg:px-[30px] pt-[20px] text-black">
        Linked Accounts
      </h1>
      <div className="w-full">
        <div className="flex flex-col justify-between items-start">
            <div className="w-full px-[15px] lg:px-[30px] pt-[20px] pb-[80px] flex flex-col justify-start items-start gap-4">
                <div className="flex justify-start items-center gap-5">
                    <Image
                    width={30}
                    height={30}
                    className="object-cover"
                    src={fbk}
                    alt="Facebook Icon"
                    />
                    <p>Facebook</p>
                </div>
                <button
                className="w-[250px] text-white h-[41px] bg-[#FF8C53] rounded border border-[#FF8C53] text-[.875rem] font-medium leading-[21px] flex justify-center items-center"
                type="submit"
                >
                    Link my Facebook account
                </button>
            </div>
            <div className="w-full lg:w-[980px] h-[1px] bg-[#FF8C53]"></div>
        </div>
        <div className="w-full flex flex-col justify-between items-start">
            <div className="w-full px-[15px] lg:px-[30px] pt-[20px] pb-[80px] flex flex-col justify-start items-start gap-4">
                <div className="flex justify-start items-center gap-5">
                    <Image
                    width={30}
                    height={30}
                    className="object-cover"
                    src={gle}
                    alt="Google Icon"
                    />
                    <p>Google</p>
                </div>
                <button
                className="w-[250px] text-white h-[41px] bg-[#FF8C53] rounded border border-[#FF8C53] text-[.875rem] font-medium leading-[21px] flex justify-center items-center"
                type="submit"
                >
                    Link my Google account
                </button>
            </div>
            <div className="w-full lg:w-[980px] h-[1px] bg-[#FF8C53]"></div>
        </div>
        <div className="w-full flex flex-col justify-between items-start">
            <div className="w-full px-[15px] lg:px-[30px] pt-[20px] pb-[80px] flex flex-col justify-start items-start gap-4">
                <div className="flex justify-start items-center gap-5">
                    <Image
                    width={30}
                    height={30}
                    className="object-cover"
                    src={apl}
                    alt="Apple Icon"
                    />
                    <p>Apple</p>
                </div>
                <button
                className="w-[250px] text-white h-[41px] bg-[#FF8C53] rounded border border-[#FF8C53] text-[.875rem] font-medium leading-[21px] flex justify-center items-center"
                type="submit"
                >
                    Link my Apple account
                </button>
            </div>
            <div className="w-full lg:w-[980px] h-[1px] bg-[#FF8C53]"></div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-start items-start gap-4 px-[15px] lg:px-[30px] pt-[20px]">
        <h1 className="font-semibold leading-9 text-[1.5rem] text-black">
          Delete Account
        </h1>
        <p className="font-normal leading-6 text-[1rem] text-black w-full lg:w-[664px]">
          If you delete your account all your data will be wiped from Ed-tech,
          including course activity and certificates. This action cannot be
          reversed.
        </p>
        <button
          className="w-[150px] text-[#7F7571] h-[41px] rounded border border-[#FF8C53] text-[.875rem] font-medium leading-[21px] flex justify-center items-center"
          type="submit"
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default LinkedAccounts;
