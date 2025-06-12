"use client";
import React, { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { HiXMark } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import account from "../../../asset/account.svg";
import notify from "../../../asset/notify.svg";
import shoppingcart from "../../../asset/shoppingcart.svg";
import Image from "next/image";
import { IoIosArrowDown, IoIosMenu, IoMdNotifications } from "react-icons/io";
import SideNav from "./SideNav";
import { Logout } from "@/app/actions/auth";
import { toast } from "react-toastify";
import arrow from "../../../asset/courses/Chevron Down Outline.svg";
import Link from "next/link";
import secureLocalStorage from "react-secure-storage";
import { useDispatch, useSelector } from "react-redux";
import logo from '../../../../public/assets/EdTech Platform Figma.svg';
import axios from "axios";
import { logout } from "@/features/user-details/userDetailsSlice";
import { FaRegUserCircle } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { MdLogout, MdOutlineNotifications } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { RiSettings4Fill } from "react-icons/ri";
import { CgReadme } from "react-icons/cg";
import { clearCookieAuth } from "@/app/utils/authUtils";

const ResponsiveTopNav = ({handleOpenModal, setCloseModal}) => {
  const pathname = usePathname();
  const router = useRouter();
  const [profile, setProfile] = useState(false);
  const routes = [
    { name: "Home", routes: "/dashboard/home" },
    { name: "Settings", routes: "/dashboard/settings" },
    { name: "My Courses", routes: "/dashboard/my-courses" },
    { name: "Incompleted Courses", routes: "/dashboard/courses/incompletedcourses" },
    { name: "Completed Courses", routes: "/dashboard/courses/completedcourses" },
  ];
  const [open, setOpen] = useState(false);
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [query, setQuery] = useState("");
  const profileMenuRef = useRef(null);
  const profileButtonRef = useRef(null);

  const dispatch = useDispatch();

  const carts = useSelector((state) => state.cart.items);

  

    const [cartItems, setCartItems] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
  
    const { token } = useSelector((state) => state.userDetails);
  
    useEffect(() => {
  
      axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}cart`, {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        setIsLoading(false)
        dispatch(setCartItems(response.data.data));

        setCartItems(response.data.data);

      })
      .catch((error) => {
        toast.error(error.response?.data?.message || error.response?.message )
      })
    }, [token])

    


  const handleClose = () => {
    setProfile(false);
  }

  useEffect(() => {
    let closeTimer;
    
    const handleMenuMouseEnter = () => {
      if (closeTimer) {
        clearTimeout(closeTimer);
      }
    };
    
    const handleMenuMouseLeave = () => {
      closeTimer = setTimeout(() => {
        setProfile(false);
      }, 300);
    };
    
    const menuEl = profileMenuRef.current;
    const buttonEl = profileButtonRef.current;
    
    if (profile && menuEl) {
      menuEl.addEventListener('mouseenter', handleMenuMouseEnter);
      menuEl.addEventListener('mouseleave', handleMenuMouseLeave);
    }
    
    if (buttonEl) {
      buttonEl.addEventListener('mouseenter', () => setProfile(true));
      buttonEl.addEventListener('mouseleave', handleMenuMouseLeave);
    }
    
    return () => {
      if (menuEl) {
        menuEl.removeEventListener('mouseenter', handleMenuMouseEnter);
        menuEl.removeEventListener('mouseleave', handleMenuMouseLeave);
      }
      
      if (buttonEl) {
        buttonEl.removeEventListener('mouseenter', () => setProfile(true));
        buttonEl.removeEventListener('mouseleave', handleMenuMouseLeave);
      }
      
      if (closeTimer) {
        clearTimeout(closeTimer);
      }
    };
  }, [profile]);

  const handleLogout = async () => {

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}auth/logout`, {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      dispatch(logout());
      toast.success("Logout successful!");
    

      if (typeof window !== "undefined") {
        window.location.href = '/signin';
      }


      document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      secureLocalStorage.clear();
      clearCookieAuth();

    } catch (error) {
      toast.error(error?.response?.data?.message || "Logout failed");
    }
  };

  const links = [
    {
      id: 1,
      name: 'My Cart',
      route: '/dashboard/shopping-cart',
      icon: (
        <GrCart size={25} />
      )
    },
    {
      id: 2,
      name: 'My Courses',
      route: '/dashboard/my-courses',
      icon: (
        <CgReadme size={25} />
      )
    },
    {
      id: 3,
      name: 'Account Settings',
      route: '/dashboard/settings',
      icon: (
        <RiSettings4Fill size={25} />
      )
    },
    {
      id: 4,
      name: 'Notifications',
      route: "",
      icon: (
        <IoMdNotifications size={25} />
      )
    },
    {
      id: 5,
      name: 'Logout',
      icon: (
        <MdLogout size={25} />
      )
    },
  ]

  const userDetail = secureLocalStorage.getItem('user');


  return (
    <div>

        <div className="bg-white border-r border-neutral-200 h-screen w-[280px] fixed flex flex-col top-0 left-0 z-[99] gap-y-6 justify-between items-center">

          <div onClick={() => setCloseModal(false)} className='bg-white cursor-pointer rounded-full w-12 h-12 flex justify-center items-center absolute top-6 -right-[22%] z-[60]'>
            <HiXMark size={28}/>
          </div>

          <div className="flex flex-col items-center justify-between w-full gap-x-4 max-w-[1300px] 2xl:max-w-[1550px] mx-auto">
            <Link href={'/dashboard/settings'} className="w-full flex flex-col justify-start items-start border-b border-neutral-200 px-4 py-8 gap-2">
              <div className="relative w-12 h-12 rounded-full">
                {/* <img src={userDetail?.profile_image} alt={userDetail.username} className="z-10 w-12 h-12 rounded-full" /> */}
                <div className="w-7 h-7 rounded-full bg-main absolute top-0 z-[5] font-black text-white flex justify-center items-center text-md">
                  {userDetail?.username?.substr(0,1).toUpperCase()}
                </div>
              </div>
              
              <div className="flex flex-col justify-center items-start">
                  {userDetail?.username && (
                  <h1 className="text-md text-black font-semibold duration-200 hover:text-main">{userDetail.username}</h1>
                  )}
                  <p className="text-xs text-grayTwo">{userDetail?.email || ""}</p>
              </div>
            </Link>
              
            {
              links.map((link) => {
                  if (link.name === 'Logout') {
                  return (
                      <>
                      <div className='border-t border-neutral-200 my-2 w-full h-1'></div>
                      <button
                          key={link.id}
                          onClick={() => {
                          setProfile(false);
                          handleLogout();
                          }}
                          className={`text-sm gap-1 duration-200 hover:bg-slate-100 cursor-pointer w-full text-center flex justify-start items-center p-4 ${link.name === 'Logout' && 'rounded-md'}`}
                      >
                        {link.icon}
                        Logout
                      </button>
                      </>
                  );
                  }
                  return (
                    <Link
                      key={link.id}
                      href={link.route}
                      className="w-full flex justify-between items-center gap-2 flex-wrap p-2.5 duration-200 hover:bg-slate-100 cursor-pointer"
                    >
                      <div className="flex justify-between w-full items-center gap-1">
                        {link.icon}
                        <p className="text-sm w-full text-center flex justify-between items-center">
                          {link.name}

                        {link.name === 'My Cart' && 
                          (
                            <div className="bg-red-600 text-white w-5 h-5 text-base font-bold text-center rounded-full flex justify-center items-center">
                              {cartItems?.length}
                            </div>
                          )
                        }
                        </p>
                      </div>
                    </Link>
                  );
              })
            }
            </div>
        </div>
    </div>
  );
};

export default ResponsiveTopNav;