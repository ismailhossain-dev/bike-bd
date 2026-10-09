# 🏍️ BikeBD - Modern E-Commerce & Full-Stack Platform

<div align="center">

  <p><strong>A high-end, full-stack e-commerce and admin dashboard platform built with Next.js, Tailwind CSS, and MongoDB.</strong></p>

  <p>
    <a href="https://bike-bd.vercel.app" target="_blank"><strong>🚀 Explore Live Demo</strong></a>
  </p>

</div>

---

## 📖 About The Project

**BikeBD** is a feature-rich, full-stack modern web application tailored for high-end digital e-commerce and management. Built using the latest **Next.js (App Router)** framework, it delivers a lightning-fast user experience with an immersive dark-mode interface, glassmorphism design aesthetics, secure role-based authentication, and a robust admin control center.

---

## 🌐 Live URL
- **Live Demo:** [https://bike-bd.vercel.app](https://bike-bd.vercel.app)

---

## 🎯 Project Purpose

The primary objective of BikeBD is to bridge the gap between seamless online shopping and powerful backend administrative control. It provides users with a smooth shopping experience—from browsing products and managing carts to secure checkouts—while giving administrators deep analytical oversight, order tracking, and user management capabilities in real-time.

---

## ✨ Key Features

### 👤 User Features
- **Dashboard Overview:** Personal stats and account summary.
- **My Wishlist:** Save and manage favorite items.
- **My Cart:** Real-time cart management and modifications.
- **My Order:** Track ongoing and past purchase statuses.
- **My Profile:** Account details and preference management.

### 🛡️ Admin Features
- **Dashboard Control Center:** Real-time metrics including total revenue, active orders, users, and cart analytics powered by interactive charts (`Recharts`).
- **Manage Users:** View registered users, roles, and account statuses.
- **Manage Orders:** Oversee and update customer purchase fulfillments.
- **Manage Wishlist:** Audit user-saved products globally.
- **Manage Carts:** Monitor active shopping cart databases.
- **Admin Profile:** Specialized administrative profile hub.

### ⚡ Additional Highlights
- **Authentication:** Secure credential-based and Google OAuth login via `NextAuth`.
- **Responsive UI:** Fully optimized for mobile, tablet, and desktop views using `Tailwind CSS`.
- **Smooth Animations:** High-end motion effects with `Framer Motion` and `Swiper.js` sliders.

---

## 📦 NPM Packages Used

### 🎨 Frontend Dependencies
- **`next`** - React Framework (App Router)
- **`react` & `react-dom`** - Core UI libraries
- **`tailwindcss` & `@tailwindcss/postcss`** - Utility-first styling & styling engine
- **`daisyui`** - Tailwind component library
- **`lucide-react` & `react-icons`** - Modern UI iconography
- **`framer-motion`** - Smooth fluid animations
- **`swiper`** - Responsive carousels & sliders
- **`recharts`** - Interactive data visualization charts
- **`react-toastify`** - Notification alerts

### ⚙️ Backend & Utility Dependencies
- **`mongodb`** - NoSQL Database driver
- **`mongoose` / `axios`** - Data fetching & HTTP requests
- **`next-auth`** - Secure session and authentication handling
- **`bcryptjs`** - Password hashing security
- **`stripe`** - Payment gateway integration
- **`react-hook-form`** - Performant form handling
- **`@tanstack/react-query`** - Powerful asynchronous state management

---

## 🚀 Getting Started & Installation

To run this project locally on your machine, follow these steps:

### 1. Clone the repository
```bash
git clone [https://github.com/ismailhossain-dev/bike-bd.git](https://github.com/ismailhossain-dev/bike-bd.git)
cd bike-bd
2. Install dependencies
Bash
npm install
3. Setup Environment Variables
Create a .env file in the root directory of your project and configure it with your credentials:

Code snippet
MONGODB_URI=YOUR_MONGODB_URI
MONGODB_NAME=YOUR_DATABASE_NAME
NEXT_PUBLIC_BASE_URL=http://localhost:3000
STRIPE_SECRET_KEY=YOUR_STRIPE_SECRET_KEY
NEXTAUTH_SECRET=YOUR_NEXTAUTH_SECRET_HERE
GOOGLE_CLIENT_SECRET=YOUR_GOOGLE_CLIENT_SECRET_HERE
GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID_HERE
4. Run the Development Server
Bash
npm run dev
Open http://localhost:3000 with your browser to see the result.

👨‍💻 Built By
Ismail Hossain
