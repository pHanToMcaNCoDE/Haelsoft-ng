'use client'

import SideNav from "@/app/dashboard/(dashboardcomponents)/SideNav";
import TopNav from "@/app/dashboard/(dashboardcomponents)/TopNav";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import ResponsiveTopNav from "./(dashboardcomponents)/ResponsiveTopNav";
import { AnimatePresence, motion } from "framer-motion";

const DashboardLayout = ({ children }) => {
  const { isAuthenticated, token } = useSelector((state) => state.userDetails);
  const router = useRouter();

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
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (!isAuthenticated && !token) {
        router.replace('/signin');
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [isAuthenticated, token, router]);

  if (isLoading) {
    return null;
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
