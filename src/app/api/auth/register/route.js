import { NextResponse } from "next/server";
import { createAdmin } from "@/services/Admin";

export async function POST(req) {
  try {
    const { username, password } = await req.json();
    if (!username || !password) {
      return NextResponse.json(
        { error: "Username and password are required." },
        { status: 400 }
      );
    }

    const result = await createAdmin(username, password);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Failed to create administrator account." },
      { status: 500 }
    );
  }
}
