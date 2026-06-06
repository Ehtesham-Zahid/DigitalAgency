import { NextResponse } from "next/server";
import { login } from "@/services/Admin";

// POST /api/auth/login - Authenticate administrator credentials
export async function POST(req) {
  try {
    console.log("Inside ")
    const { email, password } = await req.json();
    console.log(email, password)
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required." },
        { status: 400 }
      );
    }

    const result = await login(email, password);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Invalid credentials." },
      { status: 401 }
    );
  }
}
