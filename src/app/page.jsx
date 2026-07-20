import Banner from "@/components/Banner/Banner";
import BikeCard from "@/components/Cards/BikeCard";
import { FeaturesSection } from "@/components/FeaturesSection";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";


const Page = async () => {
  //server client
  const session =await getServerSession(authOptions)
 
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`,
    {
      cache: "no-store",
    }
  );


  const data = await res.json();

  return (
    <div>
    
      <Navbar />
   {/* <p className="text-red-600 text-7xl font-bold">{JSON.stringify(session)}</p> */}
      <Banner />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center mt-16 mb-12 px-4">
          <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-orange-600 mb-2">
            Most Popular
          </span>

          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 uppercase">
            Top Selling{" "}
            <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
              Products
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 my-10">
          {data.result?.map((bike) => (
            <BikeCard key={bike._id} bike={bike} />
          ))}
        </div>
      </div>

      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Page;