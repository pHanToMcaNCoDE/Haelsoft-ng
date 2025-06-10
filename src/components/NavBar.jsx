import React from "react";
import Image from "next/image";
import Link from "next/link";
import lg from '/public/EdTech Platform screenshot (1).svg';

const NavBar = () => {
  return (
    <div>
      <nav className="px-2 flex justify-center items-center mx-auto py-3 text-center">
        <Image
          src={lg}
          alt="Image description"
          width={100}
          height={100}
          className="object-contain absolute top-8 left-8 hidden md:flex"
        />
        {/* <Image
          src="https://firebasestorage.googleapis.com/v0/b/web-project-ca895.appspot.com/o/haelsoft%2Flogo2.png?alt=media&token=99c206bc-6bcb-462f-be89-41e945f5bf6f"
          alt="Image description"
          width={100}
          height={100}
          className="object-contain flex md:hidden"
        /> */}
        {/* <p className="flex items-center justify-center text-base font-normal gap-x-2 leading-[40px]">
          <span> Already have an account?</span>
          <Link href={"/signin"} className=" text-[#0E7EE5]">
            Sign in
          </Link>
        </p> */}
      </nav>
    </div>
  );
};

export default NavBar;

