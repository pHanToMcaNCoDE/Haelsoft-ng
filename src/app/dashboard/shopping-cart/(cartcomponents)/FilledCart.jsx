import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { removeFromCart } from "@/features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import secureLocalStorage from "react-secure-storage";
import Loading from "../../(dashboardcomponents)/loading";
import Loader from "@/components/Loader";
import Link from "next/link";
import { useRouter } from "next/navigation";

const FilledCart = ({ cartItems, setCartItems }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const { token } = useSelector((state) => state.userDetails);

  console.log('Cart Items', cartItems)

  const handleRemoveFromCart = async (cartItemUid) => {
    setLoading(true);

    if (!token) {
      toast.error("No authentication token found. Please log in.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_BASE_URL}cart/remove-from-cart/${cartItemUid}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      );

      toast.success(response.data?.message || "Item removed successfully");

      setTimeout(() => {
        window.location.reload();

      }, 2000)

    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to remove item");
      setLoading(false);
    }
  };

  const handleRemoveItem = (uid) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.uid !== uid));
  };

  const handleTransaction = () => {
    console.log('Transaction')
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col justify-start items-start gap-6 w-full py-[20px]">
      {loading && <Loader />}
      
      <div className="flex flex-col w-full gap-3">
        <p className="text-[.875rem] leading-[21px] text-black font-normal">
          {cartItems.length} Item(s)
        </p>
        <div className="bg-[#FF8C53] h-[1px] w-full xl:w-[755px]"></div>
      </div>
      
      <div className="flex flex-col items-end w-full justify-start gap-6 p-5">
        <div className="w-full flex flex-col gap-10 justify-start items-start">
          {cartItems.map((item) => (
            <div
              key={item.course_uid || item.course.uid}
              className="flex flex-col lg:flex-row justify-center items-center gap-3 w-full"
            >
              <div className="flex flex-col lg:flex-row justify-between items-center w-full">
                <div className="flex flex-col lg:flex-row items-start justify-between gap-8 w-full">
                  <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${item.course?.cover_image}`} width={200} height={300} alt={item.course?.title} />
                  <div className="flex flex-col gap-2 w-[90%]">
                    <Link 
                      href={`/dashboard/course-details/${item.course.uid}`}
                      target="_blank" 
                      className="text-grayTwo text-[1rem] lg:text-[1.5rem] leading-[35px] font-semibold"
                    >
                      {item.course?.title}
                    </Link>
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
                  <div className="flex justify-start items-center gap-6 lg:w-[20%]">
                    <p className="text-grayTwo text-[.875rem] leading-[46px] font-semibold flex gap-0.5">
                      ₦ {Number(item.course?.price).toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) || "N/A"}
                    </p>
                    <RiDeleteBin6Line
                      onClick={() => handleRemoveFromCart(item.uid)}
                      className="text-[1.25rem] cursor-pointer text-main font-semibold"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="w-full h-[.75px] rounded-full bg-neutral-200 mb-3"></div>
        </div>
        
        <div className="flex flex-col justify-end items-end gap-6 w-full md:w-fit">
          <p className="text-grayTwo text-2xl md:text-3xl font-bold leading-5">
            ₦{cartItems.reduce((total, item) => total + Number(item.course?.price || 0), 0).toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
          <Link
            href={`/dashboard/checkout`}
            className="bg-main py-[2px] px-[15px] h-[54px] w-[250px] gap-[5px] rounded-lg text-white flex justify-center items-center text-[1rem] leading-[46px] font-semibold"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FilledCart;