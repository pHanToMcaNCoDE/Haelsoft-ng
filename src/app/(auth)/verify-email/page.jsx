'use client';

import Loading from "@/app/dashboard/(dashboardcomponents)/loading";
import React, { Suspense } from "react";
import EmailVerified from "./EmailVerified";

const EmailVerifiedWrapper = () => {
  return (
    <Suspense fallback={<Loading />}>
      <EmailVerified />
    </Suspense>
  );
};

export default EmailVerifiedWrapper;

