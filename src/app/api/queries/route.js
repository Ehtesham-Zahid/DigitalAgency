import { NextResponse } from "next/server";
import { createQuery, getAllQueries } from "@/services/Query";
import { verifyAdminToken } from "@/services/Admin";

export async function GET() {
  try {
    const admin = await verifyAdminToken();
    if (!admin) {
      return NextResponse.json(
        { error: "Unauthorized: Administrator privileges required." },
        { status: 401 }
      );
    }

    const queries = await getAllQueries(true);
    return NextResponse.json(queries);
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Failed to retrieve queries." },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const data = await req.json();

    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: "Name, email, and message fields are required." },
        { status: 400 }
      );
    }

    const query = await createQuery(data);
    return NextResponse.json(query, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Failed to submit contact query." },
      { status: 500 }
    );
  }
}
