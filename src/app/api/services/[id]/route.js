import { NextResponse } from "next/server";
import { getServiceById, updateServiceById, deleteServiceById } from "@/services/Service";
import { verifyAdminToken } from "@/services/Admin";

export async function GET(req, { params }) {
  try {
    const admin = await verifyAdminToken();
    if (!admin) {
      return NextResponse.json(
        { error: "Unauthorized: Administrator privileges required." },
        { status: 401 }
      );
    }

    const { id } = await params;
    const service = await getServiceById(id, true);
    if (!service) {
      return NextResponse.json({ error: "Service not found." }, { status: 404 });
    }

    return NextResponse.json(service);
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Failed to retrieve service." },
      { status: 500 }
    );
  }
}

export async function PUT(req, { params }) {
  try {
    const admin = await verifyAdminToken();
    if (!admin) {
      return NextResponse.json(
        { error: "Unauthorized: Administrator privileges required." },
        { status: 401 }
      );
    }

    const { id } = await params;
    const data = await req.json();
    const service = await updateServiceById(id, data, true);
    if (!service) {
      return NextResponse.json({ error: "Service not found." }, { status: 404 });
    }

    return NextResponse.json(service);
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Failed to update service." },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  try {
    const admin = await verifyAdminToken();
    if (!admin) {
      return NextResponse.json(
        { error: "Unauthorized: Administrator privileges required." },
        { status: 401 }
      );
    }

    const { id } = await params;
    const result = await deleteServiceById(id, true);
    if (!result) {
      return NextResponse.json({ error: "Service not found or already deleted." }, { status: 404 });
    }

    return NextResponse.json({ message: "Service deleted successfully.", success: true });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Failed to delete service." },
      { status: 500 }
    );
  }
}
