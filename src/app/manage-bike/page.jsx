import ManageBikesTable from "@/components/ManageBikesTable";
import { dbConnect } from "@/lib/dbConnect";
import Link from "next/link";
import React from "react";

const ManageBikes = async () => {
  let bikes = [];

  try {
    const data = await dbConnect("bikeData").find().toArray();

    // Convert ObjectId to string
    bikes = data.map((bike) => ({
      ...bike,
      _id: bike._id.toString(),
    }));
  } catch (error) {
    console.error("Failed to load bikes for /manage-bike page:", error);
  }

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Inventory <span className="text-orange-600">Management</span>
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Total {bikes?.length || 0} bikes listed in your shop.
          </p>
        </div>

        <Link
          href="add-bike"
          className="w-full md:w-auto text-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl transition-all"
        >
          + Add New Bike
        </Link>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-[#111111] rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="table w-full border-collapse min-w-[800px]">
            <thead className="bg-gray-50 dark:bg-[#1a1a1a]">
              <tr className="border-b border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400 uppercase text-[11px] tracking-widest font-bold">
                <th className="py-5 pl-6 w-16">#</th>
                <th className="text-left">Bike Details</th>
                <th className="text-left">Classification</th>
                <th className="text-left">Price</th>
                <th className="text-right pr-10">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
              {bikes.length > 0 ? (
                bikes.map((bike, index) => (
                  <ManageBikesTable key={bike._id} bike={bike} index={index} />
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="py-20 text-center text-gray-400 italic">
                    No bikes found in inventory.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageBikes;
