
import BikeCard from "@/components/Cards/BikeCard";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { dbConnect } from "@/lib/dbConnect";
import React from "react";

const page = async () => {
  let allbikes = [];

  try {
    const bikes = await dbConnect("bikeData").find().toArray();

    // Convert MongoDB ObjectId to string
    allbikes = bikes.map((bike) => ({
      ...bike,
      _id: bike._id.toString(),
    }));
  } catch (error) {
    console.error("Failed to load bikes for /allbikes page:", error);
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto my-10 px-4">
        {/* --- Page Header Section --- */}
        <div className="flex flex-col items-center text-center mb-16 relative overflow-hidden">
          <div className="inline-flex items-center bg-blue-600/10 border border-blue-600/20 px-3 py-1 rounded-full mb-4 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
            <span className="text-blue-500 font-bold uppercase tracking-widest text-[10px]">
              The Full Inventory
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            All{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
              Available
            </span>{" "}
            Bikes
          </h1>

          <p className="max-w-xl text-gray-500 text-sm md:text-base leading-relaxed">
            From high-speed sports bikes to heavy-duty cruisers, find the perfect machine that
            matches your soul. <span className="text-blue-600 font-bold">Bangladesh&apos;s</span>{" "}
            most trusted bike collection.
          </p>
        </div>

        {/* --- Product Grid --- */}
        {allbikes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {allbikes.map((bike) => (
              <BikeCard key={bike._id} bike={bike} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-10">No bikes available at the moment.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default page;
