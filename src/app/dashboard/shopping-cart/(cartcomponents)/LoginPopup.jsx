import Image from "next/image";
import React from "react";
import gle from '../../../../asset/settings/Google flat color icons.svg';
import fbk from '../../../../asset/settings/Social Facebook.svg';
import apl from '../../../../asset/settings/EdTech Platform.svg';

const LoginPopup = ({setIsClicked}) => {
  return (
    <div className="w-full fixed z-50 h-screen top-0 left-0 bg-[#F0F0F0]/70 flex justify-center items-center py-[100px] px-[20px]">
      <div className="bg-white rounded-lg w-full xl:w-[720px] lg:h-[800px] py-[30px] px-[50px] flex flex-col justify-center gap-10 items-start">
        <h1 className="text-[#201A18] font-semibold text-[1.5rem] leading-9">
          Log In into your Edtech account
        </h1>
        <div className="flex flex-col justify-center items-center gap-6 mx-auto">
          <p className="text-grayTwo font-semibold text-[1.125rem]">Continue with</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
            <div className="w-[80px] h-[80px] gap-[10px] border-[2px] border-[#FF8C53] flex justify-center items-center rounded-full cursor-pointer">
                <Image width={48} height={48} className="object-cover" src={gle} alt="Google"></Image>
            </div>
            <div className="w-[80px] h-[80px] gap-[10px] border-[2px] border-[#FF8C53] flex justify-center items-center rounded-full cursor-pointer">
                <Image width={48} height={48} className="object-cover" src={fbk} alt="Facebook"></Image>
            </div>
            <div className="w-[80px] h-[80px] gap-[10px] border-[2px] border-[#FF8C53] flex justify-center items-center rounded-full cursor-pointer">
                <Image width={48} height={48} className="object-cover" src={apl} alt="Apple"></Image>
            </div>
          </div>
        </div>
        <p className="text-center text-main text-[1.125rem] font-semibold leading-[27px] mx-auto">Or</p>
        <form className="w-full flex flex-col gap-8" action="">
          <input
            placeholder="Email"
            className="outline-none placeholder:text-grayTwo placeholder:text-base placeholder:font-medium font-medium placeholder:leading-6 leading-6 text-base w-full lg:w-[610px] py-[28px] px-[33px] border-2 gap-[10px] border-[#F0F0F0] rounded-lg lg:h-[80px] bg-[#F7F7F7]"
            type="text"
            name=""
            id=""
          />
          <input
            placeholder="Password"
            className="outline-none placeholder:text-grayTwo placeholder:text-base placeholder:font-medium font-medium placeholder:leading-6 leading-6 text-base w-full lg:w-[610px] py-[28px] px-[33px] border-2 gap-[10px] border-[#F0F0F0] rounded-lg lg:h-[80px] bg-[#F7F7F7]"
            type="text"
            name=""
            id=""
          />
          <div className="flex justify-between items-center">
            <div className="flex flex-col lg:flex-row justify-center items-start gap-5">
              <input
                className="cursor-pointer outline-none w-[30px] bg-[#F7F7F7] h-[26px] rounded-[3px] border-none"
                type="checkbox"
                name=""
                id=""
              />
              <p>Remember me</p>
            </div>
            <p>Forgot password?</p>
          </div>
          <button className="bg-[#FF8C53] border-[1px] border-[#FF8C53] mx-auto gap-[10px] w-full md:w-[250px] text-white text-[.875rem] font-medium leading-5 rounded p-[10px] tracking-[.1px]">
            Log in
          </button>
        </form>
        <div className="flex flex-col gap-6 mx-auto text-center">
          <p className="text-[#201A18] text-base font-medium leading-[46px]">
            Don’t have an account?
            <span onClick={() => setIsClicked('Signup')} className="text-main px-2 cursor-pointer" href={"#"}>
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
