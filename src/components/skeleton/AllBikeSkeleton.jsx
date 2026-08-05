import React from "react";

const all-bikeskeleton = () => {
  return (
    <div className="animate-pulse bg-white rounded-2xl shadow-md overflow-hidden">
      {/* Image Skeleton */}
      <div className="h-48 w-full bg-gray-300"></div>

      <div className="p-4 space-y-3">
        {/* Name */}
        <div className="h-5 bg-gray-300 rounded w-3/4"></div>

        {/* Brand & Category */}
        <div className="flex gap-2">
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
        </div>

        {/* Details */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        </div>

        {/* Price & Rating */}
        <div className="flex justify-between items-center pt-2">
          <div className="h-5 bg-gray-300 rounded w-1/3"></div>
          <div className="h-5 bg-gray-300 rounded w-1/6"></div>
        </div>
      </div>
    </div>
  );
};

export default all-bikeskeleton;
