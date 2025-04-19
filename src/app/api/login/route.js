// pages/api/auth/login.js or app/api/auth/login/route.js
import { NextResponse } from 'next/server';

export async function POST(req) {
  const body = await req.json();
  
  const response = await fetch('https://staging.haelsoftmasterclass.com/api/v1/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  
  const data = await response.json();
  
  return NextResponse.json(data);
}