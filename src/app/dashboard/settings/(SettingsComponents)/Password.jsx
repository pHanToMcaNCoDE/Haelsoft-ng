import Input from "@/components/Input";
import Loader from "@/components/Loader";
import { baseURL, changePasswordSettingsValidation } from "@/Service/validation";
import axios from "axios";
import React, { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import secureLocalStorage from "react-secure-storage";
import { toast } from "react-toastify";

const Password = () => {

  const [errors, setErrors] = useState({});
  const [revealPassword, setRevealPassword] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false
  })
  const [formData, setFormData] = useState({
    current_password: "",
    password: "",
    password_confirmation: ""
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const token = secureLocalStorage.getItem('token');

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try{
      const validatedData = await changePasswordSettingsValidation.validate(formData, {
        abortEarly: false,
      });


      try{
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}profile/change_password`, {
          current_password: validatedData.current_password,
          password: validatedData.password,
          password_confirmation: validatedData.password_confirmation
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json'
          }
        })

        toast.success(response?.data?.message || "Password updated successfully!");

        console.log('Change P', response.data);
      }catch (error) {
        if (error.response?.data?.message) {
          toast.error(error.response?.data?.message);
        } else {
          toast.error(error.response?.data?.message);
        }
      }
    } catch (error) {
      if (error.inner) {
        const newErrors = {};
        error.inner.forEach((err) => {
          if (err.path) {
            newErrors[err.path] = err.message;
            toast.error(err.message);
          }
        });
        setErrors(newErrors);
      } else {
        toast.error(error.message);
      }
    }finally{
      setIsLoading(false);
    }

  }


  return (
    <div className="bg-white w-full lg:w-[1023px] h-full px-[10px] lg:px-[25px] py-[50px] pb-[100px] flex flex-col justify-start items-start gap-8">
      {isLoading && <Loader/>}
      <h1 className="px-[15px] lg:px-[30px] pt-[20px] font-semibold leading-9 text-[1.5rem] text-black">
        Password
      </h1>
      <form
        className="w-full px-[15px] lg:px-[30px] flex flex-col justify-start items-start gap-10"
        onSubmit={handleChangePassword}
      >
        <div className="flex flex-col lg:flex-row justify-between w-full items-start gap-10">

          <div className="w-full relative">
            <Input
              labelClassName="text-grayTwo text-[1.125rem] font-medium leading-[46px]"
              inputClassName="px-3 h-[56px] w-full border-2 border-[#F0F0F0] rounded-[5px] focus-within:border-main outline-none"
              label={'Current Password'}
              type={revealPassword.currentPassword ? 'text' : 'password'}
              placeholder={'* * * * * * * * * * * *'}
              htmlFor={`Current Password`}
              name={`current_password`}
              value={formData.current_password}
              error={errors?.current_password}
              errorText={errors?.current_password}
              onChange={handleInputChange}
              onFocus={() => handleFieldFocus("current_password")}
            />

            <div
              onClick={() => setRevealPassword(prev => ({
                ...prev,
                currentPassword: !prev.currentPassword
              }))}
              className="absolute bottom-5 right-4 text-lg cursor-pointer"
            >
              {revealPassword.currentPassword ? <LuEye /> : <LuEyeOff />}
            </div>
          </div>


          <div className="w-full relative">

            <Input
              labelClassName="text-grayTwo text-[1.125rem] font-medium leading-[46px]"
              inputClassName="px-3 h-[56px] w-full border-2 border-[#F0F0F0] rounded-[5px] focus-within:border-main outline-none"
              label={'New Password'}
              type={revealPassword.newPassword ? 'text' : 'password'}
              placeholder={'* * * * * * * * * * * *'}
              htmlFor={`Password`}
              name={`password`}
              value={formData.password}
              error={errors?.password}
              errorText={errors?.password}
              onChange={handleInputChange}
              onFocus={() => handleFieldFocus("password")}
            />

            <div
              onClick={() => setRevealPassword(prev => ({
                ...prev,
                newPassword: !prev.newPassword
              }))}
              className="absolute bottom-5 right-4 text-lg cursor-pointer"
            >
              {revealPassword.newPassword ? <LuEye /> : <LuEyeOff />}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between w-full items-start gap-10">
          <div className="w-full relative">
            <Input
              labelClassName="text-grayTwo text-[1.125rem] font-medium leading-[46px]"
              inputClassName="px-3 h-[56px] w-full border-2 border-[#F0F0F0] rounded-[5px] focus-within:border-main outline-none"
              label={'Password Confirmation'}
              type={revealPassword.confirmPassword ? 'text' : 'password'}
              placeholder={'* * * * * * * * * * * *'}
              htmlFor={`Password Confirmation`}
              name={`password_confirmation`}
              value={formData.password_confirmation}
              error={errors?.password_confirmation}
              errorText={errors?.password_confirmation}
              onChange={handleInputChange}
              onFocus={() => handleFieldFocus("password_confirmation")}
            />

            <div
              onClick={() => setRevealPassword(prev => ({
                ...prev,
                confirmPassword: !prev.confirmPassword
              }))}
              className="absolute bottom-5 right-4 text-lg cursor-pointer"
            >
              {revealPassword.confirmPassword ? <LuEye /> : <LuEyeOff />}
            </div>
          </div>
          <div className='w-full'></div>
        </div>

        <button
          className="w-[150px] h-[51px] border border-main text-white bg-main text-base font-semibold leading-[21px] flex justify-center items-center"
          type="submit"
          // disabled={isLoading}
        >
          Save Changes
        </button>

        <div className="w-full bg-main h-[1px]"></div>
      </form>
      
    </div>
  );
};

export default Password;
