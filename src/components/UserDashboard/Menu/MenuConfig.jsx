import {
  LayoutDashboard,
  User,
  ShoppingBag,
  Users,
  ShoppingCart,
  Heart,
} from "lucide-react";

export const MenuConfig = {
  user: [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "My Wishlist",
      path: "/dashboard/my-wishlist",
      icon: Heart ,
    },
    {
      name: "My Cart",
      path: "/dashboard/my-cart",
      icon: ShoppingCart,
    },
    {
      name: "My Order",
      path: "/dashboard/my-order",
      icon: ShoppingBag,
    },
    {
      name: "My Profile",
      path: "/dashboard/my-profile",
      icon: User,
    },
  ],

  admin: [
    {
      name: "Dashboard",
      path: "/dashboard/admin",
      icon: LayoutDashboard,
    },
    {
      name: "Manage Users",
      path: "/dashboard/admin/users",
      icon: Users,
    },
    {
      name: "Manage Orders",
      path: "/dashboard/admin/orders",
      icon: ShoppingBag,
    },
    {
      name: "Manage Wishlist",
      path: "/dashboard/admin/wishlist",
      icon: Heart,
    },
    {
      name: "Manage Carts",
      path: "/dashboard/admin/carts",
      icon: ShoppingCart,
    },
    {
      name: "My profile",
      path: "/dashboard/admin/profile",
      icon: Users,
    },
  ],
};
