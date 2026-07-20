"use cleint"
import React, { useState } from 'react';
import { Heart } from "lucide-react";
import useAxiosSecure from '@/components/hooks/useAxiosSecure';
// _id
// title
// price
// image
// size
// email
// name
// createdAt
const WishlistButton = ({bike}) => {
  const axiosSecure = useAxiosSecure()
      const [isWishlisted, setIsWishlisted] = useState(false);
      // console.log("wishlist bike data", bike)

  const handleWishlistToggle = async(e) => {
    e.preventDefault(); 
    const res = await axiosSecure.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/wishlist`, {
      
    })
    console.log("client wishlist", res);
    setIsWishlisted(!isWishlisted);
  };
    return (
        <div>
             <button
            onClick={handleWishlistToggle}
            className={`flex h-10 w-10 items-center justify-center rounded-full bg-white transition-all duration-300 shadow-md border border-gray-100 active:scale-90
            xl:opacity-0 xl:translate-x-4 xl:group-hover:opacity-100 xl:group-hover:translate-x-0 duration-500 delay-[120ms] ${
              isWishlisted ? "text-red-500" : "text-gray-700 hover:text-red-500"
            }`}
            title="Add to Wishlist"
          >
            <Heart size={16} className={isWishlisted ? "fill-red-500" : ""} />
          </button>
        </div>
    );
};

export default WishlistButton;