'use client';

import React, { Suspense } from "react";
import VerifiedComponent from "./VerifiedComponent";

const Verified = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifiedComponent />
    </Suspense>
  );
};

export default Verified;

