import Banner from "@/components/Banner/Banner";

import { FeaturesSection } from "@/components/FeaturesSection";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import HomeBikesSection from "@/components/HomeBikesSection";
import HelpsFindBike from "@/components/Home/HelpsFindBike/HelpsFindBike";
import OurProducts from "@/components/Home/OurProducts/OurProducts";
import HomeContactSection from "@/components/Home/HomeContactSection/HomeContactSection";

const Page = async () => {
  const session = await getServerSession(authOptions);

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
    cache: "no-store",
  });

  const data = await res.json();
  const bikes = data.result || [];

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white font-sans">
      <Navbar />
      <Banner />

      {/* product card*/}
      <HomeBikesSection bikes={bikes} />

      
        {/* Helps find bike */}
      <HelpsFindBike/>

      {/* Our Products */}
      <OurProducts/>

      {/* Contact section */}
      <HomeContactSection/>

      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Page;