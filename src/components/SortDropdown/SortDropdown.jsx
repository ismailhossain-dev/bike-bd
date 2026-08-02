"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function SortDropdown({ sortBy }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSortChange = (e) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", e.target.value);
    
    // পেজ রিলোড ছাড়া URL আপডেট করবে
    router.push(`/allbikes?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-medium text-gray-400 hidden sm:inline">Sort By:</span>
      <select
        value={sortBy}
        onChange={handleSortChange}
        className="bg-[#181818] text-white border border-white/10 rounded-lg text-xs font-bold py-2 px-3 focus:outline-none focus:border-red-600 cursor-pointer"
      >
        <option value="default">Default Order</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
      </select>
    </div>
  );
}