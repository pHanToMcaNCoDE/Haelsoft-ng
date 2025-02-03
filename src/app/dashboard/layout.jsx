import SideNav from "@/app/dashboard/(dashboardcomponents)/SideNav";
import TopNav from "@/app/dashboard/(dashboardcomponents)/TopNav";
import React from "react";

const DashboardLayout = ({ children }) => {
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