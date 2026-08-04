import BikeCard from "@/components/Cards/BikeCard";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

import Link from "next/link"; 
import React from "react";
import { Search, RotateCcw, Compass, SlidersHorizontal, Sparkles, ShieldCheck, Tag } from "lucide-react";
import SortDropdown from "@/components/SortDropdown/SortDropdown";

const Page = async ({ searchParams }) => {
  const resolvedSearchParams = await searchParams;
  
  // URL Params হ্যান্ডলিং
  const currentPage = Number(resolvedSearchParams?.page) || 1; 
  const selectedBrand = resolvedSearchParams?.brand || "ALL";
  const searchQuery = resolvedSearchParams?.search || "";
  const maxPriceParam = resolvedSearchParams?.maxPrice ? Number(resolvedSearchParams?.maxPrice) : null;
  const sortBy = resolvedSearchParams?.sort || "default";
  
  const itemsPerPage = 9; 

  // API ফেচিং (Server Component direct async fetch)
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/allBikes?page=${currentPage}&limit=${itemsPerPage}`,
    { cache: "no-store" }
  );

  const bikes = await res.json();
  const rawBikes = bikes?.result || [];

  // ১. ডাইনামিক ব্র্যান্ড তালিকা ও ব্রান্ড অনুযায়ী আইটেম সংখ্যা বের করা
  const brandCounts = rawBikes.reduce((acc, item) => {
    if (item.brand) {
      acc[item.brand] = (acc[item.brand] || 0) + 1;
    }
    return acc;
  }, {});

  const allBrands = Object.keys(brandCounts);
  const finalBrands = ["ALL", ...allBrands];

  // ২. ফিল্টারিং ও সার্চ লজিক
  let filteredBikes = [...rawBikes];

  // ব্র্যান্ড ফিল্টার
  if (selectedBrand !== "ALL") {
    filteredBikes = filteredBikes.filter(
      (bike) => bike.brand?.toLowerCase() === selectedBrand.toLowerCase()
    );
  }

  // সার্চ ফিল্টার
  if (searchQuery.trim() !== "") {
    filteredBikes = filteredBikes.filter((bike) =>
      bike.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bike.brand?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bike.category?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // প্রাইস ফিল্টার
  if (maxPriceParam) {
    filteredBikes = filteredBikes.filter((bike) => {
      const numericPrice = parseInt(bike.price?.toString().replace(/[^0-9]/g, "")) || 0;
      return numericPrice <= maxPriceParam;
    });
  }

  // শর্টিং লজিক (Price low/high)
  if (sortBy === "price-low") {
    filteredBikes.sort((a, b) => {
      const p1 = parseInt(a.price?.toString().replace(/[^0-9]/g, "")) || 0;
      const p2 = parseInt(b.price?.toString().replace(/[^0-9]/g, "")) || 0;
      return p1 - p2;
    });
  } else if (sortBy === "price-high") {
    filteredBikes.sort((a, b) => {
      const p1 = parseInt(a.price?.toString().replace(/[^0-9]/g, "")) || 0;
      const p2 = parseInt(b.price?.toString().replace(/[^0-9]/g, "")) || 0;
      return p2 - p1;
    });
  }

  // ৩. পেজিনেশন গণনা
  const totalItems = filteredBikes.length;
  const totalPages = Math.ceil((bikes.total || totalItems) / itemsPerPage) || 1;
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="bg-[#0b0c10] text-gray-100 min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="container mx-auto my-6 md:my-10 px-4 sm:px-6 lg:px-8 flex-grow max-w-7xl  lg:max-[1420px]">
        
        {/* --- Header Banner --- */}
        <div className="bg-gradient-to-r from-[#121212] via-[#1a1a1a] to-[#121212] rounded-2xl p-6 sm:p-10 mb-8 border border-white/10 relative overflow-hidden shadow-2xl">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/30 text-red-500 text-xs font-black uppercase tracking-widest">
                <Sparkles size={13} />
                <span>Official Showroom</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
                Explore <span className="text-red-600">Top Brands</span>
              </h1>
              
              <p className="text-gray-400 text-xs sm:text-sm font-medium leading-relaxed">
                Browse our full inventory by your favorite manufacturer or search specific models.
              </p>
            </div>

            {/* Live Counter Badge */}
            <div className="flex items-center gap-3 bg-[#181818] border border-white/10 px-5 py-3 rounded-xl">
              <div className="p-2.5 bg-red-600/20 text-red-500 rounded-lg">
                <Compass size={22} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Selected Fleet</p>
                <p className="text-lg font-black text-white">{filteredBikes.length} Products Found</p>
              </div>
            </div>

          </div>

          {/* Search Bar */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <form action="/allbikes" method="GET" className="relative max-w-2xl w-full">
              {selectedBrand !== "ALL" && (
                <input type="hidden" name="brand" value={selectedBrand} />
              )}
              {sortBy !== "default" && (
                <input type="hidden" name="sort" value={sortBy} />
              )}
              <div className="relative flex items-center">
                <input
                  type="text"
                  name="search"
                  defaultValue={searchQuery}
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

        </div>

        {/* --- Main Layout Grid --- */}
        <div className="grid grid-cols-12 gap-8">
          
          {/* --- Sidebar: Brand Filters --- */}
          <div className="col-span-12 lg:col-span-3 space-y-6">
            
            <div className="bg-[#121212] p-5 rounded-2xl border border-white/10 sticky top-24">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal size={16} className="text-red-600" />
                  <h3 className="text-xs font-black uppercase tracking-widest text-white">
                    Filter By Brand
                  </h3>
                </div>

                {(selectedBrand !== "ALL" || searchQuery || maxPriceParam || sortBy !== "default") && (
                  <Link
                    href="/allbikes"
                    className="text-[11px] font-bold text-red-500 hover:text-red-400 flex items-center gap-1 transition"
                  >
                    <RotateCcw size={12} /> Reset
                  </Link>
                )}
              </div>

              {/* Dynamic Brand Buttons */}
              <div className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
                {finalBrands.map((brandName) => {
                  const isActive = selectedBrand.toLowerCase() === brandName.toLowerCase();
                  
                  const brandUrl = `/allbikes?brand=${encodeURIComponent(brandName)}${
                    searchQuery ? `&search=${encodeURIComponent(searchQuery)}` : ""
                  }${sortBy !== "default" ? `&sort=${sortBy}` : ""}`;

                  const count = brandName === "ALL" ? rawBikes.length : brandCounts[brandName] || 0;

                  return (
                    <Link
                      key={brandName}
                      href={brandUrl}
                      className={`whitespace-nowrap px-4 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-200 flex items-center justify-between gap-3 shrink-0 lg:shrink ${
                        isActive
                          ? "bg-red-600 text-white shadow-lg shadow-red-600/30"
                          : "bg-[#181818] text-gray-300 hover:bg-white/5 hover:text-white border border-white/5"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Tag size={13} className={isActive ? "text-white" : "text-gray-500"} />
                        <span>{brandName}</span>
                      </div>

                      {/* Item Count Badge */}
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                        isActive ? "bg-black/30 text-white" : "bg-white/10 text-gray-400"
                      }`}>
                        {count}
                      </span>
                    </Link>
                  );
                })}
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 hidden lg:block">
                <div className="p-3 bg-[#181818] border border-white/5 rounded-xl flex items-center gap-3">
                  <ShieldCheck size={24} className="text-red-500 shrink-0" />
                  <div>
                    <p className="text-[11px] font-black text-white uppercase">100% Genuine</p>
                    <p className="text-[10px] text-gray-400">Authentic Parts & Bikes</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* --- Product Grid Section --- */}
          <div className="col-span-12 lg:col-span-9">
            
            {/* Sorting Toolbar */}
            <div className="flex items-center justify-between mb-6 bg-[#121212] p-4 rounded-xl border border-white/10">
              <p className="text-xs font-bold text-gray-400 uppercase">
                Showing <span className="text-white">{filteredBikes.length}</span> Results
              </p>

              {/* Server Component-এর ভেতরে ডাইনামিক ড্রপডাউন */}
              <SortDropdown sortBy={sortBy} />
            </div>

            {/* Bike Grid */}
            {filteredBikes.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBikes.map((bike) => (
                  <BikeCard key={bike._id} bike={bike} />
                ))}
              </div>
            ) : (
              <div className="bg-[#121212] rounded-2xl p-12 text-center border border-white/10 my-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-600/10 text-red-500 rounded-full flex items-center justify-center">
                  <Search size={28} />
                </div>
                <h4 className="text-base font-black text-white uppercase">No items found</h4>
                <p className="text-gray-400 text-xs mt-1 max-w-sm mx-auto">
                  No products matched your selected brand or search terms.
                </p>
                <Link
                  href="/allbikes"
                  className="inline-block mt-5 px-6 py-3 bg-red-600 text-white text-xs font-black uppercase tracking-wider rounded-lg hover:bg-red-700 transition"
                >
                  Clear All Filters
                </Link>
              </div>
            )}
          </div>

        </div>

        {/* --- Pagination --- */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 border-t border-white/10 pt-8 mt-12">
            {pageNumbers.map((pageNumber) => {
              const pageUrl = `/allbikes?page=${pageNumber}${
                selectedBrand !== "ALL" ? `&brand=${selectedBrand}` : ""
              }${searchQuery ? `&search=${searchQuery}` : ""}${
                sortBy !== "default" ? `&sort=${sortBy}` : ""
              }`;

              return (
                <Link
                  key={pageNumber}
                  href={pageUrl}
                  className={`px-4 py-2.5 rounded-lg font-black text-xs transition-all duration-300 ${
                    currentPage === pageNumber
                      ? "bg-red-600 text-white shadow-lg shadow-red-600/30"
                      : "bg-[#121212] text-gray-400 hover:bg-white/10 border border-white/10"
                  }`}
                >
                  {pageNumber}
                </Link>
              );
            })}
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
};

export default Page;