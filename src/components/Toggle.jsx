"use client";
import React, { useState } from "react";
const Toggle = () => {
  const [showpassword, setshowpassword] = useState(false);
  const [showconfirmpassword, setshowconfirmpassword] = useState(false);
  return {
    showpassword,
    setshowpassword,
    showconfirmpassword,
    setshowconfirmpassword,
  };
};

export default Toggle;
