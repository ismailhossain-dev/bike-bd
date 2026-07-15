import Banner from "@/components/Banner/Banner";
import BikeCard from "@/components/Cards/BikeCard";
// import { BestSellerSection } from "@/components/BestSellerSection";
// import { CategoriesSection } from "@/components/CategoriesSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import Footer from "@/components/Footer/Footer";

import Navbar from "@/components/Navbar/Navbar";
import { dbConnect } from "@/lib/dbConnect";
import React from "react";

const page = async () => {
  let books = [];

  try {
    const bikes = await dbConnect("bikeData").find().limit(10).toArray();

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

      <Banner />

      {/* <BestSellerSection />
    <CategoriesSection /> */}

      {/* Bike Section */}
      <div className="max-w-7xl mx-auto">
        {/* Bike Title  */}
        <div className="flex flex-col items-center justify-center text-center mt-16 mb-12 px-4">
          {/* ছোট ট্যাগলাইন */}
          <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-orange-600 mb-2">
            Most Popular
          </span>

          {/* মেইন টাইটেল (গ্রেডিয়েন্ট এবং বোল্ড ফন্ট সহ) */}
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 uppercase">
            Top Selling{" "}
            <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
              Products
            </span>
          </h2>
        </div>

        {/* Bikes Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-5 mx-auto gap-6 my-10">
          {books.map((bike) => (
            <BikeCard key={bike._id} bike={bike} />
          ))}
        </div>
      </div>
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default page;
