import { BestSellerSection } from "@/components/BestSellerSection";
import BikeCard from "@/components/Cards/BikeCard";
import { CategoriesSection } from "@/components/CategoriesSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HeroSection } from "@/components/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import { dbConnect } from "@/lib/dbConnect";
import React from "react";

const page = async () => {
  let books = [];

  try {
    const bikes = await dbConnect("bikeData").find().limit(8).toArray();

    // Convert MongoDB ObjectId to string
    books = bikes.map((bike) => ({
      ...bike,
      _id: bike._id.toString(),
    }));
  } catch (error) {
    console.error("Failed to load bikes for home page:", error);
  }

  return (
    <div>
      <Navbar />
      {/* Hero section */}
      <HeroSection />
      <FeaturesSection />
      <BestSellerSection />
      <CategoriesSection />

      {/* Bike Section */}
      <div>
        <div className="relative flex flex-col items-center text-center mb-16 px-4 py-12 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-600/10 blur-[100px] pointer-events-none"></div>

          <div className="inline-flex items-center bg-blue-600/10 border border-blue-600/20 px-4 py-1.5 rounded-full mb-6 backdrop-blur-md">
            <span className="relative flex h-2 w-2 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <h3 className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] sm:text-xs">
              The Elite Collection
            </h3>
          </div>

          <div className="relative mb-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Featured <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-blue-800">
                Machines
              </span>
            </h2>
          </div>

          <div className="relative max-w-xl pl-6 border-l-2 border-blue-600/30">
            <p className="text-gray-400 text-sm md:text-lg leading-relaxed font-medium">
              "Ultra-premium components, engineered by{" "}
              <span className="text-white border-b-2 border-blue-600 italic">Probike</span>. The
              ultimate riding experience for those who dare to lead."
            </p>
          </div>
        </div>

        {/* Bikes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto gap-6 my-10">
          {books.map((bike) => (
            <BikeCard key={bike._id} bike={bike} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
