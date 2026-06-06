import { NextResponse } from "next/server";
import { logout } from "@/services/Admin";

export async function POST() {
  try {
    const result = await logout();
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Failed to log out." },
      { status: 500 }
    );
  }
}
