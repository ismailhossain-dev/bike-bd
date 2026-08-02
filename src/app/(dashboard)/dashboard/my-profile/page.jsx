"use client";

import React, { useState, useEffect } from "react";

import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  ShieldCheck,
  Copy,
  ShoppingBag,
  Heart,
  ShoppingCart,
  Edit2,
  X,
  Loader2,
  User,
  Globe,
  Camera,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";
import useAxiosSecure from "@/components/hooks/useAxiosSecure";

const DashboardMyProfilePage = () => {
  const { data: session } = useSession();
  const axiosSecure = useAxiosSecure();

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch user data using standard useEffect instead of TanStack Query
  const fetchUserData = async () => {
    if (!session?.user?.email) return;
    try {
      setIsLoading(true);
      const res = await axiosSecure.get(
        `/api/user?email=${session?.user?.email}`
      );
      setUser(res.data?.result);
    } catch (error) {
      console.error("Failed to fetch user data:", error);
      toast.error("Failed to load profile data.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (session?.user?.email) {
      fetchUserData();
    }
  }, [session?.user?.email]);

  // React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    values: {
      name: user?.name || "",
      phone: user?.phone || "",
      address: user?.address || "",
      district: user?.district || "",
      division: user?.division || "",
    },
  });

  // Profile Update Function
  const onUpdateProfile = async (data) => {
    setIsSubmitting(true);
    try {
      const res = await axiosSecure.patch(
        `/api/user?email=${session?.user?.email}`,
        data
      );

      if (res.data.modifiedCount > 0) {
        toast.success(res.data.message || "Profile updated successfully!");
        await fetchUserData(); // Refresh local user state data
        setIsEditing(false);
      }
    } catch (error) {
      console.error("Update failed:", error);
      toast.error("Something went wrong while updating profile.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Date Formatter
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // Copy Account ID Function
  const handleCopyId = (id) => {
    if (id) {
      navigator.clipboard.writeText(id);
      toast.info("Account ID copied to clipboard!");
    }
  };

  // Skeleton Loading View
  if (!session?.user?.email || isLoading) {
    return (
      <div className="max-w-6xl mx-auto p-4 sm:p-6 animate-pulse space-y-6">
        <div className="h-44 bg-[#141620] rounded-3xl border border-white/5" />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-4 h-64 bg-[#141620] rounded-3xl border border-white/5" />
          <div className="md:col-span-8 h-96 bg-[#141620] rounded-3xl border border-white/5" />
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-6xl mx-auto font-sans text-white space-y-6"
    >
      {/* ================= TOP COVER BANNER ================= */}
      <div className="bg-[#141620] border border-white/10 rounded-3xl overflow-hidden relative shadow-2xl">
        <div className="h-32 sm:h-40 bg-gradient-to-r from-red-600/30 via-red-900/10 to-[#141620] border-b border-white/10 relative">
          <span className="absolute top-4 right-4 bg-red-600/20 border border-red-500/30 text-red-500 text-[10px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-md">
            <ShieldCheck className="w-3.5 h-3.5" />
            Verified Rider
          </span>
        </div>

        <div className="px-6 sm:px-8 pb-6 relative flex flex-col sm:flex-row items-center sm:items-end justify-between -mt-16 sm:-mt-20 gap-4 text-center sm:text-left">
          {/* Avatar Section */}
          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-5">
            <div className="relative group">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-[#141620] bg-[#0b0c10] overflow-hidden relative shadow-2xl flex items-center justify-center">
                {user?.image || session?.user?.image ? (
                  <Image
                    src={user?.image || session?.user?.image}
                    alt={user?.name || "Profile"}
                    fill
                    className="object-cover"
                    priority
                  />
                ) : (
                  <User className="w-14 h-14 text-gray-500" />
                )}
              </div>
              <button className="absolute bottom-1 right-1 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full border-2 border-[#141620] shadow-lg transition-transform hover:scale-110 cursor-pointer">
                <Camera className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-1 pb-1">
              <span className="text-[10px] font-black tracking-widest text-red-500 uppercase bg-red-500/10 px-2.5 py-0.5 rounded border border-red-500/20">
                {user?.role || "RIDER"}
              </span>
              <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight italic text-white">
                {user?.name || session?.user?.name || "Rider Member"}
              </h1>
              <p className="text-xs text-gray-400 font-medium">
                {user?.email || session?.user?.email}
              </p>
            </div>
          </div>

          {/* Quick Edit Toggle Header Button */}
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-red-500/30 text-xs font-bold uppercase tracking-wider rounded-xl transition-all active:scale-95 cursor-pointer text-white"
            >
              <Edit2 className="w-3.5 h-3.5 text-red-500" />
              Edit Profile
            </button>
          )}
        </div>
      </div>

      {/* ================= MAIN CONTENT GRID ================= */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        
        {/* LEFT COLUMN: META & QUICK NAV */}
        <div className="md:col-span-4 space-y-6">
          
          {/* Account Meta Status Card */}
          <div className="bg-[#141620] border border-white/10 rounded-3xl p-5 space-y-4 shadow-xl text-xs font-semibold">
            <h3 className="text-[11px] font-black uppercase tracking-widest text-gray-400 border-b border-white/5 pb-2">
              System Info
            </h3>

            {/* Account ID */}
            <div className="space-y-1.5">
              <span className="text-[10px] text-gray-500 uppercase tracking-wider block">
                Account ID
              </span>
              <div className="flex items-center justify-between bg-[#0b0c10] border border-white/5 px-3 py-2 rounded-xl gap-2">
                <span className="text-gray-400 font-mono text-[10px] truncate select-all">
                  {user?._id || "N/A"}
                </span>
                <button
                  onClick={() => handleCopyId(user?._id)}
                  className="text-gray-500 hover:text-red-500 transition-colors cursor-pointer"
                >
                  <Copy size={14} />
                </button>
              </div>
            </div>

            {/* Account Status */}
            <div className="flex justify-between items-center py-2 border-b border-white/5">
              <span className="text-gray-400 text-[11px] uppercase tracking-wider">
                Status
              </span>
              <span className="text-emerald-400 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {user?.status || "ACTIVE"}
              </span>
            </div>

            {/* Verification */}
            <div className="flex justify-between items-center py-2 border-b border-white/5">
              <span className="text-gray-400 text-[11px] uppercase tracking-wider">
                Verification
              </span>
              <span className="text-emerald-400 text-[11px] font-bold uppercase tracking-wide flex items-center gap-1">
                <CheckCircle2 size={12} /> VERIFIED
              </span>
            </div>

            {/* Role */}
            <div className="flex justify-between items-center py-1">
              <span className="text-gray-400 text-[11px] uppercase tracking-wider">
                User Role
              </span>
              <span className="text-red-500 text-[11px] uppercase tracking-wide font-black">
                {user?.role || "USER"}
              </span>
            </div>
          </div>

          {/* Dashboard Quick Navigation Buttons */}
          <div className="grid grid-cols-3 gap-3">
            <Link
              href="/dashboard/my-orders"
              className="flex flex-col items-center justify-center p-3.5 rounded-2xl bg-[#141620] border border-white/10 hover:border-red-500/40 text-gray-400 hover:text-white transition-all group cursor-pointer"
            >
              <ShoppingBag
                size={18}
                className="mb-1.5 text-red-500 group-hover:scale-110 transition-transform"
              />
              <span className="text-[9px] font-bold uppercase tracking-wider">
                Orders
              </span>
            </Link>
            <Link
              href="/dashboard/my-wishlist"
              className="flex flex-col items-center justify-center p-3.5 rounded-2xl bg-[#141620] border border-white/10 hover:border-red-500/40 text-gray-400 hover:text-white transition-all group cursor-pointer"
            >
              <Heart
                size={18}
                className="mb-1.5 text-red-500 group-hover:scale-110 transition-transform"
              />
              <span className="text-[9px] font-bold uppercase tracking-wider">
                Wishlist
              </span>
            </Link>
            <Link
              href="/dashboard/my-cart"
              className="flex flex-col items-center justify-center p-3.5 rounded-2xl bg-[#141620] border border-white/10 hover:border-red-500/40 text-gray-400 hover:text-white transition-all group cursor-pointer"
            >
              <ShoppingCart
                size={18}
                className="mb-1.5 text-red-500 group-hover:scale-110 transition-transform"
              />
              <span className="text-[9px] font-bold uppercase tracking-wider">
                Cart
              </span>
            </Link>
          </div>
        </div>

        {/* RIGHT COLUMN: DISPLAY DETAILS OR EDIT FORM */}
        <div className="md:col-span-8 bg-[#141620] border border-white/10 rounded-3xl p-6 sm:p-8 relative shadow-xl min-h-[420px]">
          
          <AnimatePresence mode="wait">
            {isEditing ? (
              /* ================= EDIT FORM MODE ================= */
              <motion.form
                key="edit-form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleSubmit(onUpdateProfile)}
                className="space-y-5"
              >
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <h3 className="text-sm font-black uppercase tracking-widest text-white">
                    Edit Profile Details
                  </h3>
                  <button
                    type="button"
                    onClick={() => {
                      setIsEditing(false);
                      reset();
                    }}
                    className="p-1.5 bg-white/5 border border-white/10 text-gray-400 hover:text-white rounded-xl transition-colors cursor-pointer"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Form Inputs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                      Full Name
                    </label>
                    <div className="relative flex items-center">
                      <User
                        size={14}
                        className="absolute left-3.5 text-gray-500"
                      />
                      <input
                        {...register("name", { required: "Name is required" })}
                        type="text"
                        className="w-full bg-[#0b0c10] border border-white/10 focus:border-red-500 rounded-xl py-2.5 pl-10 pr-3 text-xs outline-none text-white transition-colors"
                      />
                    </div>
                    {errors.name && (
                      <span className="text-red-500 text-[10px]">
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                      Phone Number
                    </label>
                    <div className="relative flex items-center">
                      <Phone
                        size={14}
                        className="absolute left-3.5 text-gray-500"
                      />
                      <input
                        {...register("phone")}
                        type="text"
                        placeholder="Not set"
                        className="w-full bg-[#0b0c10] border border-white/10 focus:border-red-500 rounded-xl py-2.5 pl-10 pr-3 text-xs outline-none text-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* District */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                      District
                    </label>
                    <div className="relative flex items-center">
                      <MapPin
                        size={14}
                        className="absolute left-3.5 text-gray-500"
                      />
                      <input
                        {...register("district")}
                        type="text"
                        placeholder="Not set"
                        className="w-full bg-[#0b0c10] border border-white/10 focus:border-red-500 rounded-xl py-2.5 pl-10 pr-3 text-xs outline-none text-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Division */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                      Division
                    </label>
                    <div className="relative flex items-center">
                      <Globe
                        size={14}
                        className="absolute left-3.5 text-gray-500"
                      />
                      <input
                        {...register("division")}
                        type="text"
                        placeholder="Not set"
                        className="w-full bg-[#0b0c10] border border-white/10 focus:border-red-500 rounded-xl py-2.5 pl-10 pr-3 text-xs outline-none text-white transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Full Address */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    Full Address
                  </label>
                  <div className="relative flex items-center">
                    <MapPin
                      size={14}
                      className="absolute left-3.5 text-gray-500"
                    />
                    <input
                      {...register("address")}
                      type="text"
                      placeholder="Not set"
                      className="w-full bg-[#0b0c10] border border-white/10 focus:border-red-500 rounded-xl py-2.5 pl-10 pr-3 text-xs outline-none text-white transition-colors"
                    />
                  </div>
                </div>

                {/* Form Buttons */}
                <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
                  <button
                    type="button"
                    disabled={isSubmitting}
                    onClick={() => {
                      setIsEditing(false);
                      reset();
                    }}
                    className="px-4 py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-5 py-2.5 bg-red-600 hover:bg-red-700 disabled:bg-red-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={14} className="animate-spin" />
                        Saving...
                      </>
                    ) : (
                      "Save Changes"
                    )}
                  </button>
                </div>
              </motion.form>
            ) : (
              /* ================= STANDALONE READ-ONLY DISPLAY ================= */
              <motion.div
                key="read-view"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-6"
              >
                {/* Information Header Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name Display Card */}
                  <div className="bg-[#0b0c10] p-4 rounded-2xl border border-white/5 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-500 flex-shrink-0">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-500">
                        Full Name
                      </span>
                      <span className="text-sm font-bold text-white">
                        {user?.name || session?.user?.name || "N/A"}
                      </span>
                    </div>
                  </div>

                  {/* Email Display Card */}
                  <div className="bg-[#0b0c10] p-4 rounded-2xl border border-white/5 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-500 flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-500">
                        Email Address
                      </span>
                      <span className="text-sm font-bold text-white truncate block">
                        {user?.email || session?.user?.email || "N/A"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Sub-Parameters Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-[#0b0c10]/60 p-3.5 rounded-xl border border-white/5 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
                      <Phone size={12} className="text-red-500" />
                      Phone Number
                    </span>
                    <p className="text-xs font-semibold text-gray-200">
                      {user?.phone || "Not set"}
                    </p>
                  </div>

                  <div className="bg-[#0b0c10]/60 p-3.5 rounded-xl border border-white/5 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
                      <MapPin size={12} className="text-red-500" />
                      District
                    </span>
                    <p className="text-xs font-semibold text-gray-200 capitalize">
                      {user?.district || "Not set"}
                    </p>
                  </div>

                  <div className="bg-[#0b0c10]/60 p-3.5 rounded-xl border border-white/5 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
                      <Globe size={12} className="text-red-500" />
                      Division
                    </span>
                    <p className="text-xs font-semibold text-gray-200 capitalize">
                      {user?.division || "Not set"}
                    </p>
                  </div>

                  <div className="bg-[#0b0c10]/60 p-3.5 rounded-xl border border-white/5 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
                      <MapPin size={12} className="text-red-500" />
                      Address
                    </span>
                    <p className="text-xs font-semibold text-gray-200 capitalize truncate">
                      {user?.address || "Not set"}
                    </p>
                  </div>
                </div>

                {/* Chronology Dates Metadata Footer */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
                      <Calendar size={12} className="text-red-500" />
                      Member Since
                    </span>
                    <p className="text-xs font-semibold text-gray-300">
                      {formatDate(user?.createdAt)}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
                      <ShieldCheck size={12} className="text-red-500" />
                      Last Updated
                    </span>
                    <p className="text-xs font-semibold text-gray-300">
                      {formatDate(user?.updatedAt)}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </motion.div>
  );
};

export default DashboardMyProfilePage;