import React, { useState } from "react";
import Image from "next/image";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { removeFromCart } from "@/features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { Bounce, toast } from "react-toastify";
import axios from "axios";
import secureLocalStorage from "react-secure-storage";
import Loading from "../../(dashboardcomponents)/loading";
import { baseURL } from "@/Service/validation";

const FilledCart = ({ carts }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleRemoveFromCart = (courseId) => {
    if (dispatch(removeFromCart(courseId))) {
      toast.success("Course removed from cart!", {
        transition: Bounce,
      });
    } else {
      toast.error("Something went wrong!", {
        transition: Bounce,
      });
    }
  };
  

  const token = secureLocalStorage.getItem("token");

  const handleTransaction = () => {
    setLoading(true);
    axios
      .post(
        `https://edtech-backend-q2ud.onrender.com/enrollment/api/transactions/`,
        {
          amount: carts.reduce((total, item) => total + (Number(item.price) || 0), 0),
          courses: carts,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
        const transURL = res.data.data.payment_url;
        if (typeof window !== "undefined") {
          window.location.href = transURL;
        }
      })
      .catch((err) => err)
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col justify-start items-start gap-6 w-full py-[20px]">
      <div className="flex flex-col w-full gap-3">
        <p className="text-[.875rem] leading-[21px] text-black font-normal">
          {carts.length} Item(s)
        </p>
        <div className="bg-[#FF8C53] h-[1px] w-full xl:w-[755px]"></div>
      </div>
      <div className="flex flex-col items-end w-full justify-start gap-6 p-5">
        <div className="w-full flex flex-col gap-6 justify-start items-start">
          {carts.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row justify-center items-center gap-3 w-full"
            >
              <Image
                width={230}
                height={250}
                src={item.image}
                alt={item.course_title}
              />
              <div className="flex flex-col md:flex-row justify-between items-center w-full">
                <div className="flex items-start gap-[6em] w-full">
                  <div className="flex flex-col gap-2 w-full">
                    <h1 className="text-grayTwo text-[1.5rem] leading-[35px] font-semibold">
                      {item.course_title}
                    </h1>
                    <div className="flex flex-col justify-center items-start gap-1">
                      <p className="text-grayTwo font-medium text-[.75rem] leading-[18px]">
                        {item.rating} rating
                      </p>
                      <div className="flex justify-center items-center gap-1">
                        <div>
                          <Rating
                            style={{ maxWidth: 80 }}
                            value={item.rating}
                            readOnly
                          />
                        </div>
                        <p className="text-grayTwo font-medium text-[.75rem] leading-[18px]">
                          ({item.reviews})
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-start items-center gap-6">
                    <p className="text-grayTwo text-[.875rem] leading-[46px] font-semibold">
                      ₦{(item.price || 0).toLocaleString()}
                    </p>
                    <RiDeleteBin6Line
                      onClick={() => handleRemoveFromCart(item.course_id)}
                      className="text-[.875rem] cursor-pointer text-main font-semibold"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="w-full h-[.75px] rounded-full bg-grayTwo mb-3"></div>
        </div>
        {/* <div className="flex flex-col gap-10 w-full md:w-auto">
          <div className="whitespace-nowrap">
            <p className="text-grayTwo text-base font-semibold leading-5">
              Total
            </p>
            <p className="text-grayTwo text-base font-semibold leading-5">
              ₦{carts.reduce((total, item) => total + (Number(item.price) || 0), 0).toLocaleString()}
            </p>
          </div>
        </div> */}
        <div className="flex flex-col justify-end items-end gap-6 w-full md:w-auto">
          {/* <div className="whitespace-nowrap"> */}
            <p className="text-grayTwo text-3xl font-bold leading-5">
              ₦{carts.reduce((total, item) => total + (Number(item.price) || 0), 0).toLocaleString()}
            </p>
          {/* </div> */}
          <button
            onClick={handleTransaction}
            className="bg-main py-[2px] px-[15px] h-[54px] w-[250px] gap-[5px] rounded-lg text-white flex justify-center items-center text-[1rem] leading-[46px] font-semibold"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilledCart;
