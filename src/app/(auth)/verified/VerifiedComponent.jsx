// app/(auth)/verified/Verified.js

'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useSearchParams, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import { baseURL } from "@/Service/validation";
import Image from "next/image";
import logoimage from "../../../asset/haelsoft.gif";
import secureLocalStorage from "react-secure-storage";

const VerifiedComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const tokenParams = useSearchParams();
  const token = tokenParams.get("token");
  const router = useRouter();

  useEffect(() => {
    const verifyEmail = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(`${baseURL}/auth/api/verify-email/${token}/`);
        toast.success(res.data.message, {
          toastId: 1,
          position: "top-right",
        });
        secureLocalStorage.removeItem("token");
        router.push("/signin");
      } catch (e) {
        console.error(e);
        const errorMessage = e.response?.data?.message || "An error occurred";
        toast.error(errorMessage, {
          toastId: 1,
          position: "top-right",
        });

        if (errorMessage === "Email already verified") {
          secureLocalStorage.removeItem("token");
          router.push("/signin");
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (token) {
      verifyEmail();
    }
  }, [router, token]);

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      {isLoading ? (
        <ClipLoader color="#ff6900" size={100} />
      ) : (
        <Image src={logoimage} alt="Logo" width={200} height={200} />
      )}
    </div>
  );
};

export default VerifiedComponent;