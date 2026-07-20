import BikeCard from "@/components/Cards/BikeCard";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link"; 
import React from "react";

const page = async ({ searchParams }) => {
  const resolvedSearchParams = await searchParams;
  const currentPage = Number(resolvedSearchParams?.page) || 1; 
  const itemsPerPage =10 ; 
// 🛠️ এখানে ডাইনামিক কুয়েরি প্যারামিটার (?page=${currentPage}&limit=${itemsPerPage}) যুক্ত করা হয়েছে
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/allBikes?page=${currentPage}&limit=${itemsPerPage}`,
    { cache: "no-store" }
  );



  const bikes = await res.json();

  // ব্যাকএন্ড রেসপন্স থেকে total নিয়ে মোট পেজ সংখ্যা বের করা
  const totalPages = Math.ceil((bikes.total || 0) / itemsPerPage) || 1;
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto my-10 px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-black uppercase tracking-tight text-gray-900">
            Elite Fleet Showcase
          </h2>
          <p className="text-gray-500 text-xs mt-1">
            Showing Page {currentPage} of {totalPages} ({itemsPerPage} premium bikes per view)
          </p>
        </div>

        {/* --- Product Grid --- */}
        {bikes?.result && bikes.result.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mx-auto gap-6 my-10">
            {bikes.result.map((bike) => (
              <BikeCard key={bike._id} bike={bike} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-10">No bikes available at the moment.</p>
        )}

        {/* --- Pagination Buttons Section --- */}
        <div className="flex justify-center items-center gap-3 border-t border-gray-100 pt-8 mt-12">
          {pageNumbers.map((pageNumber) => (
            <Link
              key={pageNumber}
              href={`/allbikes?page=${pageNumber}`}
              className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                currentPage === pageNumber
                  ? "bg-orange-600 text-white shadow-lg shadow-orange-500/20 scale-105" 
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200" 
              }`}
            >
              {pageNumber}
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;