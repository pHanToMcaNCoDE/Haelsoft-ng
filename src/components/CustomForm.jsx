import React from 'react'
import { africanCountries } from '../raw-data/data'

const CustomForm = () => {
    
  return (
    <form className="flex flex-col justify-center items-center gap-10 w-[80%] lg:w-[50%] xl:w-[40%] h-full bg-[#F7F7F7] py-[40px] relative z-10 p-6" action="">
        <div className="flex flex-col justify-center items-center gap-4 w-full">
        <input className="placeholder:text-[#655D5980] placeholder:text-[12px] placeholder:font-normal placeholder:leading-[18px] text-base text-black font-normal leading-5 bg-white outline-none py-[15px] px-[20px] rounded border border-[#F5F5F5] w-full xl:w-[482px] h-[48px]" type="text" placeholder="Name" />
        <input className="placeholder:text-[#655D5980] placeholder:text-[12px] placeholder:font-normal placeholder:leading-[18px] text-base text-black font-normal leading-5 bg-white outline-none py-[15px] px-[20px] rounded border border-[#F5F5F5] w-full xl:w-[482px] h-[48px]" type="email" placeholder="Email Address" />
        <input className="placeholder:text-[#655D5980] placeholder:text-[12px] placeholder:font-normal placeholder:leading-[18px] text-base text-black font-normal leading-5 bg-white outline-none py-[15px] px-[20px] rounded border border-[#F5F5F5] w-full xl:w-[482px] h-[48px]" type="text" placeholder="Company" />
        {/* <input className="placeholder:text-[#655D5980] placeholder:text-[12px] placeholder:font-normal placeholder:leading-[18px] text-base text-black font-normal leading-5 bg-white outline-none py-[15px] px-[20px] rounded border border-[#F5F5F5] w-full xl:w-[482px] h-[48px]" type="text" placeholder="Location" /> */}
        {/* <div className="flex items-center border rounded-md shadow-sm w-full"> */}
            <select
            id="countryDropdown"
            // value={selectedCountry}
            // onChange={handleSelectChange}
            className="p-2 w-full border-l border-l-[#F5F5F5] placeholder:text-[#655D5980] placeholder:text-[12px] placeholder:font-normal placeholder:leading-[18px] text-base text-black font-normal leading-5 bg-white outline-none py-[15px] px-[20px] rounded xl:w-[482px] h-[48px]"
            >
            <option value="" disabled>
                Choose Your Location...
            </option>
            {africanCountries.map((country) => (
                <option key={country.name} value={country.name}>
                    {country.flag} {country.name}
                </option>
            ))}
            </select>
            {/* <input
            type="text"
            // value={inputValue}
            // onChange={handleInputChange}
            placeholder="Location"
            className=""
            /> */}
        {/* </div> */}
        <textarea className="placeholder:text-[#655D5980] placeholder:text-[12px] placeholder:font-normal placeholder:leading-[18px] text-base text-black font-normal leading-5 bg-white outline-none py-[15px] px-[20px] rounded border border-[#F5F5F5] w-full xl:w-[482px] h-[151px]" placeholder="What does your organization need?"></textarea>
        </div>
        <div className="flex flex-col justify-center items-center gap-10">
        {/* <p className="text-[.65rem] text-[#655D59] font-normal leading-[18px] w-full xl:w-[486px]">
            By clicking &quot;Connect with our team&quot;, I confirm that I have reviewed and I agree to Ed-Tech&apos;s Terms and Conditions.
        </p> */}
        <button className="bg-[#F36400] text-white w-full md:w-[298px] h-[58px] rounded p-[10px] gap-[10px] text-[1.125rem] leading-10 font-normal">Submit</button>
        </div>
    </form>
  )
}

export default CustomForm