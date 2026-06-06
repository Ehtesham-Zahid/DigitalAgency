import { NextResponse } from "next/server";
import { getQueryById, deleteQueryById } from "@/services/Query";
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
    const query = await getQueryById(id, true);
    if (!query) {
      return NextResponse.json({ error: "Query not found." }, { status: 404 });
    }

    return NextResponse.json(query);
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Failed to retrieve query." },
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
    const result = await deleteQueryById(id, true);
    if (!result) {
      return NextResponse.json({ error: "Query not found or already deleted." }, { status: 404 });
    }

    return NextResponse.json({ message: "Query deleted successfully.", success: true });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Failed to delete query." },
      { status: 500 }
    );
  }
}
