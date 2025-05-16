import { NextResponse } from "next/server";

export async function POST(req) {
  const { token, name, user_uuid } = await req.json();

  const response = NextResponse.json({ success: true });
  
  response.cookies.set("authStatus", "true", {
    httpOnly: false,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24,
    path: "/",
    sameSite: "lax",
  });



  // response.cookies.set("token", token, {
  //   httpOnly: true,
  //   secure: process.env.NODE_ENV === "production",
  //   maxAge: 60 * 60 * 24,
  //   path: "/",
  //   sameSite: "lax",
  // });

  // response.cookies.set("user", name, {
  //   httpOnly: false,
  //   maxAge: 60 * 60 * 24,
  //   path: "/",
  //   sameSite: "lax",
  // });

  return response;
}