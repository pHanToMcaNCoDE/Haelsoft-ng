import React from "react";
import TopNav from "./TopNav";
import { cookies } from "next/headers";
// import { useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";

const TopNavSever = () => {
 

  return (
    <div>
      <TopNav Logout={Logout} />
    </div>
  );
};

export default TopNavSever;
