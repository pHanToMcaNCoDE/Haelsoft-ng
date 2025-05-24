"use client";
import React, { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
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
import { MdLogout, MdOutlineKeyboardArrowDown, MdOutlineNotifications } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import Menu from "@/components/LandingPageComponents/MenuData/Menu";
import { CgReadme } from "react-icons/cg";
import { RiSettings4Fill } from "react-icons/ri";
import { useSelect } from "@nextui-org/react";

const TopNav = ({setCloseModal}) => {
  const pathname = usePathname();
  const [clicked, setClicked] = useState(null);
  const menuRef = useRef(null)
  const subMenuRef = useRef(null);
  
  const dispatch = useDispatch();

  const carts = useSelector((state) => state.cart.items);

    
  // if(pathname.includes('/dashboard/watch')){
  //   return null
  // }
  
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setClicked('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const router = useRouter();
  const [profile, setProfile] = useState(false);
  const routes = [
    { name: "Home", routes: "/dashboard/home" },
    { name: "Settings", routes: "/dashboard/settings" },
    { name: "My Courses", routes: "/dashboard/courses" },
    { name: "Incompleted Courses", routes: "/dashboard/courses/incompletedcourses" },
    { name: "Completed Courses", routes: "/dashboard/courses/completedcourses" },
  ];
  const [open, setOpen] = useState(false);
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [query, setQuery] = useState("");

  const [menu, setMenu] = useState(false);

  const profileMenuRef = useRef(null);
  const profileButtonRef = useRef(null);


    const [cartItems, setCartItems] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
  
    
    const { token } = useSelector((state) => state.userDetails);
    const user = secureLocalStorage.getItem('user')

    // console.log('TOken from redux', token)
    // console.log('user from redux', user)
  
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

      toast.success("Logout successful!");
      document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      secureLocalStorage.clear();
      dispatch(logout());

      router.push('/signin');
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


  const menuLinks = [
    // { name: 'Home', link: '/' },
    // { name: 'About', link: '#' },
    { name: 'Courses', link: '#' },
    // { name: 'Blog', link: '/blogs' },
    // { name: 'Corporate', link: '#' },
    // { name: 'Careers', link: '/careers' },
    // { name: 'Bootcamps', link: '#' },
  ];

  // const user = JSON.parse(secureLocalStorage.getItem('user'));
  // const { user } = useSelector((state) => state.userDetails);

  console.log('User Details', user);


  return (
    <div className="bg-white border-b border-b-[#d0cfcf] h-[70px] px-4 sticky flex flex-col top-0 z-50 gap-y-6 justify-between items-center py-3">
      <div className="flex items-center justify-between w-full gap-x-4 max-w-[1300px] 2xl:max-w-[1550px] mx-auto">
        <div className="flex gap-x-4 justify-center items-center">
          <Link href={`/dashboard/home`}>
            <Image width={120} height={120} className="object-cover" src={logo} alt="Haelsoft Logo"></Image>
          </Link>
        </div>

          <Link href={`/dashboard/home`} className="p-2 rounded-[4px] duration-200 hover:bg-main/[15%] text-black text-[1.125rem] hidden lg:flex">
            Explore
          </Link>

        <div className='nav-modal w-fit'>
          <ul className="flex gap-8 text-[1.125rem] text-black">
            {menuLinks.map((item, index) => (
              <li
                key={index}
                className="group relative"
                ref={item.name === 'Courses' && clicked === item.name ? menuRef : null}
              >
                {item.name === 'Courses' ? (
                  <div
                    className="flex items-center gap-1 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      setClicked((prev) => (prev === item.name ? '' : item.name));
                    }}
                  >
                    <span>{item.name}</span>
                    <MdOutlineKeyboardArrowDown
                      className={`transition-transform ${
                        clicked === item.name ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </div>
                ) : (
                  <Link href={item.link}>{item.name}</Link>
                )}


              </li>
            ))}
          </ul>


          {clicked && (
            <div className="absolute inset-x-0 top-full w-full bg-white shadow-xl z-[99]">
              <div className="max-w-[1350px] mx-auto px-6 py-10">
                <Menu
                  menuRef={menuRef}
                  menu={menu}
                  setMenu={setMenu}
                  clicked={clicked}
                />
              </div>
            </div>
          )}

        </div>

         <div
            className={`relative gap-2 w-[60%] lg:w-[552px] hidden lg:flex ${
              query
                ? "rounded-t-[6px] border-b-0 ease-in-out duration-300"
                : "rounded-3xl ease-in-out duration-300"
            } border border-[#9c918d] flex justify-between items-center px-3 h-[41px]`}
          >
            <input
              type="text"
              name="q"
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              className="w-full outline-none ring-0 px-1"
              placeholder="What do you want to learn?"
              onClick={() => {
                setIsSearchClicked(true);
              }}
            />
            <div className="bg-main text-white flex items-center justify-center rounded-full h-8 w-8 cursor-pointer">
              <IoSearch className="text-xl" />
            </div>
            <div
              onClick={() => {
                setIsSearchClicked(false);
              }}
              className={`absolute lg:w-full max-w-[522px] ${
                query
                  ? "ease-in-out duration-300 opacity-[100%]"
                  : "opacity-0 ease-in-out duration-300 hidden"
              } z-[100] lg:w-full left-[1px] -right-[2px] h-[253px] bg-white top-[2.6rem] border max-w-[398px] border-[#9c918d] border-t-0 rounded-b-[6px] shadow-lg px-4 cursor-pointer`}
            >
              <div className="w-full gap-x-2 mt-4 flex text-grayTwo items-center">
                <IoSearch className="text-grayTwo" /> Search Engine Optimization
              </div>
            </div>
          </div>
        <div className="justify-center items-center flex gap-x-8">

            <Link
              href="/dashboard/home"
              className="relative w-full flex justify-between items-center flex-wrap duration-200 cursor-pointer"
            >
              <MdOutlineNotifications size={28} />
            </Link>

            <Link
              href="/dashboard/shopping-cart"
              className="w-full flex justify-between items-center flex-wrap duration-200 cursor-pointer"
            >
              <div className="relative">
                <GrCart size={25} />
                
                <div className="bg-red-600 text-white w-5 h-5 text-base font-bold text-center rounded-full flex justify-center items-center absolute -top-2 -right-2">
                  {cartItems?.length}
                </div>
              </div>
            </Link>


          <div className="w-auto relative hidden lg:flex">
            <motion.div
              ref={profileButtonRef}
              className="flex justify-center items-center gap-1 cursor-pointer text-black"
              whileTap={{ y: 1 }}
            >
              <FaRegUserCircle size={25} />
            </motion.div>
            <AnimatePresence initial={false}>
                {profile ? (
                    <motion.div
                      ref={profileMenuRef}
                      initial={{ opacity: 0}}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0}}
                      key="box"
                      className={`transition-all duration-200 absolute top-full right-0 mt-2 w-72 border border-neutral-200 z-[99] flex shadow-xl flex-col justify-start items-center rounded-md pt-5 bg-white`}
                    >
                      <Link href={'/dashboard/settings'} className="w-full flex justify-start items-start lg:items-center border-b border-neutral-200 px-2.5 pb-4 gap-2">

                        <div className="relative">
                          <img src={user?.profile_image} alt={user?.username} className="z-10 w-12 h-12 rounded-full" />
                          <div className="w-12 h-12 rounded-full bg-main absolute top-0 z-[5] font-black text-white flex justify-center items-center text-lg">
                            {user?.username?.substr(0,1)}
                          </div>
                      </div>

                        <div className="flex flex-col justify-center items-start">
                          {user?.username && (
                            <h1 className="text-md text-black font-semibold duration-200 hover:text-main">{user.username}</h1>
                          )}
                          <p className="text-xs text-grayTwo">{user?.email || ""}</p>
                        </div>
                      </Link>
                      <div className="flex flex-col justify-start items-start mt-3 w-full">
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
                                    className={`text-sm duration-200 hover:bg-slate-100 cursor-pointer w-full text-center flex justify-start items-center gap-1 px-2.5 py-3 ${link.name === 'Logout' && 'rounded-md'}`}
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
                                    )}
                                  </p>
                                </div>
                              </Link>
                            );
                          })
                        }
                      </div>
                    </motion.div>
                ) : null}
            </AnimatePresence>
          </div>
          
          <div className="w-full flex lg:hidden justify-center items-center cursor-pointer">
            <IoIosMenu size={25} className="curspr-pointer" onClick={() => setCloseModal(true)}/>
          </div>
        </div>
      </div>
      <div
        className={`w-full relative md:w-[70%] lg:w-full max-w-[522px] hidden ${
          query
            ? "rounded-t-[6px] border-b-0 ease-in-out duration-300"
            : "rounded-3xl ease-in-out duration-300"
        } border border-[#9c918d] flex justify-between items-center px-3 h-[43px]`}
      >
        <input
          type="text"
          name="q"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          className="w-full outline-none max-w-[320px] ring-0"
          placeholder="What do you want to learn?"
          onClick={() => {
            setIsSearchClicked(true);
          }}
        />
        <div className="bg-main text-white flex items-center justify-center rounded-full h-6 w-6 cursor-pointer">
          <IoSearch />
        </div>
        <div
          onClick={() => {
            setIsSearchClicked(false);
          }}
          className={`absolute lg:w-full max-w-[522px] ${
            query
              ? "ease-in-out duration-300 opacity-[100%]"
              : "opacity-0 ease-in-out duration-300 hidden"
          } z-[100] lg:w-full left-[1px] -right-[2px] h-[253px] bg-white top-[2.6rem] border max-w-[398px] border-[#9c918d] border-t-0 rounded-b-[6px] shadow-lg px-4 cursor-pointer`}
        >
          <div className="w-full gap-x-2 mt-4 flex text-grayTwo items-center">
            <IoSearch className="text-grayTwo" /> Search Engine Optimization
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;