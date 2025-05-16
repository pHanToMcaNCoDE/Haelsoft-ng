'use client'

import SideNav from "@/app/dashboard/(dashboardcomponents)/SideNav";
import TopNav from "@/app/dashboard/(dashboardcomponents)/TopNav";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ResponsiveTopNav from "./(dashboardcomponents)/ResponsiveTopNav";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "@/components/Loader";
import { setAuth } from "@/features/user-details/userDetailsSlice";

const DashboardLayout = ({ children }) => {
  const { isAuthenticated, token } = useSelector((state) => state.userDetails);
  const router = useRouter();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);
  const modalRef = useRef(null);
  const [closeModal, setCloseModal] = useState(false);

  const handleCloseModal = () => {
    setCloseModal(false);
  };

  const handleOpenModal = () => {
    if (closeModal) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    // Check for auth data in sessionStorage if not in Redux
    if (!isAuthenticated || !token) {
      try {
        const sessionData = sessionStorage.getItem("authSession");
        if (sessionData) {
          const parsedData = JSON.parse(sessionData);
          if (parsedData && parsedData.token) {
            // If session data exists, set it in Redux
            dispatch(setAuth({ 
              token: parsedData.token, 
              user: { 
                user_uuid: parsedData.user_uuid,
                first_name: parsedData.name
              } 
            }));
            setIsLoading(false);
            return;
          }
        }
        // If no auth data found, redirect to signin
        console.log("No authentication found, redirecting to sign-in...");
        router.replace('/signin');
      } catch (error) {
        console.error("Error checking auth session:", error);
        router.replace('/signin');
      }
    } else {
      setIsLoading(false);
    }
  }, [isAuthenticated, token, router, dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="min-h-screen">
      <div className="w-full">
        <TopNav setCloseModal={setCloseModal} />
        <AnimatePresence initial={false}>
          {closeModal ? (
            <motion.div
              ref={modalRef}
              onClick={handleOpenModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key="box"
              className="fixed top-0 left-0 w-screen h-screen bg-black/60 z-50 lg:hidden"
            >
              <ResponsiveTopNav handleOpenModal={handleOpenModal} setCloseModal={setCloseModal} />
            </motion.div>
          ) : null}
        </AnimatePresence>
        <div>{children}</div>
      </div>
    </section>
  );
};

export default DashboardLayout;