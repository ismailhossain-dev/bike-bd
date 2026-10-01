import AccessoriesCard from "@/components/Cards/AccessoriesCard";
import Container from "@/components/Container/Container";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";
import React from "react";
import { Search, RotateCcw, SlidersHorizontal, Tag, ShieldCheck } from "lucide-react";

const AccessoriesPage = async ({ searchParams }) => {
  const resolvedSearchParams = await searchParams;

  const selectedBrand = resolvedSearchParams?.brand || "ALL";
  const searchQuery = resolvedSearchParams?.search || "";

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/all-accessories`,
    {
      cache: "no-store",
    },
  );

  const data = await res.json();
  const rawAccessories = data?.data || [];

  const brandCounts = rawAccessories.reduce((acc, item) => {
    if (item.brand) {
      acc[item.brand] = (acc[item.brand] || 0) + 1;
    }
    return acc;
  }, {});

  const allBrands = Object.keys(brandCounts);
  const finalBrands = ["ALL", ...allBrands];

  let filteredAccessories = [...rawAccessories];
  if (selectedBrand !== "ALL") {
    filteredAccessories = filteredAccessories.filter(
      (item) => item.brand?.toLowerCase() === selectedBrand.toLowerCase()
    );
  }

  if (searchQuery.trim() !== "") {
    filteredAccessories = filteredAccessories.filter((item) =>
      item.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.brand?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return (
    <div className="bg-[#0b0c10] text-gray-100 min-h-screen flex flex-col justify-between">
      <Navbar />
      
      <Container>
        <main className="container mx-auto my-6">

          {/* --- Header Banner & Search Section --- */}
          <div className="bg-gradient-to-r from-[#121212] via-[#1a1a1a] to-[#121212] rounded-2xl p-6 sm:p-10 mb-8 border border-white/10 relative overflow-hidden shadow-2xl">
            
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              
              <div className="space-y-2 max-w-xl">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
                  Explore <span className="text-red-600">Accessories</span>
                </h1>
                <p className="text-gray-400 text-xs sm:text-sm font-medium leading-relaxed">
                  Browse our full inventory of premium accessories and parts.
                </p>
              </div>

              {/* Live Counter Badge */}
              <div className="flex items-center gap-3 bg-[#181818] border border-white/10 px-5 py-3 rounded-xl w-fit">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Total Found</p>
                  <p className="text-lg font-black text-white">{filteredAccessories.length} Products</p>
                </div>
              </div>

            </div>

            {/* --- Fully Responsive Search Bar --- */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <form action="/all-accessories" method="GET" className="relative max-w-2xl w-full">
                {selectedBrand !== "ALL" && (
                  <input type="hidden" name="brand" value={selectedBrand} />
                )}
                <div className="relative flex items-center">
                  <input
                    type="text"
                    name="search"
                    defaultValue={searchQuery}
                    placeholder="Search by brand name, model or product type..."
                    className="w-full pl-11 pr-24 sm:pr-28 py-3.5 bg-black/50 border border-white/15 rounded-xl text-xs sm:text-sm font-medium text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition-all"
                  />
                  <Search className="absolute left-4 text-gray-400" size={18} />
                  <button
                    type="submit"
                    className="absolute right-1.5 px-4 sm:px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-wider rounded-lg transition-all"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>

          </div>

          {/* --- Main Layout Grid (Sidebar + Product Grid) --- */}
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

                  {(selectedBrand !== "ALL" || searchQuery) && (
                    <Link
                      href="/all-accessories"
                      className="text-[11px] font-bold text-red-500 hover:text-red-400 flex items-center gap-1 transition"
                    >
                      <RotateCcw size={12} /> Reset
                    </Link>
                  )}
                </div>

                {/* Dynamic Brand Buttons (Mobile Horizontal Scroll, Desktop Vertical Stack) */}
                <div className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
                  {finalBrands.map((brandName) => {
                    const isActive = selectedBrand.toLowerCase() === brandName.toLowerCase();
                    
                    const brandUrl = `/all-accessories?brand=${encodeURIComponent(brandName)}${
                      searchQuery ? `&search=${encodeURIComponent(searchQuery)}` : ""
                    }`;

                    const count = brandName === "ALL" ? rawAccessories.length : brandCounts[brandName] || 0;

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
                      <p className="text-[10px] text-gray-400">Authentic Accessories</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* --- Product Grid Section --- */}
            <div className="col-span-12 lg:col-span-9">
              
              {filteredAccessories.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                  {filteredAccessories.map((item) => (
                    <AccessoriesCard key={item._id} bike={item} />
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
                    href="/all-accessories"
                    className="inline-block mt-5 px-6 py-3 bg-red-600 text-white text-xs font-black uppercase tracking-wider rounded-lg hover:bg-red-700 transition"
                  >
                    Clear All Filters
                  </Link>
                </div>
              )}

            </div>

          </div>

        </main>
      </Container>

      <Footer />
    </div>
  );
};

export default AccessoriesPage;