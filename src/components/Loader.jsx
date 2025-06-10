"use client";

import { useFormStatus, useFormState } from "react-dom";
import logoimage from "../asset/haelsoft.gif";
import ClipLoader from "react-spinners/ClipLoader";
import Image from "next/image";
const Loader = () => {
  const { pending } = useFormStatus();
  return (
    <div>
        <div
          className={`flex z-[100] left-0 opacity-100 transition-opacity duration-500 items-center justify-center fixed top-0 w-screen h-screen bg-black/[60%] `}
        >
          {/* <ClipLoader color="#ff6900" size={100} /> */}
          <Image src={logoimage} alt="Haelsoft Logo" />
        </div>
    </div>
  );
};

export default Loader;
