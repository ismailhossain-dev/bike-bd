"use client";

import useAxiosSecure from '@/components/hooks/useAxiosSecure';
import { ShoppingCart } from 'lucide-react';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

function AddtoCart({ bike }) {
  const axiosSecure = useAxiosSecure();
  const { data: session, status } = useSession();
  const [isCart, setIsCart] = useState(false);
  const { name, image, framesize, price, _id } = bike || {};

  if (status === "loading") {
    return <p>Loading....</p>;
  }

  const handleAddToCart = async (e) => {
    e.preventDefault();

    if (!session) {
      toast.warn("Please login first");
      return;
    }

    try {
      const cartData = {
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
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart`,
        cartData
      );

      if (res?.data?.result?.acknowledged) {
        setIsCart(true);
        toast.success(res.data.message || "Successfully added to Cart");
      }
    } catch (error) {
      console.log(error);
      toast.warning(
        error?.response?.data?.message || "Something went wrong"
      );
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleAddToCart}
        className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 shadow-md border border-gray-100 active:scale-90 xl:opacity-0 xl:translate-x-4 xl:group-hover:opacity-100 xl:group-hover:translate-x-0 ${
          isCart 
            ? "bg-orange-600 text-white border-orange-600" 
            : "bg-white text-gray-700 hover:text-orange-600"
        }`}
        title="Add to Cart"
      >
        <ShoppingCart size={16} />
      </button>
    </div>
  );
}

export default AddtoCart;