"use cleint";
import React, { useState } from "react";
import { Heart } from "lucide-react";
import useAxiosSecure from "@/components/hooks/useAxiosSecure";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";

const WishlistButton = ({ bike }) => {
  const { name, image, framesize, price, _id } = bike;
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { data: session, status } = useSession();
  const axiosSecure = useAxiosSecure()
  // console.log("whilst session ", session)
  if (status === "loading") {
    return <p>Loading....</p>;
  }

  // console.log(session)
  const handleWishlistToggle = async (e) => {
    e.preventDefault();
  if (!session) {
    toast.warn("Please login first");
    return;
  }
    setIsWishlisted(!isWishlisted);
    try {
      const wishlistData = {
        //id ta ditese backend cheek korar jonno ei wishlit age teke user exist kore rakse kina
        productId: _id,
        title: name,
        price: price,
        image: image,
        size: framesize,
        name: session?.user?.name,
        email: session?.user?.email,
        createdAt: new Date().toISOString(),
      };
      const res = await axiosSecure.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/wishlist`,
        wishlistData,
      );
      // console.log("client wishlist", res);
    } catch (error) {
      console.log("wishlist post client error", error);
    }
    // finally{

    // }
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
