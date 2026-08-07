
import AccessoriesCard from "@/components/Cards/AccessoriesCard";
import Container from "@/components/Container/Container";
import useAxiosSecure from "@/components/hooks/useAxiosSecure";
import Link from "next/link";
import React from "react";

const OurProducts = async () => {
  const axiosSecure = useAxiosSecure();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/ourProducts`,
    {
      cache: "no-store",
    },
  );

  const data = await res.json();
  const bikes = data.data;
  //   console.log(bikes)
  return (
    <Container>
 <div className=" border-b border-white/5 my-10">
      <div className="flex justify-between items-center my-8">
        <h2 className="text-3xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
        Our Products
      </h2>

      <Link href="/all-accessories" className=" hover:underline duration-300 hover:text-red-500 uppercase">View all Products</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {bikes.map((bike) => (
          <AccessoriesCard key={bike._id} bike={bike}></AccessoriesCard>
        ))}
      </div>
    </div>
    </Container>
   
  );
};

export default OurProducts;
