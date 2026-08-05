import AccessoriesCard from "@/components/Cards/AccessoriesCard";
import Footer from "@/components/Footer/Footer";

import Navbar from "@/components/Navbar/Navbar";
import { Search } from "lucide-react";
import React from "react";

const AccessoriesPage = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/all-accessories`,
    {
      cache: "no-store",
    },
  );

  const data = await res.json();
  const bikes = data.data;

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto lg:max-[1420px]  py-4 px-4 sm:px-8 lg:px-12">
            {/* Search Bar */}
          <div className=" border-b border-white/10 mb-6">
            <form action="/all-bikes" method="GET" className="relative  w-full">
              {/* {selectedBrand !== "ALL" && (
                <input type="hidden" name="brand" value={selectedBrand} />
              )}
              {sortBy !== "default" && (
                <input type="hidden" name="sort" value={sortBy} />
              )} */}
              <div className="relative flex items-center">
                <input
                  type="text"
                  name="search"
                  // defaultValue={searchQuery}
                  placeholder="Search by brand name, model or product type..."
                  className="w-full pl-11 pr-28 py-3.5 bg-black/50 border border-white/15 rounded-xl text-xs sm:text-sm font-medium text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition-all"
                />
                <Search className="absolute left-4 text-gray-400" size={18} />
                <button
                  type="submit"
                  className="absolute right-1.5 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-wider rounded-lg transition-all"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          {/*  */}
        <div className="text-4xl font-bold1">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {bikes.map((bike) => (
              <AccessoriesCard key={bike._id} bike={bike}></AccessoriesCard>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AccessoriesPage;
