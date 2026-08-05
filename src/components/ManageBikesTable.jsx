"use client";
import React, { useState } from "react";
import { Eye, Trash2, X } from "lucide-react";
import { toast } from "react-toastify";

const ManageBikesTable = ({ bike, index, onDeleteSuccess }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleManageDelete = async (id) => {
    const res = await fetch(`/api/all-bikes/${id}`, {
      method: "DELETE",
    });

    console.log(res);
    if (res.ok) {
      toast.success("Delete Successful!");
      if (onDeleteSuccess) onDeleteSuccess(id);
    }
  };

  return (
    <>
      <tr className="hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition-all group">
        <th className="pl-6 text-gray-400 font-medium">{index + 1}</th>
        <td className="py-4">
          <div className="flex items-center gap-4">
            {/* Responsive Image Size */}
            <div className="flex-shrink-0 mask mask-squircle w-12 h-12 md:w-14 md:h-14 bg-gray-100 dark:bg-gray-800">
              <img
                src={bike.image || null}
                alt={bike.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="min-w-0">
              <div className="font-bold text-gray-800 dark:text-gray-100 truncate max-w-[150px] md:max-w-xs">
                {bike.name}
              </div>
              <div className="text-xs text-gray-500 uppercase">{bike.color}</div>
            </div>
          </div>
        </td>
        <td className="align-middle">
          <span className="inline-block px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-[10px] font-bold uppercase whitespace-nowrap">
            {bike.brand}
          </span>
        </td>
        <td className="align-middle">
          <div className="text-base md:text-lg font-bold text-orange-600">${bike.price}</div>
        </td>
        <td className="pr-6 align-middle">
          <div className="flex items-center justify-end gap-2">
            <button
              onClick={() => setIsOpen(true)}
              className="p-2 md:p-2.5 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 hover:bg-blue-600 hover:text-white transition-all"
            >
              <Eye size={16} />
            </button>
            <button
              onClick={() => handleManageDelete(bike._id)}
              className="p-2 md:p-2.5 rounded-xl bg-red-50 dark:bg-red-500/10 text-red-500 hover:bg-red-600 hover:text-white transition-all"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </td>
      </tr>

      {/* Modal - Fully Responsive */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-gray-900 rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="relative h-48 md:h-64 w-full">
              <img
                src={bike.image || null}
                className="w-full h-full object-cover"
                alt={bike.name}
              />
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full text-white transition-all"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row justify-between items-start mb-4 gap-2">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                    {bike.name}
                  </h2>
                  <p className="text-orange-500 font-semibold text-sm">
                    {bike.brand} - {bike.category}
                  </p>
                </div>
                <div className="text-xl md:text-2xl font-black text-gray-900 dark:text-white">
                  ${bike.price}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <p className="text-[10px] text-gray-400 uppercase">Color</p>
                  <p className="font-bold text-sm dark:text-gray-200 uppercase">{bike.color}</p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <p className="text-[10px] text-gray-400 uppercase">Bike ID</p>
                  <p className="font-mono text-[9px] break-all dark:text-gray-200">{bike._id}</p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-full mt-8 py-3 md:py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-2xl transition-all shadow-lg shadow-orange-600/20"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ManageBikesTable;
