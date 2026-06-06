import { NextResponse } from "next/server";
import { login } from "@/services/Admin";

// POST /api/auth/login - Authenticate administrator credentials
export async function POST(req) {
  try {
    const { username, password } = await req.json();
    if (!username || !password) {
      return NextResponse.json(
        { error: "Username and password are required." },
        { status: 400 }
      );
    }

    const result = await login(username, password);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Invalid credentials." },
      { status: 401 }
    );
  }
}
