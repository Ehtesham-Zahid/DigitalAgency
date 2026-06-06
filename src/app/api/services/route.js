import { NextResponse } from "next/server";
import { getAllServices, createService } from "@/services/Service";
import { verifyAdminToken } from "@/services/Admin";

export async function GET() {
  try {
    const services = await getAllServices();
    return NextResponse.json(services);
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Failed to retrieve services." },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const admin = await verifyAdminToken();
    if (!admin) {
      return NextResponse.json(
        { error: "Unauthorized: Administrator privileges required." },
        { status: 401 }
      );
    }

    const data = await req.json();
    const service = await createService(data, true);
    return NextResponse.json(service, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Failed to create service." },
      { status: 500 }
    );
  }
}
