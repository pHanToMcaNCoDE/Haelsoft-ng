'use client';

import React, { Suspense } from "react";
import ChangePasswordComponent from "./ChangePasswordComponent";

const ChangePassword = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ChangePasswordComponent />
    </Suspense>
  );
};

export default ChangePassword;
