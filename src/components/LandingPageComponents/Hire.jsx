import React from "react";

const Hire = () => {
  return (
    <section className="relative px-5 flex flex-col lg:flex-row justify-between items-start max-w-[1250px] mx-auto py-[100px] gap-y-5">
      <div className="flex flex-col justify-center items-start gap-4 w-full lg:w-[50%] xl:mt-[100px]">
        <h1 className="text-main leading-[42px] font-bold text-[1.75rem]">
          Hire An Ed-Tech Talent
        </h1>
        <p className="text-[#655D59] text-[1.125rem] leading-[43px] font-medium w-full xl:w-[574px]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec
        </p>
      </div>
      <div className="w-full lg:w-[50%] flex flex-col justify-center items-center">
        <div className="bg-[#FBFBFB] w-full xl:w-[636px] h-[877px] rounded flex flex-col justify-start items-center px-[25px] gap-[7em] py-[50px]">
          <div className="flex flex-col gap-3 text-center">
            <h1 className="text-[1.75rem] text-main leading-[43px] font-semibold">
              Connect with our Team
            </h1>
            <p className="text-[#655D59] font-normal text-[1rem] leading-6">
              Kindly fill in the form to get started.
            </p>
          </div>
          <form
            className="flex flex-col justify-center items-center gap-[4em] w-full"
            action=""
          >
            <div className="flex flex-col justify-center items-center gap-4 w-full">
              <input
                className="placeholder:text-[#655D5980] placeholder:text-[12px] placeholder:font-normal placeholder:leading-[18px] text-base text-black font-normal leading-5 bg-white outline-none py-[15px] px-[20px] rounded border border-[#EEEEEE]/[93.3%] w-full xl:w-[482px] h-[48px]"
                type="text"
                placeholder="Name"
              />
              <input
                className="placeholder:text-[#655D5980] placeholder:text-[12px] placeholder:font-normal placeholder:leading-[18px] text-base text-black font-normal leading-5 bg-white outline-none py-[15px] px-[20px] rounded border border-[#EEEEEE]/[93.3%] w-full xl:w-[482px] h-[48px]"
                type="email"
                placeholder="Email Address"
              />
              <input
                className="placeholder:text-[#655D5980] placeholder:text-[12px] placeholder:font-normal placeholder:leading-[18px] text-base text-black font-normal leading-5 bg-white outline-none py-[15px] px-[20px] rounded border border-[#EEEEEE]/[93.3%] w-full xl:w-[482px] h-[48px]"
                type="text"
                placeholder="Company"
              />
              <input
                className="placeholder:text-[#655D5980] placeholder:text-[12px] placeholder:font-normal placeholder:leading-[18px] text-base text-black font-normal leading-5 bg-white outline-none py-[15px] px-[20px] rounded border border-[#EEEEEE]/[93.3%] w-full xl:w-[482px] h-[48px]"
                type="text"
                placeholder="Location"
              />
              <textarea
                className="placeholder:text-[#655D5980] placeholder:text-[12px] placeholder:font-normal placeholder:leading-[18px] text-base text-black font-normal leading-5 bg-white outline-none py-[15px] px-[20px] rounded border border-[#EEEEEE]/[93.3%] w-full xl:w-[482px] h-[151px]"
                placeholder="What does your organization need?"
              ></textarea>
            </div>
            <div className="flex flex-col justify-center items-center gap-10">
              <p className="text-[12px] text-[#655D59] font-normal leading-[18px] w-full xl:w-[486px]">
                By clicking &ldquo;Connect with our team&ldquo; , I confirm that
                I have reviewed and I agree to Ed-Tech&apos;s Terms and
                Conditions.
              </p>
              <button className="bg-main text-white w-full md:w-[298px] h-[58px] rounded p-[10px] gap-[10px] text-[1.125rem] leading-10 font-normal">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hire;
