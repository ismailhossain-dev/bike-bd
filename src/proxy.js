import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const privateRoutes = [
  "/dashboard",
  "/add-bike",
  "/checkout",
];


export async function proxy(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const isAuthenticated = !!token;
  const reqPath = req.nextUrl.pathname;

  const isPrivateReq = privateRoutes.some((route) => 
    reqPath === route || reqPath.startsWith(`${route}/`)
  );

  if (!isAuthenticated && isPrivateReq) {
    return NextResponse.redirect(
      new URL(`/login?callbackUrl=${encodeURIComponent(reqPath)}`, req.url),
    );
  }

  return NextResponse.next();
}


export const config = {
  matcher: [
    "/dashboard/:path*",
    "/add-bike/:path*",
    "/checkout/:path*",
  ],
};