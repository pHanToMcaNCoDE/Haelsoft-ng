"use client";

import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loading from "../(dashboardcomponents)/loading";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader";
// import { ClipLoader } from 'react-spinners';

import logoimage from "../../../asset/haelsoft.gif";
import Image from "next/image";
import { FaRegCircleCheck } from "react-icons/fa6";
import secureLocalStorage from "react-secure-storage";

const PaymentConfirmation = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const params = useSearchParams();
  const reference = params.get("reference");

  useEffect(() => {
    if (reference) {
      axios
        .get(
          `https://edtech-backend-q2ud.onrender.com/enrollment/api/verify-payment/`,
          {
            params: { reference },
          }
        )
        .then((res) => {
          toast.success(res, {
            toastId: 1,
          });
          secureLocalStorage.removeItem('CartItems');
          router.push("/dashboard/my-learning");
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [reference, router]);

  if (loading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        {/* <Bars
          height="80"
          width="80"
          radius="9"
          color="orange"
          ariaLabel="loading"
          wrapperStyle={{}}
          wrapperClass
        /> */}
        <Image src={logoimage} alt="Haelsoft" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 justify-center items-center text-center h-[50vh] w-full">
      <FaRegCircleCheck className="text-green-600 text-[10rem]" />
      <h1 className="text-[2rem] font-bold">Payment Completed Successfully!</h1>
    </div>
  );
};

export default PaymentConfirmation;
