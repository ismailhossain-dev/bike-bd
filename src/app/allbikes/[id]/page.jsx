import { getSingleProduct } from "@/action/server/auth";
import Image from "next/image";
import { Bike, Gauge, Weight, Settings, ShieldCheck, Zap, Star, ArrowRight, CheckCircle2 } from "lucide-react";
import OrderButton from "@/components/OrderButton";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

const BikeDetailsPage = async ({ params }) => {
  const { id } = await params;
  const result = await getSingleProduct(id);
  const bike = result;

  if (!bike) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0d0e12] text-gray-100">
        <div className="flex items-center gap-3 bg-[#16181f] px-6 py-4 rounded-2xl border border-white/10 shadow-2xl">
          <div className="w-5 h-5 border-2 border-red-500 border-t-transparent rounded-full animate-spin" />
          <p className="font-bold tracking-widest uppercase text-xs text-gray-300">Loading Specifications...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d0e12] text-gray-100 font-sans antialiased flex flex-col justify-between">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 flex-grow w-full">
        <div className="bg-[#14161d] rounded-3xl border border-white/10 shadow-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-600/5 rounded-full blur-3xl pointer-events-none" />

          <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start relative z-10">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-[#0a0b0e] border border-white/10 relative group shadow-2xl">
                <Image
                  width={700}
                  height={525}
                  src={bike.image}
                  alt={bike.name}
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />
                
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-black uppercase tracking-widest text-white shadow-lg">
                    {bike.brand}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 bg-[#1a1d26] border border-white/5 rounded-xl flex items-center gap-3">
                  <div className="p-2 bg-red-600/15 text-red-500 rounded-lg">
                    <Bike className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Manufacturer</p>
                    <p className="text-xs font-black text-white uppercase">{bike.brand}</p>
                  </div>
                </div>

                <div className="p-3.5 bg-[#1a1d26] border border-white/5 rounded-xl flex items-center gap-3">
                  <div className="p-2 bg-orange-600/15 text-orange-500 rounded-lg">
                    <Settings className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Category</p>
                    <p className="text-xs font-black text-white uppercase">{bike.category}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 lg:mt-0 lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="space-y-3 border-b border-white/10 pb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/30 text-red-500 text-[10px] font-black uppercase tracking-widest">
                    <Zap className="w-3 h-3" />
                    <span>In Stock & Ready</span>
                  </div>

                  <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase italic">
                    {bike.name}
                  </h1>

                  <div className="flex items-baseline gap-4 pt-1">
                    <span className="text-3xl sm:text-4xl font-black text-red-500 tracking-tight">
                      {bike.price}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 pt-1">
                    <div className="flex text-amber-400 gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(bike.rating) ? "fill-amber-400 text-amber-400" : "text-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-gray-400 tracking-wide">
                      {bike.rating} / 5.0 Rating
                    </span>
                  </div>
                </div>

                <div className="py-6 border-b border-white/10">
                  <h3 className="text-[11px] font-black uppercase tracking-widest text-red-500 mb-2">
                    Overview
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-medium">
                    {bike.details}
                  </p>
                </div>

                <div className="py-6">
                  <h3 className="text-[11px] font-black uppercase tracking-widest text-gray-400 mb-4">
                    Key Performance Specs
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <SpecCard icon={<Gauge className="w-4 h-4" />} label="Torque Output" value={bike.torque} />
                    <SpecCard icon={<Weight className="w-4 h-4" />} label="Net Weight" value={bike.weight} />
                    <SpecCard icon={<Zap className="w-4 h-4" />} label="Frame Material" value={bike.material} />
                    <SpecCard icon={<ShieldCheck className="w-4 h-4" />} label="Chain System" value={bike.chain} />
                  </div>
                </div>

                <div className="p-4 bg-[#1a1d26] rounded-2xl border border-white/5 grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-gray-400 block uppercase tracking-widest text-[9px] font-black mb-1">
                      Color Profile
                    </span>
                    <span className="text-white font-black text-xs uppercase tracking-wider">{bike.color}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block uppercase tracking-widest text-[9px] font-black mb-1">
                      Chassis Architecture
                    </span>
                    <span className="text-white font-black text-xs uppercase tracking-wider">{bike.framesize}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-2">
                <OrderButton />
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

const SpecCard = ({ icon, label, value }) => (
  <div className="bg-[#1a1d26] p-3.5 rounded-xl border border-white/5 flex items-center gap-3 transition-all hover:border-red-600/40 group">
    <div className="p-2 bg-[#222632] rounded-lg text-red-500 transition-colors group-hover:bg-red-600 group-hover:text-white">
      {icon}
    </div>
    <div>
      <p className="text-[9px] uppercase font-black text-gray-400 tracking-wider">{label}</p>
      <p className="text-xs font-black text-white uppercase tracking-tight">{value}</p>
    </div>
  </div>
);

export default BikeDetailsPage;