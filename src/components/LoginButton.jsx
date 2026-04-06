"use client";
import { signIn } from "next-auth/react";
import React from "react";

const LoginButton = () => {
  // undefined deyar mane hocche NextAuth tar built-in login page-e niye jabe
  // ebong success hole callbackUrl (home page) e redirect korbe
  return (
    <button
      className="bg-orange-600 px-5 py-2 rounded-full text-sm font-bold hover:bg-orange-700 transition shadow-md rounded-full px-4 md:px-6"
      onClick={() => signIn(undefined, { callbackUrl: "/" })}
    >
      Login
    </button>
  );
};

export default LoginButton;
