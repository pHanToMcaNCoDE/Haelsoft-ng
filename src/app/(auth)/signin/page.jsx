"use client";
import React, { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { toast } from "react-toastify";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader";
import SigninCarousel from "./SigninCarousel";
import InputField from "@/components/InputField";
import { FcGoogle } from "react-icons/fc";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "@/app/lib/firebase";
import logo from '/public/EdTech Platform Figma.svg'
import { baseURL, signinValidation } from "@/Service/validation";
import axios from "axios";
import { setAuth } from "@/features/user-details/userDetailsSlice";
import { useDispatch } from "react-redux";
import secureLocalStorage from "react-secure-storage";


const SigninForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, seterrors] = useState({});
  const [passwordState, setPasswordState] = useState("");
  const [formData, setFormData] = useState({
    login: "",
    password: ""
  });

  // const { token } = useSelector((state) => state.userDetails)

  // useEffect(() => {
  //   if (token) {
  //     console.log("Attempting navigation to dashboard");
  //     router.replace('/dashboard/home');
  //   }
  // }, [token, router]);

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const dispatch = useDispatch();



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const validatedData = await signinValidation.validate(formData, {
        abortEarly: false,
      });

      try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}auth/login`, {
          login: validatedData.login,
          password: validatedData.password,
        });
        toast.success(response?.data?.data?.message || "Login successful!");

        secureLocalStorage.setItem('uid', response.data.data.user.user_uuid)
        if (response.data.data?.token) {
          dispatch(setAuth({
            token: response.data.data.token,
            user: response.data.data.user
          }));
          document.cookie = `token=${response.data.data?.token}; path=/; max-age=86400; SameSite=Strict`;
          
          if (typeof window !== "undefined") {
            window.location.href = '/dashboard/home';
          }
        }

      } catch (error) {
        if (error.response?.data?.errors?.email) {
          toast.error(error.response?.data?.errors?.email?.[0] || "Signin failed");
        } else {
          toast.error(error.response?.data?.message || "Signin failed");
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
        seterrors(newErrors);
      } else {
        toast.error(error.message || "Something went wrong.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleFieldFocus = (fieldName) => {
    seterrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      delete updatedErrors[fieldName];
      return updatedErrors;
    });
  };

  // if (isLoading) {
  //   return <Loader />;
  // }
  const signInWithGoogle = async () => {

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const idToken = await user.getIdToken();
    } catch (e) {
      // console.log("e", e);
      e
    }
  };
  return (
    <section className="h-screen w-full flex items-center justify-center">
      <div className="flex items-center justify-center px-4 w-full lg:w-[50%] bg-white h-screen">
        <div className="w-full lg:w-[70%] mx-auto text-center lg:mt-36 flex flex-col justify-center items-center gap-1.5">
          <Link href={"/"}>
            <Image
              src={logo}
              alt="Haelsoft Logo"
              width={100}
              height={100}
            />
          </Link>
          <h1 className="text-[36px] font-medium">Welcome back!!</h1>
          <p className="flex items-center h-[33px] text-[#7F7571] text-sm justify-center font-normal gap-x-2">
            <span>Don&apos;t have an account yet?</span>
            <Link href={"/signup"} className="text-[#0E7EE5] underline">
              Sign up now
            </Link>
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 mt-8 w-[90%] lg:w-full mx-auto"
          >
            {isLoading &&
              <Loader />
            }
            <div className="flex flex-col">
              <InputField
                label={`E-mail`}
                htmlFor={`login`}
                name={`login`}
                value={formData.login}
                error={errors?.login}
                errorText={errors?.login}
                onChange={handleInputChange}
                onFocus={() => handleFieldFocus("login")}
              />
            </div>
            <div className="relative">
              <InputField
                label={`Enter Password`}
                htmlFor={`password`}
                name={`password`}
                type={showPassword ? "text" : "password"}
                value={formData.password}
                error={errors?.password}
                errorText={errors?.password}
                onChange={handleInputChange}
                onFocus={() => handleFieldFocus("password")}
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-[1rem] right-4 text-lg cursor-pointer"
              >
                {showPassword ? <LuEye /> : <LuEyeOff />}
              </div>
            </div>
            <div className="flex items-center justify-between">
              {/* <div className="flex items-center gap-x-2">
                <input type="checkbox" name="agreedToTermsandConditions" />
                <div className="text-[#7F7571] text-[13px]">Remember Me</div>
              </div> */}
              <Link
                href={"/forgotpassword"}
                className="underline text-[#0E7EE5] text-[14px]"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="text-white bg-main h-[48px] w-full text-sm rounded-[4px] font-medium"
            >
              Sign in
            </button>
            {/* <div
              type="button"
              onClick={signInWithGoogle}
              className="text-black border-2 border-[#e5f5f5] bg-white h-[48px] w-full text-sm rounded-[4px] font-medium flex justify-center items-center gap-4"
            >
              <FcGoogle className="text-[1.75rem]" />
              Sign In with Google
            </div> */}
          </form>
        </div>
      </div>
      <div className="relative w-full lg:w-[50%] h-screen z-[5px] hidden lg:flex flex-col justify-center items-start gap-10">
        <SigninCarousel />
      </div>
    </section>
  );
};

export default SigninForm;
