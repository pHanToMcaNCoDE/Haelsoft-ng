import { NextResponse } from "next/server";

const publicRoutes = [
  "/signin",
  "/signup",
  "/verify-email",
  "/changepassword",
  "/forgotpassword",
];

const protectedRoutes = ["/watch"];

export function middleware(request) {
  const path = request.nextUrl.pathname;

  const isProtectedRoute = protectedRoutes.includes(path) || path.startsWith("/dashboard");
  const isPublicRoute = publicRoutes.includes(path);

  const authStatus = request.cookies.get("authStatus");
  const isAuthenticated = authStatus?.value === "true";


  if (isProtectedRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  if (isPublicRoute && isAuthenticated) {
    return NextResponse.redirect(new URL("/dashboard/home", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};
