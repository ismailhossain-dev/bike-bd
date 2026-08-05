"use client";
import React, { useState } from "react";
import BikeCard from "./Cards/BikeCard";

const HomeBikesSection = ({ bikes = [] }) => {
  const [selectedBrand, setSelectedBrand] = useState("ALL");

  const extractedBrands = Array.from(
    new Set(bikes.map((bike) => bike.brand?.toUpperCase()).filter(Boolean))
  );

  const brands = ["ALL", ...extractedBrands];

  const filteredBikes = selectedBrand === "ALL"
    ? bikes
    : bikes.filter((bike) => bike.brand?.toUpperCase() === selectedBrand);

  return (
    <section className="bg-[#0a0a0a] py-16  border-b border-white/5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6 mb-10 items-center">
          
          <div>
            <h2 className="text-3xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
              LATEST MOTORBIKES
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-extrabold tracking-wider uppercase">
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`transition-all duration-300 relative py-1 ${
                  selectedBrand === brand
                    ? "text-red-600 font-black"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {brand}
                {selectedBrand === brand && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-600 rounded-full" />
                )}
              </button>
            ))}
          </div>

        </div>

        {filteredBikes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredBikes.map((bike) => (
              <BikeCard key={bike._id || bike.name} bike={bike} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500 font-semibold tracking-wider uppercase">
            No Motorbikes Found in {selectedBrand} Brand.
          </div>
        )}

      </div>
    </section>
  );
};

export default HomeBikesSection;