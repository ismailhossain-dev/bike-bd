"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Trash2, ShieldCheck, User } from "lucide-react";
import { toast } from "react-toastify";

const UsersTable = ({ users }) => {
  const handleDelete = async (id) => {
    try {
      // Add your delete API request here
      toast.success("User removed successfully!");
      console.log("Delete user id:", id);
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete user");
    }
  };

  return (
    <div className="w-full max-w-[1600px] mx-auto  space-y-6">
      {/* ================= HEADER SECTION ================= */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-[#141620] border border-white/10 p-6 sm:p-8 rounded-3xl shadow-xl">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
            View All <span className="text-red-600">Users</span>
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Manage registered users, roles, and account statuses.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-red-600/10 border border-red-500/30 text-red-500 font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl">
            Total Users: {users?.length || 0}
          </div>
        </div>
      </div>

      {/* ================= TABLE SECTION ================= */}
      <div className="bg-[#141620] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
        {users && users.length > 0 ? (
          <div>
            <div className="overflow-x-auto w-full">
              <table className="w-full text-left border-collapse min-w-[1000px]">
                <thead>
                  <tr className="border-b border-white/10 text-slate-400 text-xs font-black uppercase tracking-wider bg-[#0b0c10]">
                    <th className="py-4 px-6 w-28">Avatar</th>
                    <th className="py-4 px-6 w-[30%]">Name</th>
                    <th className="py-4 px-6 w-[30%]">Email</th>
                    <th className="py-4 px-6 w-40">Role</th>
                    <th className="py-4 px-6 w-40">Joined Date</th>
                    <th className="py-4 px-6 w-28 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {users.map((item) => {
                    const { _id, name, email, role, createAt, image } = item;

                    const formattedDate = createAt
                      ? new Date(createAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })
                      : "N/A";

                    return (
                      <tr
                        key={_id}
                        className="hover:bg-white/[0.02] transition-colors group"
                      >
                        {/* User Avatar */}
                        <td className="py-4 px-6">
                          <div className="relative w-14 h-14 rounded-2xl bg-[#0b0c10] border border-white/10 overflow-hidden flex items-center justify-center p-1">
                            <Image
                              src={image || "/assets/placeholder-bike.jpg"}
                              alt={name || "User Avatar"}
                              fill
                              className="object-cover rounded-xl p-0.5 group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                        </td>

                        {/* Name */}
                        <td className="py-4 px-6">
                          <span className="text-white font-bold text-sm sm:text-base line-clamp-1 group-hover:text-red-500 transition-colors">
                            {name || "Unnamed User"}
                          </span>
                        </td>

                        {/* Email */}
                        <td className="py-4 px-6">
                          <span className="text-slate-300 text-sm font-medium block truncate max-w-[280px]">
                            {email || "N/A"}
                          </span>
                        </td>

                        {/* Role */}
                        <td className="py-4 px-6">
                          <span
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                              role === "admin"
                                ? "bg-red-500/10 text-red-500 border border-red-500/20"
                                : "bg-sky-500/10 text-sky-500 border border-sky-500/20"
                            }`}
                          >
                            {role === "admin" ? (
                              <ShieldCheck size={12} />
                            ) : (
                              <User size={12} />
                            )}
                            {role || "user"}
                          </span>
                        </td>

                        {/* Created Date */}
                        <td className="py-4 px-6">
                          <span className="text-slate-400 text-xs font-medium whitespace-nowrap">
                            {formattedDate}
                          </span>
                        </td>

                        {/* Action (Delete) */}
                        <td className="py-4 px-6 text-center">
                          <button
                            type="button"
                            onClick={() => handleDelete(_id)}
                            className="w-9 h-9 bg-red-500/10 hover:bg-red-600 text-red-500 hover:text-white rounded-xl inline-flex items-center justify-center border border-red-500/20 transition-all hover:scale-105 mx-auto"
                            title="Delete User"
                          >
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* ================= TABLE FOOTER ================= */}
            <div className="p-6 bg-[#0b0c10] border-t border-white/10 flex items-center justify-between">
              <div className="text-slate-400 text-sm font-medium">
                Total Registered Users:{" "}
                <span className="text-white font-black text-lg ml-1">
                  {users?.length || 0}
                </span>
              </div>
              <Link
                href="/admin/dashboard"
                className="bg-red-600 hover:bg-red-700 text-white font-bold uppercase text-xs tracking-widest py-3 px-6 rounded-xl shadow-lg shadow-red-600/20 transition-all active:scale-95"
              >
                Back to Dashboard
              </Link>
            </div>
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16 space-y-3">
            <p className="text-slate-400 text-base font-medium">
              No users found in the database.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersTable;