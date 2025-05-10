import Input from "@/components/Input";
import Loader from "@/components/Loader";
import SelectField from "@/components/SelectField";
import { allAfricanCountries } from "@/raw-data/data";
import { baseURL, profileValidation } from "@/Service/validation";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { RiImageAddFill } from "react-icons/ri";
import secureLocalStorage from "react-secure-storage";
import { ScaleLoader } from "react-spinners";
import { toast } from "react-toastify";

const PersonalInformation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, seterrors] = useState({});
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [userName, setUserName] = useState(null);
  const [formData, setFormData] = useState({
    full_name: "",
    alt_email: "",
    country: "",
    profile_image: ""
  });

  const token = secureLocalStorage.getItem('token');

  useEffect(() => {
    const getUserDetails = () => {
      axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}profile/show`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
      })
      .then((res) => {
        const { first_name, email, country, username, profile_image } = res.data.data;
        setFormData(prev => ({
          ...prev,
          full_name: first_name || "",
          alt_email: email || "",
          country: country || "",
          profile_image: imageFile || ""
        }));

        setUserName(username || '____');

        setImagePreview(res.data.data.profile_image)


        if (profile_image) {
          const imageUrl = `${process.env.NEXT_PUBLIC_IMAGE_URL}${profile_image}`;
          setImagePreview(imageUrl);
          secureLocalStorage.setItem('userProfileImage', imageUrl);
        } else {
          const savedImage = secureLocalStorage.getItem('userProfileImage');
          if (savedImage) {
            setImagePreview(savedImage);
          }
        }

      })
      .catch(error => console.error('Get Profile Error:', error));
    };

    if (token) {
      getUserDetails();
    }
  }, [token]);

  useEffect(() => {
    const savedImage = secureLocalStorage.getItem('userProfileImage');
    if (savedImage) {
      setImagePreview(savedImage);
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setImageFile(`${process.env.NEXT_PUBLIC_IMAGE_URL}${file}`);
      const reader = new FileReader();
      reader.onload = () => {
        const imageData = reader.result;
        setImagePreview(imageData);
        secureLocalStorage.setItem('userProfileImage', imageData);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFieldFocus = (fieldName) => {
    seterrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      delete updatedErrors[fieldName];
      return updatedErrors;
    });
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const validatedData = await profileValidation.validate(formData, {
        abortEarly: false,
      });

      const profileFormData = new FormData();
      profileFormData.append('full_name', validatedData.full_name);
      
      if (validatedData.alt_email) {
        profileFormData.append('alt_email', validatedData.alt_email);
      }
      
      if (validatedData.country) {
        profileFormData.append('country', validatedData.country);
      }
      
      if (imageFile) {
        profileFormData.append('profile_image', imageFile);
      }

      profileFormData.append('_method', 'PUT');

      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}profile/update`, 
          profileFormData,
          {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Accept': 'application/json',
              '_method': 'PUT'
            }
          }
        );
        
        if (response.data && response.data.message) {
          toast.success(response.data.message);
        } else {
          toast.success("Profile updated successfully");
        }
      } catch (error) {
        console.error('Profile Update Error:', error);
        if (error.response && error.response.data && error.response.data.message) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Failed to update profile");
        }
      }
    } catch (error) {
      console.error('Validation Error:', error);
      if (error.inner) {
        const validationErrors = {};
        error.inner.forEach((err) => {
          validationErrors[err.path] = err.message;
        });
        seterrors(validationErrors);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white w-full lg:w-[1023px] px-[10px] lg:px-[25px] py-[50px] pb-[100px] flex flex-col justify-between items-start gap-8">
      {isLoading && (
        <Loader/>
      )}

      <div className="px-[30px] pt-[20px] flex justify-center items-center">
        <h1 className="font-semibold leading-9 text-[1.5rem] text-black">
          Personal Information
        </h1>
      </div>

      <form
        className="px-[10px] lg:px-[20px] pt-[20px] flex flex-col justify-start w-full items-start gap-20"
        onSubmit={handleUpdateProfile}
      >
        <div className="w-[253px] h-[258px] bg-zinc-300 px-5 py-6 flex flex-col justify-between items-center gap-6">
          <label className="w-[120px] h-[120px] bg-white rounded-full flex justify-center items-center cursor-pointer overflow-hidden">
            {imagePreview ? (
              <img 
                src={imagePreview} 
                alt="User profile" 
                className="w-full h-full object-cover" 
              />
            ) : (
              <RiImageAddFill size={35} className="text-main" />
            )}
            <input 
              type="file" 
              accept="image/*" 
              className="hidden" 
              onChange={handleImageChange}
            />
          </label>
          <div className="flex flex-col justify-center items-center gap-1">
            <p className="text-main text-sm font-normal">username:</p>
            <h1 className="text-main text-base font-bold">{userName}</h1>
          </div>
        </div>

        <div className="w-full flex flex-col justify-start items-start gap-7">
          <div className="flex flex-col lg:flex-row justify-between w-full items-start gap-[3.5em]">
            <Input
              labelClassName="text-grayTwo text-[1.125rem] font-medium leading-[46px]"
              inputClassName="px-3 h-[56px] w-full border-2 border-[#F0F0F0] rounded-[5px] focus-within:border-main outline-none"
              label={'Full Name'}
              placeholder={'John Doe'}
              htmlFor={`Full Name`}
              name={`full_name`}
              value={formData.full_name}
              error={errors?.full_name}
              errorText={errors?.full_name}
              onChange={handleInputChange}
              onFocus={() => handleFieldFocus("full_name")}
            />

            <Input
              labelClassName="text-grayTwo text-[1.125rem] font-medium leading-[46px]"
              inputClassName="px-3 h-[56px] w-full border-2 border-[#F0F0F0] rounded-[5px] focus-within:border-main outline-none"
              label={'Email Address'}
              placeholder={'john.doe@gmail.com'}
              htmlFor={`Email Address`}
              name={`alt_email`}
              value={formData.alt_email}
              error={errors?.alt_email}
              errorText={errors?.alt_email}
              onChange={handleInputChange}
              onFocus={() => handleFieldFocus("alt_email")}
            />
          </div>

          <div className="flex flex-col lg:flex-row justify-between w-full items-start gap-[3.5em]">
            <SelectField
              label="Country"
              name="country"
              value={formData.country}
              onChange={(e) => handleSelectChange("country", e.target.value)}
              onFocus={() => handleFieldFocus("country")}
              required
              labelClassName="text-grayTwo text-[1.125rem] font-medium leading-[46px]"
              inputClassName="px-3 h-[56px] w-full border-2 border-[#F0F0F0] rounded-[5px] focus-within:border-main outline-none"
              options={allAfricanCountries}
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

export default PersonalInformation;