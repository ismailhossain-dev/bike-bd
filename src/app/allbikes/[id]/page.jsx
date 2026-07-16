import { getSingleProduct } from "@/action/server/auth";
import Image from "next/image";
import { Bike, Gauge, Weight, Settings, ShieldCheck, Zap } from "lucide-react";
import OrderButton from "@/components/OrderButton";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

const BikeDetailsPage = async ({ params }) => {
  const { id } = await params;
  const result = await getSingleProduct(id);
  const bike = result;

  if (!bike) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-900">
        <p className="animate-pulse font-bold tracking-wide">Loading Bike Details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50/50 transition-colors duration-300 font-sans antialiased">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        
        {/* Main Clean Layout Card */}
        <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-100/40 p-6 md:p-10 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:items-start">
          
          {/* Left Side: Premium Image Media Gallery Showcase */}
          <div className="relative group">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-gray-50 border border-gray-100 relative shadow-sm">
              <Image
                width={600}
                height={450}
                src={bike.image}
                alt={bike.name}
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />
            </div>

            {/* Quick Metadata Badges */}
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-50 border border-gray-100 shadow-sm transition-all hover:bg-gray-100/70">
                <Bike className="w-4 h-4 text-orange-600" />
                <span className="text-xs font-black uppercase tracking-wider text-gray-700">{bike.brand}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-50 border border-gray-100 shadow-sm transition-all hover:bg-gray-100/70">
                <Settings className="w-4 h-4 text-gray-600" />
                <span className="text-xs font-black uppercase tracking-wider text-gray-700">{bike.category}</span>
              </div>
            </div>
          </div>

          {/* Right Side: Informative Typography & Spec Grid */}
          <div className="mt-10 px-2 sm:mt-16 sm:px-0 lg:mt-0 flex flex-col justify-between">
            <div>
              <div className="flex flex-col gap-3">
                <h1 className="text-3xl md:text-4xl font-black tracking-tight text-gray-950 uppercase italic">
                  {bike.name}
                </h1>

                <div className="inline-flex items-center">
                  <span className="text-2xl md:text-3xl font-black text-orange-600 tracking-tight">
                    {bike.price}
                  </span>
                </div>
              </div>
              
              {/* Modern Review Visuals */}
              <div className="mt-3 flex items-center gap-2">
                <div className="flex text-amber-500 text-xs gap-0.5">
                  {"★".repeat(Math.floor(bike.rating))}
                  <span className="text-gray-200">
                    {"★".repeat(5 - Math.floor(bike.rating))}
                  </span>
                </div>
                <span className="text-xs text-gray-400 font-bold tracking-tight">
                  ({bike.rating} / 5.0 Rating)
                </span>
              </div>
            </div>

            {/* Rich Narrative Overview Details */}
            <div className="mt-8 border-t border-gray-50 pt-6">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Overview</h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed font-medium">
                {bike.details}
              </p>
            </div>

            {/* Premium Technical Specifications Matrix Grid Layout */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <SpecCard icon={<Gauge className="w-4 h-4" />} label="Torque Output" value={bike.torque} />
              <SpecCard icon={<Weight className="w-4 h-4" />} label="Net Weight" value={bike.weight} />
              <SpecCard icon={<Zap className="w-4 h-4" />} label="Frame Material" value={bike.material} />
              <SpecCard icon={<ShieldCheck className="w-4 h-4" />} label="Chain System" value={bike.chain} />
            </div>

            {/* Clean Core Properties Specifications Table Metadata Row */}
            <div className="mt-8 border-t border-gray-100 pt-6">
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 bg-gray-50/70 p-4 rounded-2xl border border-gray-100">
                <div className="text-sm">
                  <span className="text-gray-400 block uppercase tracking-widest text-[9px] font-black">
                    Color Profile
                  </span>
                  <span className="text-gray-900 font-extrabold tracking-tight text-sm uppercase">{bike.color}</span>
                </div>
                <div className="text-sm">
                  <span className="text-gray-400 block uppercase tracking-widest text-[9px] font-black">
                    Chassis Architecture
                  </span>
                  <span className="text-gray-900 font-extrabold tracking-tight text-sm uppercase">{bike.framesize}</span>
                </div>
              </div>
            </div>

            {/* Call To Action Buttons Interface Wrapper */}
            <div className="mt-8">
              <OrderButton />
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

const SpecCard = ({ icon, label, value }) => (
  <div className="bg-gray-50/40 p-4 rounded-2xl border border-gray-100 flex items-center gap-4 transition-all hover:bg-white hover:shadow-md hover:shadow-gray-100/50 hover:border-orange-100 group">
    <div className="p-2.5 bg-white rounded-xl text-orange-600 shadow-sm border border-gray-100 transition-colors group-hover:bg-orange-600 group-hover:text-white">
      {icon}
    </div>
    <div>
      <p className="text-[9px] uppercase font-black text-gray-400 tracking-wider mb-0.5">{label}</p>
      <p className="text-xs font-extrabold text-gray-900 tracking-tight uppercase">{value}</p>
    </div>
  </div>
);

export default BikeDetailsPage;