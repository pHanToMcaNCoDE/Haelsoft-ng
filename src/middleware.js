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
  
  const token = request.cookies.get("token");
  // console.log('Middleware', token)
  const hasToken = !!token;

  if (isProtectedRoute && !hasToken) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }
  
  if (isPublicRoute && hasToken) {
    return NextResponse.redirect(new URL("/dashboard/home", request.url));
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};