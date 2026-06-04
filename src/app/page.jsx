import { BestSellerSection } from "@/components/BestSellerSection";
import BikeCard from "@/components/Cards/BikeCard";
import { CategoriesSection } from "@/components/CategoriesSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import Footer from "@/components/Footer/Footer";
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
      {/* <HeroSection /> */}
      {/* <FeaturesSection />
      <BestSellerSection />
      <CategoriesSection /> */}

      {/* Bike Section */}
      <div>
        {/* Bike Title  */}
      <div>
<h1 className="text-5xl font-black italic tracking-tight text-center bg-gradient-to-r from-zinc-400 via-white to-zinc-400 bg-clip-text text-transparent uppercase">
  Our Trending Bikes
</h1>
      </div>

        {/* Bikes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-auto gap-6 my-10">
          {books.map((bike) => (
            <BikeCard key={bike._id} bike={bike} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
