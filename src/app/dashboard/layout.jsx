'use client'

import SideNav from "@/app/dashboard/(dashboardcomponents)/SideNav";
import TopNav from "@/app/dashboard/(dashboardcomponents)/TopNav";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const DashboardLayout = ({ children }) => {
  const { isAuthenticated, token } = useSelector((state) => state.userDetails);
  const router = useRouter();


  useEffect(() => {
    if (!isAuthenticated || !token) {
      router.replace('/signin');
    }
  }, [isAuthenticated, token, router]);



  return (
    <section className="min-h-screen">
      {/* <div className="">
        <SideNav />
      </div> */}

      <div className="w-full">
        <TopNav />
          <div> {children}</div>
      </div>
    </section>
  );
};

export default DashboardLayout;