import { signIn } from 'next-auth/react'; 
import React from 'react'; 
import { FcGoogle } from "react-icons/fc"; 

const GoogleLogin = () => {
    return (
        <button
          type="button" // Form submit jeno na hoy seijonno type button deya hoyeche
          onClick={() => signIn("google", { callbackUrl: "/" })} // Click korle Google login shuru hobe ebong pore home page a niye jabe
          className="mt-4 flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-5 py-3.5 text-sm font-bold text-gray-700 shadow-sm transition-all duration-300 hover:bg-gray-50 hover:border-gray-300 active:scale-[0.98]"
          // Light theme er sathe milie premium white background ar soft gray border deya hoyeche
        >
          <FcGoogle size={22} className="shrink-0" /> 
          <span className="tracking-wide">Sign in with Google</span> {/* Text ta k ektu clean dekhano jonno tracking use kora holo */}
        </button>
    );
};

export default GoogleLogin; 