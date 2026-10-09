"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { LogOut, ChevronRight } from "lucide-react";
import { signOut } from "next-auth/react";

import Logo from "@/components/Logo/Logo";
import { MenuConfig } from "../Menu/MenuConfig";

export default function Sidebar({ isOpen, setIsOpen }) {
  const pathname = usePathname();
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;

  const role = session?.user?.role?.toLowerCase();
  const menuItems = MenuConfig[role] ?? [];

  if (!session?.user || menuItems.length === 0) {
    return null;
  }

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-72
          flex-col justify-between border-r border-white/10
          bg-[#141620] text-white transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:sticky lg:top-0 lg:translate-x-0`}
      >
        <div>
          <div className="flex items-center justify-between border-b border-white/5 p-6">
            <Logo />
          </div>

          <nav className="space-y-2 p-4">
            <p className="mb-4 px-4 text-xs uppercase tracking-widest text-gray-500">
              {role === "admin" ? "Admin Panel" : "User Dashboard"}
            </p>

            {menuItems.map((item) => {
              const Icon = item.icon;

              const isActive =
                pathname === item.path ||
                (item.path == "/dashboard" &&
                  pathname.startsWith(`${item.path}/`));

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between rounded-xl
                    border px-4 py-3 transition-colors
                    ${
                      isActive
                        ? "border-red-500/20 bg-red-600/10 text-red-500"
                        : "border-transparent text-gray-400 hover:bg-white/5 hover:text-white"
                    }`}
                >
                  <span className="flex items-center gap-3">
                    <Icon size={18} />
                    {item.name}
                  </span>

                  {isActive && <ChevronRight size={16} />}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="border-t border-white/5 p-4">
          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="flex w-full items-center gap-3 rounded-xl p-3 border-red-500/20 bg-red-600/10 text-red-500  cursor-pointer"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}
