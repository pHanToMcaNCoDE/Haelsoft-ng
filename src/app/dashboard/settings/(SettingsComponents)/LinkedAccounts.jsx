import Image from "next/image";
import React, { useState, useEffect } from "react";
import fbk from "../../../../asset/settings/Social Facebook.svg";
import gle from "../../../../asset/settings/Google flat color icons.svg";
import apl from "../../../../asset/settings/EdTech Platform.svg";
import { linkedAccountsValidation } from "@/Service/validation";
import Input from "@/components/Input";
import axios from "axios";
import secureLocalStorage from "react-secure-storage";
import Loader from "@/components/Loader";
import { toast } from "react-toastify";

const LinkedAccounts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({})
  const [socialLinks, setSocialLinks] = useState({})

  const [formData, setFormData] = useState({
    facebook_link: "",
    youtube_link: "",
    google_link: "",
    linkedin_link: "",
    tiktok_link: ""
  })


  const handleFieldFocus = (fieldName) => {
    setErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      delete updatedErrors[fieldName];
      return updatedErrors;
    });
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const token = secureLocalStorage.getItem("token");

  const handleSubmitLinkedAccount = async (e) => {
    e.preventDefault();

    try{
      const validatedData = await linkedAccountsValidation.validate(formData, {
        abortEarly: false,
      });

      try {
        setIsLoading(true)

        const response = await axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}profile/social_handles`, {
          facebook_link: validatedData.facebook_link,
          youtube_link: validatedData.youtube_link,
          google_link: validatedData.google_link,
          linkedin_link: validatedData.linkedin_link,
          tiktok_link: validatedData.tiktok_link,
          '_method': 'PUT'
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
          }
        })

      } catch (error) {
        toast.error(error.response.data.message || error.response.message)
      } 

    } catch (error) {
      // console.log('Api error', error)
      toast.error(error.response.data.message || error.response.message)
    } finally {
      setIsLoading(false);
    }

  }


  useEffect(() => {
    const getSocialHandles = () => {
      setIsLoading(true);
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}profile/social_handles`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })

        .then((response) => {
          toast.success(response.data.message)

          // setSocialLinks(response.data.data)

          setFormData((prev)=> ({
            ...prev,
              facebook_link: response.data.data.facebook_link || "",
              youtube_link: response.data.data.youtube_link,
              google_link: response.data.data.google_link,
              linkedin_link: response.data.data.linkedin_link,
              tiktok_link: response.data.data.tiktok_link
          }))

          // console.log("social Links", socialLinks)
        })

        .catch((error) => console.log('Social Links Error', error))

        .finally(() => setIsLoading(false))
    }

    if(token) getSocialHandles()
  }, [token])

  return (
    <div className="bg-white w-full px-[10px] lg:px-[25px] py-[50px] pb-[100px] flex flex-col justify-start items-start gap-8">
      {isLoading && (
        <Loader/>
      )}
      <h1 className="font-semibold leading-9 text-[1.5rem] px-[15px] lg:px-[30px] pt-[20px] text-black">
        Linked Accounts
      </h1>

      <form
        className="px-[10px] lg:px-[20px] pt-[20px] flex flex-col justify-start w-full items-start gap-20"
        onSubmit={handleSubmitLinkedAccount}
      >

        <div className="w-full flex flex-col justify-start items-start gap-7">
          <div className="flex flex-col lg:flex-row justify-between w-full items-start gap-[3.5em]">
            <Input
              labelClassName="text-grayTwo text-[1.125rem] font-medium leading-[46px]"
              inputClassName="px-3 h-[56px] w-full border-2 border-[#F0F0F0] rounded-[5px] focus-within:border-main outline-none"
              label={'Facebook Link'}
              placeholder={'facebook.com/'}
              htmlFor={`Facebook Link`}
              name={`facebook_link`}
              value={formData.facebook_link}
              error={errors?.facebook_link}
              errorText={errors?.facebook_link}
              onChange={handleInputChange}
              onFocus={() => handleFieldFocus("facebook_link")}
            />

            <Input
              labelClassName="text-grayTwo text-[1.125rem] font-medium leading-[46px]"
              inputClassName="px-3 h-[56px] w-full border-2 border-[#F0F0F0] rounded-[5px] focus-within:border-main outline-none"
              label={'Youtube Link'}
              placeholder={'you.be/'}
              htmlFor={`Youtube Link`}
              name={`youtube_link`}
              value={formData.youtube_link}
              error={errors?.youtube_link}
              errorText={errors?.youtube_link}
              onChange={handleInputChange}
              onFocus={() => handleFieldFocus("youtube_link")}
            />
          </div>

          <div className="flex flex-col lg:flex-row justify-between w-full items-start gap-[3.5em]">
            <Input
              labelClassName="text-grayTwo text-[1.125rem] font-medium leading-[46px]"
              inputClassName="px-3 h-[56px] w-full border-2 border-[#F0F0F0] rounded-[5px] focus-within:border-main outline-none"
              label={'Google Link'}
              placeholder={'google.com/'}
              htmlFor={`Google Link`}
              name={`google_link`}
              value={formData.google_link}
              error={errors?.google_link}
              errorText={errors?.google_link}
              onChange={handleInputChange}
              onFocus={() => handleFieldFocus("google_link")}
            />

            <Input
              labelClassName="text-grayTwo text-[1.125rem] font-medium leading-[46px]"
              inputClassName="px-3 h-[56px] w-full border-2 border-[#F0F0F0] rounded-[5px] focus-within:border-main outline-none"
              label={'LinkedIn Link'}
              placeholder={'linkedin.com/'}
              htmlFor={`LinkedIn Link`}
              name={`linkedin_link`}
              value={formData.linkedin_link}
              error={errors?.linkedin_link}
              errorText={errors?.linkedin_link}
              onChange={handleInputChange}
              onFocus={() => handleFieldFocus("linkedin_link")}
            />
          </div>


          <div className="flex flex-col lg:flex-row justify-between w-full items-start gap-[3.5em]">
            <Input
              labelClassName="text-grayTwo text-[1.125rem] font-medium leading-[46px]"
              inputClassName="px-3 h-[56px] w-full border-2 border-[#F0F0F0] rounded-[5px] focus-within:border-main outline-none"
              label={'Tiktok Link'}
              placeholder={'tiktok.com/'}
              htmlFor={`Tiktok Link`}
              name={`tiktok_link`}
              value={formData.tiktok_link}
              error={errors?.tiktok_link}
              errorText={errors?.tiktok_link}
              onChange={handleInputChange}
              onFocus={() => handleFieldFocus("tiktok_link")}
            />
          </div>
        </div>



        <button
          className="w-[150px] h-[51px] border border-main text-white bg-main text-base font-semibold leading-[21px] flex justify-center items-center"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Saving..." : "Save Changes"}
        </button>
      </form>

      <div className="w-full bg-main h-[1px]"></div>
        
    </div>
  );
};

export default LinkedAccounts;