
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
// import { useSelector, useDispatch } from "react-redux";
import { logIn, logOut } from "./store/LoggedInSlice";

const publicRoutes = [
  "/signin",
  "/signup",
  "/verify-email",
  "/changepassword",
  "/forgotpassword",
];
const protectedRoutes = ["/watch"];

export function middleware(req) {

  // const dispatch = useDispatch();
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);
  const cookie = cookies().has("token");
  // dispatch(cookie ? logIn() : logOut());


  if (
    (req.nextUrl.pathname.startsWith("/dashboard") || isProtectedRoute) &&
    !cookie
  ) {
    return NextResponse.redirect(new URL("/signin", req.nextUrl));
  }
  if (isPublicRoute && cookie) {
    return NextResponse.redirect(new URL("/dashboard/home", req.nextUrl));
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};


