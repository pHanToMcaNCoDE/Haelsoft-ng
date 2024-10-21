"use client"; 
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

const EmailVerified = () => {
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const email = searchParams.get("email") ?? "dummy@gmail.com";

  useEffect(() => {
    setIsClient(true);
  }, []);

  const hideEmail = (email) => {
    const [username, domain] = email.split("@");
    const hiddenUsername = `${username.substring(0, 2)}*****`;
    return `${hiddenUsername}@${domain}`;
  };

  const resendEmail = () => {
    setIsLoading(true);
    axios
      .get(`${baseUrl}/identity/v1/temp_reset_url?customerType=1&email=${email}`)
      .then((res) => {
        console.log(res);
        // Handle success and navigation if necessary
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (!isClient) {
    return null; // Prevent rendering until client is ready
  }

  return (
    <div className="flex items-center justify-center h-screen px-2">
      <div className="bg-[#F9F9F9] p-8 rounded-[30px] min-h-[465px] max-w-[762px] w-full lg:w-fit lg:px-[140px]">
        <div className="flex flex-col items-center space-y-8">
          <Link href={"/"}>
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/web-project-ca895.appspot.com/o/haelsoft%2Flogo.png?alt=media&token=924d3200-5754-4963-ae45-82225eff5bf9"
              alt="Logo"
              width={200}
              height={200}
              className="object-contain w-[8rem] absolute top-8 left-8"
            />
          </Link>

          <Image
            src="https://firebasestorage.googleapis.com/v0/b/web-project-ca895.appspot.com/o/haelsoft%2Fimage%202.svg?alt=media&token=b9d140b5-3c79-426e-8de6-d42b7ab0fc2c"
            alt="Illustration"
            width={500}
            height={500}
            className="object-contain w-[5rem]"
          />

          <p className="text-contentPrimary text-center text-2xl font-medium md:text-[36px]">
            Verify your email
          </p>

          <div className="text-[#7F7571] text-center md:w-[646px] mt-10 text-base">
            To keep your account safe, we have sent an email to
            <span className="text-base text-[#201A18] font-[900]">
              {" "}
              {hideEmail(email)}
            </span>{" "}
            for verification, and you’ll only do this once.
          </div>

          <div className="text-center text-[#7F7571] text-base flex space-x-2">
            <p>Did not receive email?</p>
            <button
              onClick={resendEmail}
              className="text-[#0E7EE5] underline"
              disabled={isLoading}
            >
              {isLoading ? (
                <ClipLoader size={12} color={"#0E7EE5"} loading={isLoading} />
              ) : (
                "Resend"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerified;
