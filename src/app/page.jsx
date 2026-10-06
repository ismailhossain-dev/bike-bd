import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer/Footer";
import Banner from "@/components/Home/Banner/Banner";
import HelpsFindBike from "@/components/Home/HelpsFindBike/HelpsFindBike";
import HomeContactSection from "@/components/Home/HomeContactSection/HomeContactSection";
import OurProducts from "@/components/Home/OurProducts/OurProducts";
import HomeBikesSection from "@/components/HomeBikesSection";
import Navbar from "@/components/Navbar/Navbar";



const Page = async () => {
  // const session = await getServerSession(authOptions);
 
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