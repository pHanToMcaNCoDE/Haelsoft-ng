import Image from "next/image";
import React from "react";



const EnterpriseTrainingFeatures = ({features}) => {
  return (
    <section className="flex flex-col justify-center items-start py-[100px] lg:pb-[200px] bg-gray-100 p-8 gap-[150px]">
      {features}
    </section>
  );
};

export default EnterpriseTrainingFeatures;
