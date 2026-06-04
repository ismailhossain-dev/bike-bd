import { getSingleProduct } from "@/action/server/auth";
import Image from "next/image";
import { Bike, Gauge, Weight, Settings, ShieldCheck, Zap } from "lucide-react";
import { toast } from "react-toastify";
import OrderButton from "@/components/OrderButton";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const BikeDetailsPage = async ({ params }) => {
  const { id } = await params;
  const result = await getSingleProduct(id);
  // console.log(result);
  const bike = result; // Data jodi 'data' object er bhitore thake

  if (!bike) {
    return (
      <div className="min-h-screen flex items-center justify-center dark:bg-slate-950 dark:text-white">
        <p className="animate-pulse">Loading Bike Details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar/>
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-start">
          {/* Left: Image Section */}
          <div className="relative group">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-gray-200 dark:bg-slate-900 shadow-2xl border border-gray-200 dark:border-slate-800">
              <Image
                width={300}
                height={280}
                src={bike.image}
                alt={bike.name}
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Quick Badges */}
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 shadow-sm border border-gray-100 dark:border-slate-800">
                <Bike className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium dark:text-gray-200">{bike.brand}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 shadow-sm border border-gray-100 dark:border-slate-800">
                <Settings className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium dark:text-gray-200">{bike.category}</span>
              </div>
            </div>
          </div>

          {/* Right: Content Section */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex flex-col gap-4">
                  <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                    {bike.name}
                  </h1>

                  <div>
                    <span className="text-3xl font-bold text-green-600 dark:text-green-400">
                      Price: {bike.price}
                    </span>
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex text-yellow-400 text-sm">
                    {"★".repeat(Math.floor(bike.rating))}
                    <span className="text-gray-300 dark:text-gray-600">
                      {"★".repeat(5 - Math.floor(bike.rating))}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    ({bike.rating} Reviews)
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Overview</h3>
              <p className="mt-3 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                {bike.details}
              </p>
            </div>

            {/* Tech Specs Grid */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <SpecCard icon={<Gauge className="w-5 h-5" />} label="Torque" value={bike.torque} />
              <SpecCard icon={<Weight className="w-5 h-5" />} label="Weight" value={bike.weight} />
              <SpecCard icon={<Zap className="w-5 h-5" />} label="Material" value={bike.material} />
              <SpecCard
                icon={<ShieldCheck className="w-5 h-5" />}
                label="Chain"
                value={bike.chain}
              />
            </div>

            {/* Additional Details List */}
            <div className="mt-8 border-t border-gray-200 dark:border-slate-800 pt-8">
              <div className="grid grid-cols-2 gap-y-4">
                <div className="text-sm">
                  <span className="text-gray-500 dark:text-gray-400 block uppercase tracking-wider text-[10px] font-bold">
                    Color Variant
                  </span>
                  <span className="text-gray-900 dark:text-gray-200 font-medium">{bike.color}</span>
                </div>
                <div className="text-sm">
                  <span className="text-gray-500 dark:text-gray-400 block uppercase tracking-wider text-[10px] font-bold">
                    Frame Type
                  </span>
                  <span className="text-gray-900 dark:text-gray-200 font-medium">
                    {bike.framesize}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="mt-10">
              <OrderButton />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

// Internal Spec Card Component
const SpecCard = ({ icon, label, value }) => (
  <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-gray-100 dark:border-slate-800 flex items-center gap-4 shadow-sm">
    <div className="p-2 bg-gray-50 dark:bg-slate-800 rounded-lg text-green-500">{icon}</div>
    <div>
      <p className="text-[10px] uppercase font-bold text-gray-400 tracking-tight">{label}</p>
      <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{value}</p>
    </div>
  </div>
);

export default BikeDetailsPage;
