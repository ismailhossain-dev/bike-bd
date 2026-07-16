import BikeCard from "@/components/Cards/BikeCard";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { dbConnect } from "@/lib/dbConnect";
import Link from "next/link"; // URL query handle korar jonno Link import kora hoyeche
import React from "react";

// searchParams er maddhome URL er query (?page=1) server e pawa jay
const page = async ({ searchParams }) => {
  let allbikes = [];
  
  // URL e page na thakle default hisebe 1 dhore neya hobe, ar text k number e convert kora hocche
  const currentPage = Number((await searchParams)?.page) || 1; 
  const itemsPerPage = 8; // proti view te amra 10ti bike dekhabo

  try {
    const collection = await dbConnect("bikeData");

    // skip() diye ager page er data bad deya hoy ar limit() diye sudhu 10ta data neya hoy
    const bikes = await collection
      .find()
      .skip((currentPage - 1) * itemsPerPage) 
      .limit(itemsPerPage) 
      .toArray();

    // MongoDB er ObjectId k string e convert kora hocche jeno error na ase
    allbikes = bikes.map((bike) => ({
      ...bike,
      _id: bike._id.toString(),
    }));
  } catch (error) {
    // Kono karone database a error hole ekhane console e dekhabe
    console.error("Failed to load bikes for /allbikes page:", error);
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto my-10 px-4">
        {/* --- Page Header Section --- */}
        <div className="mb-8">
          <h2 className="text-3xl font-black uppercase tracking-tight text-gray-900">
            Elite Fleet Showcase
          </h2>
          <p className="text-gray-500 text-xs mt-1">
            Showing Page {currentPage} of 4 (10 premium bikes per view)
          </p>
        </div>

        {/* --- Product Grid --- */}
        {allbikes.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto gap-6 my-10">
            {allbikes.map((bike) => (
              <BikeCard key={bike._id} bike={bike} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-10">No bikes available at the moment.</p>
        )}

        {/* --- Pagination Buttons Section --- */}
        <div className="flex justify-center items-center gap-3 border-t border-gray-100 pt-8 mt-12">
          {[1, 2, 3, 4].map((pageNumber) => (
            <Link
              key={pageNumber}
              // URL/allbikes?page=1, page=2 automatic request pathabe server e
              href={`/allbikes?page=${pageNumber}`}
              // Active page er upor vitti kore button er color change kora hoyeche
              className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                currentPage === pageNumber
                  ? "bg-orange-600 text-white shadow-lg shadow-orange-500/20 scale-105" // Active button design
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200" // Normal button design
              }`}
            >
              {/* Ekhane 'Batch' delete kore sudhu number (1, 2, 3, 4) deya hoyeche */}
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