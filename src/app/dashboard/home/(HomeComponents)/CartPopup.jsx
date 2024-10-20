import React from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { HiOutlineXMark } from "react-icons/hi2";
import Link from "next/link";

const CartPopup = ({ onClose }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="absolute top-[128%] md:top-[60%] md:right-[5%] lg:right-[20%] w-full md:w-[620px] min-h-[700px] rounded bg-white px-2 py-8 md:p-8 z-30 flex flex-col justify-start items-start gap-6">
      <div className="flex justify-between items-center w-full">
        <h2 className="text-[1.5rem] leading-9 font-medium text-[#201A18]">
          Added to cart
        </h2>
        <HiOutlineXMark
          onClick={() => onClose(false)}
          className="text-[2rem] cursor-pointer text-main"
        />
      </div>
      {cartItems.length === 0 ? (
        <p className="mt-4 text-[1.5rem] leading-9 text-[#201A18] text-center">
          Your cart is empty
        </p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-wrap lg:flex-nowrap justify-between items-center gap-4 lg:gap-10 w-full"
            >
              <div className="flex items-center justify-center gap-1">
                <IoCheckmarkCircleOutline className="text-[2.25rem] text-main" />
                <Image
                  width={98}
                  height={89}
                  src={item.image}
                  alt={item.course_title}
                  className="object-cover "
                />
              </div>
              <div className="flex flex-col items-start justify-center gap-3">
                <h3 className="text-[#201A18] text-[1.25rem] lg:text-[1.125rem] font-semibold leading-[27px]">
                  {item.course_title}
                </h3>
                <p className="text-[#201A18] text-[1.125rem] lg:text-[1rem] font-semibold leading-[27px]">
                  4.8 ratings
                </p>
              </div>
              <Link
                href={"/dashboard/shoppingcart"}
                className="flex justify-center items-center w-[214px] h-[58px] gap-[10px] p-[10px] rounded bg-[#FF8C53] border border-[#FF8C53] text-white"
              >
                Go To Cart
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPopup;
