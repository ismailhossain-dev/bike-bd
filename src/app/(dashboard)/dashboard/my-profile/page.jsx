"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

const DashboardMyProfilePage = () => {
  const { data: session, status } = useSession();

  console.log("Session:", session);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div className="border-2 flex  items-center mx-auto  bg-[#0f0f0f] border-r border-white/5 h-64 w-full ">
     {/* left side */}
     <div className="">
        <h1>My Profile</h1>

      <p>Name: {session?.user?.name}</p>
      <p>Email: {session?.user?.email}</p>
     </div>

{/* Right side */}
     <div>
         {session?.user?.image && (
        <Image
          src={session.user.image}
          className=""
          alt="Profile"
          width={200}
          height={200}
        />
      )}
     </div>
    </div>
  );
};

export default DashboardMyProfilePage;